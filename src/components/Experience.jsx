import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Encircle Technologies",
    location: "Rajkot, Gujarat",
    period: "Jun 2026 – Present",
    points: [
      "Contributing to legacy system migrations by analyzing existing applications, business logic, workflows, and data structures, then moving them onto modern architectures.",
      "Working across MongoDB, MySQL, and PostgreSQL for data management and migration.",
      "Managing asynchronous processing and background jobs with Redis and Bull Board.",
      "Building migration services with Docker, custom images, production deployment configuration, and Directus.",
      "Working with clients on requirements, technical updates, and issue resolution through the migration.",
    ],
  },
  {
    role: "Associate Software Engineer Intern",
    company: "Zennova Tech",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Developed and maintained web applications with React.js, Node.js, and Express.js.",
      "Designed PostgreSQL schemas and managed data access with Prisma ORM.",
      "Built RESTful APIs and connected them to frontend applications.",
      "Worked on debugging, performance, and feature development, using Git and GitHub for version control.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((job) => (
            <article key={job.company} className="gradient-border p-6 md:p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground md:text-right">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-3 text-left text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
