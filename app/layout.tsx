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
  title: "Industrial Devices (India): Chlorination Systems",
  description:
    "Chlorinator manufacturers in India. Gas chlorinators, vaporizers, dosing systems, and chlorine safety equipment.",
  openGraph: {
    title: "Industrial Devices (India) Pvt. Ltd.",
    description:
      "Leader in chlorinators, vaporizers, and safety systems, designed and manufactured in New Delhi.",
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
