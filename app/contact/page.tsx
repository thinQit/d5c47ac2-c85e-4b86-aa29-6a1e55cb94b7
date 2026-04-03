export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContactForm from "@/components/ContactForm";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577141/site-images/ecommerce/234352.jpg')",
        }}
      >
        <HeroSpotlight
          title="Need help with sizing, returns, or an order?"
          subtitle="We reply within 1 business day. Support hours: Mon–Fri 9am–6pm PT."
          primaryCta={{ label: "Email Support", href: "mailto:support@brownstonesneakers.com" }}
          secondaryCta={{ label: "Track an Order", href: "/account/orders" }}
        />
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <ContactForm
            headline="Send a message"
            subheadline="Include your order number if you have one."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "860 S Broadway, Los Angeles, CA 90014" },
              { icon: "Clock", label: "Support Hours", value: "Mon–Fri 9am–6pm PT" },
              { icon: "Phone", label: "Call", value: "+1 (213) 555-0198" },
              { icon: "Mail", label: "Email", value: "support@brownstonesneakers.com" },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <FeaturesCards3D
            badge="Store & Support"
            title="We’re online-first, with a studio in LA."
            subtitle="From sizing help to return requests, our support team is here to keep your sneaker experience smooth."
            features={[
              { icon: "MapPin", title: "Address", description: "860 S Broadway, Los Angeles, CA 90014" },
              { icon: "Clock", title: "Hours", description: "Mon–Fri 9am–6pm PT, limited weekend responses" },
              { icon: "LifeBuoy", title: "Fast replies", description: "Most messages answered within one business day." },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <CTAVortex
            title="Want faster checkout next time?"
            subtitle="Create an account to save addresses, track orders, and leave verified reviews."
            ctaLabel="Create Account"
            ctaHref="/auth/sign-up"
            secondaryCtaLabel="Shop Now"
            secondaryCtaHref="/shop"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
