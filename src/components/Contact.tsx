import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const cities = [
  "Basse-Terre",
  "Baillif",
  "Capesterre-Belle-Eau",
  "Gourbeyre",
  "Saint-Claude",
  "Vieux-Habitants",
  "Bouillante",
  "Pointe-Noire",
  "Goyave",
  "Trois-Rivières",
  "Pointe-à-Pitre",
  "Les Abymes",
  "Le Gosier",
  "Sainte-Anne",
  "Le Moule",
  "Morne-à-l'Eau",
  "Petit-Bourg",
  "Baie-Mahault",
  "Anse-Bertrand",
  "Cap-Couel",
  "Saint-François",
  "Port-Louis",
  "Lamentin",
  "Petit-Canal",
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Contact
          </span>
          <h2 className="heading-primary mb-4">
            Demandez un devis gratuit
          </h2>
          <p className="text-body">
            Nous nous déplaçons dans toutes les villes de Guadeloupe et
            proposons des devis gratuits. Contactez-nous dès aujourd'hui !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="0690 XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Message / Demande de devis *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet ou demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+590690940779"
                className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    Téléphone
                  </div>
                  <div className="text-muted-foreground">+590 690 94 07 79</div>
                </div>
              </a>

              <a
                href="mailto:etancheitecaraibesservice@gmail.com"
                className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">Email</div>
                  <div className="text-muted-foreground text-sm md:text-base break-all">
                    etancheitecaraibesservice@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    Adresse
                  </div>
                  <div className="text-muted-foreground">
                    Rés Les Yuccas, Pointe de la Verdure
                    <br />
                    97190 Le Gosier, Guadeloupe
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    Horaires
                  </div>
                  <div className="text-muted-foreground">
                    Lundi - Samedi : 7h - 21h
                  </div>
                </div>
              </div>
            </div>

            {/* Cities */}
            <div className="p-5 rounded-xl bg-secondary">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-secondary-foreground">
                  Nous intervenons dans toute la Guadeloupe
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
