export const dynamic = 'force-dynamic';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function WireframePage() {
  const frames = [
    {
      title: "Home",
      blocks: ["HeroSpotlight", "CategoryNav", "FeaturedProducts", "TrustBadges", "TestimonialsGrid", "Newsletter", "Footer"],
    },
    {
      title: "Shop",
      blocks: ["Shop Hero + Filters", "Product Grid", "Fit Finder", "Size Guide", "CTA", "Footer"],
    },
    {
      title: "Product Detail (template)",
      blocks: ["Gallery", "Price + Sizes", "Add to Cart", "Shipping/Returns", "Reviews", "Related Products"],
    },
    {
      title: "Cart",
      blocks: ["Cart Items", "Order Summary", "Trust", "Checkout CTA"],
    },
    {
      title: "Contact",
      blocks: ["Hero", "Contact Form", "Store Info", "CTA", "Footer"],
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Wireframe preview</h1>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            A layout-only view of key pages and conversion flow (browse → cart → checkout).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="transition-all duration-200 hover:scale-105">
              <a href="/">Go to Home</a>
            </Button>
            <Button asChild variant="outline" className="transition-all duration-200 hover:scale-105">
              <a href="/shop">Go to Shop</a>
            </Button>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {frames.map((frame) => (
              <Card key={frame.title} className="p-6 rounded-xl border border-border bg-card card-hover">
                <h2 className="text-xl font-semibold">{frame.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {frame.blocks.map((block) => (
                    <li key={block} className="rounded-md bg-muted px-3 py-2">
                      {block}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
