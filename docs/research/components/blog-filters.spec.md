# BlogFilters specification

## Overview

- **Target file:** `src/components/blog-filters.tsx`
- **Screenshot:** `/var/tmp/stripe-dev-blog-filtered.png`
- **Interaction model:** click-driven multi-select

## DOM structure

`aside` → table label `/ Filters` → directory label `Topic` → topic button list.

## Computed styles

- Desktop width at 1470px: `301.25px`; filter header width `241px`.
- Header: `12px` mono label, bottom border `0.5px solid #5f7d97`, padding-bottom `6px`.
- Directory label: `14px`, color `#75d1c4`, gap `8px`.
- Options: `14px/14px`, weight `300`, letter-spacing `-0.42px`, gap `8px`.
- Inactive option: `#244e56`; active button color `#75d1c4`.
- Active label: background `#aae87b`, color `#011627`.
- Checkbox: `15 × 14px`, opacity `.4`; active opacity `1`.

## States and behaviors

- Clicking toggles a topic without clearing other selections.
- Active buttons set `aria-pressed="true"`.
- Hover changes inactive text to `#75d1c4`.

## Assets

No image assets. Folder and checkbox marks are CSS primitives.

## Responsive behavior

- Desktop at 960px+: sticky vertical directory.
- Below 960px: full width, topic buttons in a horizontal scroller, `12px` gaps, checkbox marks hidden.
