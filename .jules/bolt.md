## 2024-10-18 - QRCraft Main Thread Blocking
**Learning:** The `updateQR` function in the QRCraft application is computationally expensive and synchronously blocks the main thread.
**Action:** When binding continuous UI events (e.g., color pickers, range sliders) to update the QR code, always use the `triggerUpdateDebounced` utility instead of calling `updateQR` directly to prevent UI freezing.
