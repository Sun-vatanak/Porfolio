import { useState, useEffect } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediately show animations
    setIsVisible(true);

    // Add scroll-based parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".scroll-parallax");

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Also add animate-in class to any scroll animations
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale",
      );
      elements.forEach((el) => el.classList.add("animate-in"));
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 via-background to-portfolio-secondary/5" />

      {/* Floating Elements with Parallax */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-primary/10 rounded-full animate-float scroll-parallax" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-portfolio-secondary/10 rounded-full animate-float scroll-parallax"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-24 h-24 bg-portfolio-accent/10 rounded-full animate-float scroll-parallax"
        style={{ animationDelay: "4s" }}
      />

      {/* Additional floating elements for depth */}
      <div
        className="absolute top-60 right-10 w-12 h-12 bg-portfolio-primary/5 rounded-full animate-float scroll-parallax"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-60 right-40 w-8 h-8 bg-portfolio-secondary/8 rounded-full animate-float scroll-parallax"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-custom text-center relative z-10" ref={heroRef}>
        {/* Badge */}
        <div
          className={`scroll-animation transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge
            variant="outline"
            className="mb-6 text-portfolio-primary border-portfolio-primary/20 hover:bg-portfolio-primary/10 transition-colors"
          >
            Available for freelance projects
          </Badge>
        </div>

        {/* Main Heading */}
        <div
          className={`scroll-animation transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 text-balance">
            <span className="block">Hello, I'm</span>
            <span className="gradient-text">Sun Vatanak</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`scroll-animation transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            UX/UI Designer crafting digital experiences that blend creativity
            with functionality
          </p>
        </div>

        {/* Description */}
        <div
          className={`scroll-animation transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I specialize in creating intuitive user interfaces and engaging user
            experiences for web and mobile applications.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`scroll-animation transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white group transform hover:scale-105 transition-all duration-200"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-primary/20 hover:bg-portfolio-primary/10 transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-portfolio-primary">
              50+
            </div>
            <div className="text-sm text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-portfolio-primary">
              3+
            </div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-portfolio-primary">
              25+
            </div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-portfolio-primary">
              100%
            </div>
            <div className="text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-portfolio-primary transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
}
