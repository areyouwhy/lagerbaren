# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **Lagerbaren** (sports bar) and **Masala Art** (Indian & Bengali restaurant) — two co-located brands at the same venue in Södermalm, Stockholm. Replaces the legacy Weebly site at lagerbaren.se.

### Brands

- **Lagerbaren**: Sports bar with lunch, à la carte, large draft beer selection, rum & whisky. Shows major sporting events on large-screen TVs/projectors. Has a party venue (festväning) for up to 60 people. Phone: 08-643 18 08. Sponsors Hammarby sports teams.
- **Masala Art**: Indian & Bengali cuisine — bowls, traditional dishes. Shares venue and drinks with Lagerbaren. Phone: 08-36 88 48. Instagram: @masalaartsodermalm, Facebook: masalaartstreetfood.
- **Shared**: Booking email: boka@lagerbaren.se. Weekly quiz Wednesdays at 19:00.

### Site Pages (from legacy site)

Hem (home), Meny Lagerbaren, Meny Masala Art, Lunch (shared), Dryck (drinks), Festväningen (party venue), Hitta till oss (find us/map), Menu English, Bildgalleri (photo gallery), Sport, Event @Lagerbaren, Boka bord (book a table).

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package manager**: pnpm

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm start        # Start production server
```

## Architecture

Next.js App Router project. Swedish is the primary language; English menu is a secondary page.

```
src/
  app/            # App Router pages and layouts
  components/     # Shared React components
  lib/            # Utilities, constants, content data
  assets/         # Static images and fonts
public/           # Public static files (images, favicon)
```

## Design Direction

- Dark theme (near-black backgrounds, light text) — carries over from the legacy site's aesthetic
- Two distinct brand identities within one cohesive site: Lagerbaren (sports bar feel) and Masala Art (teal/mint accent #76e9c7, Indian cuisine)
- Mobile-first responsive design
- Food photography galleries are prominent content
