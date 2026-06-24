import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ClientListCatalog, ClientListEntry } from "@/lib/clients-list";
import { cn } from "@/lib/utils";

const tableTextCellClassName =
  "whitespace-normal wrap-break-word [overflow-wrap:anywhere] align-top text-sm leading-relaxed";

function displayPdfText(text: string) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d)([A-Za-z(])/g, "$1 $2")
    .replace(/([A-Za-z)])(\d)/g, "$1 $2")
    .replace(/([.,)])(?=[A-Za-z0-9(])/g, "$1 ")
    .replace(/(\d)(Nos\.?)/gi, "$1 $2")
    .replace(/(Nos\.?)(of\b)/gi, "$1 $2")
    .replace(/(kg\/hr)/gi, " $1 ")
    .replace(/\s+/g, " ")
    .trim();
}

function yearTone(year: string) {
  const normalized = year.toLowerCase();

  if (normalized.includes("under")) {
    return "active" as const;
  }

  if (/\d{4}/.test(year)) {
    return "completed" as const;
  }

  return "neutral" as const;
}

function YearBadge({ year }: { year: string }) {
  const tone = yearTone(year);

  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border px-2.5 py-1 text-[0.72rem] font-medium leading-tight",
        tone === "active" &&
          "border-amber-200 bg-amber-50 text-amber-900",
        tone === "completed" &&
          "border-primary/15 bg-primary/5 text-primary",
        tone === "neutral" &&
          "border-neutral-200 bg-neutral-50 text-neutral-700",
      )}
    >
      {year}
    </span>
  );
}

function ClientListRows({
  entries,
  catalogId,
  sectionId,
}: {
  entries: readonly ClientListEntry[];
  catalogId: string;
  sectionId: string;
}) {
  return (
    <>
      {entries.map((entry, index) => (
        <TableRow
          key={`${catalogId}-${sectionId}-${index}`}
          className="group border-neutral-200/80 hover:bg-primary/3"
        >
          <TableCell className="w-12 px-3 py-3.5 align-top font-mono text-xs whitespace-nowrap text-neutral-500">
            {entry.serial}
          </TableCell>
          <TableCell
            className={cn(
              tableTextCellClassName,
              "w-[38%] px-3 py-3.5 text-neutral-950",
            )}
          >
            {displayPdfText(entry.client)}
          </TableCell>
          <TableCell
            className={cn(
              tableTextCellClassName,
              "w-[42%] px-3 py-3.5 text-neutral-700",
            )}
          >
            {displayPdfText(entry.capacity)}
          </TableCell>
          <TableCell className="w-32 px-3 py-3.5 align-top whitespace-normal">
            <YearBadge year={entry.year} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export function ClientListCatalogSection({
  catalog,
}: {
  catalog: ClientListCatalog;
}) {
  const totalProjects = catalog.sections.reduce(
    (count, section) => count + section.entries.length,
    0,
  );

  return (
    <section
      id={catalog.id}
      className="scroll-mt-28 sm:scroll-mt-32"
      aria-labelledby={`${catalog.id}-heading`}
    >
      <div className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.04)]">
        <div className="border-b border-neutral-200 bg-[linear-gradient(180deg,rgba(0,119,182,0.05),rgba(255,255,255,0))] px-5 py-6 sm:px-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2
                id={`${catalog.id}-heading`}
                className="text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl"
              >
                {catalog.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {catalog.description}
              </p>
            </div>

            <div className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700">
              {totalProjects} projects listed
            </div>
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {catalog.sections.map((section) => (
            <div key={section.id}>
              {catalog.sections.length > 1 ? (
                <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-3 sm:px-7">
                  <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                    {section.title}
                  </h3>
                </div>
              ) : null}

              <Table className="w-full min-w-[760px] table-fixed">
                <TableHeader className="sticky top-0 z-10 bg-neutral-50/95 backdrop-blur-sm">
                  <TableRow className="border-neutral-200 hover:bg-transparent">
                    <TableHead className="w-12 px-3 text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Sl.
                    </TableHead>
                    <TableHead className="w-[38%] px-3 text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Client
                    </TableHead>
                    <TableHead className="w-[42%] px-3 text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Capacity
                    </TableHead>
                    <TableHead className="w-32 px-3 text-xs uppercase tracking-[0.14em] text-neutral-500">
                      Year
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <ClientListRows
                    entries={section.entries}
                    catalogId={catalog.id}
                    sectionId={section.id}
                  />
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
