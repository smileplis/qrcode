## 2024-05-24 - Canvas Re-rendering on Continuous Events
**Learning:** Continuous `input` events on UI controls (like color pickers or range sliders) trigger excessive synchronous canvas recalculations in `updateQR`, freezing the main thread.
**Action:** Always use debouncing (`triggerUpdateDebounced`) instead of immediate updates for range inputs and color pickers bound to expensive canvas redrawing functions to prevent UI blockage.
