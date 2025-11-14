import { Footer } from "@/components/Footer";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Raj during Hackathon was inspiring. He took responsibility for the most critical parts of our system and delivered them flawlessly under tight deadlines. His clarity of thought, structured approach, and calm problem-solving made a huge impact on our team’s success",
      author: "Kavan Trivedi",
      role: "Teammate"
    },
    {
      quote: "Raj consistently brings technical depth and reliability to every project. Whether it's backend logic, UI decisions, or database design, he ensures the solution is both clean and scalable. His collaboration skills and willingness to help others make him an invaluable teammate.",
      author: "Daivagna Parmar",
      role: "Project Collaborator"
    },
    {
      quote: "Raj is one of the few people who balances academics and real-world development so well. He’s always the first to help others understand concepts, and his dedication motivates everyone around him. A truly hardworking and genuine person to study with.",
      author: "Sujal Tailor",
      role: "Classmate"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-accent-secondary">Testimonials</span>
            </h1>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg border border-neon/50">
                    <Quote className="w-5 h-5 text-neon" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neon/20 pt-4">
                  <p className="text-sm font-bold text-foreground">— {testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
