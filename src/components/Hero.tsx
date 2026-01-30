import { motion } from "framer-motion";
import { ArrowDown, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative container-custom min-h-screen flex flex-col justify-center px-4 pt-24 pb-12">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-secondary/20 text-primary-foreground font-medium text-sm"
          >
            🏠 Couvreur-Tôlier en Guadeloupe depuis + de 30 ans
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading"
          >
            Experts en étanchéité
            <br />
            <span className="text-secondary">et couverture métallique</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed"
          >
            Deux générations de savoir-faire au service de votre toiture.
            Devis gratuit dans toute la Guadeloupe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg transition-all duration-300 hover:bg-blue-light hover:shadow-lg transform hover:-translate-y-1"
            >
              Demander un devis gratuit
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-foreground/20"
            >
              Nos services
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-3">
              <Shield className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground font-medium text-sm">
                Garantie décennale
              </span>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-3">
              <Clock className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground font-medium text-sm">
                Intervention rapide
              </span>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-3">
              <Award className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground font-medium text-sm">
                30+ ans d'expérience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-foreground/60"
          >
            <span className="text-sm font-medium">Découvrir</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
