#!/usr/bin/env python3
"""Generate IDI task-plan and monthly report-format PDFs."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

NAVY = colors.HexColor("#0B3A5B")
BLUE = colors.HexColor("#0077B6")
ROW = colors.HexColor("#F3F8FB")
LINE = colors.HexColor("#D5E2EC")
MUTED = colors.HexColor("#5A6A75")
INK = colors.HexColor("#1C2430")
WHITE = colors.white
AMBER_BG = colors.HexColor("#FFF6E5")
AMBER = colors.HexColor("#B45309")

OUT = Path(__file__).resolve().parent
OUT.mkdir(parents=True, exist_ok=True)


def styles():
    base = getSampleStyleSheet()
    s = {
        "kicker": ParagraphStyle(
            "kicker",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            textColor=BLUE,
            tracking=1.2,
            spaceAfter=2,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=NAVY,
            spaceAfter=6,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=16,
            textColor=NAVY,
            spaceBefore=10,
            spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13.5,
            textColor=INK,
            spaceAfter=6,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=12,
            textColor=MUTED,
        ),
        "cell": ParagraphStyle(
            "cell",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=11.5,
            textColor=INK,
        ),
        "cellb": ParagraphStyle(
            "cellb",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.2,
            leading=11.5,
            textColor=INK,
        ),
        "th": ParagraphStyle(
            "th",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=11,
            textColor=WHITE,
        ),
        "note": ParagraphStyle(
            "note",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=12,
            textColor=INK,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            textColor=MUTED,
            alignment=TA_LEFT,
        ),
        "meta_l": ParagraphStyle(
            "meta_l",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=11.5,
            textColor=MUTED,
        ),
        "meta_r": ParagraphStyle(
            "meta_r",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=11.5,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "center_small": ParagraphStyle(
            "center_small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            textColor=MUTED,
            alignment=TA_CENTER,
        ),
    }
    return s


def header_footer(canvas, doc, subtitle):
    canvas.saveState()
    w, h = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, h - 16 * mm, w, 16 * mm, fill=1, stroke=0)
    canvas.setFillColor(BLUE)
    canvas.rect(0, h - 17.2 * mm, w, 1.2 * mm, fill=1, stroke=0)
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(18 * mm, h - 8.2 * mm, "INDUSTRIAL DEVICES INDIA PVT. LTD.")
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w - 18 * mm, h - 8.2 * mm, "SEO")
    canvas.setFillColor(LINE)
    canvas.rect(0, 12 * mm, w, 0.4 * mm, fill=1, stroke=0)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18 * mm, 7 * mm, subtitle)
    canvas.drawRightString(w - 18 * mm, 7 * mm, f"Page {doc.page}")
    canvas.restoreState()


def section_table(s, headers, rows, widths):
    head = [Paragraph(h, s["th"]) for h in headers]
    body = []
    for row in rows:
        cells = []
        for i, val in enumerate(row):
            style = s["cellb"] if i == 0 else s["cell"]
            cells.append(Paragraph(val, style))
        body.append(cells)
    t = Table([head] + body, colWidths=widths, repeatRows=1)
    cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.3, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
    ]
    for i in range(1, len(body) + 1):
        if i % 2 == 0:
            cmds.append(("BACKGROUND", (0, i), (-1, i), ROW))
    t.setStyle(TableStyle(cmds))
    return t


def callout(s, text):
    t = Table([[Paragraph(text, s["note"])]], colWidths=[178 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), AMBER_BG),
                ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#F3D19C")),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    return t


def blank_metric_table(s, metrics, widths=None):
    headers = ["Metric", "This month", "Last month", "Change", "Source"]
    rows = [[m, "", "", "", src] for m, src in metrics]
    return section_table(s, headers, rows, widths or [52 * mm, 28 * mm, 28 * mm, 28 * mm, 42 * mm])


def build_task_plan():
    s = styles()
    path = OUT / "IDI-Monthly-Task-Plan-Sep-2026.pdf"
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=24 * mm,
        bottomMargin=18 * mm,
        title="IDI Monthly Task Plan - SEO",
    )
    story = []
    story.append(Paragraph("Monthly Task Plan", s["h1"]))
    story.append(
        Paragraph(
            "SEO for www.industrialdevices.in.",
            s["body"],
        )
    )
    story.append(Spacer(1, 8))

    story.append(Paragraph("1. SEO - September foundation (Month 1)", s["h2"]))
    story.append(
        Paragraph(
            "September is the one-time technical and on-page pass, plus the tracking setup needed for monthly reports. After September, these items move to light monitoring unless a new page is added.",
            s["body"],
        )
    )
    story.append(
        section_table(
            s,
            ["Task", "When", "Deliverable"],
            [
                [
                    "Technical SEO audit",
                    "September (one-time)",
                    "Crawl errors, broken links, sitemap / robots check, indexation, Core Web Vitals. Written findings in the September report.",
                ],
                [
                    "On-page optimisation",
                    "September (one-time, then as pages change)",
                    "H1 / H2 cleanup, image alt text, titles, meta descriptions, and internal linking across current product and key landing pages.",
                ],
                [
                    "Structured data",
                    "September (one-time)",
                    "JSON-LD for Organization, Product, Breadcrumb, and FAQ where the page content supports it. Not in the original build.",
                ],
                [
                    "Keyword map",
                    "September (one-time)",
                    "Target terms by product category (gas chlorination, chlorine dioxide, dosing, safety, vaporizer, accessories) plus 8-12 tracker keywords for the monthly ranking table.",
                ],
                [
                    "Search Console, Analytics, Bing",
                    "September (needs IDI access)",
                    "Verify property, submit sitemap, confirm enquiry events if Analytics is connected. Rankings / impressions / clicks cannot be reported until Search Console is shared.",
                ],
                [
                    "Google Business Profile",
                    "September (if IDI has a listing)",
                    "Categories, description, photos, and enquiry CTA. Skipped if no listing exists.",
                ],
            ],
            [42 * mm, 46 * mm, 90 * mm],
        )
    )

    story.append(Paragraph("2. SEO - monthly ongoing", s["h2"]))
    story.append(
        section_table(
            s,
            ["Task", "Frequency", "What is included"],
            [
                [
                    "Keyword ranking track",
                    "Monthly",
                    "The agreed tracker list. Table in the monthly report: keyword, current position, previous, change.",
                ],
                [
                    "On-page for new or changed pages",
                    "As content is supplied",
                    "Titles, metas, headings, alt text, and internal links on anything published that month.",
                ],
                [
                    "Content",
                    "6 quality pieces (blogs)",
                    "All content provided by the IDI team (blog drafts or technical inputs). Edited for search, published, and internally linked. Quality over volume.",
                ],
                [
                    "Content brief for IDI",
                    "Monthly",
                    "One brief for the next article: target query, suggested H2s, questions engineers actually search. IDI team writes; agency publishes.",
                ],
                [
                    "Off-page / citations",
                    "Monthly",
                    "Industrial B2B directories and relevant citations (IndiaMART-type, industry associations, Google Business). A small set of quality listings, not a PR campaign.",
                ],
                [
                    "AI / LLM visibility",
                    "Built into content work",
                    "FAQ blocks, clear entity language, and structured data so product pages answer real engineering questions. Included in the content work.",
                ],
                [
                    "Monthly report",
                    "By the 5th of the next month",
                    "SEO report in the attached report format.",
                ],
            ],
            [42 * mm, 46 * mm, 90 * mm],
        )
    )

    story.append(PageBreak())

    story.append(Paragraph("3. Prerequisites (from IDI)", s["h2"]))
    story.append(
        section_table(
            s,
            ["Item", "Why", "When"],
            [
                [
                    "Google Search Console access",
                    "Impressions, clicks, queries, index coverage",
                    "This week, to start September tracking",
                ],
                [
                    "Google Analytics access",
                    "Traffic, top pages, enquiry / conversion events",
                    "This week",
                ],
                [
                    "Google Business Profile access (if any)",
                    "Local listing and enquiry path",
                    "September",
                ],
                [
                    "Blog content for the 6 pieces",
                    "Blog drafts or technical inputs from the plant / sales team",
                    "By the 15th of each month",
                ],
                [
                    "Sign-off on the keyword tracker list",
                    "So the ranking table matches what sales actually wants to win",
                    "After the September keyword map is shared",
                ],
            ],
            [52 * mm, 78 * mm, 48 * mm],
        )
    )

    sept = KeepTogether(
        [
            Paragraph("4. September 2026 - week by week", s["h2"]),
            Paragraph(
                "Work starts today. This is the first-month sequence so the foundation is done before monthly tracking begins.",
                s["body"],
            ),
            section_table(
                s,
                ["Week", "Focus"],
                [
                    [
                        "1-7 Sep",
                        "Access (Search Console, Analytics, Business Profile). Full crawl. Sitemap submitted. Baseline Lighthouse on home + one product page. Form test.",
                    ],
                    [
                        "8-14 Sep",
                        "Keyword map for product categories. Start on-page (titles, H1/H2, alt, internal links). JSON-LD schema on organisation and product pages.",
                    ],
                    [
                        "15-21 Sep",
                        "Finish on-page pass. Google Business Profile (if listing exists). First content brief to IDI. Begin directory / citation list.",
                    ],
                    [
                        "22-30 Sep",
                        "Citations submitted. Enquiry events wired if Analytics access is in. Close Month 1 checklist. September report drafted.",
                    ],
                ],
                [32 * mm, 146 * mm],
            ),
        ]
    )
    story.append(sept)

    def hf(canvas, doc_):
        header_footer(canvas, doc_, "Monthly Task Plan  |  1 September 2026")

    doc.build(story, onFirstPage=hf, onLaterPages=hf)
    return path


def build_report_format():
    s = styles()
    path = OUT / "IDI-Monthly-SEO-Report-Format.pdf"
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=24 * mm,
        bottomMargin=18 * mm,
        title="IDI Monthly SEO Report Format",
    )
    story = []
    story.append(Paragraph("SEO Report Format", s["h1"]))
    story.append(
        Paragraph(
            "This is the format of the report you will receive each month. It is a template, not September's filled report.",
            s["body"],
        )
    )
    story.append(Spacer(1, 8))

    story.append(Paragraph("Cover block (every report)", s["h2"]))
    story.append(
        section_table(
            s,
            ["Field", "Example of how it will be filled"],
            [
                ["Client / site", "Industrial Devices India Pvt. Ltd.  |  www.industrialdevices.in"],
                ["Period", "1 September 2026 - 30 September 2026"],
                ["Status this month", "Green / Amber / Red, with one-line reason"],
            ],
            [50 * mm, 128 * mm],
        )
    )

    story.append(Paragraph("A. Executive summary (half page)", s["h2"]))
    story.append(
        Paragraph(
            "Four short bullets in plain language - not a dashboard dump.",
            s["body"],
        )
    )
    story.append(
        section_table(
            s,
            ["Bullet", "Always answers"],
            [
                ["1. Site health", "Is the site up, fast, and are enquiry forms working?"],
                ["2. Search", "Did impressions, clicks, and the tracker keywords move?"],
                ["3. Enquiries", "How many quote / download / contact submissions vs last month?"],
                ["4. Work done / next", "What shipped this month, and what needs IDI input next month?"],
            ],
            [40 * mm, 138 * mm],
        )
    )

    story.append(Paragraph("B. Search performance", s["h2"]))
    story.append(
        Paragraph(
            "Rankings, impressions and clicks. Enquiry / conversion counts sit in section D.",
            s["body"],
        )
    )
    story.append(
        blank_metric_table(
            s,
            [
                ("Total impressions", "Search Console"),
                ("Total clicks", "Search Console"),
                ("Average CTR", "Search Console"),
                ("Average position", "Search Console"),
                ("Indexed pages / coverage errors", "Search Console"),
                ("Top 3 queries by clicks", "Search Console"),
            ],
        )
    )

    story.append(Paragraph("C. Traffic and enquiries", s["h2"]))
    story.append(
        blank_metric_table(
            s,
            [
                ("Organic sessions", "Google Analytics"),
                ("Top 5 landing pages", "Google Analytics"),
                ("Request Quote submissions", "Form / Analytics"),
                ("Download / catalogue requests", "Form / Analytics"),
                ("Contact form submissions", "Form / Analytics"),
                ("Total tracked enquiries", "Sum of the three above"),
            ],
        )
    )
    story.append(Spacer(1, 4))
    story.append(
        Paragraph(
            "If a form is not yet an Analytics event, September will count from the mailbox until events are wired. That setup is part of Month 1.",
            s["small"],
        )
    )

    story.append(Paragraph("D. Keyword ranking tracker", s["h2"]))
    story.append(
        Paragraph(
            "Fixed list after the September keyword map is approved. Columns stay the same every month so movement is obvious.",
            s["body"],
        )
    )
    story.append(
        section_table(
            s,
            ["Keyword (examples)", "Intent", "Sep pos.", "This month", "Change", "Page"],
            [
                ["gas chlorination system", "Product", "", "", "", "/product/gas-chlorination"],
                ["chlorine dioxide generator", "Product", "", "", "", "/product/chlorine-dioxide-generator"],
                ["chlorine dosing system", "Product", "", "", "", "/product/chlorine-dosing-system"],
                ["chlorine leak detector", "Product", "", "", "", "/product/safety-system"],
                ["[8-12 terms locked in Sep]", "Mix", "", "", "", "Agreed URL"],
            ],
            [42 * mm, 24 * mm, 22 * mm, 26 * mm, 22 * mm, 42 * mm],
        )
    )

    story.append(Paragraph("E. Work completed this month", s["h2"]))
    story.append(
        section_table(
            s,
            ["Area", "Log (filled each month)"],
            [
                ["Technical / on-page SEO", "Pages touched, schema, fixes"],
                ["Content published", "URL, target keyword, status (live / draft waiting on IDI)"],
                ["Off-page / citations", "Directory or listing submitted / live"],
                ["Blocked / waiting on IDI", "Anything paused for access or content"],
            ],
            [48 * mm, 130 * mm],
        )
    )

    story.append(Paragraph("F. Next month and asks", s["h2"]))
    story.append(
        section_table(
            s,
            ["Item", "Owner"],
            [
                ["Priority SEO tasks for the next 30 days", "Agency"],
                ["Content brief for the next article (title, H2s, questions)", "Agency drafts, IDI writes"],
                ["Access, approvals, or copy still needed", "IDI"],
            ],
            [128 * mm, 50 * mm],
        )
    )

    story.append(Paragraph("G. Traffic-light legend", s["h2"]))
    story.append(
        section_table(
            s,
            ["Status", "Meaning"],
            [
                ["Green", "No outage, metrics stable or up, agreed monthly tasks done"],
                ["Amber", "A metric dipped or a task is waiting on access / content"],
                ["Red", "Site incident, indexing problem, or enquiry path broken"],
            ],
            [32 * mm, 146 * mm],
        )
    )

    def hf(canvas, doc_):
        header_footer(
            canvas,
            doc_,
            "Monthly Report Format  |  1 September 2026",
        )

    doc.build(story, onFirstPage=hf, onLaterPages=hf)
    return path


def main():
    p1 = build_task_plan()
    p2 = build_report_format()
    print(p1)
    print(p2)


if __name__ == "__main__":
    main()
