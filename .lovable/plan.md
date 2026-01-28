

## Floating Notification Cards - Hero Visual

Replace the current workflow diagram with elegant, animated notification cards that float up and fade in/out, simulating real-time CRM automation events. This creates a more dynamic, modern feel that showcases the automation in action.

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
|         +---------------------------+                         |
|         |  [avatar] Sarah M.        |  <-- floats up, fades   |
|         |  Meeting booked for 2pm   |                         |
|         +---------------------------+                         |
|                                                               |
|              +---------------------------+                    |
|              |  [mail icon]             |  <-- staggered      |
|              |  Follow-up sent to James |                     |
|              +---------------------------+                    |
|                                                               |
|    +---------------------------+                              |
|    |  [check icon]             |  <-- different positions    |
|    |  Client onboarded: Mike T |                              |
|    +---------------------------+                              |
|                                                               |
+---------------------------------------------------------------+
```

### Notification Cards Design

Each card will feature:
- Left icon or avatar
- Primary text (action)
- Secondary text (details)
- Subtle glow and shadow
- Glass-morphism effect (semi-transparent background with blur)

### Sample Notifications (Financial Planner Themed)

1. **New Lead**: Avatar + "Sarah M. submitted inquiry form"
2. **Follow-up Sent**: Mail icon + "Follow-up #3 sent to James"
3. **Meeting Booked**: Calendar icon + "Discovery call scheduled for Thursday"
4. **Review Request**: Star icon + "Review request sent to Mike T."
5. **Client Onboarded**: CheckCircle icon + "Welcome sequence started for Lisa"
6. **Referral Received**: UserPlus icon + "New referral from David K."

### Animation Behavior

- Cards appear in a continuous loop
- Each card fades in, floats up slightly, holds for ~3 seconds, then fades out
- 3 cards visible at any time, staggered at different positions
- Cards spawn at varied horizontal positions for organic feel
- Subtle scale animation on entry (0.95 -> 1)

### Technical Implementation

**Files to modify:**
- `src/components/landing/HeroWorkflow.tsx` - Complete rewrite with new notification cards component
- `tailwind.config.ts` - Add new keyframes for notification float animation, remove unused travel-contact animations

**Component Structure (HeroWorkflow.tsx):**
```typescript
// Notification data array with type, icon, avatar, text
const notifications = [
  { type: 'lead', avatar: '...', primary: 'Sarah M.', secondary: 'Submitted inquiry form' },
  { type: 'email', icon: Mail, primary: 'Follow-up #3', secondary: 'Sent to James' },
  // ... more notifications
];

// NotificationCard component - renders a single card
// HeroNotifications component - manages the animation loop, displays 3 cards at staggered intervals
```

**New Keyframes (tailwind.config.ts):**
```typescript
"notification-float": {
  "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
  "10%": { opacity: "1", transform: "translateY(0) scale(1)" },
  "80%": { opacity: "1", transform: "translateY(-5px) scale(1)" },
  "100%": { opacity: "0", transform: "translateY(-15px) scale(0.95)" },
}
```

**Styling:**
- Cards: `bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg`
- Icons: Electric blue (`text-primary`) with subtle glow
- Avatars: Circular with primary border
- Positions: 3 fixed horizontal lanes (left, center, right) with slight vertical offset
- Mobile: Cards stack in center, narrower width

**Cleanup:**
- Remove `travel-contact-bottom`, `travel-contact-vertical-side` keyframes
- Remove `flow-dot`, `flow-dot-vertical` if no longer used
- Remove stage card and flow line code entirely

