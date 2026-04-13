

## Plan: Fix mobile horizontal scroll and auto-scroll-to-top bugs

### Problem 1: Page scrolls sideways on mobile
Several elements can overflow the viewport width on small phones:

- **Ticker & Logo strip**: `whitespace-nowrap` elements animate horizontally but aren't properly contained
- **CardStack**: Calculated width can exceed screen on 320px devices
- **Timeline (PhaseCards)**: `margin-left: 50%` + padding causes overflow on mobile
- **Root-level containment**: `overflow-x: hidden` on `body` alone is unreliable in in-app browsers (Instagram, Facebook)

### Problem 2: Page auto-scrolls to top
- **ProblemSection**: 300vh tall section with `position: sticky` and scroll-driven video creates scroll position conflicts on certain mobile browsers
- **`scroll-behavior: smooth`** on `html` can cause unexpected scroll jumps when combined with IntersectionObserver and programmatic scroll actions

### Changes

**File: `src/index.css`**
- Add `overflow-x: hidden` to `html` (not just `body`) — this catches overflow that escapes `body` in WebKit-based in-app browsers
- Remove `scroll-behavior: smooth` from `html` (it causes scroll fights on mobile). The programmatic `scrollIntoView({ behavior: "smooth" })` already handles smooth scrolling where needed

**File: `src/components/landing/ProblemSection.tsx`**
- Reduce section height from `300vh` to `200vh` on mobile to prevent scroll position conflicts
- Add `overflow: hidden` to the section wrapper
- Add touch-action constraint to prevent horizontal swipe interference

**File: `src/components/ui/card-stack.tsx`**
- Add `overflow: hidden` to the outer wrapper div and constrain max-width to `100vw`

**File: `src/components/landing/ForWhom.tsx`**
- Wrap the logo ticker in a container with `overflow: hidden` and `max-width: 100vw`

**File: `src/components/landing/Ticker.tsx`**
- Add `overflow: hidden` to the ticker wrapper (already has it via `.ticker-wrap` CSS but add explicit containment)

**File: `src/index.css` (timeline mobile rules)**
- Ensure mobile timeline items don't exceed viewport width by adding `max-width: 100%` and `overflow: hidden` to timeline cards

**File: `src/pages/Index.tsx`**
- Wrap the entire page content in a div with `overflow-x: hidden` as an extra safety layer

### Result
- Horizontal scrolling will be blocked at multiple levels (html, body, page wrapper)
- The scroll-driven video section won't fight with the browser's scroll position on mobile
- All animated/wide elements are properly contained within viewport bounds

