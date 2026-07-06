## 2024-05-23 - Debouncing Continuous DOM Events
**Learning:** Continuous input events like color pickers (input type="color") and range sliders fire extremely rapidly. Tying heavy operations like canvas rendering directly to these events without debouncing severely blocks the main thread in this architecture.
**Action:** Always wrap heavy synchronous operations tied to high-frequency DOM events in a debounce function.
