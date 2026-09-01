# Laguna Scientific — storefront fixes (2026-08-31)

Apply everything to the DUPLICATE theme, not LassoART Working. Preview, then publish.

## A. Theme files (Online Store → Themes → duplicate → Edit code)

Paste each file over the existing one. The path is the file's location in the code editor.

| File | What changed |
|---|---|
| `assets/damini-custom.css` | Rewritten. Removes global `button` reset, fixed 1340px nav width, dead carousel styles, syntax errors. Adds 3-line title clamp on product cards. |
| `assets/damini-customjs.js` | Emptied. Delete the asset entirely after removing its script tag. |
| `layout/theme.liquid` | Line 30 (`damini-customjs.js` script tag) removed. Nothing else touched. |
| `templates/index.json` | Homepage rebuilt: hero → value proposition + 2 CTAs → 8 category tiles → Gloves & PPE grid → Pipette tips grid → trust bar → Equipment grid. Hardcoded carousel and single-product "collections" removed. |
| `templates/collection.json` | Filtering ON (vertical), 24/page, square images, quick-add on. |
| `templates/product.json` | Vendor line removed (all products = "laguna scientific"). Adds bulk-order note under Add to cart, "Volume pricing" tab, "Shipping & returns" tab (pulls from page handle `shipping-returns` — create that page or the tab stays empty). Gift-card recipient form off. |
| `sections/header-group.json` | Announcement bar rotates (5s), phone/email tappable, sticky header on scroll-up. |
| `sections/footer-group.json` | Policy links ON, fax typo fixed, email block reframed as "Orders & quotes". |
| `config/settings_data.json` | Placeholder social links (`facebook.com/shopify` etc.) cleared — this was emitting `twitter:site @shopify` on every page. Search shows prices. Cart is a drawer. |

**Collection handles in `index.json` are best guesses** from the nav labels: `gloves`, `personal-protection-products`, `liquid-handling`, `tubes`, `cell-culture-products`, `molecular-biology`, `lab-essentials`, `equipment`. Any tile that renders empty: open the customizer, click the block, pick the right collection. Two minutes.

**Then:** Themes → duplicate → "Version 16.0.0 available" → update. Re-paste `damini-custom.css` and the theme.liquid edit if the update reverts them (it will revert theme.liquid).

## B. Catalog (Products → Import → check "Overwrite products with matching handles")

Import in this order. Each file only touches the columns it contains.

1. `01-urgent-fixes.csv` — delete the Note column first. Fixes the $653,460 thermal cycler, drafts 2 test products and 23 $0-priced items.
2. `02-seo-titles-descriptions-categories.csv` — SEO title + meta description for 589 active products, Shopify product category for 315 uncategorized.
3. `02b-image-alt-text.csv` — alt text on 423 images.
4. `03-consolidated-products-NEW.csv` — 10 new variant products (4 glove lines, 6 pipette-tip lines) replacing 44 single-SKU listings.
5. `03b-retire-old-listings.csv` — sets those 44 old listings to draft. Do NOT delete them; order history references them.
6. `04-url-redirects.csv` — Online Store → Navigation → URL redirects → Import. 44 redirects so old links and Google results land on the new products.

## C. Needs a human (no import)

- `05-needs-description.csv` — 266 active products with no description. Benchmark Scientific instruments (T5000, D2400, B4000, H3565…) should get spec sheets copied from the manufacturer page.
- `05b-needs-image.csv` — 104 active products with no image.
- `05c-duplicate-skus.csv` — 116 rows where the same SKU is listed under two handles, often at different prices (e.g. 4031-AB-FAST at $32 and $25). Someone already started consolidating PCR plates/tubes and left both versions live. Pick one price per SKU, retire the other listing.
- `05d-showing-sold-out.csv` — 18 tracked items at qty ≤ 0 showing "Sold out". Either restock, untrack, or set inventory policy to "continue".
- `Cost per item` is empty on all 739 variants. Fill it and the admin ABC / margin reports start working.
- Hero image `shop_images/2.jpg` has "Your Reliable Partner in Cell Culture" baked in. Needs a replacement image (or a plain product photo) so the headline can live in the theme where it can be changed.
- Create a `shipping-returns` page so the product-page tab has content.
