import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contato" className="py-24 md:py-32 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Vamos conversar</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6">
            Enxergue a beleza em cada <span className="italic">clique!</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            Pronta para eternizar seus melhores momentos? Entre em contato e vamos criar algo inesquecível juntos.
          </p>
          <a
            href="https://wa.me/5565984321637?text=Olá,%20Soffia!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-wider uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Venha Comigo!
          </a>
        </motion.div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="src\assets\logoooooo.png"
            alt="Soffia Fotografias"
            className="h-8 w-auto opacity-50"
          />
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/soffia.fotografia_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contato@soffiafotografias.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+5565984321637" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Soffia Fotografias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
