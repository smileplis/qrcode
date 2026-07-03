## 2024-07-03 - [Input Event Bottleneck on Canvas]
**Learning:** Continuous input controls like range sliders and native color pickers fire dozens of events per second during interaction, causing massive main-thread blocking when directly bound to heavy canvas re-renders (like QR generation).
**Action:** Always debounce or throttle high-frequency `input` events on UI controls before triggering expensive visual updates.
