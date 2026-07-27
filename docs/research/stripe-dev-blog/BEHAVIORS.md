# Stripe Developer Blog behaviors

## Navigation

- Fixed at the top with 12px page padding.
- Active item uses a mint background and dark text.
- On narrow screens, the navigation remains a horizontally scrollable micro-nav.

## Topic filtering

- Topic controls are native buttons with checkbox indicators.
- Multiple topics can be selected.
- With no selection, all posts appear.
- With selections, a post appears when it matches at least one selected topic.
- The active topic label changes from muted blue to dark text on a lime highlight.
- Below 960px, topic controls become one horizontal scroll row and checkbox icons disappear.

## Article rows

- Each row has date, title, and an expand/collapse button.
- Hover changes the entire visible row to lime with dark text.
- Expanding a row applies the same highlight and reveals summary, author, topics, and a read link.
- Only one row is expanded at a time in the personalized implementation.
- All controls expose `aria-expanded`, `aria-controls`, and descriptive labels.

## Motion

- Only color transitions and the plus-to-minus rotation animate.
- Reduced-motion preference removes transitions.
