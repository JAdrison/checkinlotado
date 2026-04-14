

## Plan: Fix CTA scroll not reaching pricing section on mobile

### Root cause
`scrollIntoView({ behavior: "smooth" })` calculates the target position at the moment of click, but on mobile:
1. **Lazy-loaded sections** (`Suspense`) between the button and `#comprar` may not be rendered yet — they load as you scroll, shifting the target position mid-animation
2. **The ProblemSection** (200vh sticky section) confuses the browser's scroll calculation
3. The scroll animation starts toward a position that becomes stale as layout shifts occur

### Solution
Replace all `scrollIntoView` calls with a helper function that:
1. First triggers the scroll
2. Then re-checks the target position after a short delay (to account for lazy content loading) and corrects if needed

### Changes

**New file: `src/lib/scrollToSection.ts`**
```ts
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  
  // First scroll attempt
  const scrollTo = () => {
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    window.scrollTo({ top, behavior: "smooth" });
  };
  
  scrollTo();
  
  // Correction pass after lazy content may have loaded
  setTimeout(scrollTo, 600);
}
```

**All CTA files** (Hero, Navbar, StickyBar, FinalCTA, GallerySection, ComparisonTable, OTAComparisonSection, AccordionSection, Testimonials — 9 files):
- Replace `document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" })` with `scrollToSection("comprar")`
- Add import for the helper

### Result
The scroll will self-correct after lazy content renders, reliably landing on the pricing section across all devices.

