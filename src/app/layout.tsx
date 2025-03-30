import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/Cart";
import { FloatingCartWidget } from "@/components/FloatingCartWidget";
import Script from "next/script";

// Configure fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anemon Flowers | Магазин свежих цветов и букетов",
  description: "Магазин свежих цветов и уникальных букетов для любого случая. Доставка по всему городу.",
  keywords: "цветы, букеты, флористика, доставка цветов, подарки, розы, пионы, лаванда, анемоны",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Add script to disable hydration warnings */}
        <Script id="suppress-hydration-warning" strategy="beforeInteractive">
          {`
            window.__NEXT_HYDRATION_DEV_SUPPORT = {
              onHydrationWarning: () => {} // Empty function to suppress warnings
            };
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Светлая тема - светлые анемоны */}
        <div
          className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat dark:hidden"
          style={{ backgroundImage: 'url("/images/white-anemones.jpg")' }}
        >
          <div className="min-h-screen bg-black/30 transition-colors duration-300">
            <CartProvider>
              {children}
              <FloatingCartWidget />
            </CartProvider>
          </div>
        </div>

        {/* Темная тема - пурпурные анемоны с темным overlay */}
        <div
          className="hidden dark:block min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/images/purple-anemones.jpg")' }}
        >
          <div className="min-h-screen bg-black/70 transition-colors duration-300">
            <CartProvider>
              {children}
              <FloatingCartWidget />
            </CartProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
