import type { Metadata } from "next";
import localFont from "next/font/local";
import { Gabarito } from "next/font/google";
import "./globals.css";

const arigato = localFont({
  src: "./fonts/arigato.ttf",
  variable: "--font-arigato",
  display: "swap",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "Sheikh Jamir Alam",
  description: "Empowering creative brands and studios with story-driven, results-oriented websites that deliver a competitive edge. Working Globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arigato.variable} ${gabarito.variable} antialiased`}>{children}</body>
    </html>
  );
}
