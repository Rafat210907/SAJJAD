import { Mail, Phone, MapPin, Send, Facebook, Github, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sajjadgg29@gmail.com" },
    { icon: Phone, label: "Phone", value: "+0 (000) 000-0000" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/sajjad356", label: "Facebook" },
    { icon: Github, href: "https://github.com/Sajjad-Islam", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/sajjadislam242/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCCpf9KZ9pcx9pZqMPjyjs3A", label: "YouTube" },
  ];

  return (
    <main className="min-h-screen px-8 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact - Get in Touch</h1>
          <div className="w-20 h-1 bg-accent" aria-hidden="true"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Ready to start your motion graphics or design project? Contact me for professional video editing, animation, and brand identity services
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <section className="space-y-8 animate-fade-in" aria-label="Contact information">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }} aria-label="Contact form">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Send message to Sajjad Islam">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Sajjad Isalm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="sajjad@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </section>
        </div>

        {/* Social Media Links */}
        <section className="mt-20 pt-12 border-t border-border" aria-label="Social media profiles">
          <h2 className="text-2xl font-bold mb-8 text-center">Follow on Social Media</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with Sajjad Islam on ${social.label}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
