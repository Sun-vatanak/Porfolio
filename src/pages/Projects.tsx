import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const categories = [
  "All",
  "Web Design",
  "Mobile Design",
  "UX Research",
  "Branding",
];

const allProjects = [
  {
    title: "E-commerce Mobile App",
    description:
      "Complete UX/UI design for a modern e-commerce mobile application with intuitive navigation, seamless checkout process, and engaging product discovery features.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    tags: ["Mobile Design", "E-commerce", "User Research", "Prototyping"],
    category: "Mobile Design",
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
    category: "Web Design",
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
    category: "Mobile Design",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Food Delivery App",
    description:
      "User experience design for a food delivery platform with focus on quick ordering, real-time tracking, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop&crop=center",
    tags: ["Mobile Design", "Food Tech", "User Journey", "Personalization"],
    category: "Mobile Design",
    liveUrl: "https://example.com",
  },
  {
    title: "Corporate Website Redesign",
    description:
      "Modern website redesign for a consulting firm with focus on professional appearance, clear messaging, and lead generation optimization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    tags: ["Web Design", "Corporate", "Responsive", "SEO"],
    category: "Web Design",
    liveUrl: "https://example.com",
  },
  {
    title: "Healthcare App UX Research",
    description:
      "Comprehensive user research project for a telemedicine application including user interviews, usability testing, and design recommendations.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&crop=center",
    tags: ["UX Research", "Healthcare", "User Testing", "Wireframing"],
    category: "UX Research",
    liveUrl: "https://example.com",
  },
  {
    title: "Startup Branding & Identity",
    description:
      "Complete brand identity design for a fintech startup including logo design, color palette, typography, and brand guidelines.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
    tags: ["Branding", "Logo Design", "Identity", "Guidelines"],
    category: "Branding",
    liveUrl: "https://example.com",
  },
  {
    title: "Learning Platform Design",
    description:
      "Educational platform interface design with focus on student engagement, progress tracking, and intuitive course navigation.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
    tags: ["Web Design", "Education", "UX", "Accessibility"],
    category: "Web Design",
    liveUrl: "https://example.com",
  },
  {
    title: "Travel App Concept",
    description:
      "Conceptual design for a travel planning application with itinerary management, local recommendations, and social sharing features.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop&crop=center",
    tags: ["Mobile Design", "Travel", "Social Features", "Maps"],
    category: "Mobile Design",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A collection of design projects showcasing different challenges,
            solutions, and the creative process behind each one.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-portfolio-primary hover:bg-portfolio-primary/90"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to creating user-centered designs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-portfolio-primary">
                  1
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Research & Discovery
              </h3>
              <p className="text-muted-foreground text-sm">
                Understanding user needs, business goals, and market context
                through research and analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-portfolio-secondary">
                  2
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Ideation & Wireframing
              </h3>
              <p className="text-muted-foreground text-sm">
                Brainstorming solutions and creating low-fidelity wireframes to
                explore different approaches.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-portfolio-accent">
                  3
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Design & Prototyping
              </h3>
              <p className="text-muted-foreground text-sm">
                Creating high-fidelity designs and interactive prototypes for
                testing and validation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-neutral/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-portfolio-neutral">
                  4
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Testing & Iteration
              </h3>
              <p className="text-muted-foreground text-sm">
                Validating designs with users and iterating based on feedback
                and testing results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing user
            experiences. Let's discuss your project!
          </p>
          <Button
            size="lg"
            className="bg-portfolio-primary hover:bg-portfolio-primary/90"
          >
            Start a Project
          </Button>
        </div>
      </section>
    </Layout>
  );
}
