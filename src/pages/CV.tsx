import { Download, GraduationCap, Briefcase, Code, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const CV = () => {
  const handleDownloadCV = () => {
    // Open Resume.pdf in a new tab
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Curriculum <span className="text-neon">Vitae</span>
          </h1>
          <Button
            onClick={handleDownloadCV}
            className="mt-6 bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-neon/50 hover:border-neon hover:glow-neon transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 w-4 h-4" />
            Download CV
          </Button>
        </div>

        {/* Education Section */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">Bachelor of Technology in Computer Engineering</h3>
              <p className="text-foreground font-medium mb-2">Pandit Deendayal Energy University</p>
              <p className="text-muted-foreground text-sm mb-3">2023 - 2027 | GPA: 9.66/10.0</p>
              <p className="text-foreground/80 text-sm">
                Focus on core subjects like Software Development and Data Structures. 
              </p>
            </div>
          </div>
        </section>

        {/* Project Experience */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Project Experience</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">CareerComapss</h3>
              <p className="text-muted-foreground text-sm mb-3">Aug 2025</p>
              <ul className="list-disc list-inside text-foreground/80 text-sm space-y-1">
                <li>Developed AI-assisted career guidance platform</li>
                <li>Built for student development and exploration</li>
                <li>Tech Stack: Tailwind, FastAPI, React</li>
              </ul>
            </div>
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">Emergency Medical QR Portal</h3>
              <p className="text-muted-foreground text-sm mb-3">Oct 2024</p>
              <ul className="list-disc list-inside text-foreground/80 text-sm space-y-1">
                <li>Built a secure emergency medical portal with QR-based quick access</li>
                <li>Enables instant medical profile retrieval, doctor view</li>
                <li>Tech Stack: PostgreSQL, Security, Flask, QR System</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
          </div>
          <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-neon font-semibold mb-3">Programming Languages</h4>
                <p className="text-foreground/80 text-sm">Python, JavaScript/TypeScript, Java, C, Rust</p>
              </div>
              <div>
                <h4 className="text-neon font-semibold mb-3">Frameworks & Tools</h4>
                <p className="text-foreground/80 text-sm">React, Node.js, TensorFlow, Docker, Kubernetes</p>
              </div>
              <div>
                <h4 className="text-neon font-semibold mb-3">Databases</h4>
                <p className="text-foreground/80 text-sm">PostgreSQL, MongoDB, Redis, MySQL</p>
              </div>
              <div>
                <h4 className="text-neon font-semibold mb-3">Cloud & DevOps</h4>
                <p className="text-foreground/80 text-sm">AWS, GCP, CI/CD, Terraform, Jenkins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center mb-6">
            <Heart className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Soft Skills</h2>
          </div>
          <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-4">
              {["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Time Management", "Adaptability"].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-neon glow-neon" />
                  <span className="text-foreground/80 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CV;
