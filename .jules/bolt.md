## 2024-07-10 - Synchronous QR rendering blocks main thread during rapid inputs
**Learning:** `input` events on UI elements like color pickers and range sliders can fire dozens of times per second when dragged. Because `updateQR` regenerates the entire QR canvas and is a computationally heavy operation, binding it directly to these `input` events synchronously freezes the UI thread.
**Action:** Always wrap heavy synchronous operations in a debounce utility (like `triggerUpdateDebounced`) when binding them to rapid event listeners like `input`, `mousemove`, or `scroll`.
