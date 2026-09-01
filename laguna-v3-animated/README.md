# v3 — animated homepage (apply on a duplicate of the live theme)

New files (Add a new file in the code editor, then paste):
- sections/ls-hero.liquid
- sections/ls-marquee.liquid
- sections/ls-feature.liquid
- sections/ls-stats.liquid
- assets/ls-sections.css
- assets/ls-motion.js

Replace existing:
- templates/index.json  (new homepage order: hero → ticker → 4 tiles → Benchmark feature → Gloves grid → stats band → Pipette tips grid → gloves feature → Equipment grid)
- config/settings_data.json  (v2 typography/spacing + hover lift)
- sections/header-group.json  (mega menu)
- assets/damini-custom.css  (v2)

Notes:
- The hero reuses shop_images/2.jpg but shows only its right side (object-position 100% 50%), so the baked-in "Your reliable partner" text is off-frame. Swap the image in the customizer when a clean photo is available.
- Two feature blocks use the product picker: thermal-cycler and heavy-duty-nitrile-exam-gloves-8-mil-500-case. Change the product in the customizer if either handle differs.
- All motion respects prefers-reduced-motion.
- Claims to verify with the client before publish: "Sold with Benchmark's standard warranty", "without the distributor markup", and the footer/product-tab line about accepting purchase orders.
