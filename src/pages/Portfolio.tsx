import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const categories = ["Todos", "Retratos", "Eventos", "Ensaios"];

const photos = [
  { src: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3548%202.jpg", cat: "Retratos" },
  { src: "https://soffiafotografias.netlify.app/imagensSoff/IMG_4106.jpg", cat: "Ensaios" },
  { src: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3592copy.jpg", cat: "Retratos" },
  { src: "https://soffiafotografias.netlify.app/imagensSoff/IMG_6886%20-%2027.07.jpg", cat: "Eventos" },
  { src: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3560.jpg", cat: "Ensaios" },
  { src: "https://soffiafotografias.netlify.app/imagensSoff/IMG_5234%202.jpg", cat: "Retratos" },
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
                className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                  active === cat
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
