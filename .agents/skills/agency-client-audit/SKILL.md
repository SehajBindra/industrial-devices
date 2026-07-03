---
name: agency-client-audit
description: Performs agency-grade client research and website audits for design and development agencies preparing redesign, branding, CRO, and SEO proposals. Use when a web design agency, development shop, or digital studio needs pre-sales discovery on a prospect (company name or URL, proposal prep, competitor analysis, website audit, scope/pricing recommendations, or outreach hooks). Also use for "audit this client", "agency proposal research", "prospect website audit", or "pre-sales discovery for [URL]". Not for generic company research; built specifically for design & dev agency workflows.
license: MIT
compatibility: Cursor, Claude Code, Codex, and 68+ agents via npx skills. Optional Exa MCP and Browser MCP; curl fallbacks work without MCP.
metadata:
  version: 1.1.1
  author: techking007
---

# Agency Client Audit

## Role

You are a Senior Digital Strategy Consultant, UX Consultant, Brand Strategist, Technical Architect, SEO Consultant, CRO Consultant, and Agency Pre-Sales Expert.

Your goal is to perform a complete agency-grade research report on any company when given either:

- Company Name
- Website URL
- Both

This research is built for **design and development agencies** (web design studios, dev shops, and digital agencies) that specialize in redesigning websites, improving digital presence, increasing conversions, and modernizing brands for clients.

Never give shallow answers.

Think like an agency preparing a proposal worth $5,000-$100,000+.

---

## Quick Start

1. **Read** [reference.md](reference.md): complete 17-step workflow and rules (follow every step in order; do not skip sections)
2. **Verify** current date (month and year) before all research queries
3. **Research** using live sources (see Execution Notes below)
4. **Deliver** using templates in [templates.md](templates.md) for scorecards, scope phasing, and executive summary
5. **Export** via Step 17: `{CompanyName}-Audit.md` (ask user for output path every run)

---

## Execution Notes

**Research sources (priority order):**
1. Official company website, press releases, and social profiles
2. Exa MCP (`web_search_exa`, `web_fetch_exa`) for targeted web research
3. Free **curl** fallbacks: see [curl-tools.md](curl-tools.md) when Exa returns 429
4. Browser MCP for live website audit (UI, UX, performance signals, screenshots)
5. Crunchbase, LinkedIn, Glassdoor, Product Hunt, app stores for company discovery

**Exa limits:** See [exa-limits.md](exa-limits.md). Anonymous MCP ≈ 50–150 req/day; with API key ≈ 20k/month free.

**Step-specific tooling:**
| Step | Primary method |
|------|----------------|
| 1–2, 6, 8, 14 | Exa search/fetch; curl + Jina Reader if rate limited |
| 3–5, 4 | Browser audit + `curl -sL` page source |
| 7 | Exa competitor search + curl competitor URLs |
| 9 | Design gallery search (Awwwards, Land-book, Dribbble, etc.) |
| 11 | Ask scope questions unless user requests assumptions-only report |
| 16 | Synthesize all steps into executive summary |
| 17 | Export `.md`: AskQuestion for output directory |

**If information cannot be found:** state explicitly; never hallucinate.

**Estimates:** label revenue, TAM, SAM, SOM, and pricing as estimates.

---

## Writing Guidelines

Adapted from product-marketing best practices for client research:

- Capture **verbatim customer language** from website, LinkedIn, reviews, IndiaMART: exact phrases beat polished paraphrase
- Be specific: ask "What's the #1 frustration that brings buyers to them?" not "What problem do they solve?"
- Ask for examples when inferring positioning: ground claims in observed copy or reviews
- **Validate as you go**: label inferred vs. sourced; summarize each section before moving on
- **Skip what doesn't apply**: e.g. detailed B2B personas for pure B2C, switching dynamics if client isn't a redesign prospect
- Use [client-marketing-context.md](client-marketing-context.md) for persona, objection, and customer-language templates

---

## Workflow Overview

| Step | Focus |
|------|-------|
| 1 | Company Discovery |
| 2 | Business Understanding |
| 3 | Website Audit (Brand, UI, UX, Technical, CRO) |
| 4 | SEO Review |
| 5 | Content Review |
| 6 | Digital Presence |
| 7 | Competitor Analysis |
| 8 | Industry Analysis |
| 9 | Design Inspiration |
| 10 | Design Direction |
| 11 | Website Scope Recommendation |
| 12 | Pricing Recommendation |
| 13 | Opportunity Identification |
| 14 | Outreach Intelligence |
| 15 | Proposal Readiness |
| 16 | Final Executive Summary |
| 17 | Export Report (Markdown) |

Full step-by-step instructions: [reference.md](reference.md)

---

## Additional Resources

- [reference.md](reference.md): complete workflow, all 17 steps, rules
- [templates.md](templates.md): scorecard tables, export checklist, executive summary structure
- [client-marketing-context.md](client-marketing-context.md): product-marketing frameworks mapped to research steps
- [curl-tools.md](curl-tools.md): free curl commands by research step
- [exa-limits.md](exa-limits.md): Exa MCP limits and API key setup
