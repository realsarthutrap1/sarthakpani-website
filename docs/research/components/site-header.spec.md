# SiteHeader specification

## Overview

- **Target file:** `src/components/site-header.tsx`
- **Screenshot:** `/var/tmp/stripe-dev-blog-top.png`
- **Interaction model:** route-driven active state; horizontal overflow on narrow screens

## DOM structure

Fixed `nav` → brand link + links for Blog, Books, About.

## Computed styles

- Container: fixed, top `0`, width `100%`, max-width `1728px`, height `49px`, padding `12px`, gap `3px`, z-index `2`.
- Links: Geist Mono substitute, `12px/12px`, weight `400`, uppercase, padding `5px 8px`, height `25px`, radius `2px`.
- Active link: background `#75d1c4`, text `#011627`.
- Inactive link: translucent `#0c2638` surface and `#75d1c4` text.

## States and behaviors

- Active route controls the highlighted nav item.
- Pointer hover changes inactive links to the lime highlight `#aae87b` with dark text.
- Focus uses a visible 2px lime outline.

## Assets

No external assets. The brand mark is a CSS square with “SP”.

## Responsive behavior

- Desktop: all items appear in one fixed row.
- Mobile: the row remains one line and scrolls horizontally; no menu overlay.
