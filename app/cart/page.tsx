export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CartItemRow from "@/components/CartItemRow";
import OrderSummary from "@/components/OrderSummary";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";
import TrustBadges from "@/components/TrustBadges";
import ScrollReveal from "@/components/ScrollReveal";

export default function CartPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/259200.jpg')",
        }}
      >
        <HeroSpotlight
          title="Your cart, ready when you are."
          subtitle="Secure checkout powered by Stripe. Add a note, apply a code, and choose shipping."
          primaryCta={{ label: "Checkout", href: "/checkout" }}
          secondaryCta={{ label: "Continue Shopping", href: "/shop" }}
        />
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-4 grid gap-6 md:gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CartItemRow />
            </div>
            <div className="space-y-4">
              <OrderSummary />
              <StripeCheckoutButton />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <TrustBadges />
        </section>
      </ScrollReveal>
    </main>
  );
}
