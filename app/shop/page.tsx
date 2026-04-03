export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function ShopPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577108/site-images/ecommerce/29502367.jpg')",
        }}
      >
        <HeroSpotlight
          title="Shop sneakers that match everything."
          subtitle="Filter by style, price, and size. Save favorites, read verified reviews, and check out with Stripe."
          primaryCta={{ label: "View New Arrivals", href: "/shop?collection=new" }}
          secondaryCta={{ label: "Under $120", href: "/shop?priceMax=120" }}
        />
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4 grid gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">
            <div className="space-y-4">
              <SearchBar />
              <FilterSidebar />
            </div>
            <ProductGrid />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="size-guide" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <CTASection />
        </section>
      </ScrollReveal>
    </main>
  );
}
