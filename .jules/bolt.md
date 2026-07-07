## 2024-05-25 - Debouncing continuous inputs for canvas rendering
**Learning:** `<input type="color">` and `<input type="range">` elements emit `input` events continuously as the user drags the slider or moves the cursor around the color picker. When tied to heavy operations like canvas rendering, it can fire 60+ times a second and completely block the main thread causing significant UI lag.
**Action:** Always debounce continuous inputs before triggering expensive UI updates or rendering logic. Ensure only the final state (or debounced intermediary states) triggers a full re-render.
