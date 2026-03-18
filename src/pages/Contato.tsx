import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const msg = `Olá, Soffia! Me chamo *${formData.nome}*.\n\n*Mensagem:* ${formData.mensagem}\n\n*E-mail:* ${formData.email}`;

    const url = `https://wa.me/5565981135918?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  return (
    <Layout>
      <PageHero title="Contato" subtitle="Vamos eternizar seus melhores momentos juntos." breadcrumb="Contato" />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Info */}
            <FadeIn>
              <h2 className="font-display text-3xl font-light text-foreground mb-8">
                Entre em <span className="italic">contato</span>
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "(65) 98113-5918", href: "tel:+5565981135918" },
                  { icon: Mail, label: "contato@soffiafotografias.com", href: "mailto:contato@soffiafotografias.com" },
                  { icon: MapPin, label: "Cuiabá - MT, Brasil", href: "#" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body text-sm">{item.label}</span>
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/5565981135918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </a>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Nome
                  </label>
                  <input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="font-body text-sm tracking-wider uppercase px-10 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Enviar Mensagem
                </button>

              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContatoPage;