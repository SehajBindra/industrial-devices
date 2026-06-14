"use client";

import { ChevronRightIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { contactInfo, siteConfig } from "@/lib/data";

function FooterLinkRow({
  href,
  title,
  external,
}: {
  href: string;
  title: string;
  external?: boolean;
}) {
  return (
    <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
      <Link
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {title}
      </Link>
      <div className="flex size-4 translate-x-0 transform items-center justify-center rounded border border-border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
        <ChevronRightIcon className="h-4 w-4" />
      </div>
    </li>
  );
}

export function FooterSection() {
  return (
    <footer id="footer" className="w-full p-3 bg-white">
      <div className="flex flex-col gap-10 p-0 mt-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="mx-0 flex max-w-sm flex-col items-start justify-start">
          <div className="flex items-center gap-3">
            <Image
              src="/product/IDI LOGO.JPG"
              alt="Industrial Devices (India) logo"
              width={32}
              height={32}
              className="size-10 sm:size-16 shrink-0 object-cover"
            />
            <div className="flex flex-col justify-center gap-1">
              <h3 className="text-base font-semibold text-primary">
                Industrial Devices
              </h3>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ClockIcon className="size-3.5 shrink-0 text-primary/80" />
                <span>{contactInfo.hours}</span>
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm font-medium tracking-tight text-muted-foreground">
            {siteConfig.hero.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {siteConfig.socialLinks.map((social) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
                href={social.url}
              >
                <Image
                  src={social.image}
                  alt={social.title}
                  width={32}
                  height={32}
                  unoptimized
                  className="h-6 sm:h-8"
                  style={{ width: "auto" }}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full pt-2 md:flex-1 md:min-w-0">
          <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 lg:pl-6">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex min-w-0 flex-col gap-y-2">
                <li className="mb-2 text-sm font-semibold text-primary">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <FooterLinkRow
                    key={link.id}
                    href={link.url}
                    title={link.title}
                  />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-40 md:h-64 relative  z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 ">
          <FlickeringGrid
            text="Industrial Devices"
            fontSize={56}
            className="h-full w-full md:hidden"
            squareSize={2}
            gridGap={3}
            color="#0ea5e9"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
          <FlickeringGrid
            text="Industrial Devices"
            fontSize={90}
            className="hidden h-full w-full md:block"
            squareSize={2}
            gridGap={3}
            color="#0ea5e9"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
