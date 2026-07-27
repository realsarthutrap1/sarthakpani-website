# SiteFooter specification

## Overview

- **Target file:** `src/components/site-footer.tsx`
- **Screenshot:** reference inspected at the end of `https://stripe.dev/blog`
- **Interaction model:** static links

## DOM structure

Grid footer → contact column + public links column + copyright row.

## Computed styles

- Uses the same 24/16/8-column page grid and 12px outer padding.
- Section is separated with thin `#5f7d97` rules.
- Labels and copyright use 12px uppercase mono text.
- Body links use muted blue and change to mint on hover.

## States and behaviors

Hover and focus states only.

## Assets

No Stripe globe or background graphics are copied.

## Responsive behavior

Desktop uses two columns. Mobile stacks sections with rules between them.
