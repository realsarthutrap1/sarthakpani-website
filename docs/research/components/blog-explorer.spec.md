# BlogExplorer specification

## Overview

- **Target file:** `src/components/blog-explorer.tsx`
- **Screenshot:** `/var/tmp/stripe-dev-blog-top.png`
- **Interaction model:** coordinates topic filtering and article disclosure

## DOM structure

Responsive grid → `BlogFilters` + `BlogFeed`.

## Computed styles

- Desktop: 24-column subgrid; sidebar columns `1 / 6`; feed columns `6 / 25`; row gap `56px`.
- Tablet: 16 columns; both children span full width; row gap `24px`.
- Mobile: 8 columns; both children span full width; row gap `12px`.

## States and behaviors

- Owns selected topic set and expanded slug.
- Filter matching uses OR semantics, matching the reference.
- Topic counts always represent the full archive.

## Assets

N/A.

## Responsive behavior

Breakpoint is `960px`; grid column count also changes at `760px`.
