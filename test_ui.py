import time
from playwright.sync_api import sync_playwright

def test_ui_debouncing():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:8000")

        # Open accordions to make inputs visible
        page.click("text='Colors & Gradients'")
        page.click("text='Branding & Logo'")

        # Wait for the UI to be ready
        time.sleep(1)

        # 1. Test Color Picker (fgColorInput)
        print("Testing color picker debouncing...")
        fg_color_input = page.locator("#fg-color")

        # Measure time to simulate dragging/typing color rapidly
        start_time = time.time()
        for i in range(10):
            # Evaluate script to dispatch input event simulating continuous dragging
            page.evaluate(f"document.getElementById('fg-color').value = '#{i}{i}66f1'; document.getElementById('fg-color').dispatchEvent(new Event('input'));")

        end_time = time.time()
        duration_color = end_time - start_time
        print(f"Color picker 10 rapid input events took: {duration_color:.4f} seconds")

        # 2. Test Range Slider (logoSize)
        print("Testing logo size slider debouncing...")
        logo_size_input = page.locator("#logo-size")

        start_time = time.time()
        for i in range(10):
            val = 0.1 + (i * 0.04)
            page.evaluate(f"document.getElementById('logo-size').value = {val}; document.getElementById('logo-size').dispatchEvent(new Event('input'));")

        end_time = time.time()
        duration_slider = end_time - start_time
        print(f"Logo size slider 10 rapid input events took: {duration_slider:.4f} seconds")

        # Assert that the time taken for 10 events is less than what it would take if it synchronously updated the QR code 10 times.
        # Generating 10 QR codes synchronously would likely take > 0.5s total.
        assert duration_color < 0.2, "Color picker input events are too slow, likely not debounced."
        assert duration_slider < 0.2, "Slider input events are too slow, likely not debounced."

        print("All debouncing tests passed.")
        browser.close()

if __name__ == "__main__":
    test_ui_debouncing()
