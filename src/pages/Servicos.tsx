import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { Camera, Film, Smartphone, CheckCircle } from "lucide-react";

const servicesData = [
  {
    icon: Camera,
    title: "Fotografia Profissional",
    description: "Ensaios fotográficos com olhar artístico e sensível, capturando a essência de cada momento.",
    features: ["Ensaios individuais e em grupo", "Cobertura de eventos", "Fotografia corporativa", "Book profissional"],
    image: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3548%202.jpg",
  },
  {
    icon: Film,
    title: "Videomaker",
    description: "Produções audiovisuais que contam histórias através do movimento, cor e emoção.",
    features: ["Vídeos institucionais", "Cobertura de eventos", "Conteúdo para redes", "Edição profissional"],
    image: "https://soffiafotografias.netlify.app/imagensSoff/IMG_4106.jpg",
  },
  {
    icon: Smartphone,
    title: "Fotógrafo Mobile",
    description: "Conteúdo profissional otimizado para redes sociais e plataformas digitais.",
    features: ["Stories e Reels", "Fotos para Instagram", "Conteúdo para TikTok", "Edição para mobile"],
    image: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3592copy.jpg",
  },
];

const ServicosPage = () => (
  <Layout>
    <PageHero title="Nossos Serviços" subtitle="Soluções completas para eternizar seus momentos." breadcrumb="Serviços" />

    <section className="py-24">
      <div className="container mx-auto px-6 space-y-24">
        {servicesData.map((service, i) => (
          <div key={service.title} className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <FadeIn className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className={i % 2 === 1 ? "md:order-1" : ""}>
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">{service.title}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
            Interessado em algum <span className="italic">serviço?</span>
          </h2>
          <a
            href="https://wa.me/5565984321637?text=Olá,%20Soffia!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm tracking-wider uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Solicitar Orçamento
          </a>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default ServicosPage;
