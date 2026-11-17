import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "HealthMate",
    description:
      "Full-stack healthcare management system with JWT authentication, role-based access, RESTful APIs, and real-time notifications.",
    highlights: [
      "React.js UI with Redux Toolkit and Formik",
      "Passport.js authentication and RBAC",
      "Prisma ORM with PostgreSQL",
      "Socket.IO for real-time notifications",
    ],
    tags: ["React.js", "Node.js", "Prisma", "PostgreSQL", "Socket.IO"],
    githubUrl: "https://github.com/VidhanPansara/HealthCare-API",
  },
  {
    id: 2,
    title: "Real Estate Management Platform",
    description:
      "Full-stack property platform with authenticated buyer and seller flows, search and filtering, and image uploads.",
    highlights: [
      "JWT authentication and role-based access",
      "Real-time buyer-seller chat with Socket.IO",
      "Property search, filtering, and analytics",
      "Image uploads with Cloudinary and Multer",
    ],
    tags: ["React.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Full-stack applications covering authentication, databases, and
          real-time features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.githubUrl || project.demoUrl ? (
                  <div className="flex space-x-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub size={20} />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/VidhanPansara"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
