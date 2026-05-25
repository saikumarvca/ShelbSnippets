#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * One-shot generator for the Shelb website + storefront block snippets.
 *
 * Generates:
 *   - snippets/website-sections.code-snippets
 *       srehero01..20, sreabout01..20, sreservices01..20, srefeature01..20,
 *       sretest01..20, srefaq01..20, srecontact01..20, srefooter01..20
 *
 *   - snippets/website-marketing-blocks.code-snippets
 *       srenew01..20, srecta01..20, srewhy01..20, srebrand01..20
 *
 *   - snippets/website-content-blocks.code-snippets
 *       sreblog01..20, srepricing01..20, srestats01..20, sreteam01..20,
 *       sregallery01..20, sretimeline01..20
 *
 *   - snippets/website-commerce-blocks.code-snippets
 *       srecaro01..20, srehcaro01..20, sreimgcaro01..20, srelogocaro01..20
 *
 *   - snippets/ecommerce-storefront-blocks.code-snippets
 *       sehero01..20, secat01..20, seprodcaro01..20, sehprodcaro01..20,
 *       seoffer01..20, sedeal01..20, sebrand01..20, secollection01..20,
 *       sehome01..20
 *
 * Notes:
 *   - The `sepcard01..20` family lives in ecommerce-product-blocks.code-snippets
 *     and is intentionally NOT regenerated here, to avoid duplicate prefixes.
 *   - Every snippet uses the Shelb short-prefix naming convention.
 *   - Every snippet is React + TypeScript + Tailwind, a full section block,
 *     and uses common placeholders for ComponentName/title/subtitle/etc.
 *   - Re-running this script overwrites the five target files, so do NOT
 *     hand-edit them directly. Edit this generator instead and re-run:
 *       node scripts/gen_website_blocks.js
 */
"use strict";

const fs = require("fs");
const path = require("path");

const SNIPPETS_DIR = path.resolve(__dirname, "..", "snippets");

function pad(n) {
  return String(n).padStart(2, "0");
}

// ---------------------------------------------------------------------------
// 20 stylistic variants used across every family. Each variant gives a family
// member its own personality (palette, density, alignment) so that the 20
// snippets per family form a meaningful, non-repeating spectrum.
// ---------------------------------------------------------------------------
const STYLES = [
  { bg: "bg-white",            text: "text-gray-900", muted: "text-gray-600", accent: "bg-blue-600",    accentText: "text-blue-600",    border: "border-gray-200", ring: "ring-blue-500",    align: "text-left",    pad: "py-16",  width: "max-w-6xl" },
  { bg: "bg-gray-50",          text: "text-gray-900", muted: "text-gray-600", accent: "bg-indigo-600",  accentText: "text-indigo-600",  border: "border-gray-200", ring: "ring-indigo-500",  align: "text-center",  pad: "py-20",  width: "max-w-5xl" },
  { bg: "bg-slate-900",        text: "text-white",    muted: "text-slate-300",accent: "bg-emerald-500", accentText: "text-emerald-400", border: "border-slate-800",ring: "ring-emerald-400", align: "text-left",    pad: "py-24",  width: "max-w-7xl" },
  { bg: "bg-gradient-to-br from-indigo-50 via-white to-purple-50", text: "text-gray-900", muted: "text-gray-600", accent: "bg-purple-600", accentText: "text-purple-600", border: "border-purple-100", ring: "ring-purple-500", align: "text-center", pad: "py-20", width: "max-w-6xl" },
  { bg: "bg-amber-50",         text: "text-amber-950", muted: "text-amber-800", accent: "bg-amber-600",  accentText: "text-amber-700",   border: "border-amber-200", ring: "ring-amber-500",  align: "text-left",    pad: "py-16",  width: "max-w-6xl" },
  { bg: "bg-emerald-50",       text: "text-emerald-950", muted: "text-emerald-800", accent: "bg-emerald-600", accentText: "text-emerald-700", border: "border-emerald-200", ring: "ring-emerald-500", align: "text-left", pad: "py-16", width: "max-w-6xl" },
  { bg: "bg-rose-50",          text: "text-rose-950", muted: "text-rose-800", accent: "bg-rose-600",    accentText: "text-rose-700",    border: "border-rose-200", ring: "ring-rose-500",    align: "text-center",  pad: "py-20",  width: "max-w-5xl" },
  { bg: "bg-sky-50",           text: "text-sky-950",  muted: "text-sky-800",  accent: "bg-sky-600",     accentText: "text-sky-700",     border: "border-sky-200",  ring: "ring-sky-500",     align: "text-left",    pad: "py-16",  width: "max-w-6xl" },
  { bg: "bg-neutral-100",      text: "text-neutral-900", muted: "text-neutral-600", accent: "bg-neutral-900", accentText: "text-neutral-900", border: "border-neutral-300", ring: "ring-neutral-500", align: "text-left", pad: "py-16", width: "max-w-6xl" },
  { bg: "bg-gradient-to-b from-white to-gray-100", text: "text-gray-900", muted: "text-gray-600", accent: "bg-gray-900", accentText: "text-gray-900", border: "border-gray-200", ring: "ring-gray-500", align: "text-center", pad: "py-24", width: "max-w-6xl" },
  { bg: "bg-white",            text: "text-gray-900", muted: "text-gray-600", accent: "bg-teal-600",    accentText: "text-teal-600",    border: "border-teal-100", ring: "ring-teal-500",    align: "text-center",  pad: "py-20",  width: "max-w-5xl" },
  { bg: "bg-black",            text: "text-white",    muted: "text-gray-300", accent: "bg-yellow-400",  accentText: "text-yellow-400",  border: "border-gray-800", ring: "ring-yellow-400",  align: "text-left",    pad: "py-24",  width: "max-w-7xl" },
  { bg: "bg-blue-600",         text: "text-white",    muted: "text-blue-100", accent: "bg-white",       accentText: "text-blue-600",    border: "border-blue-400", ring: "ring-white",       align: "text-center",  pad: "py-20",  width: "max-w-5xl" },
  { bg: "bg-indigo-700",       text: "text-white",    muted: "text-indigo-100",accent: "bg-yellow-300",  accentText: "text-indigo-700",  border: "border-indigo-500",ring: "ring-yellow-300", align: "text-left",    pad: "py-24",  width: "max-w-6xl" },
  { bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500", text: "text-white", muted: "text-white/90", accent: "bg-white", accentText: "text-pink-600", border: "border-white/30", ring: "ring-white", align: "text-center", pad: "py-24", width: "max-w-5xl" },
  { bg: "bg-stone-50",         text: "text-stone-900", muted: "text-stone-600", accent: "bg-stone-900",  accentText: "text-stone-900",   border: "border-stone-200",ring: "ring-stone-500",  align: "text-left",    pad: "py-16",  width: "max-w-6xl" },
  { bg: "bg-zinc-100",         text: "text-zinc-900", muted: "text-zinc-600", accent: "bg-fuchsia-600", accentText: "text-fuchsia-600", border: "border-zinc-200", ring: "ring-fuchsia-500", align: "text-center",  pad: "py-20",  width: "max-w-5xl" },
  { bg: "bg-gradient-to-tr from-emerald-100 via-white to-sky-100", text: "text-gray-900", muted: "text-gray-600", accent: "bg-emerald-600", accentText: "text-emerald-700", border: "border-emerald-200", ring: "ring-emerald-500", align: "text-left", pad: "py-20", width: "max-w-6xl" },
  { bg: "bg-white",            text: "text-gray-900", muted: "text-gray-500", accent: "bg-violet-600",  accentText: "text-violet-600",  border: "border-violet-100",ring: "ring-violet-500", align: "text-center",  pad: "py-20",  width: "max-w-6xl" },
  { bg: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900", text: "text-white", muted: "text-slate-300", accent: "bg-cyan-400", accentText: "text-cyan-400", border: "border-slate-700", ring: "ring-cyan-400", align: "left", pad: "py-24", width: "max-w-7xl" },
];

function styleFor(i) {
  return STYLES[(i - 1) % STYLES.length];
}

// ---------------------------------------------------------------------------
// Family definitions: short-prefix + 20 variant labels per family.
// Labels are used to derive a Pascal-case identifier and a human title.
// ---------------------------------------------------------------------------
const FAMILIES = {
  // -------- website-sections.code-snippets --------
  srehero: { role: "Hero", kind: "hero", labels: [
    "Centered","Split","Gradient","Video","Image","Minimal","Bold","Search","Stats","Animated",
    "Parallax","Overlay","Asymmetric","Dark","Light","Compact","FullScreen","Illustrated","Product","CTA",
  ]},
  sreabout: { role: "About", kind: "about", labels: [
    "Mission","Story","Team","Values","History","Vision","Culture","Image","Stats","Journey",
    "Benefits","Leadership","Awards","Process","Approach","Partners","Impact","Origin","MissionVision","Simple",
  ]},
  sreservices: { role: "Services", kind: "grid", labels: [
    "Grid","Icon","Numbered","Alternate","Featured","Card","List","Tabbed","Image","Minimal",
    "Bold","Hover","Badge","Pricing","Comparison","Process","Benefits","Industry","Category","Expert",
  ]},
  srefeature: { role: "Features", kind: "grid", labels: [
    "Grid","Alternating","Icon","Numbered","Card","Column","Row","Image","Video","List",
    "Comparison","Tabbed","Accordion","Hover","Badged","Minimal","Bold","Animated","Centered","Asymmetric",
  ]},
  sretest: { role: "Testimonials", kind: "testimonial", labels: [
    "Card","Quote","Carousel","Grid","List","Rating","Video","Masonry","Featured","Minimal",
    "Bold","Avatar","Logo","Social","Column","TwoColumn","ThreeColumn","Scroller","Highlighted","Compact",
  ]},
  srefaq: { role: "FAQ", kind: "faq", labels: [
    "Accordion","List","Grid","Tabbed","Categorized","Searchable","Numbered","Minimal","Bold","Centered",
    "Asymmetric","Toggle","Inline","Block","Card","Column","Floating","Overlay","Styled","Expanded",
  ]},
  srecontact: { role: "Contact", kind: "contact", labels: [
    "Simple","Split","Map","Full","Card","Inline","Form","Info","Address","Embedded",
    "Modal","Footer","Bold","Minimal","Centered","Grid","Asymmetric","Illustrated","Gradient","Social",
  ]},
  srefooter: { role: "Footer", kind: "footer", labels: [
    "Basic","Columns","Newsletter","Social","Minimal","Bold","Dark","Light","Centered","Asymmetric",
    "Grid","Mega","Compact","Link","Brand","App","Enterprise","Startup","Agency","Ecom",
  ]},

  // -------- website-marketing-blocks.code-snippets --------
  srenew: { role: "Newsletter", kind: "newsletter", labels: [
    "Simple","Card","Bold","Minimal","Centered","Split","Overlay","Gradient","Illustrated","Banner",
    "Footer","Modal","Inline","Sidebar","ExitIntent","Benefits","Exclusive","Weekly","Monthly","Promo",
  ]},
  srecta: { role: "CTA", kind: "cta", labels: [
    "Simple","Bold","Centered","Split","Gradient","Dark","Light","Card","Banner","Highlight",
    "DoubleButton","Newsletter","Discount","Trial","Demo","Contact","Download","Signup","Upgrade","Schedule",
  ]},
  srewhy: { role: "WhyChooseUs", kind: "grid", labels: [
    "Grid","Icon","Numbered","Card","Split","Centered","Bold","Minimal","Comparison","Tabbed",
    "Alternating","List","Process","Benefits","Industry","Quality","Trust","Innovation","Experience","Support",
  ]},
  srebrand: { role: "BrandShowcase", kind: "logos", labels: [
    "Grid","Marquee","Centered","List","Card","Hover","Monochrome","Color","Bordered","Compact",
    "Featured","Carousel","Two-Row","Three-Row","Wall","Minimal","Bold","Section","Strip","Logos",
  ]},

  // -------- website-content-blocks.code-snippets --------
  sreblog: { role: "Blog", kind: "blog", labels: [
    "Grid","List","Featured","Cards","Magazine","Compact","Minimal","Bold","Centered","Tabbed",
    "Categorized","Recent","Trending","Editorial","Author","Sidebar","TwoColumn","ThreeColumn","Masonry","Highlight",
  ]},
  srepricing: { role: "Pricing", kind: "pricing", labels: [
    "ThreeTier","TwoTier","FourTier","FeatureRich","Minimal","Bold","Highlight","Toggle","Comparison","Card",
    "Tabbed","Centered","Split","Gradient","Dark","Light","Annual","Monthly","Enterprise","Startup",
  ]},
  srestats: { role: "Stats", kind: "stats", labels: [
    "Row","Grid","Card","Centered","Split","Bold","Minimal","Numbered","Icon","Bordered",
    "Highlight","Trend","Comparison","Achievement","Growth","Impact","Compact","Wide","Hero","Banner",
  ]},
  sreteam: { role: "Team", kind: "team", labels: [
    "Grid","Card","List","Featured","Minimal","Bold","Centered","Avatar","Hover","Social",
    "Tabbed","Department","Leadership","Founders","Engineers","Designers","Bordered","Photo","Quote","Roles",
  ]},
  sregallery: { role: "Gallery", kind: "gallery", labels: [
    "Grid","Masonry","Carousel","Lightbox","Featured","Compact","Wide","Tabbed","Categorized","Hover",
    "Bordered","Minimal","Bold","TwoColumn","ThreeColumn","FourColumn","Slider","Stacked","Mosaic","Polaroid",
  ]},
  sretimeline: { role: "Timeline", kind: "timeline", labels: [
    "Vertical","Horizontal","Alternating","Card","Centered","Bold","Minimal","Numbered","Dot","Bordered",
    "Compact","Wide","Highlight","Animated","Process","History","Roadmap","Journey","Year","Milestone",
  ]},

  // -------- website-commerce-blocks.code-snippets --------
  srecaro: { role: "Carousel", kind: "carousel", labels: [
    "Basic","Bold","Minimal","Card","Image","Quote","Product","Logo","Featured","Centered",
    "Auto","Manual","WithArrows","WithDots","WithThumbs","FullWidth","Boxed","Gradient","Dark","Light",
  ]},
  srehcaro: { role: "HorizontalCarousel", kind: "hcarousel", labels: [
    "Basic","Cards","Images","Compact","Wide","Snap","Smooth","Featured","Categorized","Bordered",
    "Gradient","Dark","Light","Minimal","Bold","WithArrows","WithDots","WithLabel","Highlight","Reveal",
  ]},
  sreimgcaro: { role: "ImageCarousel", kind: "imgcarousel", labels: [
    "Basic","FullWidth","Boxed","Thumbnail","Lightbox","Hover","Caption","Overlay","Centered","Split",
    "WithArrows","WithDots","Fade","Slide","Zoom","Auto","Manual","Gradient","Dark","Light",
  ]},
  srelogocaro: { role: "LogoCarousel", kind: "logocarousel", labels: [
    "Marquee","Grid","Hover","Monochrome","Color","Auto","Manual","Bordered","Compact","Wide",
    "Centered","Featured","Trust","Partners","Clients","Customers","Investors","Press","Awards","Brands",
  ]},

  // -------- ecommerce-storefront-blocks.code-snippets --------
  sehero: { role: "StorefrontHero", kind: "hero", labels: [
    "Centered","Split","Banner","Promo","Sale","Seasonal","Discount","Collection","Lifestyle","Catalog",
    "Bold","Minimal","Gradient","Dark","Light","Featured","NewArrivals","BestSeller","Holiday","FlashSale",
  ]},
  secat: { role: "Category", kind: "category", labels: [
    "Grid","Card","List","Featured","Tabbed","Hover","Image","Icon","Minimal","Bold",
    "Bordered","Compact","Wide","Centered","Split","TwoColumn","ThreeColumn","FourColumn","WithBadge","Highlight",
  ]},
  seprodcaro: { role: "ProductCarousel", kind: "productcaro", labels: [
    "Basic","Featured","Trending","BestSeller","NewArrival","OnSale","Discount","Wishlist","Recent","Recommend",
    "Compare","Category","Brand","Collection","Seasonal","Holiday","Bold","Minimal","Compact","Wide",
  ]},
  sehprodcaro: { role: "HProductCarousel", kind: "hproductcaro", labels: [
    "Basic","Compact","Wide","Card","Snap","Smooth","Featured","Trending","BestSeller","NewArrival",
    "OnSale","Wishlist","Bold","Minimal","Gradient","Dark","Light","Bordered","Highlight","Promo",
  ]},
  seoffer: { role: "Offer", kind: "offer", labels: [
    "Banner","Card","Strip","Grid","Bold","Minimal","Centered","Split","Gradient","Dark",
    "Light","CountDown","FlashSale","Seasonal","Holiday","NewUser","Loyalty","Coupon","Promo","Featured",
  ]},
  sedeal: { role: "Deal", kind: "deal", labels: [
    "Banner","Card","Strip","Grid","Bold","Minimal","Centered","Split","Gradient","Dark",
    "Light","CountDown","FlashDeal","DailyDeal","WeeklyDeal","HotDeal","BestDeal","Discount","Combo","BuyOneGetOne",
  ]},
  sebrand: { role: "BrandSection", kind: "logos", labels: [
    "Grid","Marquee","Featured","Card","Hover","Monochrome","Color","Bordered","Compact","Wide",
    "Centered","Carousel","TwoRow","ThreeRow","Wall","Minimal","Bold","Section","Strip","Logos",
  ]},
  secollection: { role: "Collection", kind: "category", labels: [
    "Grid","Featured","Card","Banner","Split","Gradient","Bold","Minimal","Centered","Tabbed",
    "Hover","Image","Bordered","Compact","Wide","Seasonal","Holiday","Lifestyle","Lookbook","Editorial",
  ]},
  sehome: { role: "Storefront", kind: "storefront", labels: [
    "Classic","Modern","Bold","Minimal","Lifestyle","Boutique","Marketplace","Mega","Compact","Wide",
    "Gradient","Dark","Light","Sale","Promo","Catalog","Editorial","Seasonal","Holiday","Featured",
  ]},
};

function pascal(s) {
  return s
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
}

// ---------------------------------------------------------------------------
// Body builders per "kind" of section.
// All builders return an array of body lines. They use the common Shelb
// placeholder convention:
//   ${1:ComponentName} ${2:title} ${3:subtitle} ${4:description}
//   ${5:buttonText}    ${6:buttonHref} ${7:className} ${8:imageUrl}
//   ${9:items}         ${10:sectionId}
// ---------------------------------------------------------------------------

function placeholderHeader(component) {
  return [
    `import React from "react";`,
    "",
    `interface ${component}Props {`,
    `  title?: string;`,
    `  subtitle?: string;`,
    `  description?: string;`,
    `  buttonText?: string;`,
    `  buttonHref?: string;`,
    `  imageUrl?: string;`,
    `  className?: string;`,
    `  sectionId?: string;`,
    `}`,
    "",
  ];
}

function heroBody(component, label, style, role) {
  const align = style.align === "text-center" ? "items-center text-center" : "items-start text-left";
  return [
    ...placeholderHeader(component),
    `export function ${component}({`,
    `  title = "\${2:${label} ${role}}",`,
    `  subtitle = "\${3:Short value proposition that captures attention.}",`,
    `  description = "\${4:Describe the product, service, or campaign in one short paragraph.}",`,
    `  buttonText = "\${5:Get started}",`,
    `  buttonHref = "\${6:#}",`,
    `  imageUrl = "\${8:}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:${component.toLowerCase()}}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} grid gap-10 lg:grid-cols-2 ${align}">`,
    `        <div className="flex flex-col justify-center gap-5">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>`,
    `          <p className="text-base ${style.muted} max-w-prose">{description}</p>`,
    `          <div className="flex flex-wrap gap-3">`,
    `            <a href={buttonHref} className={"inline-flex h-11 items-center rounded-md ${style.accent} px-5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 ${style.ring}"}>{buttonText}</a>`,
    `            <a href="#learn-more" className={"inline-flex h-11 items-center rounded-md border ${style.border} px-5 text-sm font-medium ${style.text} hover:bg-black/5"}>Learn more</a>`,
    `          </div>`,
    `        </div>`,
    `        <div className={"relative overflow-hidden rounded-2xl border ${style.border} bg-black/5 aspect-[4/3]"}>`,
    `          {imageUrl ? (`,
    `            <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover" />`,
    `          ) : (`,
    `            <div className="absolute inset-0 grid place-items-center text-sm ${style.muted}">${label} preview</div>`,
    `          )}`,
    `        </div>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function aboutBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Highlights = [`,
    `  { title: "Mission", body: "Build software that ships value, not noise." },`,
    `  { title: "Vision",  body: "Empower every team to ship faster, safer, and saner." },`,
    `  { title: "Values",  body: "Craft, clarity, customer obsession, and compounding quality." },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:About ${label}}",`,
    `  subtitle = "\${3:Who we are}",`,
    `  description = "\${4:We help modern teams ship great products with confidence and craft.}",`,
    `  imageUrl = "\${8:}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:about}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} grid gap-12 lg:grid-cols-2 lg:items-center">`,
    `        <div className="space-y-5">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="text-base ${style.muted} max-w-prose">{description}</p>`,
    `          <dl className="mt-6 grid gap-5 sm:grid-cols-3">`,
    `            {${component}Highlights.map((h) => (`,
    `              <div key={h.title} className={"rounded-lg border ${style.border} p-4"}>`,
    `                <dt className="text-sm font-semibold">{h.title}</dt>`,
    `                <dd className="mt-1 text-xs ${style.muted}">{h.body}</dd>`,
    `              </div>`,
    `            ))}`,
    `          </dl>`,
    `        </div>`,
    `        <div className={"relative aspect-[4/3] overflow-hidden rounded-2xl border ${style.border} bg-black/5"}>`,
    `          {imageUrl ? <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 grid place-items-center text-sm ${style.muted}">${label} image</div>}`,
    `        </div>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function gridBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Items = [`,
    `  { title: "Fast",       body: "Performance-first by default with zero-setup tooling." },`,
    `  { title: "Reliable",   body: "Built on hardened patterns proven across teams." },`,
    `  { title: "Beautiful",  body: "Tasteful defaults you can ship to production today." },`,
    `  { title: "Scalable",   body: "Grows from a side project to enterprise rollouts." },`,
    `  { title: "Secure",     body: "Sane defaults and best-practice security baked in." },`,
    `  { title: "Supported",  body: "Real humans, real docs, and a real community." },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${role} that compound}",`,
    `  subtitle = "\${3:Why teams choose us}",`,
    `  description = "\${4:Everything you need to ship, scale, and sleep at night.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:${role.toLowerCase()}}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-12 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">`,
    `          {${component}Items.map((it, i) => (`,
    `            <li key={it.title} className={"rounded-xl border ${style.border} p-5 hover:shadow-sm transition"}>`,
    `              <div className={"mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md ${style.accent} text-white text-sm font-semibold"}>{i + 1}</div>`,
    `              <h3 className="text-sm font-semibold">{it.title}</h3>`,
    `              <p className="mt-1 text-sm ${style.muted}">{it.body}</p>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function testimonialBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Items = [`,
    `  { quote: "This product changed how our team ships software.", name: "Avery K.",  title: "Engineering Lead, Acme" },`,
    `  { quote: "Beautiful defaults, sane patterns, real productivity.", name: "Priya R.", title: "Founder, Northwind" },`,
    `  { quote: "Faster onboarding, fewer bugs, happier customers.",   name: "Diego M.",  title: "CTO, Lumen" },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Loved by modern teams}",`,
    `  subtitle = "\${3:Testimonials}",`,
    `  description = "\${4:Hear what builders, founders, and operators say.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:testimonials}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-12 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <ul className="grid gap-6 md:grid-cols-3">`,
    `          {${component}Items.map((t) => (`,
    `            <li key={t.name} className={"rounded-2xl border ${style.border} p-6"}>`,
    `              <p className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>`,
    `              <div className="mt-5 flex items-center gap-3">`,
    `                <div className={"h-9 w-9 rounded-full ${style.accent}"} />`,
    `                <div>`,
    `                  <p className="text-sm font-semibold">{t.name}</p>`,
    `                  <p className="text-xs ${style.muted}">{t.title}</p>`,
    `                </div>`,
    `              </div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function faqBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Items = [`,
    `  { q: "How do I get started?", a: "Sign up, install the package, and follow the 60-second quickstart." },`,
    `  { q: "Is there a free plan?", a: "Yes. The free plan supports small teams indefinitely." },`,
    `  { q: "Can I cancel anytime?", a: "Yes, plans are month-to-month with no commitment." },`,
    `  { q: "Where is my data stored?", a: "On secure, encrypted infrastructure in the region you choose." },`,
    `  { q: "Do you offer support?",  a: "Yes, email and chat support is included on every plan." },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Frequently asked questions}",`,
    `  subtitle = "\${3:FAQ}",`,
    `  description = "\${4:Everything you need to know before getting started.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:faq}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} grid gap-10 lg:grid-cols-3">`,
    `        <header className="lg:col-span-1">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <dl className="lg:col-span-2 divide-y ${style.border} border ${style.border} rounded-2xl bg-white/30">`,
    `          {${component}Items.map((it) => (`,
    `            <details key={it.q} className="group p-5 open:bg-black/[0.03]">`,
    `              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">`,
    `                <dt className="text-sm font-semibold">{it.q}</dt>`,
    `                <span className={"text-lg ${style.accentText} transition group-open:rotate-45"}>+</span>`,
    `              </summary>`,
    `              <dd className="mt-3 text-sm ${style.muted}">{it.a}</dd>`,
    `            </details>`,
    `          ))}`,
    `        </dl>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function contactBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `export function ${component}({`,
    `  title = "\${2:Get in touch}",`,
    `  subtitle = "\${3:Contact ${label}}",`,
    `  description = "\${4:We'll get back to you within one business day.}",`,
    `  buttonText = "\${5:Send message}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:contact}",`,
    `}: ${component}Props) {`,
    `  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {`,
    `    e.preventDefault();`,
    `    const data = Object.fromEntries(new FormData(e.currentTarget) as any) as Record<string, string>;`,
    `    console.log("contact:submit", data);`,
    `  };`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} grid gap-10 lg:grid-cols-2">`,
    `        <div className="space-y-4">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="text-base ${style.muted}">{description}</p>`,
    `          <ul className="mt-4 space-y-2 text-sm ${style.muted}">`,
    `            <li>support@example.com</li>`,
    `            <li>+1 (555) 010-0199</li>`,
    `            <li>2261 Market Street, San Francisco</li>`,
    `          </ul>`,
    `        </div>`,
    `        <form onSubmit={handleSubmit} className={"space-y-3 rounded-2xl border ${style.border} bg-white/60 p-6 backdrop-blur"}>`,
    `          <div className="grid gap-3 sm:grid-cols-2">`,
    `            <input name="firstName" placeholder="First name" className={"h-10 w-full rounded-md border ${style.border} px-3 text-sm"} />`,
    `            <input name="lastName"  placeholder="Last name"  className={"h-10 w-full rounded-md border ${style.border} px-3 text-sm"} />`,
    `          </div>`,
    `          <input name="email"   type="email" placeholder="you@example.com" className={"h-10 w-full rounded-md border ${style.border} px-3 text-sm"} />`,
    `          <textarea name="message" rows={4} placeholder="How can we help?" className={"w-full rounded-md border ${style.border} px-3 py-2 text-sm"} />`,
    `          <button type="submit" className={"inline-flex h-10 items-center rounded-md ${style.accent} px-4 text-sm font-semibold text-white hover:opacity-90"}>{buttonText}</button>`,
    `        </form>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function footerBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Columns = [`,
    `  { title: "Product",  links: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }, { label: "Changelog", href: "#" }] },`,
    `  { title: "Company",  links: [{ label: "About",    href: "#" }, { label: "Careers", href: "#" }, { label: "Press",     href: "#" }] },`,
    `  { title: "Resources",links: [{ label: "Docs",     href: "#" }, { label: "Blog",    href: "#" }, { label: "Support",   href: "#" }] },`,
    `  { title: "Legal",    links: [{ label: "Privacy",  href: "#" }, { label: "Terms",   href: "#" }, { label: "Cookies",   href: "#" }] },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Shelb}",`,
    `  description = "\${4:Modern building blocks for ambitious product teams.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:footer}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <footer id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} grid gap-10 sm:grid-cols-2 lg:grid-cols-5">`,
    `        <div className="lg:col-span-2 space-y-3">`,
    `          <p className="text-lg font-semibold">{title}</p>`,
    `          <p className="text-sm ${style.muted} max-w-xs">{description}</p>`,
    `        </div>`,
    `        {${component}Columns.map((c) => (`,
    `          <div key={c.title}>`,
    `            <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{c.title}</p>`,
    `            <ul className="mt-3 space-y-2 text-sm ${style.muted}">`,
    `              {c.links.map((l) => <li key={l.label}><a href={l.href} className="hover:underline">{l.label}</a></li>)}`,
    `            </ul>`,
    `          </div>`,
    `        ))}`,
    `      </div>`,
    `      <div className={"mx-auto mt-12 ${style.width} border-t ${style.border} pt-6 flex flex-col sm:flex-row gap-3 justify-between text-xs ${style.muted}"}>`,
    `        <p>&copy; {new Date().getFullYear()} {title}. All rights reserved.</p>`,
    `        <p>${label} footer variant</p>`,
    `      </div>`,
    `    </footer>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function newsletterBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `export function ${component}({`,
    `  title = "\${2:Stay in the loop}",`,
    `  subtitle = "\${3:${label} newsletter}",`,
    `  description = "\${4:One short email per week, packed with new ideas and tools.}",`,
    `  buttonText = "\${5:Subscribe}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:newsletter}",`,
    `}: ${component}Props) {`,
    `  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {`,
    `    e.preventDefault();`,
    `    const data = Object.fromEntries(new FormData(e.currentTarget) as any) as Record<string, string>;`,
    `    console.log("newsletter:subscribe", data);`,
    `  };`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} grid gap-8 lg:grid-cols-2 lg:items-center">`,
    `        <div className="space-y-3">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="text-base ${style.muted} max-w-prose">{description}</p>`,
    `        </div>`,
    `        <form onSubmit={handleSubmit} className={"flex w-full max-w-md gap-2 rounded-full border ${style.border} bg-white/70 p-1 backdrop-blur"}>`,
    `          <input name="email" type="email" required placeholder="you@example.com" className="h-10 flex-1 rounded-full bg-transparent px-4 text-sm outline-none" />`,
    `          <button type="submit" className={"inline-flex h-10 items-center rounded-full ${style.accent} px-5 text-sm font-semibold text-white hover:opacity-90"}>{buttonText}</button>`,
    `        </form>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function ctaBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `export function ${component}({`,
    `  title = "\${2:Ready to ship faster?}",`,
    `  subtitle = "\${3:Start free, upgrade when you grow}",`,
    `  description = "\${4:Join thousands of teams shipping with confidence every day.}",`,
    `  buttonText = "\${5:Start free trial}",`,
    `  buttonHref = "\${6:#}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:cta}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className={"mx-auto ${style.width} flex flex-col items-center gap-5 text-center"}>`,
    `        <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl">{title}</h2>`,
    `        <p className="text-base ${style.muted} max-w-2xl">{description}</p>`,
    `        <div className="mt-2 flex flex-wrap justify-center gap-3">`,
    `          <a href={buttonHref} className={"inline-flex h-11 items-center rounded-md ${style.accent} px-5 text-sm font-semibold text-white hover:opacity-90"}>{buttonText}</a>`,
    `          <a href="#contact" className={"inline-flex h-11 items-center rounded-md border ${style.border} px-5 text-sm font-medium"}>Talk to sales</a>`,
    `        </div>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function logosBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Logos = [`,
    `  "Acme", "Globex", "Initech", "Umbrella", "Soylent", "Hooli", "Stark", "Wayne", "Wonka", "Tyrell",`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Trusted by teams everywhere}",`,
    `  subtitle = "\${3:${label} brands}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:brands}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} text-center">`,
    `        <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `        <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 items-center">`,
    `          {${component}Logos.map((name) => (`,
    `            <li key={name} className={"flex h-14 items-center justify-center rounded-md border ${style.border} px-4 ${style.muted} text-sm font-semibold tracking-wide"}>{name}</li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function blogBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Posts = [`,
    `  { title: "Shipping faster with templates",   tag: "Engineering", excerpt: "How shared blocks cut review time in half.", href: "#", date: "Apr 2" },`,
    `  { title: "Design systems at small scale",    tag: "Design",      excerpt: "Why even tiny teams should ship a system.",   href: "#", date: "Mar 21" },`,
    `  { title: "Pricing for product-led growth",   tag: "Growth",      excerpt: "A practical guide to packaging plans.",       href: "#", date: "Mar 10" },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:From the blog}",`,
    `  subtitle = "\${3:Latest stories}",`,
    `  description = "\${4:Notes from the team on product, design, and engineering.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:blog}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">`,
    `          <div>`,
    `            <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `            <p className="mt-2 text-base ${style.muted} max-w-prose">{description}</p>`,
    `          </div>`,
    `          <a href="#all" className={"text-sm font-medium ${style.accentText} hover:underline"}>View all posts &rarr;</a>`,
    `        </header>`,
    `        <ul className="grid gap-6 md:grid-cols-3">`,
    `          {${component}Posts.map((p) => (`,
    `            <li key={p.title} className={"rounded-2xl border ${style.border} overflow-hidden flex flex-col"}>`,
    `              <div className={"h-40 ${style.accent} opacity-90"} />`,
    `              <div className="p-5 flex flex-col gap-2 flex-1">`,
    `                <span className={"text-xs font-semibold ${style.accentText}"}>{p.tag} &middot; {p.date}</span>`,
    `                <h3 className="text-base font-semibold leading-snug">{p.title}</h3>`,
    `                <p className="text-sm ${style.muted}">{p.excerpt}</p>`,
    `                <a href={p.href} className={"mt-auto pt-3 text-sm font-medium ${style.accentText} hover:underline"}>Read article &rarr;</a>`,
    `              </div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function pricingBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Plans = [`,
    `  { name: "Starter", price: 0,  featured: false, features: ["1 project", "Community support", "Basic blocks"] },`,
    `  { name: "Pro",     price: 19, featured: true,  features: ["Unlimited projects", "Priority support", "All blocks"] },`,
    `  { name: "Team",    price: 49, featured: false, features: ["Seats", "Audit log", "SSO/SAML"] },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Simple, transparent pricing}",`,
    `  subtitle = "\${3:${label} plans}",`,
    `  description = "\${4:Start free, upgrade as your team grows.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:pricing}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-12 max-w-2xl text-center mx-auto">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <ul className="grid gap-6 md:grid-cols-3">`,
    `          {${component}Plans.map((plan) => (`,
    `            <li key={plan.name} className={"rounded-2xl border ${style.border} p-6 flex flex-col gap-4 " + (plan.featured ? "ring-2 ${style.ring}" : "")}>`,
    `              <div>`,
    `                <p className="text-sm font-semibold">{plan.name}</p>`,
    `                <p className="mt-2 text-4xl font-bold tracking-tight">${'$'}{plan.price}<span className="text-sm font-normal ${style.muted}">/mo</span></p>`,
    `              </div>`,
    `              <ul className="space-y-2 text-sm ${style.muted}">`,
    `                {plan.features.map((f) => <li key={f}>&bull; {f}</li>)}`,
    `              </ul>`,
    `              <button type="button" className={"mt-auto inline-flex h-10 items-center justify-center rounded-md " + (plan.featured ? "${style.accent} text-white" : "border ${style.border}") + " px-4 text-sm font-semibold"}>Choose {plan.name}</button>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function statsBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Stats = [`,
    `  { value: "98%",  label: "Customer satisfaction" },`,
    `  { value: "120k", label: "Active users" },`,
    `  { value: "3.2x", label: "Faster shipping" },`,
    `  { value: "24/7", label: "Global support" },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Numbers that matter}",`,
    `  subtitle = "\${3:${label} stats}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:stats}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-10 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `        </header>`,
    `        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">`,
    `          {${component}Stats.map((s) => (`,
    `            <div key={s.label} className={"rounded-2xl border ${style.border} p-6"}>`,
    `              <dt className={"text-3xl sm:text-4xl font-bold tracking-tight ${style.accentText}"}>{s.value}</dt>`,
    `              <dd className="mt-2 text-sm ${style.muted}">{s.label}</dd>`,
    `            </div>`,
    `          ))}`,
    `        </dl>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function teamBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}People = [`,
    `  { name: "Alex Carter",   role: "Founder & CEO",       handle: "@alex" },`,
    `  { name: "Priya Sharma",  role: "Head of Engineering", handle: "@priya" },`,
    `  { name: "Diego Marquez", role: "Head of Design",      handle: "@diego" },`,
    `  { name: "Sara Lin",      role: "Head of Product",     handle: "@sara" },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Meet the team}",`,
    `  subtitle = "\${3:${label} team}",`,
    `  description = "\${4:A small group of senior product builders who care deeply about craft.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:team}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-12 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">`,
    `          {${component}People.map((p) => (`,
    `            <li key={p.name} className="flex flex-col items-center text-center">`,
    `              <div className={"h-24 w-24 rounded-full ${style.accent}"} />`,
    `              <p className="mt-4 text-sm font-semibold">{p.name}</p>`,
    `              <p className="text-xs ${style.muted}">{p.role}</p>`,
    `              <p className={"mt-1 text-xs ${style.accentText}"}>{p.handle}</p>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function galleryBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Images = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1, alt: \`${label} image \${i + 1}\` }));`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Gallery}",`,
    `  subtitle = "\${3:${label} gallery}",`,
    `  description = "\${4:A selection of our most recent work.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:gallery}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-10 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">`,
    `          {${component}Images.map((img) => (`,
    `            <li key={img.id} className={"aspect-square overflow-hidden rounded-xl border ${style.border} bg-black/5"}>`,
    `              <div className={"h-full w-full ${style.accent}/20 grid place-items-center text-xs ${style.muted}"} aria-label={img.alt}>{img.alt}</div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function timelineBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Events = [`,
    `  { year: "2021", title: "Founded",        body: "Started in a tiny apartment with a tinier prototype." },`,
    `  { year: "2022", title: "First customer", body: "Our first paying team shipped 3x faster." },`,
    `  { year: "2023", title: "Seed round",     body: "Closed our seed round to fund the platform." },`,
    `  { year: "2024", title: "Public launch",  body: "Opened the product to the world." },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Our journey}",`,
    `  subtitle = "\${3:${label} timeline}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:timeline}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-12 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `        </header>`,
    `        <ol className="relative border-l ${style.border} pl-6 space-y-8">`,
    `          {${component}Events.map((e) => (`,
    `            <li key={e.year} className="relative">`,
    `              <span className={"absolute -left-[34px] top-1.5 h-3 w-3 rounded-full ${style.accent}"} />`,
    `              <p className={"text-xs font-semibold ${style.accentText}"}>{e.year}</p>`,
    `              <p className="mt-1 text-base font-semibold">{e.title}</p>`,
    `              <p className="mt-1 text-sm ${style.muted}">{e.body}</p>`,
    `            </li>`,
    `          ))}`,
    `        </ol>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function carouselBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Slides = [`,
    `  { title: "First slide",  body: "Tell a story in the hero of every page." },`,
    `  { title: "Second slide", body: "Showcase a value, feature, or campaign." },`,
    `  { title: "Third slide",  body: "End with a clear, single call-to-action." },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${label} carousel}",`,
    `  subtitle = "\${3:Featured}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:carousel}",`,
    `}: ${component}Props) {`,
    `  const [index, setIndex] = React.useState(0);`,
    `  const next = () => setIndex((i) => (i + 1) % ${component}Slides.length);`,
    `  const prev = () => setIndex((i) => (i - 1 + ${component}Slides.length) % ${component}Slides.length);`,
    `  const slide = ${component}Slides[index];`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-6 flex items-end justify-between">`,
    `          <div>`,
    `            <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `          </div>`,
    `          <div className="flex gap-2">`,
    `            <button type="button" onClick={prev} aria-label="Previous" className={"h-9 w-9 rounded-full border ${style.border}"}>&larr;</button>`,
    `            <button type="button" onClick={next} aria-label="Next"     className={"h-9 w-9 rounded-full border ${style.border}"}>&rarr;</button>`,
    `          </div>`,
    `        </header>`,
    `        <div className={"relative overflow-hidden rounded-2xl border ${style.border} aspect-[16/7]"}>`,
    `          <div className="absolute inset-0 grid place-items-center text-center p-6">`,
    `            <div>`,
    `              <p className="text-xl font-semibold">{slide.title}</p>`,
    `              <p className="mt-2 text-sm ${style.muted} max-w-md mx-auto">{slide.body}</p>`,
    `            </div>`,
    `          </div>`,
    `        </div>`,
    `        <ul className="mt-4 flex justify-center gap-2">`,
    `          {${component}Slides.map((_, i) => (`,
    `            <li key={i}><button aria-label={\`Go to \${i + 1}\`} onClick={() => setIndex(i)} className={\`h-2.5 w-2.5 rounded-full \${i === index ? "${style.accent}" : "bg-gray-300"}\`} /></li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function hcarouselBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Items = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1, title: \`${label} \${i + 1}\`, body: "Snap-scrolling horizontal item." }));`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${label} carousel}",`,
    `  subtitle = "\${3:Horizontal}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:hcarousel}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-6">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `        </header>`,
    `        <ul className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-6 px-6">`,
    `          {${component}Items.map((it) => (`,
    `            <li key={it.id} className={"snap-start min-w-[260px] sm:min-w-[300px] rounded-2xl border ${style.border} p-5 flex flex-col gap-3"}>`,
    `              <div className={"h-32 rounded-lg ${style.accent}/20"} />`,
    `              <p className="text-sm font-semibold">{it.title}</p>`,
    `              <p className="text-xs ${style.muted}">{it.body}</p>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function imgcarouselBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Images = Array.from({ length: 5 }).map((_, i) => ({ id: i + 1, alt: \`${label} image \${i + 1}\` }));`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Image carousel}",`,
    `  subtitle = "\${3:${label}}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:imgcarousel}",`,
    `}: ${component}Props) {`,
    `  const [index, setIndex] = React.useState(0);`,
    `  const next = () => setIndex((i) => (i + 1) % ${component}Images.length);`,
    `  const prev = () => setIndex((i) => (i - 1 + ${component}Images.length) % ${component}Images.length);`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-6 flex items-end justify-between">`,
    `          <div>`,
    `            <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `          </div>`,
    `          <div className="flex gap-2">`,
    `            <button type="button" onClick={prev} aria-label="Previous" className={"h-9 w-9 rounded-full border ${style.border}"}>&larr;</button>`,
    `            <button type="button" onClick={next} aria-label="Next"     className={"h-9 w-9 rounded-full border ${style.border}"}>&rarr;</button>`,
    `          </div>`,
    `        </header>`,
    `        <div className={"relative overflow-hidden rounded-2xl border ${style.border} aspect-[16/9] ${style.accent}/10"} aria-label={${component}Images[index].alt}>`,
    `          <div className="absolute inset-0 grid place-items-center text-sm ${style.muted}">{${component}Images[index].alt}</div>`,
    `        </div>`,
    `        <ul className="mt-4 grid grid-cols-5 gap-2">`,
    `          {${component}Images.map((img, i) => (`,
    `            <li key={img.id}>`,
    `              <button onClick={() => setIndex(i)} className={\`aspect-video w-full rounded-md border ${style.border} \${i === index ? "ring-2 ${style.ring}" : ""}\`} aria-label={\`Show \${img.alt}\`} />`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function logocarouselBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Logos = ["Acme", "Globex", "Initech", "Umbrella", "Soylent", "Hooli", "Stark", "Wayne", "Wonka", "Tyrell"];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Trusted by industry leaders}",`,
    `  subtitle = "\${3:${label} logos}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:logos}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 overflow-hidden " + className}>`,
    `      <div className="mx-auto ${style.width} text-center">`,
    `        <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `        <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `        <div className="relative mt-10">`,
    `          <ul className="flex gap-10 items-center animate-[scroll_30s_linear_infinite] whitespace-nowrap">`,
    `            {[...${component}Logos, ...${component}Logos].map((name, i) => (`,
    `              <li key={i} className={"text-lg font-bold tracking-wide ${style.muted}"}>{name}</li>`,
    `            ))}`,
    `          </ul>`,
    `        </div>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function categoryBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Categories = [`,
    `  { name: "Apparel",     count: 124 },`,
    `  { name: "Electronics", count:  86 },`,
    `  { name: "Home",        count:  72 },`,
    `  { name: "Beauty",      count:  58 },`,
    `  { name: "Sports",      count:  43 },`,
    `  { name: "Books",       count:  29 },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:Shop by ${role.toLowerCase()}}",`,
    `  subtitle = "\${3:${label}}",`,
    `  description = "\${4:Find what you love, faster.}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:${role.toLowerCase()}}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-10 max-w-2xl">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="mt-3 text-base ${style.muted}">{description}</p>`,
    `        </header>`,
    `        <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">`,
    `          {${component}Categories.map((c) => (`,
    `            <li key={c.name}>`,
    `              <a href="#" className={"group flex flex-col items-center justify-center gap-3 rounded-xl border ${style.border} p-5 text-center hover:shadow-sm transition"}>`,
    `                <span className={"flex h-14 w-14 items-center justify-center rounded-full ${style.accent} text-white text-lg font-semibold"}>{c.name[0]}</span>`,
    `                <span className="text-sm font-semibold">{c.name}</span>`,
    `                <span className="text-xs ${style.muted}">{c.count} items</span>`,
    `              </a>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function productcaroBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Products = [`,
    `  { id: "p1", name: "Cotton Tee",        price: 24,  oldPrice: 32, badge: "${label}" },`,
    `  { id: "p2", name: "Linen Shirt",       price: 49,  oldPrice: 65, badge: "${label}" },`,
    `  { id: "p3", name: "Slim Chinos",       price: 59,  oldPrice: 79, badge: "${label}" },`,
    `  { id: "p4", name: "Knit Sweater",      price: 79,  oldPrice: 99, badge: "${label}" },`,
    `  { id: "p5", name: "Leather Belt",      price: 39,  oldPrice: 49, badge: "${label}" },`,
    `  { id: "p6", name: "Suede Loafers",     price: 129, oldPrice: 159,badge: "${label}" },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${label} products}",`,
    `  subtitle = "\${3:Featured collection}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:product-carousel}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-6 flex items-end justify-between">`,
    `          <div>`,
    `            <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `          </div>`,
    `          <a href="#all" className={"text-sm font-medium ${style.accentText} hover:underline"}>View all &rarr;</a>`,
    `        </header>`,
    `        <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">`,
    `          {${component}Products.map((p) => (`,
    `            <li key={p.id} className={"group rounded-2xl border ${style.border} overflow-hidden bg-white/40"}>`,
    `              <div className={"relative aspect-square ${style.accent}/15"}>`,
    `                <span className={"absolute left-3 top-3 inline-flex items-center rounded-full ${style.accent} px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"}>{p.badge}</span>`,
    `              </div>`,
    `              <div className="p-3">`,
    `                <p className="text-sm font-medium leading-snug line-clamp-1">{p.name}</p>`,
    `                <div className="mt-1 flex items-baseline gap-2">`,
    `                  <span className="text-sm font-semibold">${'$'}{p.price}</span>`,
    `                  <span className="text-xs ${style.muted} line-through">${'$'}{p.oldPrice}</span>`,
    `                </div>`,
    `              </div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function hproductcaroBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Products = Array.from({ length: 10 }).map((_, i) => ({`,
    `  id: \`p\${i + 1}\`,`,
    `  name: \`${label} item \${i + 1}\`,`,
    `  price: 19 + i * 5,`,
    `}));`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${label} horizontal carousel}",`,
    `  subtitle = "\${3:Swipe to explore}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:hprod-carousel}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-6">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>`,
    `        </header>`,
    `        <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6">`,
    `          {${component}Products.map((p) => (`,
    `            <li key={p.id} className={"snap-start min-w-[200px] sm:min-w-[220px] rounded-2xl border ${style.border} overflow-hidden bg-white/40"}>`,
    `              <div className={"aspect-square ${style.accent}/15"} />`,
    `              <div className="p-3">`,
    `                <p className="text-sm font-medium leading-snug">{p.name}</p>`,
    `                <p className="mt-1 text-sm font-semibold">${'$'}{p.price}</p>`,
    `                <button type="button" className={"mt-3 inline-flex h-8 w-full items-center justify-center rounded-md ${style.accent} px-3 text-xs font-semibold text-white hover:opacity-90"}>Add to cart</button>`,
    `              </div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function offerBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `export function ${component}({`,
    `  title = "\${2:${label} ${role.toLowerCase()}}",`,
    `  subtitle = "\${3:Limited time}",`,
    `  description = "\${4:Save up to 40% on selected products this week only.}",`,
    `  buttonText = "\${5:Shop the sale}",`,
    `  buttonHref = "\${6:#}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:${role.toLowerCase()}}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className={"mx-auto ${style.width} rounded-2xl border ${style.border} p-8 sm:p-12 grid gap-6 lg:grid-cols-3 items-center"}>`,
    `        <div className="lg:col-span-2 space-y-3">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          <p className="text-base ${style.muted} max-w-prose">{description}</p>`,
    `        </div>`,
    `        <div className="flex flex-col gap-3 lg:items-end">`,
    `          <p className={"text-5xl font-bold tracking-tight ${style.accentText}"}>-40%</p>`,
    `          <a href={buttonHref} className={"inline-flex h-11 items-center rounded-md ${style.accent} px-5 text-sm font-semibold text-white hover:opacity-90"}>{buttonText}</a>`,
    `        </div>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function dealBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Deals = [`,
    `  { name: "Daily steal",  off: 30, price: 49,  oldPrice: 69  },`,
    `  { name: "Bundle deal",  off: 25, price: 99,  oldPrice: 129 },`,
    `  { name: "Clearance",    off: 50, price: 19,  oldPrice: 39  },`,
    `];`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${label} deals you'll love}",`,
    `  subtitle = "\${3:Today only}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:deals}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} ${style.pad} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width}">`,
    `        <header className="mb-8 flex items-end justify-between">`,
    `          <div>`,
    `            <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>`,
    `          </div>`,
    `          <a href="#all" className={"text-sm font-medium ${style.accentText} hover:underline"}>See all deals &rarr;</a>`,
    `        </header>`,
    `        <ul className="grid gap-6 md:grid-cols-3">`,
    `          {${component}Deals.map((d) => (`,
    `            <li key={d.name} className={"rounded-2xl border ${style.border} overflow-hidden bg-white/40 flex flex-col"}>`,
    `              <div className={"relative aspect-[16/10] ${style.accent}/15"}>`,
    `                <span className={"absolute right-3 top-3 inline-flex items-center rounded-full ${style.accent} px-3 py-1 text-xs font-semibold text-white"}>-{d.off}%</span>`,
    `              </div>`,
    `              <div className="p-5 flex flex-col gap-2">`,
    `                <p className="text-sm font-semibold">{d.name}</p>`,
    `                <p className="text-xs ${style.muted}">Hurry, ends midnight tonight.</p>`,
    `                <div className="mt-2 flex items-baseline gap-2">`,
    `                  <span className="text-lg font-bold">${'$'}{d.price}</span>`,
    `                  <span className="text-sm ${style.muted} line-through">${'$'}{d.oldPrice}</span>`,
    `                </div>`,
    `                <button type="button" className={"mt-3 inline-flex h-9 items-center justify-center rounded-md ${style.accent} px-4 text-xs font-semibold text-white hover:opacity-90"}>Grab the deal</button>`,
    `              </div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

function storefrontBody(component, label, style, role) {
  return [
    ...placeholderHeader(component),
    `const ${component}Categories = ["Apparel", "Electronics", "Home", "Beauty"];`,
    `const ${component}Products = Array.from({ length: 6 }).map((_, i) => ({`,
    `  id: \`p\${i + 1}\`,`,
    `  name: \`${label} pick \${i + 1}\`,`,
    `  price: 29 + i * 7,`,
    `}));`,
    "",
    `export function ${component}({`,
    `  title = "\${2:${label} storefront}",`,
    `  subtitle = "\${3:Welcome}",`,
    `  description = "\${4:New season, new arrivals. Discover what's trending today.}",`,
    `  buttonText = "\${5:Shop now}",`,
    `  buttonHref = "\${6:#}",`,
    `  className = "\${7:}",`,
    `  sectionId = "\${10:storefront}",`,
    `}: ${component}Props) {`,
    `  return (`,
    `    <section id={sectionId} className={"${style.bg} ${style.text} px-6 " + className}>`,
    `      <div className="mx-auto ${style.width} ${style.pad} grid gap-10 lg:grid-cols-2 lg:items-center">`,
    `        <div className="space-y-5">`,
    `          <p className="text-xs font-semibold uppercase tracking-widest ${style.accentText}">{subtitle}</p>`,
    `          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>`,
    `          <p className="text-base ${style.muted} max-w-prose">{description}</p>`,
    `          <a href={buttonHref} className={"inline-flex h-11 items-center rounded-md ${style.accent} px-5 text-sm font-semibold text-white hover:opacity-90"}>{buttonText}</a>`,
    `        </div>`,
    `        <div className={"aspect-[4/3] rounded-2xl border ${style.border} ${style.accent}/20"} />`,
    `      </div>`,
    `      <div className="mx-auto ${style.width} pb-16">`,
    `        <ul className="mb-8 flex flex-wrap gap-2">`,
    `          {${component}Categories.map((c) => (`,
    `            <li key={c}><a href="#" className={"inline-flex h-9 items-center rounded-full border ${style.border} px-4 text-sm hover:bg-black/5"}>{c}</a></li>`,
    `          ))}`,
    `        </ul>`,
    `        <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">`,
    `          {${component}Products.map((p) => (`,
    `            <li key={p.id} className={"rounded-2xl border ${style.border} overflow-hidden bg-white/40"}>`,
    `              <div className={"aspect-square ${style.accent}/15"} />`,
    `              <div className="p-3">`,
    `                <p className="text-sm font-medium line-clamp-1">{p.name}</p>`,
    `                <p className="text-sm font-semibold">${'$'}{p.price}</p>`,
    `              </div>`,
    `            </li>`,
    `          ))}`,
    `        </ul>`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `}`,
    `$0`,
  ];
}

const BUILDERS = {
  hero: heroBody,
  about: aboutBody,
  grid: gridBody,
  testimonial: testimonialBody,
  faq: faqBody,
  contact: contactBody,
  footer: footerBody,
  newsletter: newsletterBody,
  cta: ctaBody,
  logos: logosBody,
  blog: blogBody,
  pricing: pricingBody,
  stats: statsBody,
  team: teamBody,
  gallery: galleryBody,
  timeline: timelineBody,
  carousel: carouselBody,
  hcarousel: hcarouselBody,
  imgcarousel: imgcarouselBody,
  logocarousel: logocarouselBody,
  category: categoryBody,
  productcaro: productcaroBody,
  hproductcaro: hproductcaroBody,
  offer: offerBody,
  deal: dealBody,
  storefront: storefrontBody,
};

// ---------------------------------------------------------------------------
// Assemble snippets for a single family.
// ---------------------------------------------------------------------------
function makeFamily(prefix, family) {
  const out = {};
  family.labels.forEach((label, i) => {
    const idx = i + 1;
    const variant = `${prefix}${pad(idx)}`;
    const component = `${pascal(prefix)}${pascal(label)}${pad(idx)}`;
    const style = styleFor(idx);
    const builder = BUILDERS[family.kind];
    if (!builder) throw new Error(`No builder for kind: ${family.kind}`);
    const body = [
      ...builder(component, label, style, family.role),
    ];
    const key = `Shelb ${family.role} — ${label} (${variant})`;
    out[key] = {
      prefix: variant,
      description: `${family.role} variant ${pad(idx)} (${label}).`,
      body,
    };
  });
  return out;
}

// ---------------------------------------------------------------------------
// File assembly: which families go into which file.
// ---------------------------------------------------------------------------
const FILE_MAP = {
  "website-sections.code-snippets": [
    "srehero", "sreabout", "sreservices", "srefeature",
    "sretest",  "srefaq",   "srecontact",  "srefooter",
  ],
  "website-marketing-blocks.code-snippets": [
    "srenew", "srecta", "srewhy", "srebrand",
  ],
  "website-content-blocks.code-snippets": [
    "sreblog", "srepricing", "srestats", "sreteam", "sregallery", "sretimeline",
  ],
  "website-commerce-blocks.code-snippets": [
    "srecaro", "srehcaro", "sreimgcaro", "srelogocaro",
  ],
  "ecommerce-storefront-blocks.code-snippets": [
    // sepcard intentionally skipped: it already exists in
    // ecommerce-product-blocks.code-snippets and adding it here would
    // create duplicate prefixes (caught by scripts/validate-snippets.js).
    "sehero", "secat", "seprodcaro", "sehprodcaro",
    "seoffer", "sedeal", "sebrand", "secollection", "sehome",
  ],
};

function writeJson(filename, data) {
  const full = path.join(SNIPPETS_DIR, filename);
  fs.writeFileSync(full, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`wrote ${filename} (${Object.keys(data).length} snippets)`);
}

function main() {
  for (const [filename, prefixes] of Object.entries(FILE_MAP)) {
    const out = {};
    for (const prefix of prefixes) {
      const family = FAMILIES[prefix];
      if (!family) throw new Error(`Unknown family ${prefix} for ${filename}`);
      Object.assign(out, makeFamily(prefix, family));
    }
    writeJson(filename, out);
  }
}

main();
