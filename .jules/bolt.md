## 2024-06-25 - Debouncing synchronous UI rendering on continuous input events
**Learning:** In the QRCraft application, `updateQR()` blocks the main thread synchronously. When bound directly to continuous UI events like `input` on color pickers and range sliders, it causes severe UI freezing during interaction.
**Action:** Always use the existing `triggerUpdateDebounced()` utility function instead of directly calling `updateQR()` for any events that can fire rapidly in succession (e.g., slider drags, color picking) to maintain UI responsiveness.
