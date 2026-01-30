import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeftRight } from "lucide-react";

import before1 from "@/assets/before-1.jpeg";
import after1 from "@/assets/after-1.jpeg";
import before2 from "@/assets/before-2.jpeg";
import after2 from "@/assets/after-2.jpeg";
import before3 from "@/assets/before-3.jpeg";
import after3 from "@/assets/after-3.jpeg";

const projects = [
  {
    before: before1,
    after: after1,
    title: "Rénovation toiture tôle",
    location: "Travail effectué en Guadeloupe : remplacement et peinture de toiture",
  },
  {
    before: before2,
    after: after2,
    title: "Peinture toiture",
    location: "Travail effectué en Guadeloupe : peinture anti-corrosion toiture",
  },
  {
    before: before3,
    after: after3,
    title: "Nettoyage façade",
    location: "Travail effectué en Guadeloupe : démoussage et traitement façade",
  },
];

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
  location: string;
}

const BeforeAfterSlider = ({ before, after, title, location }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img
          src={after}
          alt="Après"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt="Avant"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth }}
            draggable={false}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <ArrowLeftRight className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
          Avant
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          Après
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4">
        <h3 className="font-bold text-secondary font-heading text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="realisations" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Réalisations
          </span>
          <h2 className="heading-primary mb-4">Avant / Après</h2>
          <p className="text-body">
            Découvrez la qualité de notre travail à travers ces exemples de
            réalisations. Faites glisser le curseur pour voir la transformation.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                title={project.title}
                location={project.location}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
