import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Smartphone } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Fotografia",
    description: "Retratos, ensaios e cobertura de eventos com olhar artístico e sensível.",
  },
  {
    icon: Film,
    title: "Videomaker",
    description: "Produções audiovisuais que contam histórias através do movimento e da emoção.",
  },
  {
    icon: Smartphone,
    title: "Fotógrafo Mobile",
    description: "Conteúdo profissional otimizado para redes sociais e plataformas digitais.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="serviços" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">O que fazemos</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Nossos <span className="italic">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group p-8 md:p-10 border border-border hover:border-primary/40 bg-card/50 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
