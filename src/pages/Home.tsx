import { Facebook, Github, Instagram, Youtube } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingEffect } from "@/hooks/useTypingEffect";
const Home = () => {
  const typedText = useTypingEffect(["Graphic Designer", "Motion Graphics Artist"], 100, 50, 2000);
  
  const socialLinks = [{
    icon: Facebook,
    href: "https://www.facebook.com/sajjad356",
    label: "Facebook"
  }, {
    icon: Github,
    href: "https://github.com/Sajjad-Islam",
    label: "GitHub"
  }, {
    icon: Instagram,
    href: "https://www.instagram.com/sajjadislam242/",
    label: "Instagram"
  }, {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCCpf9KZ9pcx9pZqMPjyjs3A",
    label: "YouTube"
  }];
  return <main className="flex items-center justify-center min-h-screen px-8 md:px-16">
      <section className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl w-full animate-fade-in">
        {/* Profile Image */}
        <div className="relative animate-scale-in">
          {/* Colored background */}
          <div className="absolute inset-0 w-52 h-52 md:w-60 md:h-60 animate-blob" style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: 'linear-gradient(135deg, #19a690 0%, #0d5347 100%)'
        }}>
          </div>
          
          <div className="relative w-52 h-52 md:w-60 md:h-60 overflow-hidden border-4 border-border shadow-2xl animate-blob" style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
        }}>
            <img 
              src={profilePhoto} 
              alt="Sajjad Islam - Professional Graphic Designer and Motion Graphics Artist specializing in Adobe After Effects and brand identity design" 
              className="w-full h-full object-cover grayscale transition-all duration-500"
              loading="eager"
              width="240"
              height="240"
            />
          </div>
        </div>

        {/* Content */}
        <article className="flex-1 text-center md:text-left animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
            SAJJAD ISLAM
          </h1>
          
          <div className="w-16 h-px bg-border/50 mb-2 mx-auto md:mx-0" aria-hidden="true"></div>
          
          <p className="text-xl md:text-2xl text-foreground mb-2 h-8 font-medium">
            {typedText}<span className="animate-pulse">|</span>
          </p>
          
          <div className="w-16 h-px bg-border/50 mb-3 mx-auto md:mx-0" aria-hidden="true"></div>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Crafting impactful visuals that push boundaries and deliver designs that inspire, engage, and leave lasting impressions.
          </p>

          {/* Social Links */}
          <nav aria-label="Social media links">
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map(social => <a 
                key={social.label} 
                href={social.href} 
                aria-label={`Follow Sajjad Islam on ${social.label}`}
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>)}
            </div>
          </nav>
        </article>
      </section>
    </main>;
};
export default Home;