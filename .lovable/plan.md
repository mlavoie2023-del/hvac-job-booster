
# Features Section Redesign: Visual Feature Showcase

## Overview
Replace the current accordion-based features section with a highly visual, mobile-first design that clearly communicates what each of the 9 features does at a glance.

## Design Approach: Feature Cards with Visual Preview

I'll create a responsive card grid where each feature has:
- A large, prominent icon with a colored glow effect
- Feature title
- A short one-liner description (the "what it does")
- A visual mini-mockup/illustration showing the feature in action

### Layout
- **Mobile**: Single column, stacked cards that are easy to scroll
- **Tablet**: 2-column grid
- **Desktop**: 3x3 grid with balanced sizing

### Visual Style
Each card will feature:
1. **Icon Area**: Large icon (40-48px) centered at top with a soft radial glow in primary blue
2. **Title**: Bold, white text beneath the icon
3. **One-Liner**: Short description in grey that answers "what does this do?"
4. **Visual Preview**: A small illustrative element showing the feature concept (e.g., a mini calendar UI for Calendars, a simple form mockup for Forms, etc.)

### Hover/Tap Interactions
- Cards will have subtle lift and glow effects on hover
- Border color transitions to primary blue
- Smooth scale animation on mobile tap

---

## Technical Implementation

### Files to Modify
- `src/components/landing/WhatYouGet.tsx` - Complete rewrite of the component

### Feature Data Structure
```text
Each feature will have:
- icon: Lucide icon component
- title: string
- oneLiner: string (10-15 words max)
- visualType: string (to determine which mini-illustration to show)
```

### Card Component Design
```text
+----------------------------------+
|           [Icon Glow]            |
|              🔧                  |
|                                  |
|     Customized Workflows         |
|                                  |
|   Automate follow-ups and        |
|   reminders automatically        |
|                                  |
|  +----------------------------+  |
|  |   [Visual Mini-Mockup]    |  |
|  |   showing automation      |  |
|  |   sequence diagram        |  |
|  +----------------------------+  |
+----------------------------------+
```

### Responsive Grid
```text
Mobile (< 640px):   1 column, full-width cards
Tablet (640-1024):  2 columns
Desktop (> 1024):   3 columns (3x3 grid)
```

### Animations
- Fade-in on scroll using intersection observer or staggered delay classes
- Hover: translateY(-4px) with glow shadow
- Cards will use the existing `card-dark` utility class as a base

### Visual Mini-Mockups
For each feature, I'll create simple SVG/CSS illustrations:
1. **Workflows**: Animated flow diagram with connected nodes
2. **Landing Pages**: Mini browser frame with layout blocks
3. **Forms**: Simple form fields with checkboxes
4. **Calendars**: Mini calendar grid with highlighted dates
5. **Pipelines**: Horizontal funnel/stages visualization
6. **Unified Inbox**: Stacked message cards
7. **Dashboard**: Bar chart with metrics
8. **Integrations**: Connected app icons
9. **Social Media**: Social platform icons with post preview

---

## Mobile-First Considerations
- Touch-friendly card sizes (minimum 44px tap targets)
- Comfortable spacing between cards for easy scrolling
- Cards stack vertically with consistent gap
- No hover-only content (everything visible by default)
- Swipe-friendly without carousel complexity

---

## Benefits Over Current Design
| Current (Accordion) | New Design (Visual Cards) |
|---------------------|---------------------------|
| Must click to see details | All info visible at glance |
| Text-heavy | Visual-first with mini mockups |
| Narrow single column | Responsive grid fills space |
| Requires interaction | Scannable without clicks |
| Features feel hidden | Features feel prominent |

