import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Award, Users, Coffee, Heart } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Design Excellence Award",
    description:
      "Recognized for outstanding UX design at Digital Innovation Summit 2023",
  },
  {
    icon: Users,
    title: "50+ Happy Clients",
    description:
      "Successfully delivered projects for clients across various industries",
  },
  {
    icon: Coffee,
    title: "1000+ Hours",
    description:
      "Dedicated time to perfecting design craft and staying updated with trends",
  },
];

const values = [
  {
    title: "User-Centered Design",
    description:
      "Every design decision is backed by user research and testing to ensure the best possible experience.",
  },
  {
    title: "Collaborative Approach",
    description:
      "I believe the best results come from close collaboration with clients, developers, and stakeholders.",
  },
  {
    title: "Continuous Learning",
    description:
      "The design field evolves rapidly, and I'm committed to staying current with the latest trends and technologies.",
  },
  {
    title: "Attention to Detail",
    description:
      "From micro-interactions to overall information architecture, every detail matters in creating exceptional experiences.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Passionate About Creating
                <span className="gradient-text block">
                  Meaningful Experiences
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                I'm Sun Vatanak, a UX/UI designer based in Phnom Penh, Cambodia.
                With over 3 years of experience, I specialize in creating
                digital experiences that are both beautiful and functional.
              </p>
              <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download My Resume
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Sun Vatanak working"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-portfolio-primary/10 rounded-full animate-float" />
              <div
                className="absolute -top-8 -left-8 w-24 h-24 bg-portfolio-secondary/10 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              My Design Journey
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                My journey into UX/UI design began during my computer science
                studies, where I discovered my passion for the intersection of
                technology and human behavior. What started as curiosity about
                how users interact with digital products evolved into a
                dedicated career in design.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Early in my career, I learned that great design isn't just about
                making things look pretty—it's about solving real problems for
                real people. This realization shaped my approach to design,
                always starting with understanding user needs and business goals
                before diving into visuals.
              </p>
              <p className="text-lg leading-relaxed">
                Today, I combine my technical background with design expertise
                to create digital experiences that are not only visually
                appealing but also highly functional and user-friendly. I'm
                constantly learning and evolving, staying up-to-date with the
                latest design trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Achievements & Milestones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-portfolio-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Design Philosophy & Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-portfolio-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-sans font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Education
              </h2>
              <div className="space-y-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="border-l-4 border-portfolio-primary pl-6">
                      <Badge className="mb-3">2017 - 2021</Badge>
                      <h3 className="font-bold text-xl mb-2">
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-portfolio-primary font-semibold mb-3">
                        Royal University of Phnom Penh
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Specialized in Human-Computer Interaction, User
                        Interface Design, and Software Development. Graduated
                        with honors (GPA: 3.8/4.0).
                      </p>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <strong>Key Courses:</strong>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Human-Computer Interaction
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            User Interface Design
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Software Engineering
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Database Systems
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Web Development
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="border-l-4 border-portfolio-secondary pl-6">
                      <Badge variant="secondary" className="mb-3">
                        2021 - 2022
                      </Badge>
                      <h3 className="font-bold text-xl mb-2">
                        UX/UI Design Bootcamp
                      </h3>
                      <p className="text-portfolio-secondary font-semibold mb-3">
                        Cambodia Academy of Digital Technology
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Intensive 12-month program focused on modern UX/UI
                        design practices, user research methodologies, and
                        industry-standard design tools.
                      </p>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <strong>Key Focus Areas:</strong>
                        </div>
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
                          <Badge variant="outline" className="text-xs">
                            Usability Testing
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-sans font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Certifications & Training
              </h2>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                          alt="Google"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          UX Design Professional Certificate
                        </h3>
                        <p className="text-portfolio-primary font-medium">
                          Google
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Completed: March 2022
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive program covering UX research,
                          wireframing, prototyping, and usability testing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-portfolio-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Interaction Design Specialization
                        </h3>
                        <p className="text-portfolio-secondary font-medium">
                          UC San Diego (Coursera)
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Completed: September 2021
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Advanced course in interaction design principles,
                          prototyping, and user-centered design methodology.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                          alt="Figma"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Advanced Figma Techniques
                        </h3>
                        <p className="text-portfolio-accent font-medium">
                          Design+Code
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Completed: January 2023
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Master-level training in Figma's advanced features,
                          components, auto-layout, and design systems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💡</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Design Systems Certification
                        </h3>
                        <p className="text-blue-600 font-medium">
                          Nielsen Norman Group
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Completed: June 2023
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Specialized training in creating and maintaining
                          scalable design systems for enterprise applications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          User Research Methods
                        </h3>
                        <p className="text-green-600 font-medium">
                          Interaction Design Foundation
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Completed: October 2022
                        </p>
                        <p className="text-sm text-muted-foreground">
                          In-depth training on quantitative and qualitative user
                          research methods and data analysis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Fun Facts About Me
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">☕</div>
              <div className="font-medium mb-1">Coffee Enthusiast</div>
              <div className="text-sm opacity-90">5+ cups per day</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📚</div>
              <div className="font-medium mb-1">Continuous Learner</div>
              <div className="text-sm opacity-90">
                Always reading design books
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🎮</div>
              <div className="font-medium mb-1">Gaming UI Lover</div>
              <div className="text-sm opacity-90">
                Inspired by game interfaces
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🌱</div>
              <div className="font-medium mb-1">Plant Parent</div>
              <div className="text-sm opacity-90">
                15+ plants in my workspace
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
