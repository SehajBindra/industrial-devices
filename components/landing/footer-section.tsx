"use client";

import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { siteConfig } from "@/lib/data";

export function FooterSection() {
  return (
    <footer id="footer" className="w-full p-3 bg-white">
      <div className="flex flex-col gap-10 p-0 mt-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="mx-0 flex max-w-xs flex-col items-start justify-start">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-primary">
              QMS India Limited
            </h3>
          </div>
          <p className="mt-3 font-medium tracking-tight text-muted-foreground">
            {siteConfig.hero.description}
          </p>
          <div className="flex items-center mt-4 gap-3">
            {siteConfig.socialLinks.map((social) => (
              <Link target="_blank" key={social.id} href={social.url}>
                <Image
                  src={social.image}
                  alt={social.title}
                  width={32}
                  height={32}
                  unoptimized
                  className="h-6 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full pt-2 md:w-1/2 md:min-w-0">
          <div className="flex min-w-0 flex-row items-start justify-between gap-6 md:gap-8 lg:pl-10">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul
                key={columnIndex}
                className="flex min-w-0 flex-1 flex-col gap-y-2"
              >
                <li className="mb-2 text-sm font-semibold text-primary">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                  >
                    <Link href={link.url}>{link.title}</Link>
                    <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRightIcon className="h-4 w-4 " />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-40 md:h-64 relative  z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text="QMS India Limited"
            fontSize={56}
            className="h-full w-full md:hidden"
            squareSize={2}
            gridGap={3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
          <FlickeringGrid
            text="QMS India Limited"
            fontSize={90}
            className="hidden h-full w-full md:block"
            squareSize={2}
            gridGap={3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
