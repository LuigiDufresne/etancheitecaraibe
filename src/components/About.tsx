import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Hammer, MapPin, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Entreprise familiale",
      description: "Deux générations de couvreurs passionnés",
    },
    {
      icon: Hammer,
      title: "Savoir-faire unique",
      description: "Plus de 30 ans d'expérience en couverture",
    },
    {
      icon: MapPin,
      title: "100% Guadeloupe",
      description: "Nous intervenons dans toutes les communes",
    },
    {
      icon: Heart,
      title: "À l'écoute",
      description: "Un accompagnement personnalisé pour chaque projet",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              Qui nous sommes
            </span>
            <h2 className="heading-primary mb-6">
              Deux générations d'expertise au service de votre toiture
            </h2>
            <p className="text-body mb-8">
              Depuis plus de 30 ans, notre entreprise familiale met son
              savoir-faire en étanchéité et couverture métallique au service des
              particuliers et professionnels de Guadeloupe. Deux générations de
              couvreurs-tôliers passionnés, rigoureux et à l'écoute de vos
              besoins.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary to-orange-dark rounded-2xl p-8 md:p-12">
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/20 rounded-full blur-2xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-foreground/20 mb-6">
                  <span className="text-5xl font-bold text-primary-foreground font-heading">
                    30+
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2 font-heading">
                  Années d'expérience
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Une expertise transmise de père en fils
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground font-heading">
                      500+
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Projets réalisés
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground font-heading">
                      24
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Villes couvertes
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground font-heading">
                      98%
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      Clients satisfaits
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
