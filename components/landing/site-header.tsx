"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { hrefForProductLabel } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductMenuSection = {
  title: string;
  items: readonly string[];
};

type ProductMenuColumn = {
  sections: readonly ProductMenuSection[];
};

const productMenuColumns: readonly ProductMenuColumn[] = [
  {
    sections: [
      {
        title: "Gas Chlorinators",
        items: [
          "Cylinder Mounted Chlorinators",
          "Wall Mounted Chlorinators",
          "Floor Mounted Chlorinators",
        ],
      },
      {
        title: "Chlorine Vaporizer",
        items: [
          "Steam Heated Vaporizer",
          "Electrically Heated Vaporizer",
          "Hot Water Heated Vaporizer",
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Disinfection Systems",
        items: ["Chlorine Dioxide Generators", "Electrochlorinators"],
      },
      {
        title: "Dosing Systems",
        items: ["Chemical Dosing Systems"],
      },
    ],
  },
  {
    sections: [
      {
        title: "Safety Systems",
        items: [
          "Chlorine Leak Detector",
          "Emergency Repair Kits",
          "Chlorine Leak Absorption Systems",
          "Protective Clothing",
          "Gas Mask & Air Breathing Apparatus",
        ],
      },
    ],
  },
] as const;

const headerShellClass =
  "border-neutral-200 bg-white shadow-[0_8px_30px_-10px_rgba(15,23,42,0.12),0_2px_8px_-4px_rgba(15,23,42,0.06)]";

const navLinkClass = cn(
  navigationMenuTriggerStyle(),
  "inline-flex h-8 shrink-0 items-center rounded-full px-2.5 text-sm font-medium text-neutral-800 shadow-none",
  "hover:bg-neutral-100 focus:bg-neutral-100 data-open:bg-neutral-100",
);

const menuLinkClass = cn(
  "block rounded-md px-2 py-1.5 text-[13px] leading-snug font-normal whitespace-normal text-neutral-700",
  "hover:bg-neutral-100 hover:text-neutral-950 focus:bg-neutral-100 focus-visible:ring-1 focus-visible:ring-neutral-300",
);

function ProductMenuSections({
  sections,
  onNavigate,
}: {
  sections: readonly ProductMenuSection[];
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-3 text-[13px] font-semibold leading-snug tracking-tight text-neutral-900">
            {section.title}
          </p>
          <ul className="flex flex-col gap-0.5">
            {section.items.map((label) => (
              <li key={`${section.title}-${label}`}>
                <NavigationMenuLink asChild>
                  <Link
                    href={hrefForProductLabel(label)}
                    onClick={onNavigate}
                    className={menuLinkClass}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SiteBrand() {
  return (
    <>
      <Image
        src="/product/IDI LOGO.JPG"
        alt="Industrial Devices (India) logo"
        width={32}
        height={32}
        className="size-12 shrink-0 object-contain sm:size-16"
      />
      <span className="truncate  font-semibold tracking-tight text-primary text-base">
        Industrial Devices
      </span>
    </>
  );
}

function ProductsMegaMenu() {
  return (
    <div className="w-[min(54rem,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] bg-white px-5 py-6 sm:px-8 sm:py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 2xl:gap-10">
        {productMenuColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="min-w-0 pb-8 last:pb-0 sm:pb-0 xl:border-e xl:border-neutral-200 xl:pe-6 xl:last:border-e-0 2xl:pe-10"
          >
            <ProductMenuSections sections={column.sections} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar className="pointer-events-none fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl justify-center overflow-visible px-4 sm:px-2">
      <NavBody
        className={cn(
          "pointer-events-auto h-10 gap-2 overflow-visible px-5 sm:h-16 sm:gap-3 sm:px-6",
          headerShellClass,
        )}
      >
        <Link
          href="/"
          className="relative z-20 flex shrink-0 items-center gap-2 rounded-full px-1 py-0.5 outline-none transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-950/25"
        >
          <SiteBrand />
        </Link>

        <NavigationMenu
          className="static max-w-none min-w-0 flex-1 justify-end md:flex-1 md:justify-center"
          viewportClassName="overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-[0_24px_70px_-12px_rgba(15,23,42,0.12)] ring-0"
        >
          <NavigationMenuList className="hidden flex-none flex-wrap justify-center gap-0.5 sm:gap-1 md:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  navLinkClass,
                  "gap-1 [&_svg]:size-3 [&_svg]:opacity-70",
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ProductsMegaMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navLinkClass}>
                <Link href="/#applications">Applications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navLinkClass}>
                <Link href="/#clients">Customer Testimonials</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navLinkClass}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          size="sm"
          className="relative z-20 hidden h-9 shrink-0 rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground shadow-none hover:bg-primary/90 sm:inline-flex"
        >
          <Link href="/request-quote" className="gap-1.5">
            Request Quote
            <ArrowRight aria-hidden className="size-[15px]" strokeWidth={2} />
          </Link>
        </Button>
      </NavBody>

      <MobileNav
        className={cn(
          "pointer-events-auto overflow-visible rounded-2xl px-5 py-2 sm:px-6",
          headerShellClass,
        )}
      >
        <MobileNavHeader className="min-h-10 gap-2">
          <Link
            href="/"
            className="relative z-20 flex min-w-0 flex-1 items-center gap-1.5 rounded-full px-1 py-0.5 outline-none transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-950/25"
            onClick={() => setMobileOpen(false)}
          >
            <SiteBrand />
          </Link>
          <div className="shrink-0">
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          className="max-h-[min(32rem,calc(100dvh-8rem))] overflow-y-auto border border-neutral-200 bg-white"
        >
          <div>
            <p className="px-1 pb-2 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Products
            </p>
            <div className="flex flex-col gap-6">
              {productMenuColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-6">
                  {column.sections.map((section) => (
                    <div key={section.title} className="px-1">
                      <p className="mb-2 text-sm font-semibold text-neutral-950">
                        {section.title}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {section.items.map((label) => (
                          <li key={`${section.title}-${label}`}>
                            <Link
                              href={hrefForProductLabel(label)}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-2 py-1.5 text-sm leading-snug whitespace-normal text-neutral-700 transition-colors hover:bg-neutral-100"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Separator />
          {(
            [
              ["/#applications", "Applications"],
              ["/#clients", "Customer Testimonials"],
              ["/downloads", "Downloads"],
              ["/contact", "Contact"],
            ] as const
          ).map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-1 py-2.5 text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Request Quote
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
