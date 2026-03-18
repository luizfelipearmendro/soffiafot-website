import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="font-display text-5xl text-primary/40 mb-4">"</div>
          <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
            Fotografar é acima da arte de escrever imagens com luz. É eternizar momentos, sorrisos e lágrimas, maneira de expressar o que se vê ou sente.
          </blockquote>
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground">
            — Vinícius Aguiar, Fotógrafo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
