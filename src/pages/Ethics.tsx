import { Footer } from "@/components/Footer";
import { Shield, Eye, Users, CheckCircle } from "lucide-react";

const Ethics = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Global Awareness & <span className="text-accent-secondary">Ethics</span>
            </h1>
          </div>

          {/* Case Study Card */}
          <div className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-accent-secondary">
              Case Study: Ethical Design in Emergency Medical QR Systems
            </h2>

            {/* Ethical Challenge */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                  <Shield className="w-6 h-6 text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Ethical Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing the Emergency Medical QR Portal required balancing instant emergency access with strict protection of sensitive medical data.
                    The challenge was ensuring that life-saving information could be accessed quickly during critical moments without compromising privacy, consent, or misuse of personal health records.
                  </p>
                </div>
              </div>
            </div>

            {/* Approach & Action */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                  <Eye className="w-6 h-6 text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Approach & Action
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent-secondary mr-2">•</span>
                      <span className="text-muted-foreground">Implemented role-based access control (RBAC)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-secondary mr-2">•</span>
                      <span className="text-muted-foreground">Used tokenized QR codes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-secondary mr-2">•</span>
                      <span className="text-muted-foreground">Ensured transparent consent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-secondary mr-2">•</span>
                      <span className="text-muted-foreground">Prioritized user trust, privacy and compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reflection */}
            <div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                  <CheckCircle className="w-6 h-6 text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Reflection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This experience strengthened my belief that technology must protect people as much as it serves them.
                    Building the system deepened my understanding of ethical engineering—balancing accessibility, safety, transparency, and responsible data handling to create solutions that are both life-saving and privacy-respectful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ethics;
