import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiSocketdotio, SiTailwindcss } from "react-icons/si";
import { KeyRound, Server } from "lucide-react";
import { useState } from "react";

const skills = [
  { name: "React.js", icon: <FaReact />, category: "frontend" },
  { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
  { name: "Express.js", icon: <SiExpress />, category: "backend" },
  { name: "RESTful APIs", icon: <Server />, category: "backend" },
  { name: "JWT", icon: <KeyRound />, category: "backend" },
  { name: "Socket.IO", icon: <SiSocketdotio />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "database" },
  { name: "MySQL", icon: <SiMysql />, category: "database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "database" },
  { name: "Docker", icon: <FaDocker />, category: "devops" },
  { name: "Git", icon: <FaGitAlt />, category: "tools" },
  { name: "GitHub", icon: <FaGithub />, category: "tools" },
  { name: "Postman", icon: <SiPostman />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "database", "devops", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
            >
              <div className="text-3xl text-primary">{skill.icon}</div>

              <div className="text-left">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
