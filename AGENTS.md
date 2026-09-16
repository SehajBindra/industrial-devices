<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Image cache TTL (`next.config.ts`)

- `minimumCacheTTL` of 7 days (604800) or 30 days (2592000) are both fine.
- Next.js has no image-cache invalidation API, so when replacing an image
  you MUST rename the file (e.g. `logo-v2.png`) instead of overwriting it
  at the same URL — otherwise the old optimized variant stays cached
  until the TTL expires.
