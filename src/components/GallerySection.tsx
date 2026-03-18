import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/IMG_3548%202.jpg",
  "/images/IMG_4106.jpg",
  "/images/IMG_3592copy.jpg",
  "/images/IMG_6886%20-%2027.07.jpg",
  "/images/IMG_3560.jpg",
  "/images/IMG_5234%202.jpg",
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="galeria" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Portfólio</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Momentos <span className="italic">Eternizados</span>
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="break-inside-avoid overflow-hidden group"
            >
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
