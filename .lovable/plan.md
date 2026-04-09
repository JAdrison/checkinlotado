

## Problem

On mobile, the accordion only shows one phase at a time — when a new one opens, the previous one closes. This makes it hard to read all phases as you scroll. The IntersectionObserver also struggles because collapsed items are only 60px tall.

## Solution

On mobile, change the behavior so that phases **progressively open and stay open** as the user scrolls down. Instead of a single `activeIndex`, track a **Set of active indices**. Once a phase becomes visible, it opens and remains open.

## Changes

**File: `src/components/ui/interactive-image-accordion.tsx`**

1. Replace `activeIndex` (single number) with `activeIndices` (Set of numbers) for mobile, keeping single-index behavior on desktop
2. On mobile, use an IntersectionObserver with a lower threshold (~0.3) on a wrapper/sentinel approach — observe the container and calculate which items should be revealed based on scroll progress
3. Simpler approach: use a scroll-based counter. Observe the overall container's scroll position and progressively add indices to the active set as the user scrolls deeper
4. Each item checks `activeIndices.has(index)` on mobile, or `activeIndex === index` on desktop
5. On mobile, all items start collapsed (60px). As the user scrolls, items open one by one from top to bottom and **stay open**, giving each phase ~350px height with full content visible

**Key behavior:**
- Desktop: unchanged (hover/click, one active at a time)
- Mobile: scroll-triggered progressive reveal, phases stay open once activated
- The container will naturally grow taller as more phases open, creating a smooth reading experience

