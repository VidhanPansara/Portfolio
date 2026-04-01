import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!endpoint) {
      toast({
        title: "Formspree not configured",
        description: "Add VITE_FORMSPREE_ENDPOINT in your .env and restart dev server.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submit failed");
      }

      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section id="contact" className="py-23 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foregroundmb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:pansaravidhan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pansaravidhan@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917265950093"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7265950093
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Gondal, Rajkot, Gujarat
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with Me</h4>

              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/vidhan-pansara/"
                  target="_blank"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/vidhan__442/"
                  target="_blank"
                >
                  <BsInstagram className="h-6 w-6" />
                </a>
                <a href="https://github.com/VidhanPansara" target="_blank">
                  <FaGithub className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
