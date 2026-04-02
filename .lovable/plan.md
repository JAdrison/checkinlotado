

## Plan: Adjust WhatsApp image to match right column height

The right column contains 3 metric cards + 1 testimonial card. The image currently has `max-h-[500px]` which may be too small. The goal is to make the image naturally fill the same height as the right column content.

### Changes to `src/components/landing/Testimonials.tsx`

1. **Replace the uploaded image** — copy `user-uploads://Untitled_920_x_1350_px.png` to `src/assets/case-study/whatsapp-iparai.png` (overwrite the existing one).

2. **Update image container and styling** — Use `items-stretch` on the grid (already present) and make the image container + image fill the full column height:
   - Change image container to `flex items-center justify-center overflow-hidden rounded-lg`
   - Change image className to `rounded-lg h-full object-contain` (remove `max-h-[500px]`, use `h-full` so it stretches to match the right column's natural height)
   - The `items-stretch` on the grid ensures both columns are the same height; `h-full` + `object-contain` makes the image fill that height without cropping.

This way the image height is driven by the right column's content height (3 cards + testimonial), keeping them perfectly aligned.

