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
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "Adobe XD",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        color: "from-pink-500 to-red-500",
      },
      {
        name: "Sketch",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        color: "from-yellow-500 to-orange-500",
      },
      {
        name: "Photoshop",
        level: 88,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Illustrator",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        level: 92,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "CSS3",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "JavaScript",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "from-yellow-500 to-amber-500",
      },
      {
        name: "React",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Vue.js",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        color: "from-green-500 to-emerald-500",
      },
    ],
  },
  {
    title: "UX Research & Strategy",
    skills: [
      {
        name: "User Research",
        level: 90,
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E",
        color: "from-indigo-500 to-purple-500",
      },
      {
        name: "Wireframing",
        level: 95,
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z'/%3E%3Cpath d='M7 10h2v2H7zm4-3h6v2h-6zm0 3h6v2h-6zm-4 3h10v2H7z'/%3E%3C/svg%3E",
        color: "from-gray-500 to-slate-500",
      },
      {
        name: "Prototyping",
        level: 92,
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E",
        color: "from-blue-500 to-indigo-500",
      },
      {
        name: "Usability Testing",
        level: 88,
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
        color: "from-red-500 to-pink-500",
      },
      {
        name: "Design Systems",
        level: 90,
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E",
        color: "from-purple-500 to-violet-500",
      },
    ],
  },
];

const technologies = [
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "hover:bg-purple-100 hover:text-purple-700",
  },
  {
    name: "Adobe XD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    color: "hover:bg-pink-100 hover:text-pink-700",
  },
  {
    name: "Sketch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    color: "hover:bg-orange-100 hover:text-orange-700",
  },
  {
    name: "Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    color: "hover:bg-blue-100 hover:text-blue-700",
  },
  {
    name: "Illustrator",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    color: "hover:bg-yellow-100 hover:text-yellow-700",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "hover:bg-red-100 hover:text-red-700",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "hover:bg-blue-100 hover:text-blue-700",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "hover:bg-yellow-100 hover:text-yellow-700",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "hover:bg-cyan-100 hover:text-cyan-700",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "hover:bg-green-100 hover:text-green-700",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "hover:bg-teal-100 hover:text-teal-700",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "hover:bg-purple-100 hover:text-purple-700",
  },
  {
    name: "Sass",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    color: "hover:bg-pink-100 hover:text-pink-700",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "hover:bg-orange-100 hover:text-orange-700",
  },
  {
    name: "NodeJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "hover:bg-green-100 hover:text-green-700",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "hover:bg-blue-100 hover:text-blue-700",
  },
  {
    name: "Webpack",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    color: "hover:bg-blue-100 hover:text-blue-700",
  },
  {
    name: "Vite",
    logo: "https://vitejs.dev/logo.svg",
    color: "hover:bg-purple-100 hover:text-purple-700",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "hover:bg-gray-100 hover:text-gray-700",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "hover:bg-green-100 hover:text-green-700",
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
                          <div
                            className={`w-10 h-10 p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                          >
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
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
                  className={`text-sm py-3 px-5 ${tech.color} transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md group scroll-animation-scale flex items-center gap-2`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
                  />
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
