import { FaHtml5, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { useState } from "react";

const skills = [
  { name: "HTML/CSS", icon: <FaHtml5 />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "backend" },
  { name: "Express", icon: <SiExpress />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
  { name: "PrismaORM", icon: <SiPrisma />, category: "backend" },
  { name: "Git/Github", icon: <FaGitAlt />, category: "tools" },
  { name: "VS Code", icon: <VscVscode />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
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
