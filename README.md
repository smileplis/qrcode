# QRCraft - Premium Unlimited QR Code Studio

QRCraft is a zero-dependency, free, lifetime QR Code Generator and scanner platform. It allows users to generate unlimited custom QR codes with uploaded logos or preset social media icons, custom corner square styles, custom dot styles, and beautiful solid/gradient color combinations.

## Features

1. **Unlimited & Lifetime QRs:** QR codes are generated purely client-side; they will never expire and require no backend server, account creation, or payments.
2. **Branding & Logo Upload:** Upload your custom brand logo (PNG, JPG, SVG) and embed it inside the center of the QR code with custom sizing and dot clearance (clearing backgrounds).
3. **Preset Logos:** Fast selector for popular services (WhatsApp, Instagram, YouTube, GitHub, LinkedIn, X-Twitter, WiFi).
4. **Visual Styling Controls:**
   - **QR Dot Shapes:** Fine dots, rounded dots, elegant fluid, square, classy curves.
   - **Corner Squares/Dots:** Customize inner and outer corner styles.
   - **Color & Gradients:** Dynamic color selection with solid or gradient (linear/radial) foreground/background support.
5. **Exports & Downloads:** Download in PNG, vector SVG (for printing), or PDF formats. You can also copy the image directly to your clipboard or share it.
6. **QR Code Scanner:**
   - Real-time scanning using your device camera.
   - Drag-and-drop file upload to decode QR codes.
7. **Creation History:** Keeps a local history drawer of your generated templates (saved in your browser's local storage) so you can quickly re-edit or re-download them.

## Getting Started

Since the application is designed to be zero-dependency, you can run it directly:

### Option 1: Direct browser launch
Just double-click the `index.html` file in your file explorer to open QRCraft in your default web browser.

### Option 2: Lightweight Python Server (Recommended)
To enable modern features like camera scanning (which browsers often block on local `file://` protocol URLs for security), launch a local development server.

1. Open your terminal.
2. Navigate to the project directory:
   ```bash
   cd "/Users/tabishkhan/Documents/QR"
   ```
3. Start the Python web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and navigate to:
   [http://localhost:8000](http://localhost:8000)

## Libraries Used
- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) - Standard client-side canvas and SVG vector QR renderer.
- [html5-qrcode](https://github.com/mebjas/html5-qrcode) - End-to-end QR code scanner library for camera streaming and file upload decode.
- [FontAwesome](https://fontawesome.com/) - Visual system icons.
