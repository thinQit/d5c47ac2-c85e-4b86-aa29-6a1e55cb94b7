export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import GalleryMasonry from "@/components/GalleryMasonry";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/35765454.jpg')",
        }}
      >
        <HeroSpotlight
          title="Sneakers curated for your everyday rotation."
          subtitle="We focus on comfort, clean design, and warm neutral palettes—so your shoes match everything and feel good doing it."
          primaryCta={{ label: "Shop the Collection", href: "/shop" }}
          secondaryCta={{ label: "Shipping & Returns", href: "/about#shipping-returns" }}
        />
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <FeaturesCards3D
            badge="Our Story"
            title="Built for Gen Z: fast, clean, and transparent."
            subtitle="Brownstone started as a curation project for premium-feel sneakers that actually wear comfortably from day one."
            features={[
              {
                icon: "Sparkles",
                title: "Curated silhouettes",
                description: "Streetwear-ready shapes that pair with minimalist and statement fits alike.",
              },
              {
                icon: "ShieldCheck",
                title: "Verified reviews",
                description: "Only completed purchases can leave feedback so ratings stay trustworthy.",
              },
              {
                icon: "Truck",
                title: "Fast fulfillment",
                description: "Orders ship in 1–2 business days from our Los Angeles studio.",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <GalleryMasonry
            headline="Inside Brownstone"
            subheadline="From curation to packing table, every pair is selected with comfort and style in mind."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577154/site-images/ecommerce/10330119.jpg",
                alt: "Sneaker pair on neutral backdrop",
                caption: "Material and silhouette checks",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg",
                alt: "Team sorting sneaker inventory",
                caption: "Daily stock prep",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577117/site-images/ecommerce/10330116.jpg",
                alt: "Close-up of sneaker stitching",
                caption: "Durability matters",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577163/site-images/ecommerce/29502354.jpg",
                alt: "Packing table ready for shipment",
                caption: "Fast and careful fulfillment",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/10330106.jpg",
                alt: "Warehouse shelf with sneaker boxes",
                caption: "Organized inventory",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/16675636.jpg",
                alt: "Lifestyle sneaker styling shot",
                caption: "Built for everyday rotation",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-card animate-fade-in-up">
          <TestimonialsAnimated
            title="Small team, big taste."
            subtitle="Design-minded sneakerheads and operations experts behind every order."
            testimonials={[
              {
                quote: "I curate every drop for comfort, materials, and colorways that are easy to wear daily.",
                name: "Camila Nguyen",
                designation: "Founder & Merchandising",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
              },
              {
                quote: "Our fulfillment process is tuned for speed and accuracy so your pair arrives quickly and clean.",
                name: "Ethan Brooks",
                designation: "Operations Lead",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
              },
              {
                quote: "We keep reviews real and community-driven so shoppers can trust every rating and comment.",
                name: "Riley Patel",
                designation: "Community & Reviews",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              },
            ]}
            autoplay
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <CTAVortex
            title="Ready for your next pair?"
            subtitle="Browse best sellers and check out securely with Stripe in under a minute."
            ctaLabel="Shop Best Sellers"
            ctaHref="/shop?collection=best-sellers"
            secondaryCtaLabel="Create Account"
            secondaryCtaHref="/auth/sign-up"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
