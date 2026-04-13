

## Plan: Fix lead form not showing properly on mobile

### Problem
The dialog uses `fixed top-[50%] translate-y-[-50%]` centering, which works on desktop but on small mobile screens the form content is taller than the viewport. Combined with `overflow-hidden` on the DialogContent, users can't scroll to see the full form — it gets cut off as shown in the screenshots.

### Fix

**File: `src/components/landing/LeadFormDialog.tsx`**
- Change `overflow-hidden` to `overflow-y-auto` on DialogContent
- Add `max-h-[90vh]` so the dialog never exceeds 90% of viewport height and scrolls when needed
- Reduce vertical padding/margins on mobile to fit more content (smaller logo, tighter spacing)

**File: `src/components/ui/dialog.tsx`**
- Update the DialogContent positioning for mobile: replace the centered `top-[50%] translate-y-[-50%]` approach with a mobile-friendly layout that uses `top-[5%]` without vertical translate on small screens, ensuring the form starts near the top and scrolls naturally

### Result
The form will be fully visible and scrollable on all phone sizes, especially for users coming from Instagram/ad in-app browsers.

