# SarthakPani.com

Personal portfolio and publishing site for Sarthak Pani.

## Local development

Use Node 24 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before pushing:

```bash
npm run lint
npm run typecheck
npm run build
```

## Editing the site

- Projects live in `content/projects/*.mdx`.
- Essays live in `content/writing/*.mdx`.
- Reading entries and current focus items live in `src/lib/site.ts`.
- Static images live in `public/images`.
- The public resume lives at `public/resume/sarthak-pani-resume.pdf`.

Project frontmatter requires:

```yaml
title: "Project title"
summary: "One sentence summary"
year: "2026"
status: "Active"
tags:
  - "TypeScript"
cover: "/images/project.png"
coverAlt: "Useful image description"
featured: true
draft: false
links: []
```

Writing frontmatter requires:

```yaml
title: "Essay title"
description: "One sentence description"
publishedAt: "2026-07-26"
draft: false
```

Set `draft: true` to keep an entry out of the build.

## Deployment

The production branch is `main`. Vercel builds the site after every push, and
other branches receive preview deployments.

The canonical domain is `sarthakpani.com`. GoDaddy continues to manage the
domain and DNS. When changing DNS, preserve all email-related MX and TXT
records.
