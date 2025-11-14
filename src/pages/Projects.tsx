import { Github } from "lucide-react";
import { Footer } from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Emergency Medical QR Portal",
      description: "A secure emergency medical information system with QR-based quick access. Enables instant medical profile retrieval, doctor view, and real-time emergency workflow.",
      tech: ["Flask", "MySQL", "Security", "QR System"],
      github: "https://github.com/Ka1-Trivedi/Emergency-Medical-Portal",
    },
    {
      title: "Workout Detecting System",
      description: "A full-stack fitness and trainer allocation system. Features user–trainer gym allocation, challenge assignment, progress tracking, and a full admin/trainer interface.",
      tech: ["Python", "Flask", "MySQL", "HTML/CSS"],
      github: "https://github.com/Shl0kpatel/exercise-tracker",
    },
    {
      title: "CareerCompass",
      description: "AI-assisted career guidance platform with skill profiling, academic pathway planning, and personalized guidance recommendations. Built for student development and exploration.",
      tech: ["React", "TypeScript", "FastAPI", "Tailwind"],
      github: "https://github.com/Shreyas5706/CarrerCompassAI",
    },
  ];


  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-neon">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of innovative projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-neon mb-3 group-hover:text-neon transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-primary/20 border border-neon/30 rounded text-neon"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center pt-4 border-t border-neon/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
