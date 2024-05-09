import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "@/assests/logo.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CG: Home",
  description:
    "Unleash creativity and technology with [Brand Name]. Specializing in video editing, web development, design, and app creation, we deliver expert solutions for businesses and individuals. Discover expertise, creativity, collaboration, and results : transform your digital vision today. ",
  icons: logo.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
