import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";

import { HashScrollHandler } from "@/components/hash-scroll-handler";
import { ImageProtection } from "@/components/image-protection";
import { FooterSection } from "@/components/landing/footer-section";
import { SiteHeader } from "@/components/landing/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { rootMetadata } from "@/lib/site-metadata";

import "./globals.css";

const CTASection = dynamic(
  () => import("@/components/ui/globe-feature-section"),
  {
    loading: () => (
      <div className="mx-auto h-64 w-full animate-pulse bg-neutral-100" />
    ),
  },
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = rootMetadata;

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
        className="flex min-h-full flex-col bg-neutral-50 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px]"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="flex min-h-full w-full mx-auto flex-1 flex-col">
            <HashScrollHandler />
            <ImageProtection />
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
