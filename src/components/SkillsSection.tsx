import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Adobe Creative Suite", level: 88 },
      { name: "InVision", level: 80 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 92 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "UX Research & Strategy",
    skills: [
      { name: "User Research", level: 90 },
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 92 },
      { name: "Usability Testing", level: 88 },
      { name: "Design Systems", level: 90 },
    ],
  },
];

const technologies = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vue.js",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "Git",
  "Jira",
  "Confluence",
  "Notion",
  "Principle",
  "After Effects",
  "Lottie",
  "Webflow",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-6 text-portfolio-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4 hover:bg-portfolio-primary hover:text-white transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
