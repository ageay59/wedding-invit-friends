import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { config } from "@/config/config";

const philosopher = localFont({
  src: [
    { path: "./fonts/Philosopher-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Philosopher-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Philosopher-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Philosopher-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-philosopher",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.site.lang} className="h-full">
      <body
        className={`${philosopher.variable} ${montserrat.variable} h-full bg-stone-950 text-white font-sans overflow-hidden antialiased selection:bg-amber-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
