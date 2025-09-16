// Imports nettoyés pour n'inclure que les icônes utilisées
import {
  ChevronsLeftRightEllipsis,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true });

    try {
      // Assurez-vous que vos variables d'environnement sont correctement nommées
      // Par exemple, EMAIL_JS_SERVICE_ID si vous utilisez Vite
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY // La clé publique est souvent nécessaire
      );

      // Appel du toast pour le succès
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Vider le formulaire après l'envoi
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Failed to send email:", error);
      // Appel du toast pour l'échec
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      // Arrêter l'état de soumission dans tous les cas (succès ou échec)
      setFormStatus({ submitting: false });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ----- Colonne d'informations de contact (maintenant complète) ----- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:jarfinoh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    jarfinoh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+33758684449" className="text-muted-foreground hover:text-primary transition-colors">
                    +33 7 58 68 44 49
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Valbonne, France</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/jarfino-houngbadji-83b161266/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://x.com/Jarfino" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="https://medium.com/@jarfinohoungbadji" target="_blank" rel="noopener noreferrer">
                  <ChevronsLeftRightEllipsis />
                </a>
              </div>
            </div>
          </div>

          {/* ----- Colonne du formulaire (maintenant complète et corrigée) ----- */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {/* CORRECTION : onSubmit est sur la balise <form> */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Blackthorne..."
                  onChange={handleChange}
                  value={formData.name} // CORRECTION : Ajout de la prop 'value'
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" // CORRECTION : 'foucs' -> 'focus'
                  placeholder="john@gmail.com"
                  onChange={handleChange}
                  value={formData.email} // CORRECTION : Ajout de la prop 'value'
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  onChange={handleChange}
                  value={formData.message} // CORRECTION : Ajout de la prop 'value'
                />
              </div>
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};