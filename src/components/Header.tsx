import { motion } from "framer-motion";
import { Camera, Instagram, Mail, Phone } from "lucide-react";

const NAV_LINKS = ["Sobre", "Serviços", "Equipe", "Galeria", "Contato"];

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border/50"
  >
    <a href="#hero" className="flex items-center gap-2">
      <img
        src="https://soffiafotografias.netlify.app/imagensSoff/logoooooo.png"
        alt="Soffia Fotografias"
        className="h-10 w-auto brightness-0 invert"
      />
    </a>
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          {link}
        </a>
      ))}
    </nav>
    <a
      href="https://wa.me/5565984321637?text=Olá,%20Soffia!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho."
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-body tracking-wider uppercase px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Contato
    </a>
  </motion.header>
);

export default Header;
