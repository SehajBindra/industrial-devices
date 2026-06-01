import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "QMS India Limited — Quality, Safety & Assurance",
  description:
    "Consulting, industrial safety inspection, training, audits, NDT, and software solutions across India since 1998.",
  openGraph: {
    title: "QMS India Limited",
    description:
      "Consulting, safety, training, audits, and NDT—delivered by engineers who understand the shop floor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] max-w-6xl mx-auto flex flex-col">
        {children}
      </body>
    </html>
  );
}
