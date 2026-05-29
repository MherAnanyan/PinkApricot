import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Blue Apricot — Cook the World from Yerevan",
  description: "Weekly international meal kits delivered in Yerevan. Latin, Asian & European cuisines.",
  openGraph: {
    title: "Blue Apricot — Cook the World from Yerevan",
    description: "Weekly international meal kits delivered in Yerevan.",
    siteName: "Blue Apricot",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400;1,700&family=Instrument+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
