import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "sun.vatanak@example.com",
    description: "Send me an email anytime",
    link: "mailto:sun.vatanak@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+855 12 345 678",
    description: "Call me for urgent inquiries",
    link: "tel:+85512345678",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+855 12 345 678",
    description: "Quick messages and discussions",
    link: "https://wa.me/85512345678",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    value: "Book a meeting",
    description: "Let's schedule a video call",
    link: "https://calendly.com/sun-vatanak",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website design takes 2-4 weeks, while more complex applications can take 6-12 weeks. I always provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with teams or just individuals?",
    answer:
      "I work with both individuals and teams. I'm comfortable collaborating with developers, product managers, and other stakeholders to ensure the best possible outcome for your project.",
  },
  {
    question: "What information do you need to start a project?",
    answer:
      "To get started, I need to understand your project goals, target audience, timeline, and budget. We'll also discuss any existing brand guidelines, technical requirements, and specific features you have in mind.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, I offer ongoing support and maintenance packages. This includes design updates, optimization, and assistance with any issues that may arise after launch.",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </div>
      </section>

      <div className="container-custom pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Send Me a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+855 12 345 678"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company/Organization (Optional)
                    </Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4">
                        <a
                          href={method.link}
                          target={
                            method.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center space-x-4 hover:text-portfolio-primary transition-colors"
                        >
                          <div className="w-10 h-10 bg-portfolio-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-portfolio-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{method.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {method.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {method.description}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-portfolio-primary" />
                  <h3 className="font-semibold">Availability</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-portfolio-primary/10 rounded-lg">
                  <p className="text-sm text-portfolio-primary font-medium">
                    Currently accepting new projects for Q2 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-portfolio-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Phnom Penh, Cambodia
                </p>
                <p className="text-sm text-muted-foreground">
                  Available for remote work worldwide. Open to local meetings in
                  Phnom Penh area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with me and my design process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm excited to learn about your project and explore how we can work
            together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-primary/90"
            >
              Schedule a Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              View My Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
