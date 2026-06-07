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
  title: "Industrial Devices (India): Gas Chlorination & Water Treatment",
  description:
    "Manufacturer and supplier of gas chlorination systems, chlorine dosing equipment, safety systems, chlorine dioxide generators, and water treatment solutions.",
  openGraph: {
    title: "Industrial Devices (India) Pvt. Ltd.",
    description:
      "Gas chlorination systems and water treatment equipment for municipal, industrial, and process applications.",
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
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] max-w-6xl mx-auto flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
