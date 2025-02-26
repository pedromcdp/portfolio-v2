import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers, cn } from "@/utils";
import { Footer } from "@/components";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Pereira - Frontend Developer",
  description:
    "I'm a frontend developer based in Aveiro, Portugal and I love to build quality web applications",

  openGraph: {
    type: "website",
    url: "https://pedrocruto.pt",
    title: "Pedro Pereira - Frontend Developer",
    description:
      "I'm a frontend developer based in Aveiro, Portugal and I love to build quality web applications",
    images: [
      {
        url: "https://pedrocruto.pt/profile.png",
        width: 1200,
        height: 630,
        alt: "Pedro Cruto",
      },
    ],
    siteName: "Pedro Pereira - Frontend Developer",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("antialiased relative", font.className)}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
