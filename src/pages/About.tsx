import { ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
const About = () => {
  const {
    elementRef: programmingRef,
    isVisible: programmingVisible
  } = useIntersectionObserver();
  const {
    elementRef: languageRef,
    isVisible: languageVisible
  } = useIntersectionObserver();
  const programmingSkills = [{
    name: "After Effects",
    percentage: 95
  }, {
    name: "Premiere Pro",
    percentage: 90
  }, {
    name: "OpenIV",
    percentage: 85
  }, {
    name: "Adobe Photoshop",
    percentage: 88
  }, {
    name: "Adobe Illustrator",
    percentage: 85
  }];
  const languageSkills = [{
    name: "English",
    percentage: 90
  }, {
    name: "Bangla",
    percentage: 90
  }];
  const knowledge = ["Motion Graphics, Animation", "Adobe Creative Suite", "3D Modeling, Rendering", "Video Editing, Color Grading", "Typography, Composition"];
  const interests = ["Visual Storytelling", "Brand Identity Design", "Experimental Animation", "Music Video Production", "Creative Direction"];
  const education = [{
    year: "2016 - 2018",
    school: "Design Academy",
    degree: "Master in Motion Design"
  }, {
    year: "2012 - 2016",
    school: "Arts University",
    degree: "Bachelor Degree"
  }, {
    year: "2010 - 2012",
    school: "Creative College",
    degree: "Associate Degree"
  }];
  const experience = [{
    year: "2020 - Now",
    company: "Creative Studio Pro",
    role: "Lead Motion Designer"
  }, {
    year: "2018 - 2020",
    company: "Digital Agency",
    role: "Senior Graphic Designer"
  }, {
    year: "2016 - 2018",
    company: "Freelance",
    role: "Motion Graphics Artist"
  }];
  const testimonials = [{
    text: "Outstanding creative work with incredible attention to detail. The motion graphics brought our brand to life in ways we never imagined!",
    name: "Sarah Johnson",
    role: "Creative Director"
  }, {
    text: "Professional, innovative, and always delivers beyond expectations. A true master of motion design and visual storytelling.",
    name: "Michael Chen",
    role: "Brand Manager"
  }];
  return <div className="min-h-screen px-8 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          <div className="w-20 h-1 bg-accent"></div>
        </div>

        {/* Personal Info */}
        <div className="mb-20 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Sajjad Islam  </h2>
            <p className="text-lg text-muted-foreground">Graphic Designer & Motion Graphics Artist</p>
          </div>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, my name is Adriano Smith and I'm a passionate graphic designer specializing in motion graphics. 
              I've spent most of my waking hours for the last ten years designing, animating, and creating visually 
              compelling content that tells stories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One of my specialties is taking an idea from scratch and creating a full-fledged visual experience. 
              I go beyond to produce animations with a unique, outstanding, contemporary look-and-feel. With extensive 
              knowledge of motion design and animation principles, I'm able to create complex visual narratives that 
              captivate audiences.
            </p>
          </div>

          {/* Personal Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 p-8 rounded-xl bg-card/50 border border-border">
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Birthday:</span>
              <span className="text-muted-foreground">00.00.0000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Nationality:</span>
              <span className="text-muted-foreground">Bangladesh</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Age:</span>
              <span className="text-muted-foreground">26</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Study:</span>
              <span className="text-muted-foreground">Design Academy</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Address:</span>
              <span className="text-muted-foreground">Dhaka, Bangladesh</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Degree:</span>
              <span className="text-muted-foreground">Master</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Email:</span>
              <span className="text-muted-foreground">sajjadgg29@gmail.com.</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Interest:</span>
              <span className="text-muted-foreground">Motion Design</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Phone:</span>
              <span className="text-muted-foreground">+00 000 000 00 00</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="font-medium">Freelance:</span>
              <span className="text-muted-foreground">Available</span>
            </div>
          </div>

          <a href="https://discord.gg/U6WppdJcgB" target="_blank" rel="noopener noreferrer">
            <Button className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Join Discord
            </Button>
          </a>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div ref={programmingRef} className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Programming Skills</h3>
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => {
                const animatedValue = useCountUp(skill.percentage, 2000, programmingVisible);
                return <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium italic">{skill.name}</span>
                        <span className="text-muted-foreground">{animatedValue}%</span>
                      </div>
                      <div className="h-1 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent transition-all ease-out" style={{
                      width: programmingVisible ? `${skill.percentage}%` : '0%',
                      transitionDuration: '2000ms'
                    }}></div>
                      </div>
                    </div>;
              })}
              </div>
            </div>
          </div>

          <div ref={languageRef} className="space-y-8 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Language Skills</h3>
              <div className="space-y-6">
                {languageSkills.map((skill, index) => {
                const animatedValue = useCountUp(skill.percentage, 2000, languageVisible);
                return <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium italic">{skill.name}</span>
                        <span className="text-muted-foreground">{animatedValue}%</span>
                      </div>
                      <div className="h-1 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent transition-all ease-out" style={{
                      width: languageVisible ? `${skill.percentage}%` : '0%',
                      transitionDuration: '2000ms'
                    }}></div>
                      </div>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge & Interests */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Knowledge</h3>
            <ul className="space-y-3">
              {knowledge.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <ChevronRight className="w-4 h-4 text-accent" />
                  {item}
                </li>)}
            </ul>
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <h3 className="text-2xl font-bold mb-6">Interests</h3>
            <ul className="space-y-3">
              {interests.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <ChevronRight className="w-4 h-4 text-accent" />
                  {item}
                </li>)}
            </ul>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="relative space-y-8 pl-8 border-l-2 border-border">
              {education.map((item, index) => <div key={index} className="relative">
                  <div className="absolute -left-[37px] w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                  <div className="inline-block px-4 py-1 mb-3 text-sm rounded-full bg-secondary text-foreground">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{item.school}</h4>
                  <p className="text-muted-foreground">{item.degree}</p>
                </div>)}
            </div>
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="relative space-y-8 pl-8 border-l-2 border-border">
              {experience.map((item, index) => <div key={index} className="relative">
                  <div className="absolute -left-[37px] w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                  <div className="inline-block px-4 py-1 mb-3 text-sm rounded-full bg-secondary text-foreground">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{item.company}</h4>
                  <p className="text-muted-foreground">{item.role}</p>
                </div>)}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8">Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="p-8 rounded-xl border border-border bg-card/50 hover:border-accent transition-all duration-300">
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default About;