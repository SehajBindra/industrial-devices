import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import { SiteHeader } from "@/components/landing/site-header";
import { FooterSection } from "@/components/landing/footer-section";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import CTASection from "@/components/ui/globe-feature-section";

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
  icons: {
    icon: "/product/IDI LOGO.JPG",
    apple: "/product/IDI LOGO.JPG",
  },
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-neutral-50 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] flex flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="mx-auto flex min-h-full w-full max-w-6xl flex-1 flex-col">
            <HashScrollHandler />
            <SiteHeader />
            {children}
            <CTASection />
            <FooterSection />
          </div>
          <Toaster richColors closeButton position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
