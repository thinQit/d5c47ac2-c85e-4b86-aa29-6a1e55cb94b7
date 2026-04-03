export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CategoryNav from "@/components/CategoryNav";
import ProductGrid from "@/components/ProductGrid";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import NewsletterForm from "@/components/NewsletterForm";
import StatsCounter from "@/components/StatsCounter";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577136/site-images/ecommerce/16675632.jpg')",
        }}
      >
        <HeroSpotlight
          title="Sneakers that look like a drop and feel like a daily driver."
          subtitle="Brownstone curates clean silhouettes, comfort-first cushioning, and limited colorways—shipped fast, easy returns, and secure Stripe checkout."
          primaryCta={{ label: "Shop New Arrivals", href: "/shop?sort=new" }}
          secondaryCta={{ label: "Browse Best Sellers", href: "/shop?collection=best-sellers" }}
        />
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <CategoryNav />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4">
            <ProductGrid />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <TrustBadges />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <TestimonialsGrid />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <NewsletterForm />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4">
            <StatsCounter
              stats={[
                { value: "50K+", label: "Pairs Sold" },
                { value: "4.8/5", label: "Average Rating" },
                { value: "1–2 Days", label: "Fulfillment Time" },
                { value: "30 Days", label: "Easy Returns" },
              ]}
              bgColor="bg-muted"
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
