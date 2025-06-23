import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Calendar, ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const scaleVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const featuredProjects = [
  {
    title: "E-commerce Platform Redesign",
    description: "Complete UX/UI overhaul for a leading online retailer resulting in 35% increase in conversions.",
    tags: ["UX Design", "UI Design", "E-commerce"],
    imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    link: "/projects/ecommerce-redesign",
    overlayText: "View Case Study"
  },
  {
    title: "Mobile Banking App",
    description: "Designed a user-friendly mobile banking experience with 95% customer satisfaction.",
    tags: ["Mobile App", "Fintech", "Prototyping"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    link: "/projects/mobile-banking",
    overlayText: "View Project"
  },
  {
    title: "Healthcare Dashboard",
    description: "Data visualization dashboard for healthcare providers to track patient metrics.",
    tags: ["Dashboard", "Data Viz", "Healthcare"],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    link: "/projects/healthcare-dashboard",
    overlayText: "See Details"
  },
  {
    title: "Travel Booking App",
    description: "End-to-end design for a travel booking application with personalized recommendations.",
    tags: ["Mobile App", "Travel", "UX Research"],
    imageUrl: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    link: "/projects/travel-app",
    overlayText: "View Prototype"
  },
  {
    title: "Corporate Website",
    description: "Modern website design for a tech startup with interactive elements.",
    tags: ["Web Design", "Branding", "Animation"],
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    link: "/projects/corporate-website",
    overlayText: "Visit Website"
  },
  {
    title: "Food Delivery Service",
    description: "UX optimization for a food delivery platform reducing order time by 40%.",
    tags: ["UX Research", "Mobile Design", "User Testing"],
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    link: "/projects/food-delivery",
    overlayText: "View Case Study"
  }
];

const testimonials = [
  {
    name: "Sophal Chen",
    role: "CEO, TechFlow Solutions",
    content: "Sun's design work transformed our product's user experience. His attention to detail and user-centered approach resulted in significantly improved engagement metrics.",
    rating: 5
  },
  {
    name: "Vichea Lim",
    role: "Product Manager, Digital Agency Pro",
    content: "Working with Sun was a pleasure. He delivered exceptional designs on tight deadlines and was always open to feedback and iterations.",
    rating: 5
  },
  {
    name: "Rathana Kim",
    role: "Founder, StartUp Hub",
    content: "Sun took our vague ideas and turned them into beautiful, functional designs that our users love. He's a true professional.",
    rating: 4
  }
];

const Index = () => {
  // Section refs for scroll animations
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Check if sections are in view
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isEducationInView = useInView(educationRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20" ref={aboutRef}>
        <div className="container-custom">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h2 
                className="text-3xl md:text-4xl font-sans font-bold"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              
              <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
                I'm a passionate UX/UI designer with over 3 years of experience
                creating digital experiences that users love. I believe great
                design should be both beautiful and functional.
              </motion.p>
              
              <motion.p className="text-muted-foreground" variants={itemVariants}>
                My approach combines user research, creative design thinking,
                and technical understanding to deliver solutions that not only
                look great but also drive business results.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-center text-sm text-muted-foreground"
                  variants={itemVariants}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Phnom Penh, Cambodia
                </motion.div>
                <motion.div 
                  className="flex items-center text-sm text-muted-foreground"
                  variants={itemVariants}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Available for projects
                </motion.div>
                <motion.div 
                  className="flex items-center text-sm text-muted-foreground"
                  variants={itemVariants}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  sun.vatanak@example.com
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  className="bg-portfolio-primary hover:bg-portfolio-primary/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={scaleVariants}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Sun Vatanak"
                  className="w-full h-[500px] object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.4 }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-48 bg-white/95 backdrop-blur-sm"
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { delay: 0.6 }
                }}
                whileHover={{ y: -5 }}
              >
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-portfolio-primary">
                    3+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </CardContent>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20" ref={projectsRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different design
              challenges and solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isProjectsInView ? 1 : 0,
              y: isProjectsInView ? 0 : 20,
              transition: { delay: 0.6 }
            }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-primary/20 hover:bg-portfolio-primary/10"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(99, 102, 241, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30" ref={experienceRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isExperienceInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in UX/UI design
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="relative"
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Timeline line */}
              <motion.div 
                className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-portfolio-primary via-portfolio-secondary to-portfolio-accent"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1 }}
              />

              <div className="space-y-12">
                <motion.div 
                  className="relative flex items-start"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
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
                </motion.div>

                <motion.div 
                  className="relative flex items-start"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-portfolio-secondary rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
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
                </motion.div>

                <motion.div 
                  className="relative flex items-start"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-portfolio-accent rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
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
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20" ref={educationRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isEducationInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl">🎓</span>
              Education & Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and formal education that shaped my design
              expertise
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            animate={isEducationInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-portfolio-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-3xl">🏛️</span>
                    </motion.div>
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
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-portfolio-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-3xl">🎨</span>
                    </motion.div>
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
            </motion.div>
          </motion.div>

          <motion.div 
            className="scroll-animation"
            initial="hidden"
            animate={isEducationInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <span className="text-2xl">🏆</span>
              Key Certifications
            </h3>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google"
                        className="w-6 h-6 object-contain"
                      />
                    </motion.div>
                    <h4 className="font-semibold mb-2">UX Design Professional</h4>
                    <p className="text-sm text-portfolio-primary font-medium mb-1">
                      Google
                    </p>
                    <p className="text-xs text-muted-foreground">March 2022</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 bg-portfolio-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-2xl">🎯</span>
                    </motion.div>
                    <h4 className="font-semibold mb-2">Interaction Design</h4>
                    <p className="text-sm text-portfolio-secondary font-medium mb-1">
                      UC San Diego
                    </p>
                    <p className="text-xs text-muted-foreground">
                      September 2021
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        alt="Figma"
                        className="w-6 h-6 object-contain"
                      />
                    </motion.div>
                    <h4 className="font-semibold mb-2">Advanced Figma</h4>
                    <p className="text-sm text-portfolio-accent font-medium mb-1">
                      Design+Code
                    </p>
                    <p className="text-xs text-muted-foreground">January 2023</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-28 text-center"
            initial="hidden"
            animate={isEducationInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-portfolio-primary/5 to-portfolio-secondary/5 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Continuous Learning Philosophy
                </h3>
                <motion.p 
                  className="text-muted-foreground max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  "I believe that great design comes from continuous learning
                  and staying curious. My educational journey combines formal
                  computer science foundations with specialized design training,
                  allowing me to bridge the gap between technical feasibility
                  and exceptional user experiences."
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" ref={testimonialsRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from clients I've had the pleasure to work with
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"
        ref={ctaRef}
      >
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-sans font-bold text-white mb-4"
              variants={itemVariants}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Let's collaborate to create something amazing together. I'm
              available for freelance projects and consultations.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-portfolio-primary hover:bg-white/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-portfolio-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;