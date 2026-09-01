# Laguna Scientific — Shopify storefront overhaul
Consulting engagement, August 2026. Theme code, catalog tooling, and a record of what changed.

## Repository layout

```
├── README.md            this file
├── PROCEDURE.md         step-by-step application order, import settings, gotchas
├── theme/
│   ├── v1-fixes/        published Aug 31 — defect fixes, rebuilt homepage
│   ├── v2-design/       typography, spacing, card styling, mega menu
│   └── v3-animated/     custom sections: split hero, ticker, feature blocks, stats band
├── tools/
│   └── build_catalog_fixes.py   generates the import CSVs from a Shopify product export
└── catalog/             git-ignored — client data, kept locally only
```

## Scope

Audit and repair of lagunascientific.com (Shopify, Dawn 13.0.1 theme "LassoART Working") and the product catalog behind it. Work was staged on a duplicate theme, previewed, and published the same day. Catalog changes were applied by CSV import with product-history preserved.

## A. Theme

The theme was stock Dawn with a thin custom layer: one CSS file, one JS file, and hand-coded HTML on the homepage. The custom layer was the source of most front-end defects.

| Area | Before | After |
|---|---|---|
| Custom JS | Threw an uncaught error on every non-homepage load | Removed |
| Custom CSS | Global `button` reset, fixed 1340px nav width, dead carousel rules, two syntax errors | Rewritten; only rules that still serve a purpose |
| Homepage | Hardcoded image carousel with 2023 URLs; three "collections" containing one product each; featured grid pulled the first 10 items of "All" | Rebuilt from native sections: hero, value proposition, category tiles, Gloves & PPE grid, Pipette Tips grid, trust bar, Equipment grid |
| Collection pages | Filtering off | Filtering on (vertical), 24 per page, quick-add |
| Product pages | Vendor line on every product (all identical); no ordering guidance | Vendor line removed; bulk-order note under Add to Cart; "Volume pricing" and "Shipping & returns" tabs |
| Header | Announcement bar static (two of three messages never shown); no sticky header | Rotates every 5s; phone and email tappable; sticky on scroll-up |
| Footer | Policy links hidden; fax number typo | Policy links on; typo fixed; email block reframed around quotes and orders |
| Site-wide | Placeholder social links left from the theme install, emitting `twitter:site @shopify` on every page | Cleared |
| Navigation | "Cell Culture Products", "Personal Protection Products" | "Cell Culture", "PPE & Safety"; nav fits on one row |

A new automated collection, **Gloves & PPE**, was created. The store had no parent collection for gloves or protective equipment; the nav headings were labels without a landing page.

## B. Catalog

Roughly 700 products at time of export.

**Corrected**
- One instrument priced two orders of magnitude too high (decimal error). Fixed.
- Test products and $0-priced items that were live and purchasable. Set to draft.
- 44 single-size and single-format listings (gloves, pipette tips) consolidated into 10 variant products. Old listings set to draft, not deleted; order history intact. 44 URL redirects added so indexed links resolve to the new products.
- Collections that depended on the retired listings re-linked to the consolidated products.

**Added**
- SEO title and meta description on all active products (fewer than 1% had them before).
- Product category assigned on the ~45% of products previously uncategorized.
- Alt text on all product images that lacked it.
- Collection titles that were product names renamed to category names.

## C. Open items

These require information the catalog doesn't contain.

| Item | Owner |
|---|---|
| Products with no description (Benchmark instruments first) | Manufacturer spec sheets |
| Products with no image | Photography / manufacturer assets |
| SKUs listed under two products at different prices | Pricing decision |
| Tracked items showing "Sold out" | Restock, untrack, or allow backorder |
| Cost per item not populated; margin reports read $0 | Finance |
| Hero image has marketing text baked into the file | One clean product photo |
| `shipping-returns` page referenced by the product-page tab | Policy text |

## D. Next phase

- Visual refresh: typography, spacing, card styling, mega menu with category images, animated homepage sections. Built; staged on a draft theme.
- Update to Dawn 16.0 from a fresh duplicate.
- Collection descriptions for the parent categories and product descriptions for Benchmark instruments.
- Google Merchant Center listing check, Search Console sitemap submission.
