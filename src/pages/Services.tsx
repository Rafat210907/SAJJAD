import { Video, Sparkles, Award, Palette, Film, Zap, Check } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Video,
    title: "Motion Graphics",
    description: "Dynamic animated graphics and visual effects for commercials, explainer videos, and digital campaigns.",
    price: "Starting at $799"
  }, {
    icon: Film,
    title: "Video Editing",
    description: "Professional video editing and post-production services with color grading and sound design.",
    price: "Starting at $599"
  }, {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Comprehensive brand identity including logo design, color systems, and visual guidelines.",
    price: "Starting at $1,299"
  }, {
    icon: Sparkles,
    title: "2D/3D Animation",
    description: "Custom 2D and 3D animations for product launches, music videos, and corporate presentations.",
    price: "Starting at $1,499"
  }, {
    icon: Zap,
    title: "Visual Effects (VFX)",
    description: "Advanced visual effects and compositing for film, commercials, and digital content.",
    price: "Starting at $999"
  }, {
    icon: Award,
    title: "Creative Direction",
    description: "Full creative direction for campaigns, guiding visual strategy from concept to execution.",
    price: "Starting at $1,999"
  }];
  return <main className="min-h-screen px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Graphic Design & Motion Graphics Services</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional motion graphics, video editing, brand identity design, 2D/3D animation, visual effects, and creative direction services
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Available services">
          {services.map((service, index) => <article key={service.title} className="group p-8 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-14 h-14 rounded-lg bg-secondary group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center mb-6 transition-all duration-300" aria-hidden="true">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <span className="text-accent font-semibold">{service.price}</span>
              </div>
            </article>)}
        </section>

        {/* Partners Section */}
        <section className="mt-32 animate-fade-in" aria-label="Trusted partners and clients">
          <h2 className="text-4xl font-bold mb-12">Trusted Brand Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {["BRSERK\nTEAM", "INFINITE\nSTORE", "EXE\nBAZAR", "ARODX", "RAFTAR\nSTORE", "TRAVEL\nLOOKBOOK", "LEAVES & CO.", "SUSHI\nEXPRESS"].map((partner, index) => <div key={index} className="aspect-[4/3] bg-card flex items-center justify-center p-8 hover:bg-secondary transition-colors group">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors text-center whitespace-pre-line">
                  {partner}
                </span>
              </div>)}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="mt-32 animate-fade-in" aria-label="Portfolio statistics">
          <h2 className="text-4xl font-bold mb-12">Portfolio Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-10 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 text-center">
              <div className="text-5xl font-bold mb-3">777+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-10 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 text-center">
              <div className="text-5xl font-bold mb-3">3K</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-10 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300 text-center">
              <div className="text-5xl font-bold mb-3">4Y+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mt-32 mb-20 animate-fade-in" aria-label="Service pricing plans">
          <h2 className="text-4xl font-bold mb-12 text-center">Service Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300">
              <div className="text-5xl font-bold mb-2">
                20$<span className="text-2xl">$</span>
              </div>
              <h3 className="text-2xl font-bold mb-8">Basic</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Premium Icons
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Quality Logo
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Stock Images
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Free Support
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-foreground bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors font-medium">
                Purchase
              </button>
            </div>

            {/* Stander Plan - Popular */}
            <div className="relative p-8 rounded-xl border-2 border-accent bg-card shadow-xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                Popular
              </div>
              <div className="text-5xl font-bold mb-2">
                30<span className="text-2xl">$</span>
              </div>
              <h3 className="text-2xl font-bold mb-8">Stander</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Premium Icons
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Quality Logo
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Stock Images
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Free Support
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium">
                Purchase
              </button>
            </div>

            {/* Premium Plan */}
            <div className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all duration-300">
              <div className="text-5xl font-bold mb-2">
                70<span className="text-2xl">$</span>
              </div>
              <h3 className="text-2xl font-bold mb-8">Premium</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Premium Icons
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Quality Logo
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Stock Images
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  Free Support
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-foreground bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors font-medium">
                Purchase
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>;
};
export default Services;
