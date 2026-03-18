import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/soff-com-camera.jpg"
                alt="Jullyany Soffia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Sobre Mim</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight mb-6">
              Jullyany <span className="italic">Soffia</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Fundadora da Soffia Fotografias. Por trás de cada <strong className="text-foreground">obrigado</strong> está o motivo pelo qual nunca desisto. Cada história, cada transformação, é o combustível para continuar fazendo a diferença.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Retratos são a celebração da vida em sua forma mais pura. Cada sorriso capturado, cada olhar sincero, guarda a magia de um momento que jamais se repetirá.
            </p>
            <div className="w-16 h-px bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
