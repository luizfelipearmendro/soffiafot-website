import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const categories = ["Todos", "Retratos", "Ensaios", "Fotografias Corporativas"];

const photos = [
  { src: "/images/ensaios/FullSizeRender 2-20092025.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/FullSizeRender-20092025.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/FullSizeRender.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_1403_0612.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_1747_0612.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3548 2.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3554.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3560.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3592copy.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3755.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3780.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_4025.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3554copy.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_4058.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_4098.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_4106.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_4106copy.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_6886 - 27.07.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_6889 - 27.07.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_6918 27.07.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_6923 - 27.07.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_7825-20092025.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_3780 - Copia.jpg", cat: "Ensaios" },
  { src: "/images/ensaios/IMG_7827-20092025.jpg", cat: "Ensaios" },
  { src: "/images/retratos/25bb859a-6b12-4ea4-bf22-c856cd8d1d17.jpg", cat: "Retratos" },
  { src: "/images/retratos/64e66bb8-c8d9-4a91-ba04-6d6e2208991e.JPG", cat: "Retratos" },
  { src: "/images/retratos/598d6689-731f-4a89-9e2c-8a052a148627.jpg", cat: "Retratos" },
  { src: "/images/retratos/935b157b-82a1-45d1-86d1-7f4c92264a43.JPG", cat: "Retratos" },
  { src: "/images/retratos/3321dcae-6e62-4ed0-aa29-c8577c21593c.JPG", cat: "Retratos" },
  { src: "/images/retratos/56334648-1117-4558-a9a3-7e288615c70e.JPG", cat: "Retratos" },
  { src: "/images/retratos/abf06386-3419-49c8-9dcc-0dd66ecb72bf.JPG", cat: "Retratos" },
  { src: "/images/retratos/c3fcfbfa-d414-4ca3-b0bc-ae30c5006c81.JPG", cat: "Retratos" },
  { src: "/images/retratos/c6163bde-7736-4689-987d-0828f68724fe.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-23 124122.714.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-25 111311.122.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-28 073600.843.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-28 073849.273.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-28 131425.520.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-28 131425.992.JPG", cat: "Retratos" },
  { src: "/images/retratos/cpm35 2025-01-28 131426.916.JPG", cat: "Retratos" },
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
