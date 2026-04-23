import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const SobrePage = () => (
  <Layout>
    <PageHero title="Sobre Mim" subtitle="Conheça a história por trás das lentes." breadcrumb="Sobre" />

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src="/images/soff/retrato-soff.jpeg"
                alt="Jullyany Soffia"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Jullyany <span className="italic">Soffia</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Fundadora da Soffia Fotografias. Por trás de cada <strong className="text-foreground">obrigado</strong> está o motivo pelo qual nunca desisto. Cada história, cada transformação, é o combustível para continuar fazendo a diferença.
              </p>
              <p>
                Retratos são a celebração da vida em sua forma mais pura. Cada sorriso capturado, cada olhar sincero, guarda a magia de um momento que jamais se repetirá. São memórias vivas que transbordam emoção, um lembrete de que a beleza está nas pessoas que amamos e nas histórias que compartilhamos.
              </p>
              <p>
                Não existe tamanho para os seus sonhos, quando você acredita que tudo é possível. Enquanto alguns esperam ser notados, outros escolhem ser <strong className="text-primary">inesquecíveis</strong>.
              </p>
            </div>
            <div className="w-16 h-px bg-primary mt-8" />
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">
            Minha <span className="italic">Filosofia</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Autenticidade", text: "Cada foto reflete a verdade do momento. Sem poses forçadas, apenas a beleza do real." },
            { title: "Emoção", text: "Busco capturar o que os olhos sentem. Um sorriso, uma lágrima, a intensidade de viver." },
            { title: "Conexão", text: "Construo laços com quem fotografo. A confiança se transforma em fotos genuínas." },
          ].map((v, i) => (
            <FadeIn key={v.title} delay={0.1 * i}>
              <div className="p-8 border border-border bg-card/50">
                <h3 className="font-display text-2xl text-foreground mb-3 italic">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default SobrePage;
