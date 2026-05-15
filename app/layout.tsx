import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MØOD Café | Modern Luxury Brunch & Coffee",
  description:
    "A cinematic modern café concept built for premium brunch, specialty coffee, and social media-led online business promotion."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
