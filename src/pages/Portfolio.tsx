import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaType = "image" | "video";

type Category = "Todos" | "Ensaios" | "Trabalhos" | "Vídeos";

interface MediaItem {
  src: string;
  cat: Exclude<Category, "Todos">;
  type: MediaType;
  thumb?: string;
}

const CATEGORIES: Category[] = ["Todos", "Ensaios", "Trabalhos", "Vídeos"];

const MEDIA_ITEMS: MediaItem[] = [

  // ─── Trabalhos: Palestra ───────────────────────────────────────────────────
  { src: "/images/trabalhos/palestra1.jpeg", cat: "Trabalhos", type: "image" },
  { src: "/images/trabalhos/palestra2.jpeg", cat: "Trabalhos", type: "image" },
  
  // ─── Ensaios: Andiara ───────────────────────────────────────
  { src: "/images/ensaios/andiara1.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/andiara2.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/andiara3.jpeg", cat: "Ensaios", type: "image" },

  // ─── Trabalhos: Aniversário 15 anos ───────────────────────────────────────
  {
    src: "/images/trabalhos/aniversario-15-years-01.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-02.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-03.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-04.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-05.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-06.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-07.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-08.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-09.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/aniversario-15-years-10.jpeg",
    cat: "Trabalhos",
    type: "image",
  },

  // ─── Ensaios: Useareh ──────────────────────────────────────────────────────
  { src: "/images/ensaios/useareh-3.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/useareh-4.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/useareh-5.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/useareh-6.jpeg", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Areh Parque ──────────────────────────────────────────────────
  { src: "/images/ensaios/areh-parque1.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/areh-parque2.jpg", cat: "Ensaios", type: "image" },

  // ─── Trabalhos: Cris e Rick ─────────────────────────────────────────────────
  {
    src: "/images/trabalhos/cris e rick 1.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/cris e rick 3.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/cris e rick 4.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/cris e rick 5.jpeg",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: "/images/trabalhos/cris e rick 6.jpeg",
    cat: "Trabalhos",
    type: "image",
  },

  // ─── Ensaios: Fernanda ───────────────────────────────────────────────────
  { src: "/images/ensaios/fernanda1.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/fernanda2.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/fernanda3.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/fernanda4.jpg", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Emilli Marchese ────────────────────────────────────────────
  {
    src: "/images/ensaios/emilli-marchese1.jpg",
    cat: "Ensaios",
    type: "image",
  },
  {
    src: "/images/ensaios/emilli-marchese2.jpg",
    cat: "Ensaios",
    type: "image",
  },
  {
    src: "/images/ensaios/emilli-marchese3.jpg",
    cat: "Ensaios",
    type: "image",
  },
  {
    src: "/images/ensaios/emilli-marchese4.jpg",
    cat: "Ensaios",
    type: "image",
  },
  // { src: "/images/ensaios/emilli-marchese5.jpg", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Manu ───────────────────────────────────────────────────────
  { src: "/images/ensaios/manu1.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu2.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu3.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu4.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu5.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu6.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu7.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu8.jpeg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/manu9.jpeg", cat: "Ensaios", type: "image" },

  // { src: "/images/ensaios/areh-carro1.jpg", cat: "Ensaios", type: "image" },
  // { src: "/images/ensaios/areh-carro2.jpg", cat: "Ensaios", type: "image" },
  // { src: "/images/ensaios/areh-carro3.jpg", cat: "Ensaios", type: "image" },
  // { src: "/images/ensaios/areh-carro4.jpg", cat: "Ensaios", type: "image" },
  // { src: "/images/ensaios/areh-carro5.jpg", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Jude ───────────────────────────────────────────────────────
  { src: "/images/ensaios/jude-1.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/jude-2.jpg", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Maria & Filha ──────────────────────────────────────────────
  { src: "/images/ensaios/maria&filha1.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/maria&filha2.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/maria&filha3.jpg", cat: "Ensaios", type: "image" },
  { src: "/images/ensaios/maria&filha4.jpg", cat: "Ensaios", type: "image" },

  // { src: "/images/trabalhos/deufome1.jpeg", cat: "Trabalhos", type: "image" },
  // { src: "/images/trabalhos/deufome2.jpeg", cat: "Trabalhos", type: "image" },
  // { src: "/images/trabalhos/deufome3.jpeg", cat: "Trabalhos", type: "image" },

  // ─── Vídeos ───────────────────────────────────────────────────────────────
  {
    src: "/images/videos/video-palestra.mp4",
    thumb: "/images/trabalhos/palestra1.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/aniversario-15-years-01.mp4",
    thumb: "/images/trabalhos/aniversario-15-years-01.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/trab-spotfy.mp4",
    thumb: "/images/videos/thumb1.jpg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/video-arena.mp4",
    thumb: "/images/videos/thumb-arena.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/video-arena2.mp4",
    thumb: "/images/videos/thumb-arena.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/entre-cortes-trab.mp4",
    thumb: "/images/videos/thumb-trab-entre-cortes.png",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/pre-inauguracao-useareh.mp4",
    thumb: "/images/videos/thumb-useareh.png",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/aniversario-jorge.mp4",
    thumb: "/images/videos/thumb-aniversario-jorge.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/video-festa-emilly.mp4",
    thumb: "/images/videos/thumb-festa-emilly.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/useareh-1.mp4",
    thumb: "/images/ensaios/useareh-3.jpeg",
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/useareh-2.mp4",
    thumb: "/images/ensaios/useareh-4.jpeg",
    cat: "Vídeos",
    type: "video",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FilterBarProps {
  active: Category;
  onChange: (cat: Category) => void;
}

const FilterBar = ({ active, onChange }: FilterBarProps) => (
  <div className="flex flex-wrap justify-center gap-4 mb-16">
    {CATEGORIES.map((cat) => (
      <button
        key={cat}
        onClick={() => onChange(cat)}
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
);

// ─────────────────────────────────────────────────────────────────────────────

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <p className="text-lg text-muted-foreground">
      Ainda não existem mídias nesta categoria
    </p>
    <span className="text-sm text-muted-foreground/60 mt-2">
      Novos conteúdos serão adicionados em breve
    </span>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

interface MediaCardProps {
  item: MediaItem;
  index: number;
  onClick: (item: MediaItem) => void;
}

const MediaCard = ({ item, index, onClick }: MediaCardProps) => (
  <FadeIn key={item.src} delay={index * 0.05}>
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid bg-card"
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden">
        {item.type === "video" ? (
          <>
            <img
              src={item.thumb}
              alt="Vídeo"
              className="w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <video
              src={item.src}
              muted
              loop
              playsInline
              autoPlay
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition duration-300">
                <div className="ml-1 border-l-[14px] border-l-white border-y-[10px] border-y-transparent" />
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              Vídeo
            </div>
          </>
        ) : (
          <img
            src={item.src}
            alt={`Mídia - ${item.cat}`}
            className="w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="absolute bottom-0 left-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
        <p className="text-white font-semibold text-lg">{item.cat}</p>
        <span className="text-white/70 text-sm">Clique para visualizar</span>
      </div>
    </div>
  </FadeIn>
);

// ─────────────────────────────────────────────────────────────────────────────

interface LightboxProps {
  item: MediaItem;
  onClose: () => void;
}

const Lightbox = ({ item, onClose }: LightboxProps) => (
  <div
    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fadeIn"
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-6xl flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 md:-top-16 text-white/70 hover:text-white text-5xl transition z-50"
        aria-label="Fechar"
      >
        ×
      </button>

      <div className="rounded-3xl overflow-hidden shadow-2xl bg-black">
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-[82vh] w-auto max-w-full object-contain md:max-w-[420px]"
          />
        ) : (
          <img
            src={item.src}
            alt="Preview"
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="text-white text-xl font-semibold">{item.cat}</p>
        <span className="text-white/50 text-sm uppercase tracking-wider">
          {item.type === "video" ? "Vídeo" : "Fotografia"}
        </span>
      </div>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // A ordem de MEDIA_ITEMS já é a ordem de exibição, então não precisamos
  // mais de .sort() aqui — filter() preserva a ordem original do array.
  const filtered =
    activeCategory === "Todos"
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.cat === activeCategory);

  const handleClose = useCallback(() => setSelectedMedia(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <Layout>
      <PageHero
        title="Portfólio"
        subtitle="Uma coleção dos melhores momentos capturados."
        breadcrumb="Portfólio"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FilterBar active={activeCategory} onChange={setActiveCategory} />

          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 gap-7 space-y-7">
              {filtered.map((item, i) => (
                <MediaCard
                  key={item.src + activeCategory}
                  item={item}
                  index={i}
                  onClick={setSelectedMedia}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedMedia && <Lightbox item={selectedMedia} onClose={handleClose} />}
    </Layout>
  );
};

export default PortfolioPage;
