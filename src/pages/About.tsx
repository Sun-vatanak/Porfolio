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
              <h2 className="text-2xl font-display font-bold mb-8">
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-portfolio-primary pl-6">
                  <Badge className="mb-2">2017 - 2021</Badge>
                  <h3 className="font-semibold text-lg">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-portfolio-primary font-medium">
                    Royal University of Phnom Penh
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Focused on Human-Computer Interaction and software
                    development
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-8">
                Certifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-portfolio-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">
                      UX Design Professional Certificate
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Google, 2022
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-portfolio-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">
                      Interaction Design Specialization
                    </div>
                    <div className="text-sm text-muted-foreground">
                      UC San Diego, 2021
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-portfolio-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Advanced Figma Techniques</div>
                    <div className="text-sm text-muted-foreground">
                      Design+Code, 2023
                    </div>
                  </div>
                </div>
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
