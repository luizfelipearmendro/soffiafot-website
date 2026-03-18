import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src="/images/IMG_5234%202.jpg"
        alt="Soffia Fotografias"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
    </div>

    <div className="relative z-10 container mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
      >
        Soffia Fotografias
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] max-w-3xl"
      >
        Enxergue a{" "}
        <span className="italic text-primary">beleza</span>{" "}
        em cada clique
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="font-body text-muted-foreground text-lg mt-6 max-w-lg leading-relaxed"
      >
        Os detalhes de um sorriso, as marcas do tempo e o brilho no olhar são testemunhas de uma vida vivida com intensidade.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 flex gap-4"
      >
        <Link
          to="/galeria"
          className="font-body text-sm tracking-wider uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
        >
          Ver Portfólio
        </Link>

        <Link
          to="/sobre"
          className="font-body text-sm tracking-wider uppercase px-8 py-3.5 border border-foreground/20 text-foreground hover:border-foreground/50 transition-colors duration-300"
        >
          Saiba Mais
        </Link>
      </motion.div>
    </div>
  </section >
);

export default HeroSection;
