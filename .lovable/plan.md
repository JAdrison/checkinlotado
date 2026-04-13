

## Plan: Remove lead form, direct CTAs to checkout

### What changes

1. **All CTA buttons across the site** (Hero, Navbar, StickyBar, FinalCTA, GallerySection, ComparisonTable, OTAComparisonSection, AccordionSection) — instead of opening the lead form (`setOpen(true)`), they will smooth-scroll to the `#comprar` section ("Entre no Check-in Lotado").

2. **PricingSection CTA button** — instead of opening the lead form, it will navigate directly to the Kiwify checkout URL (`https://pay.kiwify.com.br/Y613pR3`).

3. **Remove LeadFormDialog** from `App.tsx` rendering (and optionally the import). The form component and context can stay in the codebase but will no longer be active.

### Files to edit

- **`src/components/landing/PricingSection.tsx`** — Replace `setOpen(true)` with `window.location.href = KIWIFY_URL`
- **`src/components/landing/Hero.tsx`** — Replace `setOpen(true)` with scroll to `#comprar`
- **`src/components/landing/Navbar.tsx`** — Same
- **`src/components/landing/StickyBar.tsx`** — Same
- **`src/components/landing/FinalCTA.tsx`** — Same
- **`src/components/landing/GallerySection.tsx`** — Same
- **`src/components/landing/ComparisonTable.tsx`** — Same
- **`src/components/landing/OTAComparisonSection.tsx`** — Same
- **`src/components/landing/AccordionSection.tsx`** — Same
- **`src/App.tsx`** — Remove `<LeadFormDialog />` rendering

### Scroll helper

Each button will use:
```ts
document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" });
```

