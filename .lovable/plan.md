

# Hero Animation: Floating Tool Consolidation

## Overview
Replace the current notification popup animation with a visually striking "tool consolidation" animation. Scattered tool icons (representing the typical tech stack chaos) will orbit around and then merge into a central unified Lavoie platform, visually demonstrating the value proposition.

## Animation Concept

```text
Phase 1 (0-2s): Scattered Tools
┌─────────────────────────────────────────────┐
│                                             │
│    📊 CRM        📧 Email                   │
│                                             │
│         📅 Calendar    📱 SMS               │
│                                             │
│    💰 Payments      📋 Forms                │
│                                             │
│         📈 Analytics    🔄 Automation       │
│                                             │
└─────────────────────────────────────────────┘

Phase 2 (2-4s): Converging
┌─────────────────────────────────────────────┐
│                                             │
│       📊         📧                         │
│            ╲   ╱                            │
│         📅─→ ● ←─📱                         │
│            ╱   ╲                            │
│       💰         📋                         │
│                                             │
└─────────────────────────────────────────────┘

Phase 3 (4-6s): Unified Platform Reveal
┌─────────────────────────────────────────────┐
│                                             │
│         ┌─────────────────────┐             │
│         │  ✨ LAVOIE SYSTEMS  │             │
│         │   One Platform      │             │
│         │   8 Tools → 1       │             │
│         └─────────────────────┘             │
│                                             │
└─────────────────────────────────────────────┘

Phase 4 (6-8s): Hold + Reset
```

## Visual Design

### Scattered Tool Icons (8 tools)
Each tool represented by a small card with icon and label:
- CRM (Users icon, blue)
- Email (Mail icon, purple)
- Calendar (Calendar icon, amber)
- SMS (MessageSquare icon, green)
- Payments (CreditCard icon, emerald)
- Forms (ClipboardList icon, pink)
- Analytics (BarChart3 icon, cyan)
- Automation (Zap icon, orange)

### Central Unified Card
- Lavoie logo or stylized "L" icon
- "One Platform" text
- Glowing primary color border with pulse effect
- Larger size (contrasts with scattered small icons)

## Animation Sequence (8-second loop)

| Time | Action |
|------|--------|
| 0s | Tool icons appear scattered in orbital positions, gently floating |
| 0-2s | Icons slowly orbit/drift with subtle floating motion |
| 2s | Icons begin converging toward center |
| 3s | Icons reach center, scale down, and fade |
| 3.5s | Central unified card scales up with glow effect |
| 4-5.5s | Hold unified state with subtle pulse |
| 5.5-6s | Central card fades, icons reappear at starting positions |
| 6-8s | Gentle floating continues, then loop restarts |

## Technical Implementation

### File: `src/components/landing/HeroWorkflow.tsx`

**Complete Rewrite** - Replace current notification-based animation with:

1. **Tool Data Array**
   - 8 tool objects with: id, icon, label, color, initial position (angle + radius)

2. **CSS Keyframes** (inline styles or added to index.css)
   - `@keyframes heroFloat` - Subtle floating motion
   - `@keyframes heroConverge` - Move toward center + scale down + fade
   - `@keyframes heroUnifiedReveal` - Scale up + glow pulse
   - `@keyframes heroReset` - Fade back to starting positions

3. **Component Structure**
   ```tsx
   <div className="relative w-full max-w-2xl mx-auto h-[280px]">
     {/* Orbital tool icons */}
     {tools.map((tool, index) => (
       <ToolIcon 
         key={tool.id}
         tool={tool}
         delay={index * 0.1}
       />
     ))}
     
     {/* Central unified platform card */}
     <UnifiedCard />
   </div>
   ```

4. **Positioning**
   - Use `absolute` positioning with `transform: translate()` 
   - Icons positioned in a rough elliptical pattern around center
   - CSS custom properties for animation timing control

### Keyframe Details

```css
@keyframes heroFloat {
  0%, 100% { transform: translate(var(--x), var(--y)); }
  50% { transform: translate(calc(var(--x) + 5px), calc(var(--y) - 8px)); }
}

@keyframes heroConverge {
  0% { 
    transform: translate(var(--x), var(--y)) scale(1);
    opacity: 1;
  }
  80% {
    transform: translate(0, 0) scale(0.3);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
}

@keyframes heroUnifiedReveal {
  0%, 30% { 
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  60%, 80% {
    transform: scale(1);
    opacity: 1;
  }
  95%, 100% {
    transform: scale(0);
    opacity: 0;
  }
}
```

## Responsive Considerations
- Desktop: Full 280px height, larger spread
- Tablet: Slightly reduced spread
- Mobile: Compact 200px height, tighter orbital pattern

## Files to Modify
1. **`src/components/landing/HeroWorkflow.tsx`** - Complete rewrite with new animation
2. **`src/index.css`** - Add new hero-specific keyframes

