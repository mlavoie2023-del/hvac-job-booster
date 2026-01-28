

## Ghosted CRM Dashboard Animation

Replace the current abstract network visualization with a subtle, ghosted CRM dashboard that shows automation in action. The animation will be positioned behind the headlines with very low opacity to add visual interest without distracting from the text.

### Visual Design

The dashboard will feature:
- **Contact cards** sliding in from the left (representing new leads entering the system)
- **Task items** that auto-complete with checkmarks animating in
- **Email/notification indicators** that pulse subtly
- **Pipeline columns** showing cards moving through stages

All elements will be:
- Very low opacity (15-20%) to stay in the background
- Rendered with the electric blue accent color scheme
- Smooth, slow animations (3-6 second cycles) to avoid being distracting
- Blurred slightly to create depth and keep focus on the headlines

### Animation Elements

1. **Sliding Contact Cards** (left side)
   - Small rounded rectangles representing client cards
   - Slide in from left, pause briefly, then fade
   - Staggered timing for natural flow

2. **Auto-Completing Tasks** (center-left)
   - Task list items with checkboxes
   - Checkmarks animate in sequentially
   - Subtle success pulse on completion

3. **Pipeline/Kanban Columns** (right side)
   - 3-4 vertical columns representing stages
   - Cards float between columns
   - Shows automation moving leads through funnel

4. **Pulsing Notification Dots** (scattered)
   - Small dots that pulse with the primary blue glow
   - Represent emails sent, reminders triggered

### Technical Implementation

**File**: `src/components/landing/Hero.tsx`

**Changes**:
1. Replace the `WorkflowVisualization` component entirely with a new `DashboardVisualization` component
2. Use CSS animations defined in tailwind.config.ts (already has `message-in`, `float`, `pulse-soft`, `glow-pulse`)
3. Keep the radial glow backdrop for depth
4. Use absolute positioning with flexbox to arrange dashboard elements
5. Apply `opacity-15 sm:opacity-20` to keep it subtle
6. Add slight blur (`blur-[1px]`) for depth effect

### Keeping Headlines Prominent

- Dashboard positioned with `z-0`, content with `z-10` (relative positioning already in place)
- Very low opacity (15-20%)
- Slow animation speeds (nothing jarring)
- No bright flashes or sudden movements
- Elements fade in/out rather than pop

