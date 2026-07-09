## 2024-05-24 - Main Thread Blocking on Input Events
**Learning:** Native HTML `<input type="color">` and `<input type="range">` elements fire `input` events continuously at high frequency while a user interacts with them (e.g. dragging a slider). Calling heavy synchronous operations (like destroying and recreating a canvas/QRCode on every frame) without debouncing freezes the main thread and causes UI jank.
**Action:** Always verify that frequently firing native events like `input` or `mousemove` are debounced (or requestAnimationFrame-throttled) before they trigger heavy redraw operations.
