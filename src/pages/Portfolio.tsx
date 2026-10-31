import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mediaUrl } from "@/lib/media";

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaType = "image" | "video";

type Category = "Todos" | "Ensaios" | "Trabalhos" | "Vídeos";

interface MediaItem {
  src: string;
  cat: Exclude<Category, "Todos">;
  type: MediaType;
  thumb?: string;
  title?: string;
}

const CATEGORIES: Category[] = ["Todos", "Ensaios", "Trabalhos", "Vídeos"];

const MEDIA_ITEMS: MediaItem[] = [
  // ─── Trabalhos: Palestra ───────────────────────────────────────────────────
  { src: mediaUrl("/trabalhos/palestra1.jpeg"), title: "Palestra", cat: "Trabalhos", type: "image" },
  { src: mediaUrl("/trabalhos/palestra2.jpeg"), title: "Palestra", cat: "Trabalhos", type: "image" },

  // ─── Ensaios: Andiara ───────────────────────────────────────
  { src: mediaUrl("/ensaios/andiara1.jpeg"), title: "Andiara", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/andiara2.jpeg"), title: "Andiara", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/andiara3.jpeg"), title: "Andiara", cat: "Ensaios", type: "image" },

  // ─── Trabalhos: Aniversário 15 anos ───────────────────────────────────────
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-01.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-02.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-03.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-04.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-05.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-06.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-07.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-08.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-09.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/aniversario-15-years-10.jpeg"),
    title: "Aniversário 15 anos",
    cat: "Trabalhos",
    type: "image",
  },

  // ─── Ensaios: Useareh ──────────────────────────────────────────────────────
  { src: mediaUrl("/ensaios/useareh-3.jpeg"), title: "Useareh", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/useareh-4.jpeg"), title: "Useareh", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/useareh-5.jpeg"), title: "Useareh", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/useareh-6.jpeg"), title: "Useareh", cat: "Ensaios", type: "image" },

  // ─── Trabalhos: Crys & Pedro ─────────────────────────────────────────────────
  {
    src: mediaUrl("/trabalhos/cris e rick 1.jpeg"),
    title: "Crys & Pedro",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/cris e rick 3.jpeg"),
    title: "Crys & Pedro",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/cris e rick 4.jpeg"),
    title: "Crys & Pedro",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/cris e rick 5.jpeg"),
    title: "Crys & Pedro",
    cat: "Trabalhos",
    type: "image",
  },
  {
    src: mediaUrl("/trabalhos/cris e rick 6.jpeg"),
    title: "Crys & Pedro",
    cat: "Trabalhos",
    type: "image",
  },

  // ─── Ensaios: Fernanda ───────────────────────────────────────────────────
  { src: mediaUrl("/ensaios/fernanda1.jpg"), title: "Fernanda", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/fernanda2.jpg"), title: "Fernanda", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/fernanda3.jpg"), title: "Fernanda", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/fernanda4.jpg"), title: "Fernanda", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Emilli Marchese ────────────────────────────────────────────
  {
    src: mediaUrl("/ensaios/emilli-marchese1.jpg"),
    title: "Emilli Marchese",
    cat: "Ensaios",
    type: "image",
  },
  {
    src: mediaUrl("/ensaios/emilli-marchese2.jpg"),
    title: "Emilli Marchese",
    cat: "Ensaios",
    type: "image",
  },
  {
    src: mediaUrl("/ensaios/emilli-marchese3.jpg"),
    title: "Emilli Marchese",
    cat: "Ensaios",
    type: "image",
  },
  {
    src: mediaUrl("/ensaios/emilli-marchese4.jpg"),
    title: "Emilli Marchese",
    cat: "Ensaios",
    type: "image",
  },
  // { src: mediaUrl("/ensaios/emilli-marchese5.jpg"), cat: "Ensaios", type: "image" },

  // ─── Ensaios: Manu ───────────────────────────────────────────────────────
  { src: mediaUrl("/ensaios/manu1.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu2.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu3.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu4.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu5.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu6.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu7.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu8.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/manu9.jpeg"), title: "Manu", cat: "Ensaios", type: "image" },

  // { src: mediaUrl("/ensaios/areh-carro1.jpg"), cat: "Ensaios", type: "image" },
  // { src: mediaUrl("/ensaios/areh-carro2.jpg"), cat: "Ensaios", type: "image" },
  // { src: mediaUrl("/ensaios/areh-carro3.jpg"), cat: "Ensaios", type: "image" },
  // { src: mediaUrl("/ensaios/areh-carro4.jpg"), cat: "Ensaios", type: "image" },
  // { src: mediaUrl("/ensaios/areh-carro5.jpg"), cat: "Ensaios", type: "image" },

  // ─── Ensaios: Jude ───────────────────────────────────────────────────────
  { src: mediaUrl("/ensaios/jude-1.jpg"), title: "Jude", cat: "Ensaios", type: "image" },
  { src: mediaUrl("/ensaios/jude-2.jpg"), title: "Jude", cat: "Ensaios", type: "image" },

  // ─── Ensaios: Maria & Filha ──────────────────────────────────────────────
  { src: mediaUrl("/ensaios/maria&filha4.jpg"), title: "Maria & Filha", cat: "Ensaios", type: "image" },

  // { src: mediaUrl("/trabalhos/deufome1.jpeg"), cat: "Trabalhos", type: "image" },
  // { src: mediaUrl("/trabalhos/deufome2.jpeg"), cat: "Trabalhos", type: "image" },
  // { src: mediaUrl("/trabalhos/deufome3.jpeg"), cat: "Trabalhos", type: "image" },

  // ─── Vídeos ───────────────────────────────────────────────────────────────
  {
    src: "/images/videos/video-demonstracao-tecnica(palestra).mp4",
    thumb: mediaUrl("/trabalhos/palestra2.jpeg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/video-palestra.mp4",
    thumb: mediaUrl("/trabalhos/palestra1.jpeg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/aniversario-15-years-01.mp4",
    thumb: mediaUrl("/trabalhos/aniversario-15-years-01.jpeg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/trab-spotfy.mp4",
    thumb: mediaUrl("/videos/thumb1.jpg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/video-arena.mp4",
    thumb: mediaUrl("/videos/thumb-arena.jpeg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/video-arena2.mp4",
    thumb: mediaUrl("/videos/thumb-arena.jpeg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/useareh-1.mp4",
    thumb: mediaUrl("/ensaios/useareh-3.jpeg"),
    cat: "Vídeos",
    type: "video",
  },
  {
    src: "/images/videos/useareh-2.mp4",
    thumb: mediaUrl("/ensaios/useareh-4.jpeg"),
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
    <p className="font-display text-2xl font-light text-muted-foreground">
      Ainda não existem mídias nesta categoria
    </p>
    <span className="font-body text-sm text-muted-foreground/60 mt-2">
      Novos conteúdos serão adicionados em breve
    </span>
  </div>
);

interface MediaCardProps {
  item: MediaItem;
  index: number;
  onClick: () => void;
}

const MediaCard = ({ item, index, onClick }: MediaCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={Math.min(index, 6) * 0.05}>
      <div
        className="group relative overflow-hidden cursor-pointer break-inside-avoid bg-card"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden">
          {item.type === "video" ? (
            <>
              <img
                src={item.thumb}
                alt={`Vídeo - ${item.title ?? item.cat}`}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* O vídeo só é montado no hover para não baixar todos os arquivos ao abrir a página */}
              {hovered && (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

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
              alt={`${item.title ?? item.cat} - Soffia Visual`}
              className="w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <div className="absolute bottom-0 left-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
          <p className="font-display text-white text-2xl font-light">{item.title ?? item.cat}</p>
          <span className="font-body text-white/70 text-xs tracking-[0.2em] uppercase">{item.cat}</span>
        </div>
      </div>
    </FadeIn>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

interface LightboxProps {
  item: MediaItem;
  position: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const NAV_BUTTON =
  "absolute top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition";

const Lightbox = ({ item, position, onClose, onPrev, onNext }: LightboxProps) => (
  <div
    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fadeIn"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        onPrev();
      }}
      className={`${NAV_BUTTON} left-2 md:left-6`}
      aria-label="Anterior"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onNext();
      }}
      className={`${NAV_BUTTON} right-2 md:right-6`}
      aria-label="Próximo"
    >
      <ChevronRight className="w-6 h-6" />
    </button>

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

      <div className="overflow-hidden shadow-2xl bg-black">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-[82vh] w-auto max-w-full object-contain md:max-w-[420px]"
          />
        ) : (
          <img
            src={item.src}
            alt={`${item.title ?? item.cat} - Soffia Visual`}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="font-display text-white text-2xl font-light">{item.title ?? item.cat}</p>
        <span className="font-body text-white/50 text-xs uppercase tracking-[0.2em]">
          {item.type === "video" ? "Vídeo" : "Fotografia"} · {position}
        </span>
      </div>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // A ordem de MEDIA_ITEMS já é a ordem de exibição, então não precisamos
  // mais de .sort() aqui — filter() preserva a ordem original do array.
  const filtered =
    activeCategory === "Todos"
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.cat === activeCategory);

  const total = filtered.length;
  const isOpen = selectedIndex !== null;

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handlePrev = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );
  const handleNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

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
                  onClick={() => setSelectedIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {isOpen && filtered[selectedIndex] && (
        <Lightbox
          item={filtered[selectedIndex]}
          position={`${selectedIndex + 1} / ${total}`}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </Layout>
  );
};

export default PortfolioPage;
