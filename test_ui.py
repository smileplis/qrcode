from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:8000')

        # Wait for initialization
        page.wait_for_selector('#qr-url')

        # Open design accordion
        page.click('text=Colors & Gradients')

        # Test color input
        print("Testing color input...")
        start = time.time()
        for i in range(10):
            color = f"#ff00{i:02d}"
            page.fill('#fg-color', color, force=True)
            page.evaluate('document.getElementById("fg-color").dispatchEvent(new Event("input"))')
        end = time.time()
        print(f"Time for 10 color inputs: {end - start:.2f}s")

        # Test logo size slider
        page.click('text=Branding & Logo')
        print("Testing logo size slider...")
        start = time.time()
        for i in range(10):
            # Input logo size is between 0.1 and 0.5 with step 0.05
            val = str(round(0.1 + (i * 0.05) % 0.4, 2))
            # Just dispatch the event with JS to avoid playwright range input strictness
            page.evaluate(f'document.getElementById("logo-size").value = "{val}"; document.getElementById("logo-size").dispatchEvent(new Event("input"));')
        end = time.time()
        print(f"Time for 10 logo size inputs: {end - start:.2f}s")

        # Wait a bit for final debounce to trigger and render
        page.wait_for_timeout(1000)

        print("Tests completed.")
        browser.close()

if __name__ == '__main__':
    run()
