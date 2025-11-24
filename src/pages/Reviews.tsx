import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star } from 'lucide-react';

interface GeneralReview {
  type: 'general';
  user: string;
  review: string;
  date: string;
}

interface DesignerReview {
  type: 'designer';
  reviewerId: string;
  designerId: string;
  stars: number;
  feedback: string;
  date: string; // mapped
  reviewerUsername?: string;
  designerUsername?: string;
}

type UnifiedReview = GeneralReview | DesignerReview;

export default function Reviews() {
  const [reviews, setReviews] = useState<UnifiedReview[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let es: EventSource | null = null;

    async function loadInitial() {
      try {
        const res = await fetch(import.meta.env.VITE_REVIEWS_API_BASE + '/api/reviews');
        const data = await res.json();
        setReviews(data);
      } catch (e) {
        console.error('Failed to load initial reviews', e);
      }
    }

    loadInitial();

    try {
      es = new EventSource(import.meta.env.VITE_REVIEWS_API_BASE + '/api/reviews/stream');
      es.onopen = () => setConnected(true);
      es.onerror = () => setConnected(false);
      es.onmessage = evt => {
        try {
          const payload = JSON.parse(evt.data);
          if (payload.type === 'initial') {
            setReviews(payload.reviews);
          } else if (payload.type === 'append' && payload.review) {
            setReviews(prev => [payload.review, ...prev]);
          }
        } catch {}
      };
    } catch (e) {
      console.error('Failed establishing SSE', e);
    }

    return () => {
      es && es.close();
    };
  }, []);

  return (
    <div className="space-y-6 p-4 md:p-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">Reviews <Star className="h-6 w-6 text-yellow-500" /></h1>
        <p className="text-muted-foreground">Live feed of community & designer feedback. {connected ? 'Live' : 'Connecting...'}</p>
      </header>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
        {reviews.length === 0 && (
          <p className="text-muted-foreground">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: UnifiedReview }) {
  const date = new Date(review.type === 'general' ? review.date : review.date).toLocaleString();
  if (review.type === 'designer') {
    return (
      <Card className="p-4 flex flex-col gap-2 bg-card/80 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide uppercase text-primary">Designer Review</span>
          <StarRating stars={review.stars} />
        </div>
        <div className="text-sm text-muted-foreground">Feedback ID: {/* placeholder could be index */}</div>
        <div className="text-sm"><strong className="text-foreground">Designer:</strong> {review.designerUsername || review.designerId}</div>
        <div className="text-sm"><strong className="text-foreground">Client:</strong> {review.reviewerUsername || review.reviewerId}</div>
        <div className="text-xs text-muted-foreground">Submitted: {date}</div>
        <Separator />
        <p className="text-sm leading-relaxed">{review.feedback}</p>
      </Card>
    );
  }
  return (
    <Card className="p-4 flex flex-col gap-2 bg-card/80 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium tracking-wide uppercase text-primary">General Review</span>
      </div>
      <div className="text-sm"><strong className="text-foreground">User:</strong> {review.user}</div>
      <div className="text-xs text-muted-foreground">Submitted: {date}</div>
      <Separator />
      <p className="text-sm leading-relaxed">{review.review}</p>
    </Card>
  );
}

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < stars ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />
      ))}
    </div>
  );
}