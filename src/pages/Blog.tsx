import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { url } from "inspector";

const posts = [
  {
    title: "A Arte do Retrato Natural",
    excerpt: "Cores, luz e movimento – cada clique conta uma história.",
    image: "/images/ensaios/areh-parque1.jpg",
    date: "15 Fev 2025",
    url: "https://www.instagram.com/p/DGG9Lt0Rw1N/",
  },
  {
    title: "Dicas para Ensaios ao Ar Livre",
    excerpt: "Naturalmente linda.",
    image: "/images/ensaios/fernanda3.jpg",
    date: "27 Jul 2025",
    url: "https://www.instagram.com/p/DMn5KgnRNEx/",

  },
  {
    title: "Por Trás das Câmeras",
    excerpt: "Passos firmes, energia leve e um cenário que inspira.",
    image: "/images/ensaios/jude-2.jpg",
    date: "15 Fev 2025",
    url: "https://www.instagram.com/p/DGG9byuRy6Q/",
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
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-body text-xs tracking-wider uppercase text-primary"
                  >
                    Ler mais <ArrowRight className="w-3 h-3" />
                  </a>
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
