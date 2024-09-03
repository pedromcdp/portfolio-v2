import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers, cn } from "@/utils";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Pereira - Frontend Developer",
  description:
    "I'm a frontend developer based in Aveiro, Portugal and I love to build quality web applications",
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
          <footer className="w-full text-center my-4 font-medium">
            <p>
              Pedro Miguel Pereira{" "}
              <span className="text-primary">
                &copy; {new Date().getFullYear()}
              </span>
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
