import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon Prototype",
  description: "A multilingual Next.js application",
};

// Since we're using app directory with internationalization,
// this layout should be minimal as the real layout is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
