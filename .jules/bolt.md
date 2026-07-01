## 2024-05-19 - [Debouncing Native Visual Sliders]
**Learning:** Color pickers and range sliders can fire dozens of `input` events per second while a user drags them. Binding a heavy DOM operation like a Canvas redraw directly to these events blocks the main thread, causing significant UI stutter and input lag.
**Action:** Use a fast debounce (e.g. 50ms) for visual controls that trigger heavy operations to allow smooth input feedback while keeping the canvas reasonably responsive.
