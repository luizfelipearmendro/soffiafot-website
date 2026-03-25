import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { Instagram } from "lucide-react";

const team = [
  {
    name: "Jullyany Soffia",
    role: "Fundadora & Fotógrafa",
    image: "/images/soff/soff-com-camera.jpg",
    bio: "Apaixonada por eternizar momentos e transformar cada clique em uma obra de arte.",
  },
];

const EquipePage = () => (
  <Layout>
    <PageHero title="Nossa Equipe" subtitle="Conheça quem está por trás das lentes." breadcrumb="Equipe" />

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={0.1 * i}>
              <div className="text-center">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full mb-8">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h2 className="font-display text-3xl text-foreground mb-2">{member.name}</h2>
                <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">{member.role}</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default EquipePage;
