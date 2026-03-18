import { Link } from "react-router-dom";

const PageHero = ({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb: string }) => (
  <section className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
    <div className="container mx-auto px-6">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
        {" / "}
        {breadcrumb}
      </p>
      <h1 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="font-body text-muted-foreground text-lg mt-4 max-w-xl">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
