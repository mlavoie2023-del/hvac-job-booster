

# Features Section Redesign: 6 Category System

## Overview

Redesigning the "Everything a Solo Planner Needs" section with a new 6-category structure that showcases the full GoHighLevel feature set tailored for solo financial planners.

---

## New Category Structure

### 1. CRM - One Platform to run your entire business
| Feature | Description |
|---------|-------------|
| Unified Inbox | SMS, Email, LinkedIn, and calls in one place |
| Contact Management | Client profiles with full history and notes |
| Pipelines | Move clients through structured pipelines that trigger automations and manual tasks |

### 2. Lead Capture
| Feature | Description |
|---------|-------------|
| Landing Pages | Professional pages that convert visitors to leads |
| Smart Forms | Intake forms, surveys, and referral capture |
| Calendars | Clients can book themselves and receive automatic reminders  |

### 3. Automation
| Feature | Description |
|---------|-------------|
| Workflows | Automated nurture sequences and follow-ups |
| Follow Up | fill in a description here|
| Triggers & Actions | If-this-then-that logic for any event |

### 4. Marketing
| Feature | Description |
|---------|-------------|
| Email Campaigns | Newsletters, drip sequences,  |
| SMS Marketing | boost open rates with A2P compliant SMS Marketing |
| Social Media Hub | Schedule and manage posts across platforms |

### 5. Analytics
| Feature | Description |
|---------|-------------|
| Dashboard | Real-time KPIs and performance metrics |
| Reports | description here |
| Campaign Attribution | See which marketing efforts drive results |

### 6. Payments & Documents
| Feature | Description |
|---------|-------------|
| Invoicing & Subscriptions| One-time and recurring billing |
| Documents | custom documents templated and sent over sms or email |
| E-Signatures | Contracts, proposals, and digital signing |

---

## Visual & Interaction Design

### Desktop Experience
- **6 category icons** displayed in a horizontal row (2 rows of 3 on smaller screens)
- Each icon is a clickable tile with gradient background and animated icon
- Clicking expands a panel below showing the 3 features within that category
- Each feature card includes:
  - Mini animated visualization
  - Icon and title
  - Brief description
- Only one category open at a time (accordion behavior)

### Mobile Experience (Carousel)
- All 18 features in a swipeable horizontal carousel
- Each slide shows:
  - Category badge (colored pill)
  - Feature animation
  - Title and description
- Navigation arrows on sides
- Dot indicators at bottom
- Auto-play with pause on interaction



---

## Technical Implementation

### File Changes
- **`src/components/landing/WhatYouGet.tsx`** - Complete refactor with new category structure

### New Imports Needed
```text
CreditCard, FileSignature, Receipt, Users, Target, 
Filter, Mail, Smartphone, MousePointer, PieChart
```

### Data Structure Update
```text
categories = [
  { id: "crm", icon: Users, title: "CRM", features: [...] },
  { id: "lead-capture", icon: Target, title: "Lead Capture", features: [...] },
  { id: "automation", icon: Zap, title: "Automation", features: [...] },
  { id: "marketing", icon: Mail, title: "Marketing", features: [...] },
  { id: "analytics", icon: BarChart3, title: "Analytics", features: [...] },
  { id: "payments-docs", icon: CreditCard, title: "Payments & Documents", features: [...] }
]
```

### Layout Adjustments
- Category icons: Grid of 3x2 on desktop, 2x3 on tablet
- Each tile sized consistently (w-36 lg:w-44)
- Expanded panel shows 3 feature cards in a row
- Mobile carousel unchanged (just more slides)

### New Animation Components
8 new animation components will be created:
- ContactAnimation
- TagsAnimation  
- FunnelAnimation
- TriggerAnimation
- EmailCampaignAnimation
- SMSAnimation
- AttributionAnimation
- InvoiceAnimation
- SubscriptionAnimation
- DocumentSignAnimation

---

## Section Header Update

Change subtitle from:
> "Nine integrated tools across three core areas"

To:
> "18 integrated tools across six core areas—built around your practice."

---

## Mobile Optimization

- Category dots grouped by category color for easier navigation
- Swipe gestures maintained
- Auto-play continues between categories
- Category badge visible on each slide for context

