import dynamic from "next/dynamic";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/data";

const FooterFlickeringGrid = dynamic(
  () =>
    import("@/components/landing/footer-flickering-grid").then(
      (module) => module.FooterFlickeringGrid,
    ),
  {
    loading: () => <div className="h-40 w-full md:h-64" aria-hidden />,
  },
);

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
    <footer id="footer" className="w-full bg-white px-4 py-3 sm:px-6">
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 p-0 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="mx-0 flex max-w-sm flex-col items-start justify-start">
          <div className="flex items-center gap-3">
            <Image
              src="/product/IDI LOGO.JPG"
              alt="Industrial Devices (India) logo"
              width={112}
              height={112}
              className="size-16 shrink-0 object-contain sm:size-28"
            />
            <div className="flex flex-col justify-center gap-1">
              <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                Industrial Devices
              </h3>
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
                  className="size-6 sm:size-8"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full pt-2 md:min-w-0 md:flex-1">
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
      <FooterFlickeringGrid />
    </footer>
  );
}
