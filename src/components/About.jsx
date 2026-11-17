import { Briefcase, Code, Database, GraduationCap } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Software Engineer with hands-on experience in full-stack
              application development, backend engineering, RESTful APIs,
              database management, and application migration. I work with
              Node.js, Express.js, React.js, PostgreSQL, MySQL, and MongoDB,
              and I am comfortable with authentication, database design,
              Docker, and Git in production environments.
            </p>

            <div className="flex items-start gap-4 text-left">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  B.E. in Computer Engineering
                </h3>
                <p className="text-muted-foreground">
                  Government Engineering College, Rajkot
                </p>
                <p className="text-sm text-muted-foreground">
                  Sep 2022 – May 2026 · CGPA 8.35
                </p>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In touch
              </a>

              <a
                href="/Vidhan-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-stack development</h4>
                  <p className="text-muted-foreground">
                    Building web applications with React.js on the frontend and
                    Node.js and Express.js on the backend.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Databases & migration</h4>
                  <p className="text-muted-foreground">
                    Working with PostgreSQL, MySQL, and MongoDB, including
                    schema design and legacy application migrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & APIs</h4>
                  <p className="text-muted-foreground">
                    Designing RESTful APIs, JWT authentication, and real-time
                    features with Socket.IO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
