import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    title: "Design Tools",
    skills: [
      {
        name: "Figma",
        level: 95,
        icon: "🎨",
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Adobe XD",
        level: 90,
        icon: "🎯",
        color: "from-pink-500 to-red-500",
      },
      {
        name: "Sketch",
        level: 85,
        icon: "✏️",
        color: "from-yellow-500 to-orange-500",
      },
      {
        name: "Adobe Creative Suite",
        level: 88,
        icon: "🖼️",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "InVision",
        level: 80,
        icon: "💡",
        color: "from-green-500 to-teal-500",
      },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML/CSS",
        level: 92,
        icon: "🌐",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: "⚡",
        color: "from-yellow-500 to-amber-500",
      },
      {
        name: "React",
        level: 80,
        icon: "⚛️",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Vue.js",
        level: 75,
        icon: "💚",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: "🎨",
        color: "from-teal-500 to-blue-500",
      },
    ],
  },
  {
    title: "UX Research & Strategy",
    skills: [
      {
        name: "User Research",
        level: 90,
        icon: "🔍",
        color: "from-indigo-500 to-purple-500",
      },
      {
        name: "Wireframing",
        level: 95,
        icon: "📐",
        color: "from-gray-500 to-slate-500",
      },
      {
        name: "Prototyping",
        level: 92,
        icon: "🔧",
        color: "from-blue-500 to-indigo-500",
      },
      {
        name: "Usability Testing",
        level: 88,
        icon: "🧪",
        color: "from-red-500 to-pink-500",
      },
      {
        name: "Design Systems",
        level: 90,
        icon: "🧱",
        color: "from-purple-500 to-violet-500",
      },
    ],
  },
];

const technologies = [
  {
    name: "Figma",
    icon: "🎨",
    color: "hover:bg-purple-100 hover:text-purple-700",
  },
  {
    name: "Adobe XD",
    icon: "🎯",
    color: "hover:bg-pink-100 hover:text-pink-700",
  },
  {
    name: "Sketch",
    icon: "✏️",
    color: "hover:bg-orange-100 hover:text-orange-700",
  },
  {
    name: "Adobe Photoshop",
    icon: "🖼️",
    color: "hover:bg-blue-100 hover:text-blue-700",
  },
  {
    name: "Adobe Illustrator",
    icon: "🎭",
    color: "hover:bg-yellow-100 hover:text-yellow-700",
  },
  { name: "HTML5", icon: "🌐", color: "hover:bg-red-100 hover:text-red-700" },
  { name: "CSS3", icon: "🎨", color: "hover:bg-blue-100 hover:text-blue-700" },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "hover:bg-yellow-100 hover:text-yellow-700",
  },
  { name: "React", icon: "⚛️", color: "hover:bg-cyan-100 hover:text-cyan-700" },
  {
    name: "Vue.js",
    icon: "💚",
    color: "hover:bg-green-100 hover:text-green-700",
  },
  {
    name: "Tailwind CSS",
    icon: "🌊",
    color: "hover:bg-teal-100 hover:text-teal-700",
  },
  {
    name: "Bootstrap",
    icon: "🅱️",
    color: "hover:bg-purple-100 hover:text-purple-700",
  },
  { name: "Sass", icon: "💄", color: "hover:bg-pink-100 hover:text-pink-700" },
  {
    name: "Git",
    icon: "🌳",
    color: "hover:bg-orange-100 hover:text-orange-700",
  },
  { name: "Jira", icon: "📋", color: "hover:bg-blue-100 hover:text-blue-700" },
  {
    name: "Confluence",
    icon: "📚",
    color: "hover:bg-indigo-100 hover:text-indigo-700",
  },
  {
    name: "Notion",
    icon: "📝",
    color: "hover:bg-gray-100 hover:text-gray-700",
  },
  {
    name: "Principle",
    icon: "🎬",
    color: "hover:bg-red-100 hover:text-red-700",
  },
  {
    name: "After Effects",
    icon: "🎥",
    color: "hover:bg-purple-100 hover:text-purple-700",
  },
  {
    name: "Lottie",
    icon: "🎞️",
    color: "hover:bg-green-100 hover:text-green-700",
  },
  {
    name: "Webflow",
    icon: "🌊",
    color: "hover:bg-blue-100 hover:text-blue-700",
  },
];

export default function SkillsSection() {
  const titleRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const techRef = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-custom">
        {/* Title Section */}
        <div className="text-center mb-16" ref={titleRef}>
          <div className="scroll-animation">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional digital
              experiences
            </p>
          </div>
        </div>

        {/* Skills Progress Bars with Icons */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-animation-scale scroll-animation-delay-${categoryIndex + 1}`}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-6 text-portfolio-primary flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xl p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                          >
                            {skill.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full animate-skill-bar opacity-80`}
                            style={
                              {
                                "--skill-width": `${skill.level}%`,
                                animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                              } as React.CSSProperties
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags with Icons */}
        <div className="text-center" ref={techRef}>
          <div className="scroll-animation">
            <h3 className="text-xl font-semibold mb-8 flex items-center justify-center gap-2">
              <span className="text-2xl">🛠️</span>
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`text-sm py-3 px-5 ${tech.color} transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md group scroll-animation-scale`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="mr-2 group-hover:animate-bounce">
                    {tech.icon}
                  </span>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
