from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8000")

    # Wait for the initial QR render to complete
    page.wait_for_selector("canvas")

    print("Initial render successful")

    # Expand Color section
    page.click("text=Colors & Gradients")

    # Check that logo-size change updates correctly
    # Open Branding & Logo
    page.click("text=Branding & Logo")
    page.fill("#logo-size", "0.4")
    # Trigger an 'input' event manually if needed, playwright fill triggers it

    # Wait for debounce
    time.sleep(1)

    print("Debounce test complete. UI didn't block.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
