import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { Camera, Film, Smartphone, ArrowRight } from "lucide-react";

const services = [
  { icon: Camera, title: "Fotografia", desc: "Retratos e ensaios com olhar artístico." },
  { icon: Film, title: "Videomaker", desc: "Produções audiovisuais emocionantes." },
  { icon: Smartphone, title: "Fotógrafo Mobile", desc: "Conteúdo profissional para redes." },
];

const galleryPreview = [
  "/images/IMG_3548%202.jpg",
  "/images/IMG_4106.jpg",
  "/images/IMG_3592copy.jpg",
];

const Index = () => (
  <Layout>
    <HeroSection />

    {/* About preview */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/soff-com-camera.jpg"
                alt="Jullyany Soffia"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Sobre</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight mb-6">
              Jullyany <span className="italic">Soffia</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Fundadora da Soffia Fotografias. Cada história, cada transformação, é o combustível para continuar fazendo a diferença.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-foreground transition-colors"
            >
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Services preview */}
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">O que fazemos</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Nossos <span className="italic">Serviços</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={0.1 * i}>
              <div className="p-8 border border-border hover:border-primary/40 bg-card/50 transition-all duration-500 group">
                <s.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-foreground transition-colors"
          >
            Ver todos os serviços <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Portfólio</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Momentos <span className="italic">Eternizados</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-4">
          {galleryPreview.map((src, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="aspect-[3/4] overflow-hidden group">
                <img src={src} alt={`Foto ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-foreground transition-colors"
          >
            Ver galeria completa <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>

    {/* Quote */}
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <FadeIn>
          <div className="font-display text-5xl text-primary/40 mb-4">"</div>
          <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
            Fotografar é acima da arte de escrever imagens com luz. É eternizar momentos, sorrisos e lágrimas, maneira de expressar o que se vê ou sente.
          </blockquote>
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground">— Vinícius Aguiar, Fotógrafo</p>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    {/* <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6">
            Enxergue a beleza em cada <span className="italic text-primary">clique!</span>
          </h2>
          <a
            href="https://wa.me/5565984321637?text=Olá,%20Soffia!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-wider uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Venha Comigo!
          </a>
        </FadeIn>
      </div>
    </section> */}
  </Layout>
);

export default Index;
