import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets,
  Brush,
  Search,
  Wrench,
  Home,
  PaintBucket,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Étanchéité toiture",
    description: "Solins, raccords et joints d'étanchéité pour une protection optimale contre les infiltrations.",
  },
  {
    icon: Brush,
    title: "Nettoyage façade",
    description: "Démoussage, ravalement et traitement des façades pour redonner vie à votre bâtiment.",
  },
  {
    icon: Search,
    title: "Recherche de fuite",
    description: "Détection précise des infiltrations avec intervention rapide et efficace.",
  },
  {
    icon: Wrench,
    title: "Resserrage tire-fonds",
    description: "Vérification et resserrage des fixations de tôles pour prévenir les dégâts.",
  },
  {
    icon: Home,
    title: "Pose & rénovation toiture",
    description: "Installation, remplacement et rénovation complète de toitures en tôle ondulée.",
  },
  {
    icon: PaintBucket,
    title: "Peinture toiture",
    description: "Protection anti-corrosion et embellissement de votre toiture et façade.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & entretien",
    description: "Diagnostic préventif et entretien régulier pour prolonger la durée de vie de votre toit.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Nos Services
          </span>
          <h2 className="heading-primary mb-4">
            Une expertise complète pour votre toiture
          </h2>
          <p className="text-body">
            Nous proposons une gamme complète de services pour l'entretien, la
            rénovation et la protection de vos toitures et façades.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-secondary mb-2 font-heading text-lg">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-primary text-lg"
          >
            Demander un devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
