import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, ArrowRight, Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const featuredProjects = [
  {
    title: "E-commerce Mobile App",
    description:
      "Complete UX/UI design for a modern e-commerce mobile application with intuitive navigation, seamless checkout process, and engaging product discovery features.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    tags: ["Mobile Design", "E-commerce", "User Research", "Prototyping"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "SaaS Dashboard Design",
    description:
      "Modern dashboard interface for a project management SaaS platform with data visualization, real-time updates, and responsive design across all devices.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    tags: ["Web Design", "SaaS", "Dashboard", "Data Visualization"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Banking App Redesign",
    description:
      "Complete redesign of a mobile banking application focusing on security, usability, and accessibility for users of all ages and technical backgrounds.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center",
    tags: ["Mobile App", "Banking", "Security", "Accessibility"],
    liveUrl: "https://example.com",
    featured: true,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Sun's attention to detail and user-centered approach made our app redesign a huge success. User engagement increased by 40% after implementation.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO at StartupXYZ",
    content:
      "Working with Sun was a game-changer for our startup. Their designs not only looked amazing but also significantly improved our conversion rates.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "Sun delivered exceptional designs on time and within budget. Their communication throughout the project was outstanding.",
    rating: 5,
  },
];

const Index = () => {
  const aboutRef = useScrollAnimation({ threshold: 0.1 });
  const projectsRef = useScrollAnimation({ threshold: 0.1 });
  const experienceRef = useScrollAnimation({ threshold: 0.1 });
  const educationRef = useScrollAnimation({ threshold: 0.1 });
  const testimonialsRef = useScrollAnimation({ threshold: 0.1 });
  const ctaRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20" ref={aboutRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animation-left">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate UX/UI designer with over 3 years of experience
                creating digital experiences that users love. I believe great
                design should be both beautiful and functional.
              </p>
              <p className="text-muted-foreground mb-8">
                My approach combines user research, creative design thinking,
                and technical understanding to deliver solutions that not only
                look great but also drive business results.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Phnom Penh, Cambodia
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Available for projects
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  sun.vatanak@example.com
                </div>
              </div>
              <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative scroll-animation-right">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Sun Vatanak"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <Card className="absolute -bottom-6 -left-6 w-48 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-portfolio-primary">
                    3+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20" ref={projectsRef}>
        <div className="container-custom">
          <div className="text-center mb-16 scroll-animation">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different design
              challenges and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`scroll-animation-scale scroll-animation-delay-${index + 1} animate-card-hover`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-primary/20 hover:bg-portfolio-primary/10"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30" ref={experienceRef}>
        <div className="container-custom">
          <div className="text-center mb-16 scroll-animation">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in UX/UI design
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

              <div className="space-y-12">
                <div className="relative flex items-start scroll-animation-text scroll-animation-delay-1">
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full"></div>
                  <div className="ml-16">
                    <Badge className="mb-2">2022 - Present</Badge>
                    <h3 className="font-semibold text-lg">
                      Senior UX/UI Designer
                    </h3>
                    <p className="text-portfolio-primary font-medium mb-2">
                      TechFlow Solutions
                    </p>
                    <p className="text-muted-foreground">
                      Lead designer for multiple client projects, specializing
                      in SaaS platforms and mobile applications. Increased user
                      engagement by 45% across projects.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start scroll-animation-text scroll-animation-delay-2">
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-secondary rounded-full"></div>
                  <div className="ml-16">
                    <Badge variant="secondary" className="mb-2">
                      2021 - 2022
                    </Badge>
                    <h3 className="font-semibold text-lg">UX/UI Designer</h3>
                    <p className="text-portfolio-primary font-medium mb-2">
                      Digital Agency Pro
                    </p>
                    <p className="text-muted-foreground">
                      Designed user interfaces for e-commerce and corporate
                      websites. Collaborated with development teams to ensure
                      pixel-perfect implementation.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start scroll-animation-text scroll-animation-delay-3">
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-16">
                    <Badge variant="outline" className="mb-2">
                      2020 - 2021
                    </Badge>
                    <h3 className="font-semibold text-lg">
                      Junior UX Designer
                    </h3>
                    <p className="text-portfolio-primary font-medium mb-2">
                      StartUp Hub
                    </p>
                    <p className="text-muted-foreground">
                      Started my design career working on various startup
                      projects. Learned user research methodologies and design
                      thinking processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20" ref={educationRef}>
        <div className="container-custom">
          <div className="text-center mb-16 scroll-animation">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl">🎓</span>
              Education & Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and formal education that shaped my design
              expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Formal Education */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-animation-blur scroll-animation-delay-1 animate-card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-portfolio-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <div>
                    <Badge className="mb-2">2017 - 2021</Badge>
                    <h3 className="font-bold text-xl mb-2">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-portfolio-primary font-semibold">
                      Royal University of Phnom Penh
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Specialized in Human-Computer Interaction and User Interface
                  Design. Graduated with honors (GPA: 3.8/4.0).
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    HCI
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    UI Design
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Software Engineering
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Web Development
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Design Bootcamp */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-animation-blur scroll-animation-delay-2 animate-card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      2021 - 2022
                    </Badge>
                    <h3 className="font-bold text-xl mb-2">
                      UX/UI Design Bootcamp
                    </h3>
                    <p className="text-portfolio-secondary font-semibold">
                      Cambodia Academy of Digital Technology
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Intensive 12-month program focused on modern UX/UI design
                  practices and user research methodologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Design Thinking
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    User Research
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prototyping
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Design Systems
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Certifications */}
          <div className="scroll-animation">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <span className="text-2xl">🏆</span>
              Key Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow scroll-animation-scale scroll-animation-delay-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      alt="Google"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">UX Design Professional</h4>
                  <p className="text-sm text-portfolio-primary font-medium mb-1">
                    Google
                  </p>
                  <p className="text-xs text-muted-foreground">March 2022</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow scroll-animation-scale scroll-animation-delay-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-portfolio-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2">Interaction Design</h4>
                  <p className="text-sm text-portfolio-secondary font-medium mb-1">
                    UC San Diego
                  </p>
                  <p className="text-xs text-muted-foreground">
                    September 2021
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow scroll-animation-scale scroll-animation-delay-3">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="Figma"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">Advanced Figma</h4>
                  <p className="text-sm text-portfolio-accent font-medium mb-1">
                    Design+Code
                  </p>
                  <p className="text-xs text-muted-foreground">January 2023</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center scroll-animation">
            <Card className="bg-gradient-to-r from-portfolio-primary/5 to-portfolio-secondary/5 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Continuous Learning Philosophy
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  "I believe that great design comes from continuous learning
                  and staying curious. My educational journey combines formal
                  computer science foundations with specialized design training,
                  allowing me to bridge the gap between technical feasibility
                  and exceptional user experiences."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" ref={testimonialsRef}>
        <div className="container-custom">
          <div className="text-center mb-16 scroll-animation">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from clients I've had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow scroll-animation-fade scroll-animation-delay-${index + 1} animate-card-hover`}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-portfolio-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"
        ref={ctaRef}
      >
        <div className="container-custom text-center scroll-animation-bounce">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. I'm
            available for freelance projects and consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-portfolio-primary hover:bg-white/90"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-portfolio-primary"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
