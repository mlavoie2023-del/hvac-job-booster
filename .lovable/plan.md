

# Hybrid Hover Animation Plan

## Overview

Implement a hover-activated animation system for feature cards where:
- **Selected category** in the sidebar stays active/colorful (already implemented)
- **Feature cards** within the selected category start in a grayscale/paused state
- **On hover**, feature cards become colorful and animations start playing

## Technical Approach

### 1. Create CSS Classes for Animation States

Add new utility classes to control animation play state and grayscale filter:

```css
/* Inactive state - grayscale and paused */
.animation-inactive {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.animation-inactive * {
  animation-play-state: paused !important;
}

/* Active state on hover - full color and playing */
.animation-active {
  filter: grayscale(0%);
  opacity: 1;
}

.animation-active * {
  animation-play-state: running !important;
}
```

### 2. Modify Feature Card Wrapper

Update the feature card rendering in the desktop view (lines ~2115-2144) to:
- Wrap the animation container with a `group` class (already present)
- Apply `animation-inactive` by default to the animation wrapper
- Toggle to `animation-active` on hover using Tailwind's `group-hover:` modifier

**Before:**
```tsx
<div className="w-56 lg:w-72 flex-shrink-0 bg-muted/30 rounded-xl overflow-hidden border border-border/30">
  <div className="transform scale-110 origin-center">
    {feature.animation}
  </div>
</div>
```

**After:**
```tsx
<div className="w-56 lg:w-72 flex-shrink-0 bg-muted/30 rounded-xl overflow-hidden border border-border/30 
  [filter:grayscale(100%)] opacity-60 group-hover:[filter:grayscale(0%)] group-hover:opacity-100 
  transition-all duration-300
  [&_*]:[animation-play-state:paused] group-hover:[&_*]:[animation-play-state:running]">
  <div className="transform scale-110 origin-center">
    {feature.animation}
  </div>
</div>
```

### 3. Key Technical Details

| Aspect | Implementation |
|--------|----------------|
| **Grayscale** | `[filter:grayscale(100%)]` + `group-hover:[filter:grayscale(0%)]` |
| **Opacity** | `opacity-60` (dimmed) + `group-hover:opacity-100` (full) |
| **Animation pause** | `[&_*]:[animation-play-state:paused]` targets all child elements |
| **Animation play** | `group-hover:[&_*]:[animation-play-state:running]` on hover |
| **Smooth transition** | `transition-all duration-300` for filter/opacity changes |

### 4. Visual Result

```text
+------------------------------------------+
|  Feature Card (not hovered)              |
|  +------------------+  +--------------+  |
|  | [Animation]      |  | Title        |  |
|  | (grayscale,      |  | Description  |  |
|  |  paused,         |  |              |  |
|  |  60% opacity)    |  |              |  |
|  +------------------+  +--------------+  |
+------------------------------------------+

            User hovers...

+------------------------------------------+
|  Feature Card (hovered)                  |
|  +------------------+  +--------------+  |
|  | [Animation]      |  | Title        |  |
|  | (full color,     |  | Description  |  |
|  |  playing,        |  |              |  |
|  |  100% opacity)   |  |              |  |
|  +------------------+  +--------------+  |
+------------------------------------------+
```

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/WhatYouGet.tsx` | Update animation wrapper in desktop feature cards (~line 2123) with grayscale/pause states and hover activation |

## Implementation Notes

- Uses Tailwind's arbitrary value syntax `[filter:grayscale(100%)]` for the filter property
- Uses child selector syntax `[&_*]` to target all descendant elements for animation-play-state
- The `group` class is already on the parent card, so `group-hover:` works out of the box
- Mobile carousel is left unchanged as requested (animations continue running)
- Transition duration of 300ms provides smooth color/opacity fade

