# BlogFeed specification

## Overview

- **Target file:** `src/components/blog-feed.tsx`
- **Screenshot:** `/var/tmp/stripe-dev-blog-expanded.png`
- **Interaction model:** link navigation plus click-driven disclosure

## DOM structure

Table header → list → row → visible date/title/toggle → collapsible metadata.

## Computed styles

- Desktop list width at 1470px: `1144.75px`.
- Header: `12px` mono labels with `0.5px solid #5f7d97` bottom border.
- Visible row: minimum `47px`, bottom border `0.5px solid #5f7d97`, `7px 4px` grid gap.
- Date: `12px` mono, color `#75d1c4`, with an `8 × 8px` blue square.
- Title at 1470px: `25.9844px`, weight `300`, line-height `1.2`, letter-spacing `-0.04em`.
- Hover/open background: `#aae87b`; hover/open text: `#011627`.
- Expanded summary: `19.6502px/19.6502px`, weight `300`, color `#5f7d97`.
- Metadata labels: `12px` mono uppercase, color `#6e9cf1`.
- Read link: 1px mint border, pill radius, full available width.

## States and behaviors

- Closed: details are not rendered.
- Open: visible row is highlighted; plus becomes minus; details render below.
- Link opens the article. Disclosure button never triggers navigation.
- Empty filtering result renders one bordered status row.

## Assets

N/A.

## Responsive behavior

- 960px+: date occupies two grid columns and title occupies the remaining row.
- Below 760px: date stacks above the title; table header hides.
- Expanded metadata collapses to one column on narrow screens.
