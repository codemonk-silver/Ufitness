// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "U&I Fitness | Stronger Every Day",
  description: "Premium fitness center with world-class trainers, 24/7 access, and results-driven programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased bg-[#0F0F0F] text-[#F5F5F5]`}>
        {children}
      </body>
    </html>
  );
}