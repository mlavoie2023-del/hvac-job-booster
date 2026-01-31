
## Summary

Update the icon for the "AI Powered Social Media Management" feature from `Zap` to `MessageSquareShare`.

---

## Changes

### 1. Add MessageSquareShare Import
**File:** `src/components/landing/WhatYouGet.tsx`

Add `MessageSquareShare` to the existing Lucide imports (around line 2-26).

### 2. Update Feature Icon
**File:** `src/components/landing/WhatYouGet.tsx`

Change the icon property from `Zap` to `MessageSquareShare` on line 1187.

---

## Technical Details

- The `MessageSquareShare` icon combines a message bubble with a share arrow, representing social media content sharing
- This is a simple two-line change: one import addition and one icon reference update
