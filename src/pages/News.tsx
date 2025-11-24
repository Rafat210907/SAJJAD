import { Calendar, Clock, ArrowRight } from "lucide-react";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "10 Essential Motion Graphics Trends for 2025",
      excerpt: "Discover the latest motion graphics techniques and trends that are shaping the industry and how to implement them in your projects.",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop",
      category: "Tutorial",
    },
    {
      id: 2,
      title: "Behind the Scenes: Animated Brand Identity",
      excerpt: "An in-depth look at the creative process behind designing a complete animated brand identity system for a tech startup.",
      date: "March 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      category: "Process",
    },
    {
      id: 3,
      title: "Award-Winning Project: Digital Dreams",
      excerpt: "My latest motion graphics project 'Digital Dreams' won the International Design Award for Best Animation Series.",
      date: "March 5, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop",
      category: "News",
    },
    {
      id: 4,
      title: "Mastering 3D Animation in After Effects",
      excerpt: "Learn advanced 3D animation techniques in After Effects to create stunning visual effects without complex 3D software.",
      date: "February 28, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      category: "Tutorial",
    },
    {
      id: 5,
      title: "Motion Design Workshop in New York",
      excerpt: "Announcing my upcoming motion graphics workshop in NYC. Limited spots available for designers looking to level up their animation skills.",
      date: "February 20, 2025",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
      category: "Event",
    },
    {
      id: 6,
      title: "Client Spotlight: Tech Brand Campaign",
      excerpt: "A deep dive into the creative process behind our motion graphics campaign for a leading technology brand's product launch.",
      date: "February 15, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
      category: "Commercial",
    },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Blog</h1>
          <div className="w-20 h-1 bg-accent"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Stay updated with my latest projects, design tips, motion graphics tutorials, and industry insights
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div className="aspect-[21/9] relative">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {articles[0].title}
              </h2>
              <p className="text-gray-200 text-lg mb-6 max-w-3xl">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{articles[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{articles[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
