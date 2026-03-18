import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "A Arte do Retrato Natural",
    excerpt: "Descubra como capturamos a essência de cada pessoa sem poses forçadas.",
    image: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3548%202.jpg",
    date: "15 Mar 2026",
  },
  {
    title: "Dicas para Ensaios ao Ar Livre",
    excerpt: "Os melhores horários, locações e como se preparar para um ensaio inesquecível.",
    image: "https://soffiafotografias.netlify.app/imagensSoff/IMG_6886%20-%2027.07.jpg",
    date: "08 Mar 2026",
  },
  {
    title: "Por Trás das Câmeras",
    excerpt: "Um olhar sobre o processo criativo e os bastidores da Soffia Fotografias.",
    image: "https://soffiafotografias.netlify.app/imagensSoff/IMG_3560.jpg",
    date: "01 Mar 2026",
  },
];

const BlogPage = () => (
  <Layout>
    <PageHero title="Blog" subtitle="Histórias, dicas e inspiração do mundo da fotografia." breadcrumb="Blog" />

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={0.1 * i}>
              <article className="group border border-border bg-card/50 overflow-hidden hover:border-primary/30 transition-colors duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-3">{post.date}</p>
                  <h3 className="font-display text-xl text-foreground mb-2">{post.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 font-body text-xs tracking-wider uppercase text-primary">
                    Ler mais <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPage;
