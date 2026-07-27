# SectionTitle specification

## Overview

- **Target file:** `src/components/section-title.tsx`
- **Screenshot:** `/var/tmp/stripe-dev-blog-top.png`
- **Interaction model:** static

## DOM structure

`header` → `h1` → title text + optional superscript count.

## Computed styles

- Title: Geist substitute, weight `300`, line-height `84%`, letter-spacing `-0.06em`, color `#c0c7d1`.
- Desktop size at 1470px: `102.431px`; fluid formula `calc(36.5112px + 4.48431vw)`, capped at `114px`.
- Count: `18.4574px`, line-height `100%`, margin-left `8px`, color `#fec97d`.
- Page title begins `93px` from the top above 760px and `56px` below 760px.

## States and behaviors

N/A.

## Assets

N/A.

## Responsive behavior

The fluid type formula scales continuously; the title stays on one line.
