import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { mediaUrl } from "@/lib/media";

const SLIDES = [
  { src: mediaUrl("/hero/mosaic-1.jpg"), alt: "Mosaico de trabalhos de Soffia Visual" },
  { src: mediaUrl("/hero/mosaic-2.jpg"), alt: "Mosaico de ensaios de Soffia Visual" },
  { src: mediaUrl("/hero/mosaic-3.jpg"), alt: "Mosaico de eventos e ensaios de Soffia Visual" },
];

const INTERVAL_MS = 6000;

const HeroSlideshow = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={i === active ? slide.alt : ""}
          aria-hidden={i !== active}
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] ease-out ${
            i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transitionDuration: `1500ms, ${INTERVAL_MS + 1500}ms` }}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
