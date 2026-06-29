document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // SVG Data URIs for Preset Logos
    // -------------------------------------------------------------
    const PRESET_LOGOS = {
        none: "",
        instagram: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><radialGradient id="ig-grad" cx="30%" cy="100%" r="150%"><stop offset="0" stop-color="#fdf497"/><stop offset="0.05" stop-color="#fdf497"/><stop offset="0.45" stop-color="#fd5949"/><stop offset="0.6" stop-color="#d6249f"/><stop offset="1" stop-color="#285AEB"/></radialGradient><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`),
        whatsapp: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="#25D366" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.197 1.449 4.825 1.451 5.436 0 9.859-4.42 9.862-9.857.001-2.634-1.024-5.11-2.885-6.974C16.586 1.91 14.112.882 11.48.882c-5.442 0-9.863 4.42-9.866 9.858 0 1.77.462 3.5 1.34 5.024l-.993 3.628 3.719-.975zm12.338-7.291c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.518-.164-.736.164-.218.327-.844 1.066-1.035 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.639-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.382.492-.573.164-.19.218-.328.328-.546.11-.218.055-.41-.028-.573-.082-.164-.736-1.774-1.008-2.43-.265-.636-.53-.55-.736-.56-.19-.01-.408-.01-.626-.01-.218 0-.573.082-.873.41-.3.327-1.145 1.118-1.145 2.727 0 1.609 1.172 3.164 1.335 3.382.164.218 2.307 3.522 5.59 4.942.78.337 1.39.539 1.86.688.784.249 1.497.214 2.061.13.629-.094 1.94-.793 2.213-1.529.272-.737.272-1.364.19-1.499-.08-.137-.3-.218-.628-.382z"/></svg>`),
        youtube: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="#FF0000" d="M23.498 6.163s-.232-1.64-.946-2.36c-.908-.952-1.926-.957-2.392-1.013C16.824 2.5 12 2.5 12 2.5s-4.822 0-8.16.29c-.466.056-1.484.061-2.392 1.013-.714.72-.946 2.36-.946 2.36S.22 8.1 0 10.038v3.924c.22 1.938.502 3.875.502 3.875s.232 1.64.946 2.36c.908.952 1.986.92 2.482 1.014 1.916.184 8.07.24 8.07.24s4.825-.008 8.163-.3c.466-.056 1.484-.061 2.392-1.013.714-.72.946-2.36.946-2.36s.234-1.937.234-3.875v-3.924c0-1.938-.234-3.875-.234-3.875zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`),
        github: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`),
        linkedin: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>`),
        "x-twitter": "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="#000000" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`),
        wifi: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="#0f172a" d="M12 21a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm-8.485-8.485a1 1 0 0 1 0-1.414 11.968 11.968 0 0 1 16.97 0 1 1 0 0 1-1.414 1.414 9.968 9.968 0 0 0-14.142 0 1 1 0 0 1-1.414 0zm2.828 2.828a1 1 0 0 1 0-1.414 7.973 7.973 0 0 1 11.314 0 1 1 0 0 1-1.414 1.414 5.973 5.973 0 0 0-8.486 0 1 1 0 0 1-1.414 0zm-5.656-5.657a1 1 0 0 1 0-1.414c6.248-6.248 16.379-6.248 22.628 0a1 1 0 0 1-1.415 1.414c-5.467-5.467-14.331-5.467-19.799 0a1 1 0 0 1-1.414 0z"/></svg>`)
    };

    // -------------------------------------------------------------
    // Core Application State
    // -------------------------------------------------------------
    let qrData = "https://google.com";
    let qrCode = null;
    let selectedLogoType = "none"; // 'none', 'preset', or 'upload'
    let uploadedLogoDataUrl = "";
    let selectedPresetName = "none";
    let isFgGradient = false;
    let historyList = [];

    // Camera Scan Instance
    let html5QrScanner = null;

    // Cache DOM Elements
    const canvasContainer = document.getElementById("canvas-container");
    const qrLoading = document.getElementById("qr-loading");
    
    // Inputs
    const qrUrlInput = document.getElementById("qr-url");
    const qrTextInput = document.getElementById("qr-text");
    const wifiSsid = document.getElementById("wifi-ssid");
    const wifiPassword = document.getElementById("wifi-password");
    const wifiEncryption = document.getElementById("wifi-encryption");
    const emailAddress = document.getElementById("email-address");
    const emailSubject = document.getElementById("email-subject");
    const emailBody = document.getElementById("email-body");
    const phoneNumber = document.getElementById("phone-number");

    // Accordions
    const accordionTriggers = document.querySelectorAll(".accordion-trigger");

    // Styling Fields
    const dotsType = document.getElementById("dots-type");
    const cornersSquareType = document.getElementById("corners-square-type");
    const cornersDotType = document.getElementById("corners-dot-type");

    // Colors
    const fgColorSolidBtn = document.getElementById("fg-color-solid-btn");
    const fgColorGradientBtn = document.getElementById("fg-color-gradient-btn");
    const fgSolidControls = document.getElementById("fg-solid-controls");
    const fgGradientControls = document.getElementById("fg-gradient-controls");
    const fgColorInput = document.getElementById("fg-color");
    const fgColorText = document.getElementById("fg-color-text");
    const fgGradColor1 = document.getElementById("fg-grad-color1");
    const fgGradColor1Text = document.getElementById("fg-grad-color1-text");
    const fgGradColor2 = document.getElementById("fg-grad-color2");
    const fgGradColor2Text = document.getElementById("fg-grad-color2-text");
    const fgGradType = document.getElementById("fg-grad-type");
    const fgGradAngleCol = document.getElementById("fg-grad-angle-col");
    const fgGradAngle = document.getElementById("fg-grad-angle");
    const bgColorInput = document.getElementById("bg-color");
    const bgColorText = document.getElementById("bg-color-text");
    const presetBgBtns = document.querySelectorAll(".preset-bg-btn");

    // Branding / Logo
    const logoDropzone = document.getElementById("logo-dropzone");
    const logoFileInput = document.getElementById("logo-file-input");
    const logoInfoCard = document.getElementById("logo-info-card");
    const logoThumbImg = document.getElementById("logo-thumb-img");
    const logoFilename = document.getElementById("logo-filename");
    const removeLogoBtn = document.getElementById("remove-logo-btn");
    const presetIconBtns = document.querySelectorAll(".preset-icon-btn");
    const logoSize = document.getElementById("logo-size");
    const logoSizeVal = document.getElementById("logo-size-val");
    const logoClearBg = document.getElementById("logo-clear-bg");

    // Tabs
    const navTabs = document.querySelectorAll(".nav-tab");
    const tabContents = document.querySelectorAll(".tab-content");
    const contentTypes = document.querySelectorAll(".type-btn");
    const typeGroups = document.querySelectorAll(".type-group");

    // Actions
    const downloadBtnTrigger = document.getElementById("download-btn-trigger");
    const downloadMenu = document.getElementById("download-menu");
    const copyClipboardBtn = document.getElementById("copy-clipboard-btn");
    const shareQrBtn = document.getElementById("share-qr-btn");

    // History
    const toggleHistoryBtn = document.getElementById("toggle-history-btn");
    const historyDrawer = document.getElementById("history-drawer");
    const historyDrawerOverlay = document.getElementById("history-drawer-overlay");
    const closeHistoryBtn = document.getElementById("close-history-btn");
    const clearHistoryBtn = document.getElementById("clear-history-btn");
    const historyItemsContainer = document.getElementById("history-items-container");
    const emptyHistoryMsg = document.getElementById("empty-history-msg");
    const historyCountBadge = document.getElementById("history-count");

    // Scanner
    const scanModes = document.querySelectorAll(".scan-type-btn");
    const scanGroups = document.querySelectorAll(".scan-interface-group");
    const startCameraBtn = document.getElementById("start-camera-btn");
    const stopCameraBtn = document.getElementById("stop-camera-btn");
    const cameraPrompt = document.getElementById("camera-prompt");
    const scanFileDropzone = document.getElementById("scan-file-dropzone");
    const scanFileInput = document.getElementById("scan-file-input");
    const scanResultCard = document.getElementById("scan-result-card");
    const scanResultText = document.getElementById("scan-result-text");
    const scanCopyBtn = document.getElementById("scan-copy-btn");
    const scanOpenLinkBtn = document.getElementById("scan-open-link-btn");
    const scanImportBtn = document.getElementById("scan-import-btn");

    // Toast
    const toast = document.getElementById("toast-notification");
    const toastMsg = toast.querySelector(".toast-message");

    // -------------------------------------------------------------
    // Core QR Engine Initializer
    // -------------------------------------------------------------
    function initQR() {
        showLoading(true);
        canvasContainer.innerHTML = "";
        
        const qrConfig = buildQRConfig();
        
        try {
            qrCode = new QRCodeStyling(qrConfig);
            qrCode.append(canvasContainer);
            
            // Listen for canvas rendering complete
            qrCode._canvas.then(() => {
                showLoading(false);
            }).catch(() => {
                showLoading(false);
            });
        } catch (e) {
            console.error("Failed to compile QR code: ", e);
            showLoading(false);
        }
    }

    function updateQR() {
        showLoading(true);
        
        // Read input data based on type
        readInputData();
        
        const qrConfig = buildQRConfig();
        
        if (qrCode) {
            qrCode.update(qrConfig);
            // Hide loading after update resolves
            setTimeout(() => {
                showLoading(false);
            }, 300);
        } else {
            initQR();
        }
    }

    function showLoading(show) {
        if (show) {
            qrLoading.classList.add("active");
        } else {
            qrLoading.classList.remove("active");
        }
    }

    // -------------------------------------------------------------
    // Build Config Object dynamically from controls state
    // -------------------------------------------------------------
    function buildQRConfig() {
        const config = {
            width: 280,
            height: 280,
            type: "canvas",
            data: qrData,
            image: getSelectedLogo(),
            dotsOptions: {
                type: dotsType.value,
            },
            cornersSquareOptions: {
                type: cornersSquareType.value,
            },
            cornersDotOptions: {
                type: cornersDotType.value,
            },
            backgroundOptions: {
                color: bgColorInput.value === "transparent" ? "rgba(0,0,0,0)" : bgColorInput.value,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                hideBackgroundDots: logoClearBg.checked,
                imageSize: parseFloat(logoSize.value),
                margin: logoClearBg.checked ? 6 : 0
            }
        };

        // Foreground Dot styling (Gradient vs Solid)
        if (isFgGradient) {
            const startColor = fgGradColor1.value;
            const endColor = fgGradColor2.value;
            const gradType = fgGradType.value;
            const angle = parseInt(fgGradAngle.value) || 0;

            config.dotsOptions.gradient = {
                type: gradType,
                rotation: gradType === "linear" ? (angle * Math.PI) / 180 : 0,
                colorStops: [
                    { offset: 0, color: startColor },
                    { offset: 1, color: endColor }
                ]
            };
            
            // Build corner square and dot gradient to match for premium unified aesthetic
            config.cornersSquareOptions.gradient = {
                type: gradType,
                rotation: gradType === "linear" ? (angle * Math.PI) / 180 : 0,
                colorStops: [
                    { offset: 0, color: startColor },
                    { offset: 1, color: endColor }
                ]
            };
            config.cornersDotOptions.gradient = {
                type: gradType,
                rotation: gradType === "linear" ? (angle * Math.PI) / 180 : 0,
                colorStops: [
                    { offset: 0, color: startColor },
                    { offset: 1, color: endColor }
                ]
            };
            // Delete simple colors if gradient is active
            delete config.dotsOptions.color;
            delete config.cornersSquareOptions.color;
            delete config.cornersDotOptions.color;
        } else {
            // Solid color
            config.dotsOptions.color = fgColorInput.value;
            config.cornersSquareOptions.color = fgColorInput.value;
            config.cornersDotOptions.color = fgColorInput.value;
            
            delete config.dotsOptions.gradient;
            delete config.cornersSquareOptions.gradient;
            delete config.cornersDotOptions.gradient;
        }

        return config;
    }

    function getSelectedLogo() {
        if (selectedLogoType === "upload" && uploadedLogoDataUrl) {
            return uploadedLogoDataUrl;
        } else if (selectedLogoType === "preset" && selectedPresetName !== "none") {
            return PRESET_LOGOS[selectedPresetName];
        }
        return "";
    }

    // -------------------------------------------------------------
    // Read and format text from the active input group
    // -------------------------------------------------------------
    function readInputData() {
        const activeTypeBtn = document.querySelector(".type-btn.active");
        const type = activeTypeBtn ? activeTypeBtn.dataset.type : "url";
        
        switch (type) {
            case "url":
                let url = qrUrlInput.value.trim();
                if (url && !/^https?:\/\//i.test(url)) {
                    url = "https://" + url;
                }
                qrData = url || "https://google.com";
                break;
            case "text":
                qrData = qrTextInput.value || "QRCraft Generator";
                break;
            case "wifi":
                const ssid = wifiSsid.value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/:/g, '\\:').replace(/,/g, '\\,');
                const password = wifiPassword.value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/:/g, '\\:').replace(/,/g, '\\,');
                const enc = wifiEncryption.value;
                // WIFI Format: WIFI:S:SSID;T:WPA;P:PASSWORD;;
                if (enc === "nopass") {
                    qrData = `WIFI:S:${ssid};;`;
                } else {
                    qrData = `WIFI:S:${ssid};T:${enc};P:${password};;`;
                }
                break;
            case "email":
                const address = emailAddress.value.trim();
                const subject = emailSubject.value;
                const body = emailBody.value;
                qrData = `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                break;
            case "phone":
                const tel = phoneNumber.value.trim();
                qrData = `tel:${tel}`;
                break;
            default:
                qrData = "https://google.com";
        }
    }

    // -------------------------------------------------------------
    // Set Up Accordion Toggling
    // -------------------------------------------------------------
    accordionTriggers.forEach((trigger, idx) => {
        // Open the first design accordion item by default
        if (idx === 0) {
            trigger.parentElement.classList.add("active");
        }
        
        trigger.addEventListener("click", () => {
            const parent = trigger.parentElement;
            const isActive = parent.classList.contains("active");
            
            // Close all
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("active");
            });
            
            // Toggle clicked
            if (!isActive) {
                parent.classList.add("active");
            }
        });
    });

    // -------------------------------------------------------------
    // Input Event Bindings (Dynamic QR Code Updates)
    // -------------------------------------------------------------
    let debounceTimer;
    function triggerUpdateDebounced() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            updateQR();
        }, 350); // Debounce typing so canvas isn't hammered on every keystroke
    }

    [qrUrlInput, qrTextInput, wifiSsid, wifiPassword, emailAddress, emailSubject, emailBody, phoneNumber].forEach(element => {
        element.addEventListener("input", triggerUpdateDebounced);
    });
    wifiEncryption.addEventListener("change", updateQR);

    // Tab switcher between input types
    contentTypes.forEach(btn => {
        btn.addEventListener("click", () => {
            contentTypes.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const type = btn.dataset.type;
            typeGroups.forEach(g => g.classList.remove("active"));
            
            const targetGroup = document.getElementById(`input-group-${type}`);
            if (targetGroup) targetGroup.classList.add("active");

            updateQR();
        });
    });

    // -------------------------------------------------------------
    // Designs & Shapes Inputs
    // -------------------------------------------------------------
    dotsType.addEventListener("change", updateQR);
    cornersSquareType.addEventListener("change", updateQR);
    cornersDotType.addEventListener("change", updateQR);

    // -------------------------------------------------------------
    // Colors & Gradients Inputs
    // -------------------------------------------------------------
    fgColorSolidBtn.addEventListener("click", () => {
        fgColorSolidBtn.classList.add("active");
        fgColorGradientBtn.classList.remove("active");
        fgSolidControls.classList.add("active");
        fgGradientControls.classList.remove("active");
        isFgGradient = false;
        updateQR();
    });

    fgColorGradientBtn.addEventListener("click", () => {
        fgColorGradientBtn.classList.add("active");
        fgColorSolidBtn.classList.remove("active");
        fgGradientControls.classList.add("active");
        fgSolidControls.classList.remove("active");
        isFgGradient = true;
        updateQR();
    });

    // Sync Hex text box with color pickers
    function setupColorSync(picker, textBox, onUpdate) {
        picker.addEventListener("input", (e) => {
            textBox.value = e.target.value;
            onUpdate();
        });
        
        textBox.addEventListener("input", (e) => {
            let hex = e.target.value;
            if (hex.startsWith("#") && hex.length === 7) {
                picker.value = hex;
                onUpdate();
            }
        });
    }

    // ⚡ Bolt: Debounce color picker inputs to prevent synchronous canvas re-renders blocking the main thread
    setupColorSync(fgColorInput, fgColorText, triggerUpdateDebounced);
    setupColorSync(fgGradColor1, fgGradColor1Text, triggerUpdateDebounced);
    setupColorSync(fgGradColor2, fgGradColor2Text, triggerUpdateDebounced);
    setupColorSync(bgColorInput, bgColorText, triggerUpdateDebounced);

    fgGradType.addEventListener("change", () => {
        if (fgGradType.value === "radial") {
            fgGradAngleCol.style.display = "none";
        } else {
            fgGradAngleCol.style.display = "block";
        }
        updateQR();
    });

    // ⚡ Bolt: Debounce angle slider to prevent severe UI stutter during drag
    fgGradAngle.addEventListener("input", triggerUpdateDebounced);

    // Preset background choices
    presetBgBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            presetBgBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const color = btn.dataset.color;
            if (color === "transparent") {
                bgColorInput.value = "#ffffff"; // Internal color picker cannot represent transparent
                bgColorText.value = "transparent";
                bgColorInput.style.opacity = "0.2"; // visual indicator
            } else {
                bgColorInput.value = color;
                bgColorText.value = color;
                bgColorInput.style.opacity = "1";
            }
            updateQR();
        });
    });

    // -------------------------------------------------------------
    // Branding / Logo handlers
    // -------------------------------------------------------------
    // Drag and drop event handlers
    function setupDragAndDrop(dropzone, fileInput, callback) {
        dropzone.addEventListener("click", () => fileInput.click());
        
        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("dragover");
        });
        
        dropzone.addEventListener("dragleave", () => {
            dropzone.classList.remove("dragover");
        });
        
        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("dragover");
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                callback(files[0]);
            }
        });

        fileInput.addEventListener("change", (e) => {
            if (e.target.files.length > 0) {
                callback(e.target.files[0]);
            }
        });
    }

    setupDragAndDrop(logoDropzone, logoFileInput, handleLogoUpload);

    function handleLogoUpload(file) {
        if (!file.type.match("image.*")) {
            showToast("Invalid file! Please upload an image.", true);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast("File too large! Maximum limit is 5MB.", true);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedLogoDataUrl = e.target.result;
            selectedLogoType = "upload";
            
            // De-select presets
            presetIconBtns.forEach(b => b.classList.remove("active"));
            
            // Render selected state in panel
            logoFilename.textContent = file.name;
            logoThumbImg.src = uploadedLogoDataUrl;
            logoInfoCard.classList.remove("hidden");
            logoDropzone.style.display = "none";
            
            updateQR();
        };
        reader.readAsDataURL(file);
    }

    // Remove uploaded logo action
    removeLogoBtn.addEventListener("click", () => {
        uploadedLogoDataUrl = "";
        selectedLogoType = "none";
        
        logoInfoCard.classList.add("hidden");
        logoDropzone.style.display = "block";
        logoFileInput.value = ""; // clear selector
        
        // Select 'none' preset button
        presetIconBtns.forEach(b => {
            if (b.dataset.preset === "none") b.classList.add("active");
            else b.classList.remove("active");
        });

        updateQR();
    });

    // Preset Icons selection
    presetIconBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            presetIconBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const presetName = btn.dataset.preset;
            selectedPresetName = presetName;

            if (presetName === "none") {
                selectedLogoType = "none";
                // If there is an uploaded logo, keep it in background but inactive
            } else {
                selectedLogoType = "preset";
                
                // Hide uploaded logo visually but retain its reference
                if (uploadedLogoDataUrl) {
                    logoInfoCard.classList.add("hidden");
                    logoDropzone.style.display = "block";
                }
            }

            updateQR();
        });
    });

    // Logo adjustments
    logoSize.addEventListener("input", (e) => {
        const percent = Math.round(parseFloat(e.target.value) * 100);
        logoSizeVal.textContent = `${percent}%`;
        // ⚡ Bolt: Debounce size slider to prevent main thread blocking while dragging
        triggerUpdateDebounced();
    });

    logoClearBg.addEventListener("change", updateQR);

    // -------------------------------------------------------------
    // Navigation / Tab Toggling (Studio vs Scan vs History)
    // -------------------------------------------------------------
    navTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetTab = tab.dataset.tab;
            
            if (!targetTab) return; // Toggle history isn't a direct tab content switch
            
            navTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            tabContents.forEach(content => {
                content.classList.remove("active");
            });
            
            const targetEl = document.getElementById(targetTab);
            if (targetEl) targetEl.classList.add("active");

            // Stop scanner if leaving Scan tab
            if (targetTab !== "scan-tab") {
                stopScanner();
            }
        });
    });

    // -------------------------------------------------------------
    // Export Actions (Download & Copy & Share)
    // -------------------------------------------------------------
    // Toggle Download Menu
    downloadBtnTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        downloadMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        downloadMenu.classList.remove("active");
    });

    // Handle Downloads
    const downloadOpts = document.querySelectorAll(".download-opt");
    downloadOpts.forEach(opt => {
        opt.addEventListener("click", () => {
            const format = opt.dataset.format;
            if (!qrCode) return;
            
            // Visual trigger
            showLoading(true);
            
            setTimeout(() => {
                qrCode.download({
                    name: "qrcraft_code",
                    extension: format
                }).then(() => {
                    showLoading(false);
                    saveToLocalStorage(); // Auto-save to history on download
                }).catch((e) => {
                    console.error("Download error:", e);
                    showLoading(false);
                });
            }, 300);
        });
    });

    // Copy to Clipboard
    copyClipboardBtn.addEventListener("click", () => {
        const canvas = canvasContainer.querySelector("canvas");
        if (!canvas) {
            showToast("No QR code found to copy", true);
            return;
        }

        try {
            canvas.toBlob((blob) => {
                if (!blob) {
                    showToast("Failed to copy image", true);
                    return;
                }
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item]).then(() => {
                    showToast("QR Code image copied to clipboard!");
                    saveToLocalStorage(); // Save to history
                }).catch(err => {
                    console.error("Clipboard copy failed:", err);
                    showToast("Failed to copy. Standard browser block.", true);
                });
            }, "image/png");
        } catch (e) {
            console.error("Clipboard exception:", e);
            showToast("Copy failed: Canvas is tainted.", true);
        }
    });

    // Share QR Code
    shareQrBtn.addEventListener("click", () => {
        if (navigator.share) {
            const canvas = canvasContainer.querySelector("canvas");
            if (!canvas) return;

            canvas.toBlob((blob) => {
                const file = new File([blob], "qr_code.png", { type: "image/png" });
                navigator.share({
                    files: [file],
                    title: "Generated QR Code",
                    text: `Created with QRCraft for: ${qrData}`
                }).then(() => {
                    showToast("Shared successfully!");
                }).catch(err => {
                    if (err.name !== "AbortError") {
                        // Fallback to copy link
                        copyTextToClipboard(qrData);
                    }
                });
            }, "image/png");
        } else {
            // Fallback: Copy link content
            copyTextToClipboard(qrData);
        }
    });

    function copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast("QR Content Link copied to clipboard!");
        }).catch(() => {
            showToast("Failed to copy link.", true);
        });
    }

    // -------------------------------------------------------------
    // Toast Messages
    // -------------------------------------------------------------
    let toastTimer;
    function showToast(message, isError = false) {
        clearTimeout(toastTimer);
        toastMsg.textContent = message;
        
        const icon = toast.querySelector("i");
        if (isError) {
            icon.className = "fa-solid fa-circle-xmark toast-icon";
            icon.style.color = "var(--accent-red)";
            toast.style.borderColor = "var(--accent-red)";
        } else {
            icon.className = "fa-solid fa-circle-check toast-icon";
            icon.style.color = "var(--accent-green)";
            toast.style.borderColor = "var(--accent-indigo)";
        }

        toast.classList.add("active");
        
        toastTimer = setTimeout(() => {
            toast.classList.remove("active");
        }, 3000);
    }

    // -------------------------------------------------------------
    // History Panel Functionality (localStorage)
    // -------------------------------------------------------------
    function getHistory() {
        const historyJson = localStorage.getItem("qrcraft_history");
        if (historyJson) {
            try {
                return JSON.parse(historyJson);
            } catch (e) {
                return [];
            }
        }
        return [];
    }

    function saveToLocalStorage() {
        // Prepare historical item details
        const canvas = canvasContainer.querySelector("canvas");
        if (!canvas) return;

        const thumbnail = canvas.toDataURL("image/png", 0.3); // low quality thumb to save localStorage space

        const newItem = {
            id: Date.now().toString(),
            content: qrData,
            timestamp: new Date().toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            }),
            thumbnail: thumbnail,
            configState: {
                contentInput: {
                    type: document.querySelector(".type-btn.active").dataset.type,
                    url: qrUrlInput.value,
                    text: qrTextInput.value,
                    wifiSsid: wifiSsid.value,
                    wifiPassword: wifiPassword.value,
                    wifiEncryption: wifiEncryption.value,
                    emailAddress: emailAddress.value,
                    emailSubject: emailSubject.value,
                    emailBody: emailBody.value,
                    phone: phoneNumber.value
                },
                styling: {
                    dots: dotsType.value,
                    cornersSquare: cornersSquareType.value,
                    cornersDot: cornersDotType.value,
                    isFgGradient: isFgGradient,
                    fgColor: fgColorInput.value,
                    fgGrad1: fgGradColor1.value,
                    fgGrad2: fgGradColor2.value,
                    gradType: fgGradType.value,
                    gradAngle: fgGradAngle.value,
                    bgColor: bgColorInput.value,
                    clearBg: logoClearBg.checked,
                    logoSize: logoSize.value,
                    selectedPresetName: selectedPresetName,
                    uploadedLogo: uploadedLogoDataUrl
                }
            }
        };

        historyList = getHistory();
        
        // Remove duplicate items with identical content to keep history clean
        historyList = historyList.filter(item => item.content !== qrData);

        // Prepend to list
        historyList.unshift(newItem);

        // Keep maximum 20 items to respect localStorage limits (usually 5MB)
        if (historyList.length > 20) {
            historyList.pop();
        }

        localStorage.setItem("qrcraft_history", JSON.stringify(historyList));
        renderHistory();
    }

    function renderHistory() {
        historyList = getHistory();
        historyCountBadge.textContent = historyList.length;
        
        // Clear items
        const itemCards = historyItemsContainer.querySelectorAll(".history-card");
        itemCards.forEach(c => c.remove());

        if (historyList.length === 0) {
            emptyHistoryMsg.style.display = "flex";
            clearHistoryBtn.style.display = "none";
            return;
        }

        emptyHistoryMsg.style.display = "none";
        clearHistoryBtn.style.display = "flex";

        historyList.forEach(item => {
            const card = document.createElement("div");
            card.className = "history-card";
            card.dataset.id = item.id;
            
            // Format printable title
            let displayTitle = item.content;
            if (displayTitle.startsWith("WIFI:")) {
                const match = displayTitle.match(/S:([^;]+)/);
                displayTitle = `WiFi: ${match ? match[1] : "Wireless"}`;
            } else if (displayTitle.startsWith("mailto:")) {
                const match = displayTitle.match(/mailto:([^?]+)/);
                displayTitle = `Email: ${match ? match[1] : "Mail"}`;
            } else if (displayTitle.startsWith("tel:")) {
                displayTitle = `Phone: ${displayTitle.substring(4)}`;
            }

            card.innerHTML = `
                <div class="history-card-thumb">
                    <img src="${item.thumbnail}" alt="QR Thumbnail">
                </div>
                <div class="history-card-details">
                    <span class="content-preview">${displayTitle}</span>
                    <div class="card-meta">
                        <span class="timestamp">${item.timestamp}</span>
                        <div class="card-meta-actions">
                            <button class="btn-load-history" title="Edit in Studio"><i class="fa-solid fa-wand-magic-sparkles"></i> Edit</button>
                            <button class="btn-download-history" title="Download PNG"><i class="fa-solid fa-download"></i></button>
                            <button class="btn-delete-item" title="Delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            `;

            // Attach event listeners to card elements
            card.querySelector(".btn-load-history").addEventListener("click", () => {
                loadHistoryItem(item);
                closeHistoryDrawer();
            });

            card.querySelector(".btn-download-history").addEventListener("click", () => {
                const link = document.createElement("a");
                link.download = `qrcraft_${item.id}.png`;
                link.href = item.thumbnail;
                link.click();
            });

            card.querySelector(".btn-delete-item").addEventListener("click", () => {
                deleteHistoryItem(item.id);
            });

            historyItemsContainer.appendChild(card);
        });
    }

    function loadHistoryItem(item) {
        const state = item.configState;
        if (!state) return;

        // Restore content input
        const typeBtn = document.querySelector(`.type-btn[data-type="${state.contentInput.type}"]`);
        if (typeBtn) {
            typeBtn.click();
        }

        qrUrlInput.value = state.contentInput.url || "";
        qrTextInput.value = state.contentInput.text || "";
        wifiSsid.value = state.contentInput.wifiSsid || "";
        wifiPassword.value = state.contentInput.wifiPassword || "";
        if (state.contentInput.wifiEncryption) wifiEncryption.value = state.contentInput.wifiEncryption;
        emailAddress.value = state.contentInput.emailAddress || "";
        emailSubject.value = state.contentInput.emailSubject || "";
        emailBody.value = state.contentInput.emailBody || "";
        phoneNumber.value = state.contentInput.phone || "";

        // Restore styling options
        if (state.styling.dots) dotsType.value = state.styling.dots;
        if (state.styling.cornersSquare) cornersSquareType.value = state.styling.cornersSquare;
        if (state.styling.cornersDot) cornersDotType.value = state.styling.cornersDot;

        // Colors
        bgColorInput.value = state.styling.bgColor || "#ffffff";
        bgColorText.value = state.styling.bgColor || "#ffffff";
        // Reset preset backgrounds active style
        presetBgBtns.forEach(b => {
            if (b.dataset.color === state.styling.bgColor) b.classList.add("active");
            else b.classList.remove("active");
        });

        isFgGradient = state.styling.isFgGradient || false;
        if (isFgGradient) {
            fgColorGradientBtn.click();
            fgGradColor1.value = state.styling.fgGrad1 || "#6366f1";
            fgGradColor1Text.value = state.styling.fgGrad1 || "#6366f1";
            fgGradColor2.value = state.styling.fgGrad2 || "#a855f7";
            fgGradColor2Text.value = state.styling.fgGrad2 || "#a855f7";
            if (state.styling.gradType) fgGradType.value = state.styling.gradType;
            if (state.styling.gradAngle) fgGradAngle.value = state.styling.gradAngle;
        } else {
            fgColorSolidBtn.click();
            fgColorInput.value = state.styling.fgColor || "#000000";
            fgColorText.value = state.styling.fgColor || "#000000";
        }

        // Restore logo branding
        selectedPresetName = state.styling.selectedPresetName || "none";
        uploadedLogoDataUrl = state.styling.uploadedLogo || "";

        presetIconBtns.forEach(btn => {
            if (btn.dataset.preset === selectedPresetName) btn.classList.add("active");
            else btn.classList.remove("active");
        });

        if (uploadedLogoDataUrl) {
            selectedLogoType = "upload";
            logoFilename.textContent = "imported_logo.png";
            logoThumbImg.src = uploadedLogoDataUrl;
            logoInfoCard.classList.remove("hidden");
            logoDropzone.style.display = "none";
        } else if (selectedPresetName !== "none") {
            selectedLogoType = "preset";
            logoInfoCard.classList.add("hidden");
            logoDropzone.style.display = "block";
        } else {
            selectedLogoType = "none";
            logoInfoCard.classList.add("hidden");
            logoDropzone.style.display = "block";
        }

        if (state.styling.logoSize) {
            logoSize.value = state.styling.logoSize;
            logoSizeVal.textContent = `${Math.round(state.styling.logoSize * 100)}%`;
        }
        logoClearBg.checked = state.styling.clearBg !== false;

        showToast("QR Template loaded into studio!");
        updateQR();
    }

    function deleteHistoryItem(id) {
        historyList = getHistory().filter(item => item.id !== id);
        localStorage.setItem("qrcraft_history", JSON.stringify(historyList));
        renderHistory();
        showToast("Item deleted from history");
    }

    function clearAllHistory() {
        if (confirm("Are you sure you want to permanently clear your generation history?")) {
            localStorage.setItem("qrcraft_history", JSON.stringify([]));
            renderHistory();
            showToast("History cleared");
        }
    }

    // Toggle Drawer Open/Close
    function openHistoryDrawer() {
        historyDrawer.classList.add("active");
        historyDrawerOverlay.classList.add("active");
        renderHistory();
    }

    function closeHistoryDrawer() {
        historyDrawer.classList.remove("active");
        historyDrawerOverlay.classList.remove("active");
    }

    toggleHistoryBtn.addEventListener("click", openHistoryDrawer);
    closeHistoryBtn.addEventListener("click", closeHistoryDrawer);
    historyDrawerOverlay.addEventListener("click", closeHistoryDrawer);
    clearHistoryBtn.addEventListener("click", clearAllHistory);

    // -------------------------------------------------------------
    // QR Code Scanning Interface (html5-qrcode)
    // -------------------------------------------------------------
    scanModes.forEach(btn => {
        btn.addEventListener("click", () => {
            scanModes.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const mode = btn.dataset.scanMode;
            scanGroups.forEach(g => g.classList.remove("active"));
            
            const targetGroup = document.getElementById(`scan-group-${mode}`);
            if (targetGroup) targetGroup.classList.add("active");

            // Stop scanner if switching to file scan
            if (mode === "file") {
                stopScanner();
            }
        });
    });

    // Start Camera Stream
    startCameraBtn.addEventListener("click", startScanner);
    stopCameraBtn.addEventListener("click", stopScanner);

    function startScanner() {
        cameraPrompt.classList.add("hidden");
        stopCameraBtn.classList.remove("hidden");
        scanResultCard.classList.add("hidden");

        html5QrScanner = new Html5Qrcode("camera-reader");
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        html5QrScanner.start(
            { facingMode: "environment" }, 
            config,
            (decodedText) => {
                handleScanSuccess(decodedText);
                stopScanner(); // Stop camera once detected
            },
            (errorMessage) => {
                // Verbose scanning logs - skip showing to user
            }
        ).catch(err => {
            console.error("Camera access error:", err);
            showToast("Unable to access camera. Check browser permissions.", true);
            stopScanner();
        });
    }

    function stopScanner() {
        cameraPrompt.classList.remove("hidden");
        stopCameraBtn.classList.add("hidden");
        
        if (html5QrScanner) {
            html5QrScanner.stop().then(() => {
                html5QrScanner = null;
            }).catch(err => {
                console.error("Failed to stop scanner:", err);
            });
        }
    }

    // Set Up static file drop zone for scanning
    setupDragAndDrop(scanFileDropzone, scanFileInput, handleFileScan);

    function handleFileScan(file) {
        if (!file.type.match("image.*")) {
            showToast("Please upload an image file.", true);
            return;
        }

        scanResultCard.classList.add("hidden");
        const tempReader = new Html5Qrcode("camera-reader"); // Instantiating temporary parser
        
        tempReader.scanFile(file, true)
            .then(decodedText => {
                handleScanSuccess(decodedText);
                tempReader.clear();
            })
            .catch(err => {
                console.error("File scanning error:", err);
                showToast("Could not find any readable QR code in this image.", true);
                tempReader.clear();
            });
    }

    function handleScanSuccess(text) {
        scanResultText.textContent = text;
        scanResultCard.classList.remove("hidden");
        showToast("QR code decoded successfully!");

        // Show open URL button if it is a link
        if (/^https?:\/\//i.test(text.trim())) {
            scanOpenLinkBtn.href = text.trim();
            scanOpenLinkBtn.classList.remove("hidden");
        } else {
            scanOpenLinkBtn.classList.add("hidden");
        }
    }

    // Scan Actions
    scanCopyBtn.addEventListener("click", () => {
        const text = scanResultText.textContent;
        navigator.clipboard.writeText(text).then(() => {
            showToast("Scanned text copied to clipboard!");
        });
    });

    scanImportBtn.addEventListener("click", () => {
        const text = scanResultText.textContent;
        
        // Go to Studio tab
        const studioTab = document.querySelector('.nav-tab[data-tab="generate-tab"]');
        if (studioTab) studioTab.click();

        // Feed text to active content input
        const typeBtn = document.querySelector(".type-btn.active");
        const type = typeBtn ? typeBtn.dataset.type : "url";

        if (type === "url" && /^https?:\/\//i.test(text)) {
            qrUrlInput.value = text;
        } else if (type === "text" || type === "url") {
            // Import URL or text
            if (/^https?:\/\//i.test(text)) {
                document.querySelector('.type-btn[data-type="url"]').click();
                qrUrlInput.value = text;
            } else {
                document.querySelector('.type-btn[data-type="text"]').click();
                qrTextInput.value = text;
            }
        } else {
            // If they are on wifi/email/phone, switch to text and paste it
            document.querySelector('.type-btn[data-type="text"]').click();
            qrTextInput.value = text;
        }

        updateQR();
        showToast("Imported successfully into Studio!");
    });

    // -------------------------------------------------------------
    // Initial Render & State Sync
    // -------------------------------------------------------------
    // Set presets values
    logoSizeVal.textContent = `${Math.round(logoSize.value * 100)}%`;
    renderHistory();
    initQR();
});
