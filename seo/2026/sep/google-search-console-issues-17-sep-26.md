# Google Search Console - Page indexing issues (17 Sep 2026)

- Site: `https://www.industrialdevices.in/` (Next.js rebuild of old Webazaar site, hosted on Vercel)
- Source: GSC > Pages > Page indexing, last update 18 Sep 2026 (`All known pages`)
- Snapshot: Indexed 31 / Not indexed 57. Impressions ~50-113/day.
- Raw exports: `/Users/sehajbindra/Downloads/industrialdevices/` (`Critical issues.csv`, `Chart.csv`)
- URL examples below were read live from GSC via browser on 20 Sep 2026 (GSC shows max 10 examples per reason; full list via EXPORT in GSC).

## 1. Not found (404) - 35 pages - Source: Website

Examples:
- `https://industrialdevices.in/home.html`
- `https://www.industrialdevices.in/how-to-control-chlorine-leaks.html`
- `http://industrialdevices.in/uploads/82375878316.pdfIn` (+ similar `/uploads/*.pdfIn`)
- `http://industrialdevices.in/home.html`, `http://www.industrialdevices.in/home.html`
- `http://industrialdevices.in/uploads/54356006627.pdfIn`
- `http://www.industrialdevices.in/index.html`, `http://industrialdevices.in/index.html`
- `https://www.industrialdevices.in/thank-you.html`

Cause: old Webazaar `.html` / `http` / non-www URLs no longer exist on Next.js. Expected after platform migration.

Solution taken:
- `next.config.ts` `redirects()` (Next.js emits `permanent: true` as **308**, `permanent: false` as **307** - Google treats 308 as permanent, SEO-safe):
  - `/home.html` -> `/` (308)
  - `/index.html` -> `/` (308)
  - `/how-to-control-chlorine-leaks.html` -> `/blog/advanced-safety-protocols-chlorine-handling` (308, closest topical match)
  - `/thank-you.html` intentionally left as **404** (review decision - thank-you and contact pages are not equivalent; redirect could confuse returning visitors / encourage duplicate submissions; keep 404 unless backlinks prove otherwise)
  - spam `/uploads/*.pdfIn` left as 404 (no value, let Google drop them)
- GSC: Validate Fix on this reason after deploy.

## 2. Server error (5xx) - 15 pages - Source: Website

Examples (all old `/uploads/` spam PDFs, crawled Jul 2026):
- `http://industrialdevices.in/uploads/wavunojo.pdfIn`
- `http://industrialdevices.in/uploads/wozuzezutakeparenatolu.pdfIn`
- `http://industrialdevices.in/uploads/46404173839.pdfIn`
- `http://industrialdevices.in/uploads/todununisegetugeviziduru.pdfIn`
- `http://industrialdevices.in/uploads/pujakezezososi.pdf`
- (+ 5 more similar random-name PDFs)

Cause: spam/hack remnants in Webazaar `uploads/` folder. Old server errored serving them. Live Next.js/Vercel now returns **404** for these (verified 20 Sep 2026) - already resolved in code, no code change needed.

Solution taken:
- No redirect (never redirect spam to homepage).
- GSC: Removals request for `/uploads/*.pdf*` if still showing, then Validate Fix.

## 3. Page with redirect - 3 pages - Source: Website

Examples:
- `http://industrialdevices.in/`
- `https://industrialdevices.in/`
- `http://www.industrialdevices.in/`

Cause: `http` / apex non-www variants 308-redirect to canonical `https://www.industrialdevices.in/` (verified live). Correct behavior, not an error.

Solution taken: none in code. Canonical (`lib/site-metadata.ts`) + sitemap already use `https://www...`. No GSC action except ignore.

## 4. Excluded by 'noindex' tag - 1 page - Source: Website

Example:
- `https://industrialdevices.in/admin/login.html` (apex, crawled May 2026 - old Webazaar admin)

Cause: obsolete admin page, never existed on Next.js. Now returns **404** live (verified).

Solution taken: intentionally **no redirect** (review decision - redirecting obsolete admin to homepage would be treated as soft 404; real 404 drops naturally; 410 optional but unnecessary for 1 URL). GSC: leave / Validate Fix.

## 5. Discovered - currently not indexed - 2 pages - Source: Google systems

- `https://www.industrialdevices.in/blog/chlorine-dioxide-real-world-applications` (Last crawled: N/A)
- `https://www.industrialdevices.in/product/safety-system` (Last crawled: N/A)

Cause: new Next.js URLs, not yet crawled. Normal post-migration.

Solution taken: no code change. GSC: URL Inspection > Request Indexing for both; confirm internal links point to them; replace placeholder blog copy with real copy over time.

## 6. Crawled - currently not indexed - 1 page - Source: Google systems

- `https://www.industrialdevices.in/_next/static/media/caa3a2e1cccd8315-s.p.09~u27dqhyhd6.woff2` (font asset)

Cause: static font asset got crawled. Harmless - Google already chose not to index it.

Solution taken (review correction applied 20 Sep 2026): **do NOT disallow `/_next/` in robots.txt** - Google needs JS/CSS/fonts to render pages; blocking hurts rendering and page-quality evaluation. `app/robots.ts` now only `Disallow: /api/` (keeps crawl budget off API routes; robots.txt does not deindex already-indexed URLs, but nothing is indexed here so fine). Optional GSC Removals request for the `.woff2` URL.

## Code changes (this round)

- `app/robots.ts`: removed `/_next/` from disallow (was added then reverted per review). Final: `allow: /`, `disallow: [/api/]`. Verified live `/robots.txt`.
- `next.config.ts`: `redirects()` keeps only the 3 equivalent-URL 308s above; removed `/thank-you.html -> /contact` and `/admin/:path* -> /` per review (both stay 404). Verified: `/home.html` 308 -> `/`, `/thank-you.html` 404, `/admin/login.html` 404. `bun run build` passes.

## Next steps (GSC, after deploy)

1. Deploy to Vercel, re-check live `/robots.txt`, `/sitemap.xml`, and one redirect (`/home.html`).
2. GSC Removals (temporary): `/uploads/*.pdf*`, `/admin/*`, the `.woff2` URL - only if they still appear.
3. Pages > Validate Fix on: Not found (404), Server error (5xx).
4. URL Inspection > Request Indexing: the 2 Discovered URLs.
5. Ignore: Page-with-redirect (3), noindex admin (1), crawled font (1).
6. Resubmit `sitemap.xml` in GSC > Sitemaps (sitemap content unchanged, still canonical `https://www...` URLs).
7. Wait 2-3 weeks for re-crawl;Stale `lastmod 2026-07-08` in `app/sitemap.ts` is cosmetic - update when content actually changes.
