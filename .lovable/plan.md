

## Animated Workflow Diagram Below Hero

Replace the ghosted background with a **prominent, foreground workflow visualization** positioned directly below the headline and CTAs. This will be a clear, visually appealing diagram showing the automation flow for a solo financial planner.

### Visual Layout

```text
+---------------------------------------------------------------+
|                                                               |
|    Custom CRM & Marketing Automation (Headline)               |
|    For Solo Financial Planners                                |
|                                                               |
|    The done-for-you automation system... (Subheadline)        |
|                                                               |
|    [See How It Works]  [Schedule a Strategy Call ->]          |
|                                                               |
|                           |                                   |
|                           v                                   |
|                                                               |
|   +--------+     +--------+     +--------+     +--------+     |
|   |  Lead  | --> | Email  | --> |Meeting | --> | Client |     |
|   |  icon  |     | icon   |     | icon   |     | icon   |     |
|   |        |     |        |     |        |     |        |     |
|   | "New   |     |"Auto   |     |"Booked"|     |"Ongoing|     |
|   |  Lead" |     | Nurture|     |        |     | Care"  |     |
|   +--------+     +--------+     +--------+     +--------+     |
|        |              |              |              |         |
|        +--- animated flow lines / data packets ---+          |
|                                                               |
+---------------------------------------------------------------+
```

### Animation Elements

1. **Flow Line Animation**
   - Dashed or gradient lines connecting the 4 stages
   - Animated "data packets" (small dots or pulses) flowing left to right
   - Continuous, smooth loop

2. **Stage Cards**
   - Each card has an icon + label + brief descriptor
   - Subtle glow effect on the electric blue theme
   - Cards fade in sequentially on page load

3. **Stages (Financial Planner Specific)**
   - **New Lead**: User icon - "Someone reaches out"
   - **Auto Nurture**: Mail icon - "Automated follow-up"
   - **Booked**: Calendar icon - "Meeting scheduled"
   - **Client**: UserCheck icon - "Onboarded & happy"

### Technical Implementation

**Files to modify:**
- `src/components/landing/Hero.tsx` - Restructure layout, remove background visualization, add foreground component
- `src/components/landing/DashboardVisualization.tsx` - Replace entirely with new `HeroWorkflow.tsx` component

**New component**: `src/components/landing/HeroWorkflow.tsx`
- Four stage cards in a horizontal row (stacks vertically on mobile)
- Animated connecting lines with flowing dots
- Uses Lucide icons: `UserPlus`, `Mail`, `Calendar`, `UserCheck`
- Full opacity, prominent positioning
- Animated on scroll-into-view

**Hero.tsx Changes:**
- Remove the absolute-positioned background `DashboardVisualization`
- Add `HeroWorkflow` component **inside** the content container, below the CTAs
- Add appropriate spacing (`mt-16` or similar)

**Styling:**
- Cards with `bg-card border border-primary/30` for visibility
- Electric blue accent for icons and glow
- Smooth fade-in animations staggered by 150ms per card
- Flowing dot animation along the connector lines

**Cleanup:**
- Delete `DashboardVisualization.tsx` (no longer needed)
- Remove unused animations from `tailwind.config.ts` if desired (optional)

