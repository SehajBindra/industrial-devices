# Agency Client Audit: Free curl Tools

Use when Exa MCP returns 429/rate limits, or for deterministic site checks. Always cite URL + fetch date.

Replace `example.com` and `$URL` with the target domain.

---

## Exa fallback trigger

Switch to curl when you see:

- `"You've hit Exa's free MCP rate limit"`
- HTTP 429 from Exa MCP
- Anonymous MCP quota exhausted (~50–150 requests/day per IP)

See [exa-limits.md](exa-limits.md) for limits and API key setup.

---

## Steps 1–2, 6, 8, 14: Company & market discovery

```bash
# Jina Reader: clean markdown from any URL (rate limited)
curl -sL "https://r.jina.ai/https://example.com/about"

# GitHub org (60 req/hr unauthenticated)
curl -sL "https://api.github.com/orgs/ORGNAME"

# Wayback: first snapshot availability
curl -sL "http://archive.org/wayback/available?url=example.com"
```

Exa search tip (when available): `category:company Golden Engineering HVLS Vadodara`

---

## Steps 3–5: Website audit & content

```bash
URL="https://example.com"

# Fetch HTML + response headers
curl -sL -A "Mozilla/5.0" "$URL/" -o /tmp/page.html
curl -sI "$URL/"

# List internal .html links (static sites)
curl -sL -A "Mozilla/5.0" "$URL/" | rg -o 'href="[^"]+\.html"' | sort -u

# Title, meta description, h1
curl -sL -A "Mozilla/5.0" "$URL/" | rg -i '<title|<meta name="description"|<h1'
```

---

## Step 4: SEO review

```bash
URL="https://example.com"

curl -sL "$URL/robots.txt"
curl -sL "$URL/sitemap.xml"

# Canonical / OG tags
curl -sL -A "Mozilla/5.0" "$URL/" | rg -i 'canonical|og:|twitter:|<meta name="robots"'
```

---

## Step 3: Technical / infrastructure

```bash
DOMAIN="example.com"

# DNS A records (Cloudflare JSON API)
curl -sH "accept: application/dns-json" \
  "https://cloudflare-dns.com/dns-query?name=${DOMAIN}&type=A"

# Certificate transparency → subdomains
curl -sL "https://crt.sh/?q=${DOMAIN}&output=json" | head -c 8000

# Security headers
curl -sI -A "Mozilla/5.0" "https://${DOMAIN}/" | rg -i 'server|x-powered-by|strict-transport|content-security|cache-control'
```

---

## Step 3: Performance (optional, free Google API key)

```bash
# Set PAGESPEED_API_KEY in env: get key from Google Cloud Console
curl -sL "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&strategy=mobile&category=performance&key=${PAGESPEED_API_KEY}" \
  | head -c 10000
```

---

## Step 7: Competitor URLs (when Exa unavailable)

```bash
# Fetch competitor homepage headers (tech stack hints)
curl -sI "https://competitor.com/"

# Jina Reader for competitor about/product pages
curl -sL "https://r.jina.ai/https://competitor.com/about"
```

---

## Step 6: Digital presence checks

```bash
# Verify common paths exist (404 vs 200)
for path in linkedin.com/company/BRAND facebook.com/BRAND youtube.com/@BRAND; do
  curl -sI -o /dev/null -w "%{http_code} $path\n" "https://www.$path"
done
```

LinkedIn/Facebook often block bots; prefer Exa `category:company` or Browser MCP when curl fails.

---

## Usage rules

1. Prefer **official company website** curl before third-party scrapers
2. Batch independent curl calls in parallel
3. Label extracts: `*Live fetch via curl, [Month Year]*`
4. Do not hammer endpoints: add delays if rate limited
5. Never invent data when curl returns empty or blocked
