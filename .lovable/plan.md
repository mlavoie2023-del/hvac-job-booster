

## Appointment Reminders Feature

Replace the "Follow Up" feature in the Automation category with an "Appointment Reminders" feature that shows an animated timeline of automated reminder messages sent before a scheduled meeting.

---

### Visual Design

The animation will show:
- A meeting card at the top with client name and meeting time
- A vertical timeline below showing 3 automated reminders:
  - 24 hours before: Email reminder
  - 2 hours before: SMS reminder  
  - 15 minutes before: Final SMS reminder
- Each reminder animates in sequence with checkmarks appearing to show they were sent
- Green indicators show "Delivered" status

---

### Technical Changes

**File: `src/components/landing/WhatYouGet.tsx`**

1. Rename `FollowUpAnimation` to `AppointmentRemindersAnimation` and completely redesign the animation:
   - Meeting info header with client name and time
   - Vertical timeline with 3 reminder nodes
   - Staggered animation showing each reminder being sent
   - Checkmark indicators appearing as reminders complete

2. Update the Automation category feature (around line 1177-1181):
   - Change icon from `Bell` to `Clock` (already imported)
   - Change title from "Follow Up" to "Appointment Reminders"
   - Change description to "Reduce no-shows with automated SMS and email reminders"
   - Reference the new `AppointmentRemindersAnimation` component

