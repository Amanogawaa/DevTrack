import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minimalist Blog",
  description: "A modern, minimalist black and white blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased font-sans flex flex-col min-h-screen`}
    >
      <body className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
