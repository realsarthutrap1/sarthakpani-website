# Stripe Developer Blog topology

Reference captured from `https://stripe.dev/blog` on 2026-07-26 at a 1470 × 835 viewport.
Screenshots used for local comparison are in `/var/tmp/stripe-dev-blog-*.png` and are not shipped.

## Page grid

- `main` is capped at 1728px.
- The page uses 24 equal columns above 960px, 16 above 760px, and 8 below 760px.
- Outer padding is 12px.
- Navigation is fixed at the top.
- The page title spans the full grid.
- The filter directory occupies columns 1–5 and is sticky at `top: 60px`.
- The article list occupies columns 6–24.
- Below 960px, filters and the article list each span the full grid.

## Vertical sequence

1. Fixed micro-navigation.
2. Large page title and result count.
3. Sticky topic directory beside the article table.
4. Expandable article rows.
5. Publication footer.

## Personalization boundary

The implementation reproduces the information architecture, proportions, and interaction model. It does not reuse Stripe logos, copy, fonts, illustrations, or source code.
Muted text is brightened slightly from the measured reference so 12–14px controls meet WCAG AA contrast.
