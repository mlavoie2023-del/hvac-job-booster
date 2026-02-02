

# Mobile Features Section: Horizontal Category Tabs with Stacked Features

## Overview
Transform the mobile Features section to mirror the desktop experience: horizontal category tabs at the top that switch between categories, with all 3 features from the selected category displayed vertically (stacked) on screen simultaneously. Users can swipe left/right to navigate between categories.

---

## Current State (Mobile)
- Single-feature carousel showing 1 of 18 features at a time
- Auto-plays through all 18 features
- 18 dot indicators at the bottom
- Left/right arrows to navigate one feature at a time

## New State (Mobile)
- 6 horizontal category tabs at the top (scrollable)
- All 3 features from the active category displayed vertically
- Swipe gestures to move between categories
- 6 category dot indicators instead of 18 feature dots

---

## Visual Layout

```text
┌─────────────────────────────────┐
│  Everything a Solo Planner Needs │
│  One Platform. One Login...      │
├─────────────────────────────────┤
│ [CRM] [Lead] [Auto] [Mkt] [Ana] │  <- Horizontal scrollable tabs
│        (swipe to see more)       │
├─────────────────────────────────┤
│  ┌─ Feature 1 ───────────────┐  │
│  │ [Animation]               │  │
│  │ Icon + Title              │  │
│  │ Description               │  │
│  └───────────────────────────┘  │
│                                  │
│  ┌─ Feature 2 ───────────────┐  │
│  │ [Animation]               │  │
│  │ Icon + Title              │  │
│  │ Description               │  │
│  └───────────────────────────┘  │
│                                  │
│  ┌─ Feature 3 ───────────────┐  │
│  │ [Animation]               │  │
│  │ Icon + Title              │  │
│  │ Description               │  │
│  └───────────────────────────┘  │
├─────────────────────────────────┤
│        [●] [○] [○] [○] [○] [○]   │  <- 6 category dots
└─────────────────────────────────┘
```

---

## Technical Implementation

### File: `src/components/landing/WhatYouGet.tsx`

### 1. Add New State for Mobile Category View
Add state to track the active mobile category (separate from desktop to allow independent behavior):

```tsx
const [mobileCategoryIndex, setMobileCategoryIndex] = useState(0);
```

### 2. Add Touch/Swipe Handling
Implement touch event handlers for swipe gestures between categories:

```tsx
const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);

const minSwipeDistance = 50;

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;
  
  if (isLeftSwipe && mobileCategoryIndex < categories.length - 1) {
    setMobileCategoryIndex(prev => prev + 1);
  }
  if (isRightSwipe && mobileCategoryIndex > 0) {
    setMobileCategoryIndex(prev => prev - 1);
  }
};
```

### 3. Replace Mobile Carousel Section (Lines 2163-2256)
Replace the current single-feature carousel with the new category-based layout:

**Horizontal Category Tabs:**
```tsx
{/* Horizontal scrollable category tabs */}
<div className="flex overflow-x-auto gap-2 pb-2 px-1 scrollbar-hide mb-6">
  {categories.map((category, index) => {
    const isActive = mobileCategoryIndex === index;
    return (
      <button
        key={category.id}
        onClick={() => setMobileCategoryIndex(index)}
        className={cn(
          "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full transition-all",
          isActive 
            ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
            : "bg-card border border-border text-muted-foreground"
        )}
      >
        <category.icon className="w-4 h-4" />
        <span className="text-sm font-medium whitespace-nowrap">{category.title}</span>
      </button>
    );
  })}
</div>
```

**Stacked Features Container (with swipe):**
```tsx
<div 
  className="relative"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>
  <div className="overflow-hidden">
    <div 
      className="flex transition-transform duration-300 ease-out"
      style={{ transform: `translateX(-${mobileCategoryIndex * 100}%)` }}
    >
      {categories.map((category) => (
        <div key={category.id} className="w-full flex-shrink-0 px-1">
          <div className="space-y-4">
            {category.features.map((feature, featureIndex) => (
              <div 
                key={feature.title}
                className="bg-card border border-border rounded-xl p-4"
              >
                {/* Animation */}
                <div className="mb-3 bg-muted/20 rounded-lg overflow-hidden">
                  {feature.animation}
                </div>
                
                {/* Content */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br",
                    category.color
                  )}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-base text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
```

**Category Dot Indicators:**
```tsx
{/* 6 category dots */}
<div className="flex justify-center gap-2 mt-6">
  {categories.map((category, index) => (
    <button
      key={category.id}
      onClick={() => setMobileCategoryIndex(index)}
      className={cn(
        "w-2.5 h-2.5 rounded-full transition-all duration-300",
        mobileCategoryIndex === index 
          ? `w-8 bg-gradient-to-r ${category.color}` 
          : "bg-muted hover:bg-muted-foreground/50"
      )}
      aria-label={`Go to ${category.title}`}
    />
  ))}
</div>
```

### 4. Add CSS for Hiding Scrollbar
Add to the component's style block:
```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

## Summary of Changes

| Aspect | Before | After |
|--------|--------|-------|
| Navigation | 18 feature dots + arrows | 6 horizontal category tabs + 6 dots |
| Features visible | 1 at a time | 3 at a time (full category) |
| Interaction | Arrows + auto-play | Swipe gestures + tab clicks |
| Auto-play | Yes (4s per feature) | Removed (manual only) |
| Layout | Single card carousel | Stacked vertical cards |

---

## Expected Outcome
- Users immediately see all 3 features in each category
- Horizontal tabs provide quick category switching (matching desktop)
- Swipe gestures feel natural on mobile
- Reduced cognitive load (6 categories vs 18 features)
- Faster to explore the full feature set

