# Agency Client Audit: Output Templates

Use these templates for consistent, client-ready deliverables.

## Company Snapshot Table

| Field | Value |
|-------|-------|
| Company Name | |
| Website | |
| HQ / Country | |
| Founded | |
| Size / Employees | |
| Funding / Revenue | |
| Industry / Sub-industry | |
| Business Model | |
| Public / Private | |
| One-liner | |
| Product category | |
| Pricing model | |

## Buyer Persona Table (Step 2)

| Persona | Cares about | Challenge | Value client promises |
|---------|-------------|-----------|----------------------|
| User | | | |
| Champion | | | |
| Decision Maker | | | |
| Technical Influencer | | | |
| Financial Buyer | | | |

## Switching Dynamics (Step 2)

| Force | Finding |
|-------|---------|
| **Push** | Frustrations driving them away from current website/digital approach |
| **Pull** | What attracts them to modernization |
| **Habit** | What keeps them stuck with status quo |
| **Anxiety** | Worries about switching (cost, downtime, vendor trust) |

**Anti-persona:** Who is NOT a good fit for an agency pitch to this client?

## Brand Voice (Step 5)

| Attribute | Finding |
|-----------|---------|
| Tone | |
| Style | |
| Personality | 3–5 adjectives |

## Customer Language (Steps 5, 14, 16)

**How they describe the problem (verbatim):**
- "[exact quote from site, LinkedIn, or reviews]"

**How they describe their solution (verbatim):**
- "[exact quote]"

**Words/phrases to use in outreach:**
-

**Words/phrases to avoid:**
-

**Glossary:**

| Term | Meaning |
|------|---------|
| | |

## Objection Table (Steps 14, 16)

| Objection | Response |
|-----------|----------|
| | |
| | |
| | |

## Proof Points (Step 15)

| Theme | Proof |
|-------|-------|
| Quality / certifications | |
| Scale / longevity | |
| Notable customers | |
| Results / metrics | |

**Testimonials (verbatim):**
> "[quote]" ([source])

## Client Goals (Step 15)

- **Primary business goal:**
- **Key conversion action:**
- **Current metrics:**

## Website Scorecard

| Category | Score (/10) | Key Issues | Quick Wins |
|----------|-------------|------------|------------|
| Branding | | | |
| UI | | | |
| UX | | | |
| SEO | | | |
| Performance | | | |
| Content | | | |
| Trust | | | |
| CRO | | | |
| **Overall** | **/100** | | |

## Competitor Comparison

| Competitor | Type | Website | Position | Strengths | Weaknesses | Falls short because… |
|------------|------|---------|----------|-----------|------------|---------------------|
| | Direct / Secondary / Indirect | | | | | |

## Design Inspiration Entry

```markdown
### [Site Name](URL)
- **Category:** Hero / Navigation / etc.
- **Why relevant:** [1-2 sentences tied to target company/industry]
- **Patterns to borrow:** [specific UI/UX patterns]
- **Screenshot:** [if captured]
```

## Scope Phasing

### Phase 1: Launch Critical
- Pages:
- Features:
- Integrations:

### Phase 2: Growth
- Pages:
- Features:
- Integrations:

### Future Enhancements
- Items deferred with rationale

## Pricing Summary

| Tier | US | EU | India | Middle East | Notes |
|------|----|----|-------|-------------|-------|
| Low-end | | | | | |
| Mid-market | | | | | |
| Premium Agency | | | | | |
| Enterprise | | | | | |

**Recommended model:** [Fixed / Retainer / Discovery + Build / Milestone / Dedicated team]

**Rationale:** [complexity, ROI, industry, company size]

## Outreach Hook Template

```markdown
**Hook [N]:** [Personalized opener using client's verbatim language]
- **Pain point:** [website/business/SEO/CRO issue observed]
- **Opportunity:** [specific improvement with business impact]
- **CTA:** [soft ask: audit call, benchmark review, etc.]
```

## Executive Summary Structure

```markdown
# [Company Name] | Agency Research Report
*Prepared: [Month Year]*

## Company Snapshot
[2-3 paragraph overview]

## Client Positioning Snapshot
[One-liner + product category + differentiation]

## Website Scorecard
[Table + overall /100 with weighted rationale]

## Customer Language Highlights
[2-3 verbatim quotes or phrases]

## Biggest Problems (Top 10)
1. ...

## Biggest Opportunities (Top 10)
1. ...

## Key Objections & Responses
[Top 3 from Step 14]

## Recommended Scope
[Phase 1 / 2 / Future summary]

## Estimated Agency Quote
[Range by tier + recommended model]

## Next Steps
1. Discovery call focus areas
2. Assumptions to validate
3. Assets needed from client
```

---

## Report Heading Format

Use this structure for consistent, navigable reports:

```markdown
# [Company Name] | Agency Research Report
*Prepared: [Month Year]*

# STEP 1: Company Discovery
[content]

# STEP 2: Business Understanding
[content]

... through ...

# STEP 16: Final Executive Summary
[content]
```

Do not use `## STEP 1`; use top-level `# STEP N: Title` only.

---

## Export Checklist (Step 17)

Before saving the report:

- [ ] All 16 steps present with `# STEP N: ...` headings
- [ ] Company name identified for slug (`Heli Fan` → `Heli-Fan-Audit`)
- [ ] **AskQuestion**: user chose output directory (every run)
- [ ] Markdown saved: `{outputDir}/{CompanySlug}-Audit.md`
- [ ] Absolute path confirmed to user

**Export rules:**

- Tables: standard pipe syntax (no HTML tables)
- Images: full URLs or paths relative to output dir
- Label estimates clearly; cite sources with links where applicable
