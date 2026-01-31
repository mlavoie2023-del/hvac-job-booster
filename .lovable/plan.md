
# Campaign Attribution Animation: Staggered Slide-In with Count Up

## Overview
Update the Campaign Attribution animation to feature rows that slide in sequentially from the left, with lead counts animating from 0 to their final values, and checkmarks popping in at the end. The entire animation will loop infinitely on a 6-second cycle.

## Animation Sequence (6-second loop)
1. **0.0s - 0.5s**: First row (Client Referrals) slides in from left
2. **0.5s - 1.0s**: Count animates 0 → 12, checkmark pops
3. **0.8s - 1.3s**: Second row (Email Campaigns) slides in
4. **1.3s - 1.8s**: Count animates 0 → 8, checkmark pops
5. **1.6s - 2.1s**: Third row (Website Forms) slides in
6. **2.1s - 2.6s**: Count animates 0 → 6, checkmark pops
7. **2.4s - 2.9s**: Fourth row (Social Media) slides in
8. **2.9s - 3.4s**: Count animates 0 → 5, checkmark pops
9. **3.5s - 4.0s**: Total summary fades in at bottom
10. **4.5s - 5.5s**: Hold complete state
11. **5.5s - 6.0s**: All elements fade out and reset

## Technical Changes

### File: `src/components/landing/WhatYouGet.tsx`

**1. Update CSS Keyframes (lines 1154-1167)**

Replace the current keyframes with looping versions:

```css
@keyframes attrSlideIn {
  0%, 2% { opacity: 0; transform: translateX(-20px); }
  8%, 85% { opacity: 1; transform: translateX(0); }
  92%, 100% { opacity: 0; transform: translateX(-20px); }
}

@keyframes attrCountUp {
  0%, 10% { opacity: 0; }
  15%, 85% { opacity: 1; }
  92%, 100% { opacity: 0; }
}

@keyframes attrCheckPop {
  0%, 12% { opacity: 0; transform: scale(0); }
  18%, 85% { opacity: 1; transform: scale(1); }
  92%, 100% { opacity: 0; transform: scale(0); }
}

@keyframes attrTotalFade {
  0%, 50% { opacity: 0; }
  58%, 85% { opacity: 1; }
  92%, 100% { opacity: 0; }
}
```

**2. Update Animation Styles on Elements (lines 1176-1241)**

Apply the new looping keyframes with staggered delays:
- Row 1: 0s delay
- Row 2: 0.5s delay  
- Row 3: 1.0s delay
- Row 4: 1.5s delay
- Total: appears after all rows complete

Each row will use:
- `attrSlideIn 6s ease-out infinite` for the row container
- `attrCountUp 6s ease-out infinite` for the lead count number
- `attrCheckPop 6s ease-out infinite` for the checkmark

**3. Example Updated Row Structure**

```tsx
<div 
  className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-emerald-500/20 border-emerald-500/30"
  style={{ animation: 'attrSlideIn 6s ease-out infinite' }}
>
  <Users className="w-3 h-3 text-emerald-400" />
  <span className="text-[7px] text-foreground/80 flex-1">Client Referrals</span>
  <div className="flex items-center gap-1">
    <span 
      className="text-[8px] font-bold text-emerald-400" 
      style={{ animation: 'attrCountUp 6s ease-out 0.3s infinite' }}
    >12</span>
    <span className="text-[6px] text-muted-foreground">leads</span>
  </div>
  <div 
    className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" 
    style={{ animation: 'attrCheckPop 6s ease-out 0.4s infinite' }}
  >
    <span className="text-[5px] text-emerald-400">✓</span>
  </div>
</div>
```

## Visual Result
- Rows appear one-by-one sliding in from the left
- Each row's lead count fades in shortly after the row appears
- Checkmarks pop in with a scale effect after counts appear
- Total summary fades in once all rows are complete
- Everything resets and loops every 6 seconds
- Smooth, continuous animation matching the Dashboard style
