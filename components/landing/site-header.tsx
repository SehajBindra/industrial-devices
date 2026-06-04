"use client";

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

const serviceColumns = [
  {
    title: "Chlorinators",
    items: [
      "Gas Chlorinators",
      "Vacuum Operated Chlorinators",
      "Cylinder Mounted Chlorinators",
      "Wall Mounted Chlorinators",
      "Floor Mounted Chlorinators",
    ],
  },
  {
    title: "Disinfection Systems",
    items: [
      "Chlorine Dioxide Generators",
      "Electro Chlorination Systems",
      "Chlorine Vaporizers",
      "Steam Heated Vaporizers",
    ],
  },
  {
    title: "Safety & Accessories",
    items: [
      "Chlorine Leak Detection",
      "Leak Absorption Systems",
      "Emergency Safety Kits",
      "Cylinder Vacuum Auto Changeover",
      "Cylinder Flexible Copper Connector",
    ],
  },
] as const;

const navLinkClass = cn(
  navigationMenuTriggerStyle(),
  "inline-flex h-8 shrink-0 items-center rounded-full px-2.5 text-sm font-medium text-neutral-800 shadow-none",
  "hover:bg-neutral-100/90 focus:bg-neutral-100/90 data-open:bg-neutral-100/90",
);

function ServicesMegaMenu() {
  return (
    <div className="w-[min(54rem,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] px-5 py-6 sm:px-8 sm:py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 2xl:gap-10">
        {serviceColumns.map((column) => (
          <div
            key={column.title}
            className="min-w-0 border-neutral-700/35 pb-8 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0 xl:border-e xl:border-b-0 xl:pe-6 xl:last:border-e-0 2xl:pe-10"
          >
            <p className="mb-4 text-[13px] font-semibold leading-snug tracking-tight text-white">
              {column.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {column.items.map((label) => (
                <li key={label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={hrefForProductLabel(label)}
                      className={cn(
                        "rounded-md px-2 py-1.5 text-[13px] leading-snug font-normal text-white/92",
                        "hover:bg-white/10 hover:text-white focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-white/30",
                      )}
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
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar className="pointer-events-none fixed max-w-6xl mx-auto inset-x-0 top-0 z-50 flex sm:h-24 px-4 sm:px-2 justify-center">
      <NavBody className="pointer-events-auto h-10 sm:h-16 gap-2 px-3 sm:gap-3 sm:px-4 sm:pr-4">
        <Link
          href="/"
          className="relative z-20 flex shrink-0 items-center rounded-full px-1 py-0.5 outline-none transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-950/25"
        >
          <span className="text-[13px] font-semibold tracking-tight text-primary dark:text-primary">
            Industrial Devices
          </span>
        </Link>

        <NavigationMenu
          className="max-w-none min-w-0 flex-1 justify-end md:flex-1 md:justify-center"
          viewportClassName={cn(
            "mt-3 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/88 text-white shadow-[0_24px_70px_-12px_rgba(0,0,0,0.45)] ring-0",
            "backdrop-blur-xl supports-backdrop-filter:backdrop-blur-xl md:rounded-2xl",
          )}
        >
          <NavigationMenuList className="hidden flex-none flex-wrap justify-center gap-0.5 sm:gap-1 md:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  navLinkClass,
                  "gap-1 data-open:bg-neutral-100/90 [&_svg]:size-3 [&_svg]:opacity-70",
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ServicesMegaMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navLinkClass}>
                <Link href="#applications">Applications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navLinkClass}>
                <Link href="#clients">Industries</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navLinkClass}>
                <Link href="#contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          size="sm"
          className="relative z-20 hidden h-9 shrink-0 rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground shadow-none hover:bg-primary/90 sm:inline-flex"
        >
          <Link href="#contact" className="gap-1.5">
            Request Quote
            <ArrowRight aria-hidden className="size-[15px]" strokeWidth={2} />
          </Link>
        </Button>
      </NavBody>

      <MobileNav className="pointer-events-auto">
        <MobileNavHeader>
          <Link
            href="/"
            className="relative z-20 flex shrink-0 items-center rounded-full px-1 py-0.5 outline-none transition-colors hover:text-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-950/25"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-[13px] font-semibold tracking-tight text-neutral-950 dark:text-white">
              Industrial Devices
            </span>
          </Link>
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          className="max-h-[min(32rem,calc(100dvh-8rem))] overflow-y-auto border border-neutral-200 dark:border-neutral-800"
        >
          <div>
            <p className="px-1 pb-2 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Products
            </p>
            <div className="flex flex-col gap-6">
              {serviceColumns.map((column) => (
                <div key={column.title} className="px-1">
                  <p className="mb-2 text-sm font-semibold text-neutral-950 dark:text-neutral-100">
                    {column.title}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {column.items.map((label) => (
                      <li key={label}>
                        <Link
                          href={hrefForProductLabel(label)}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          {(
            [
              ["#applications", "Applications"],
              ["#clients", "Industries"],
              ["#contact", "Contact"],
            ] as const
          ).map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-1 py-2.5 text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Request a quote
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
