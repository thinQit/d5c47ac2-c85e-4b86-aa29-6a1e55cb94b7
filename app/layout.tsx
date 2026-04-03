import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <Navbar />
        {children}
        <FooterMultiColumn
          brand="Brownstone Sneakers"
          description="Clean silhouettes, warm neutrals, and comfort-first sneakers with fast shipping, verified reviews, and secure Stripe checkout."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "New Arrivals", href: "/shop?collection=new" },
                { label: "Best Sellers", href: "/shop?collection=best-sellers" },
                { label: "Under $120", href: "/shop?priceMax=120" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Shipping & Returns", href: "/about#shipping-returns" },
                { label: "Size Guide", href: "/shop#size-guide" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Privacy Policy", href: "/about#privacy" },
                { label: "Terms", href: "/about#terms" },
              ],
            },
          ]}
          copyright="© 2026 Brownstone Sneakers. All rights reserved."
        />
      </body>
    </html>
  );
}
