## 2024-05-18 - Debouncing Continuous UI Events

**Learning:** The `updateQR` function in `app.js` is computationally expensive and synchronously blocks the main thread. Binding it directly to continuous UI input events like color pickers (`input` type="color") or range sliders (`input` type="range") causes dozens of calls per second, completely freezing the UI during user interaction.

**Action:** When binding new continuous UI events (like dragging sliders or picking colors in real-time) that update the QR Code, always use the existing `triggerUpdateDebounced` utility instead of calling `updateQR` directly to prevent main thread blocking and ensure a smooth user experience.
