
# Enhanced Hero Workflow Visualization

## Overview
Transform the current basic workflow SVG into a polished, animated visualization that represents your CRM & automation system visually. The enhancement will feature flowing particles along connection lines, glowing nodes, and a more sophisticated layout that feels alive and premium.

## Visual Changes

### 1. Improved Node Layout
- Restructure the network to feel more like a CRM workflow (lead → nurture → client)
- Three primary "hub" nodes representing key stages with secondary nodes around them
- Nodes will have subtle glow effects and pulsing animations

### 2. Animated Flowing Particles
- Small glowing dots will travel along the connection lines
- Creates the feeling of data/leads flowing through your system
- Uses CSS animations with staggered delays for organic movement

### 3. Gradient Connection Lines
- Replace solid lines with animated gradient strokes
- Lines will subtly pulse with the electric blue accent color
- Creates visual hierarchy between major and minor connections

### 4. Radial Glow Backdrop
- Add a soft radial gradient glow behind the central hub
- Creates depth and draws the eye toward the center
- Reinforces the "spotlight" design pattern you're using

### 5. Responsive Positioning
- Better centering and scaling across screen sizes
- Slightly higher opacity (25-30%) for more presence while staying subtle

## Technical Details

### File Changes

**`src/components/landing/Hero.tsx`**
- Replace the `WorkflowVisualization` component with an enhanced version
- Add animated particles using SVG circles with CSS animation classes
- Add gradient definitions for connection lines
- Add glow filter for nodes
- Use existing Tailwind animations (`animate-pulse-soft`, `animate-glow-pulse`) plus new inline keyframe animations for particle flow

**`tailwind.config.ts`**
- Add a new `particle-flow` keyframe for the flowing dots along paths
- This animation will move particles from 0% to 100% of the path length

**`src/index.css`** (optional enhancement)
- Add a subtle noise texture overlay for the hero if desired (can skip for cleaner look)

### Animation Performance
- All animations use CSS transforms and opacity (GPU-accelerated)
- No JavaScript-based animations to ensure smooth 60fps
- Reduced motion media query support for accessibility

## Expected Result
A sophisticated, subtly animated background that visually represents automation flowing through your system—reinforcing the "done-for-you automation" message without distracting from the headline.
