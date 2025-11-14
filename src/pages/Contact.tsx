import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialIcon } from "@/components/SocialIcon";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const fromEmail = (fd.get("email") as string) || "";
    const subject = (fd.get("subject") as string) || "Contact from portfolio";
    const message = (fd.get("message") as string) || "";

    const to = "gandhiraj2605@gmail.com";
    const bodyLines = [] as string[];
    if (message) bodyLines.push(message);
    bodyLines.push("\n\n---\n");
    bodyLines.push(`Name: ${name}`);
    if (fromEmail) bodyLines.push(`Reply-To: ${fromEmail}`);

    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the user's email client compose window
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-neon">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <Mail className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a href="mailto:gandhiraj2605@gmail.com" className="text-foreground hover:text-neon transition-colors">
                      gandhiraj2605@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <Phone className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a href="tel:+15551234567" className="text-foreground hover:text-neon transition-colors">
                      +91 9104068607
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <MapPin className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-foreground">Gandhinagar, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neon/20">
                <h3 className="text-lg font-bold mb-4 text-foreground">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <SocialIcon icon={Github} href="https://github.com/Raj-Gandhi26" label="GitHub" />
                  <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/raj-gandhi-725164283?utm_source=share_via&utm_content=profile&utm_medium=member_android" label="LinkedIn" />
                  <SocialIcon icon={Mail} href="mailto:gandhiraj2605@gmail.com" label="Email" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-neon/50 hover:border-neon hover:glow-neon transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
