import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie-Claire D.",
    location: "Le Gosier",
    rating: 5,
    text: "Travail rapide et soigné ! L'équipe est arrivée à l'heure et a terminé la rénovation de ma toiture en 2 jours. Je recommande vivement.",
  },
  {
    name: "Jean-Philippe L.",
    location: "Pointe-à-Pitre",
    rating: 5,
    text: "Excellente prestation pour la recherche et réparation de fuite. Très professionnels et réactifs. Ma toiture ne fuit plus depuis leur intervention.",
  },
  {
    name: "Sylvie M.",
    location: "Sainte-Anne",
    rating: 5,
    text: "Entreprise sérieuse et compétente. Le devis était clair et respecté. Ma façade a retrouvé sa jeunesse grâce à leur travail de nettoyage.",
  },
  {
    name: "Patrick R.",
    location: "Baie-Mahault",
    rating: 5,
    text: "Je fais appel à eux depuis plusieurs années pour l'entretien de mes toitures. Toujours satisfait de leur professionnalisme.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="avis" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Avis Clients
          </span>
          <h2 className="heading-primary mb-4">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-body">
            La satisfaction de nos clients est notre priorité. Découvrez leurs
            témoignages.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-sm border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Vous êtes satisfait de nos services ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Laissez-nous un avis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
