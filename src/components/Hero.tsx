"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Add shimmer effect after animation completes
            setTimeout(() => {
              entry.target.classList.add("animate-shimmer");
            }, parseFloat(getComputedStyle(entry.target).getPropertyValue('--delay')) * 1000 + 600);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    // Floating elements animation
    const animateFloating = () => {
      floatingElements.current.forEach((el, i) => {
        const speed = 2 + Math.random() * 2;
        const range = 10 + Math.random() * 10;
        const yPos = range * Math.sin(Date.now() / (1000 * speed) + i);
        const xPos = range * Math.cos(Date.now() / (1000 * speed) + i);
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
      });
      requestAnimationFrame(animateFloating);
    };

    if (heroRef.current) {
      const sections = [
        ...heroRef.current.querySelectorAll(".animate-section")
      ];
      
      sections.forEach((section, index) => {
        observer.observe(section);
        (section as HTMLElement).style.setProperty("--delay", `${index * 0.1}s`);
      });

      // Start floating animation
      animateFloating();
    }

    return () => observer.disconnect();
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Floating elements data
  const floatingShapes = [
    { size: "w-16 h-16", color: "bg-portfolio-primary/10", position: "top-1/4 left-1/4", delay: 1000 },
    { size: "w-12 h-12", color: "bg-portfolio-secondary/10", position: "bottom-1/3 right-1/4", delay: 2000 },
    { size: "w-10 h-10", color: "bg-portfolio-accent/10", position: "top-2/5 right-1/5", delay: 1500 },
    { size: "w-14 h-14", color: "bg-portfolio-primary/5", position: "top-1/3 right-1/3", delay: 2500 },
    { size: "w-8 h-8", color: "bg-portfolio-secondary/5", position: "bottom-1/4 left-1/3", delay: 3000 },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden isolate"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 via-background to-portfolio-secondary/5 -z-10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Floating elements with ref for animation */}
      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          ref={el => floatingElements.current[i] = el!}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} rounded-full mix-blend-overlay filter blur-sm transition-transform duration-700 ease-in-out`}
          style={{ animationDelay: `${shape.delay}ms` }}
        />
      ))}

      <div className="container-custom text-center relative z-10 px-4">
        {/* Badge with shine effect */}
        <div className="animate-section opacity-0 translate-y-8">
          <Badge variant="outline" className="badge-animate mb-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
            <span className="relative z-10">Available for freelance projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Badge>
        </div>

        {/* Main Heading with enhanced gradient */}
        <div className="animate-section opacity-0 translate-y-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground/90">Hello, I'm</span>
            <span className="gradient-text animate-gradient bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-secondary">
              Sun Vatanak
            </span>
          </h1>
        </div>

        {/* Subtitle with fade-in letters */}
        <div className="animate-section opacity-0 translate-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span className="inline-block overflow-hidden">
              <span className="inline-block animate-letter-fade">UX/UI Designer crafting digital experiences that blend creativity with functionality</span>
            </span>
          </p>
        </div>

        {/* Description */}
        <div className="animate-section opacity-0">
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I specialize in creating intuitive user interfaces and engaging user
            experiences for web and mobile applications.
          </p>
        </div>

        {/* CTA Buttons with magnetic effect */}
        <div className="animate-section opacity-0 scale-95">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="cta-primary hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/80 to-portfolio-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="cta-secondary hover:scale-105 transition-transform duration-300 group relative overflow-hidden border-border/50"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-background to-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
        </div>

        {/* Stats with staggered animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "50+", label: "Projects", color: "from-portfolio-primary to-portfolio-accent" },
            { value: "3+", label: "Years", color: "from-portfolio-secondary to-portfolio-primary" },
            { value: "25+", label: "Clients", color: "from-portfolio-accent to-portfolio-secondary" },
            { value: "100%", label: "Satisfaction", color: "from-portfolio-primary to-portfolio-secondary" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="animate-section opacity-0 scale-90"
              style={{ "--delay": `${0.4 + index * 0.1}s` } as React.CSSProperties}
            >
              <div className="stat-card p-4 rounded-xl backdrop-blur-sm bg-background/50 border border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-portfolio-primary/30 relative overflow-hidden group">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 to-portfolio-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator with trail effect */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
        aria-label="Scroll to next section"
      >
        <div className="relative h-12 w-8">
          <ChevronDown className="h-8 w-8 text-portfolio-primary absolute top-0 left-1/2 -translate-x-1/2 animate-bounce group-hover:scale-110 transition-transform" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-portfolio-primary/50 group-hover:h-6 transition-all duration-300" />
        </div>
      </button>
    </section>
  );
}