import { useState } from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Facebook, Twitter, Linkedin, Mail, Link2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

  const filters = ["all", "branding", "motion graphics", "Logo design", "poster design", "packaging", "GFX", "illustration"];

  const projects = [
    { 
      id: 1, 
      category: "Logo design", 
      title: "FiveM Server Logo design", 
      image: "https://imgur.com/DN5MD6J.png",
      hasVideo: false,
      description: "Dynamic Roleplay — the ultimate FiveM roleplay experience. Premium logo design"
    },
    { 
      id: 2, 
      category: "Logo design", 
      title: "Genius Graphics Logo design", 
      image: "https://imgur.com/QXsqB95.png",
      hasVideo: false,
      description: "Genius Graphics Premium logo design"
    },
    { 
      id: 3, 
      category: "Logo design", 
      title: "MAVEN'S HIVE Logo Design", 
      image: "https://imgur.com/McgJhnR.png",
      hasVideo: false,
      description: "MAVEN'S HIVE Premium logo design."
    },
    { 
      id: 4, 
      category: "poster design", 
      title: "Premium subscription poser design", 
      image: "https://imgur.com/gisfB12.png",
      hasVideo: false,
      description: "Modern website interface design with clean aesthetics, intuitive navigation, and responsive layouts."
    },
    { 
      id: 5, 
      category: "poster design", 
      title: "Sale poser design", 
      image: "https://imgur.com/zQo6Jpk.png",
      hasVideo: false,
      description: "Luxurious packaging design for premium cosmetics line with elegant typography and metallic finishes."
    },
    { 
      id: 6, 
      category: "motion graphics", 
      title: "Brand Explainer Video", 
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=800&fit=crop",
      videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&muted=1",
      hasVideo: true,
      description: "Animated explainer video showcasing brand story with smooth transitions and engaging visual storytelling."
    },
    { 
      id: 7, 
      category: "GFX", 
      title: "logo animation gfx", 
      image: "https://imgur.com/iS1Sppr.gif",
      hasVideo: false,
      description: "HG Fivem Server logo animation."
    },
    { 
      id: 8, 
      category: "GFX", 
      title: "logo animation gfx", 
      image: "https://imgur.com/cCne6eJ.gif",
      hasVideo: false,
      description: "BPR Fivem Server logo animation"
    },
    { 
      id: 9, 
      category: "print design", 
      title: "Event Poster Collection", 
      image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Bold poster designs for music festival with experimental typography and vivid color schemes."
    },
    { 
      id: 10, 
      category: "motion graphics", 
      title: "Social Media Ads Campaign", 
      image: "https://images.unsplash.com/photo-1611926653670-5629a63e0bb1?w=800&h=800&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
      hasVideo: true,
      description: "Attention-grabbing animated ads optimized for Instagram and Facebook with quick pacing and clear messaging."
    },
    { 
      id: 11, 
      category: "digital design", 
      title: "Mobile App Interface", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Sleek mobile application design with intuitive user flows and modern interface components."
    },
    { 
      id: 12, 
      category: "packaging", 
      title: "Coffee Brand Packaging", 
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Artisanal coffee packaging design with hand-drawn illustrations and eco-friendly materials."
    },
    { 
      id: 13, 
      category: "branding", 
      title: "Fashion Brand Identity", 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Minimalist brand identity for luxury fashion label with elegant logo and sophisticated visual system."
    },
    { 
      id: 14, 
      category: "illustration", 
      title: "Character Design Collection", 
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Unique character illustrations for children's book with expressive poses and vibrant personalities."
    },
    { 
      id: 15, 
      category: "print design", 
      title: "Business Brochure Design", 
      image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Professional tri-fold brochure with clean layout, compelling copy, and strategic visual hierarchy."
    },
    { 
      id: 16, 
      category: "motion graphics", 
      title: "Logo Animation Reveal", 
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=800&fit=crop",
      videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&muted=1",
      hasVideo: true,
      description: "Cinematic logo reveal animation with dynamic particles and smooth transitions for brand introduction."
    },
    { 
      id: 17, 
      category: "digital design", 
      title: "E-commerce Website Design", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Conversion-focused online store design with streamlined checkout and product showcase layouts."
    },
    { 
      id: 18, 
      category: "packaging", 
      title: "Organic Food Packaging", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      hasVideo: false,
      description: "Natural and eco-friendly packaging design for organic food products with sustainable materials."
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const selectedProjectData = projects.find(p => p.id === selectedProject);

  const handleShare = (platform: string) => {
    if (!selectedProjectData) return;
    
    const shareUrl = window.location.href;
    const shareText = `Check out this amazing project: ${selectedProjectData.title}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(selectedProjectData.title)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Project link copied to clipboard",
      });
      return;
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Portfolio</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent design work, motion graphics, and creative projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-accent text-accent-foreground shadow-lg scale-105"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Portfolio projects">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} project showcasing ${project.description.slice(0, 60)}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="800"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-sm text-accent mb-2">
                      {project.category}
                    </span>
                    <h2 className="text-xl font-bold">{project.title}</h2>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-5xl p-0 bg-background border-border overflow-hidden">
            <DialogClose className="absolute right-4 top-4 z-[70] rounded-full bg-background/90 backdrop-blur-sm p-2 hover:bg-background transition-colors shadow-lg">
              <X className="h-5 w-5" />
            </DialogClose>
            {selectedProjectData && (
              <div className="relative">
                <DialogTitle className="sr-only">{selectedProjectData.title}</DialogTitle>
                <DialogDescription className="sr-only">{selectedProjectData.description}</DialogDescription>
                
                {/* Video Player or Image */}
                {selectedProjectData.hasVideo ? (
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      src={selectedProjectData.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedProjectData.title}
                    />
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={selectedProjectData.image}
                      alt={selectedProjectData.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                {/* Project Info */}
                <div className="p-6 bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="text-xs text-accent uppercase tracking-wider font-semibold">
                        {selectedProjectData.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-2">{selectedProjectData.title}</h3>
                      <p className="text-muted-foreground text-sm">{selectedProjectData.description}</p>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium mb-3">Share this project:</p>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#1565C0] transition-colors text-sm"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1A8CD8] transition-colors text-sm"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors text-sm"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE57] transition-colors text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm"
                      >
                        <Link2 className="w-4 h-4" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Portfolio;
