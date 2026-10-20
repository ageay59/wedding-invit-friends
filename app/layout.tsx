import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { config } from "@/config/config";

const philosopher = localFont({
  src: [
    { path: "./fonts/Philosopher-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Philosopher-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Philosopher-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Philosopher-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
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
    <html lang={config.site.lang} className={philosopher.className}>
      <body>{children}</body>
    </html>
  );
}
