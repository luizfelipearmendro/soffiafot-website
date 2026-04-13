import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const categories = ["Todos", "Ensaios", "Fotografias Corporativas"];

const photos = [
  { src: "/images/ensaios/manu1.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu2.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu3.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu4.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu5.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu6.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu7.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/manu8.jpeg", cat: "Ensaios" },          
  { src: "/images/ensaios/manu9.jpeg", cat: "Ensaios" },
  { src: "/images/ensaios/emilli-marchese1.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/emilli-marchese2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/emilli-marchese3.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/emilli-marchese4.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/emilli-marchese5.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-carro1.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-carro2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-carro3.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-carro4.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-carro5.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/fernanda1.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/fernanda2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/fernanda3.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/fernanda4.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-parque1.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/areh-parque2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/jude-1.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/jude-2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/jude-3.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/maria&filha1.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/maria&filha2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/maria&filha3.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/maria&filha4.jpg", cat: "Ensaios" },
  { src: "/images/fotos corporativas/IMG_9871.JPG.jpeg", cat: "Fotografias Corporativas" },
  { src: "/images/fotos corporativas/IMG_9893.JPG.jpeg", cat: "Fotografias Corporativas" },
  { src: "/images/fotos corporativas/IMG_9909.JPG.jpeg", cat: "Fotografias Corporativas" },
];

const PortfolioPage = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? photos : photos.filter((p) => p.cat === active);

  return (
    <Layout>
      <PageHero title="Portfólio" subtitle="Uma coleção dos melhores momentos capturados." breadcrumb="Portfólio" />

      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-300 ${active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <FadeIn key={photo.src + active} delay={i * 0.05}>
                <div className="break-inside-avoid overflow-hidden group">
                  <img
                    src={photo.src}
                    alt={`Foto - ${photo.cat}`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
