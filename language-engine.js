/**
 * =========================================================================
 * 🌐 LIKESTAYS GLOBAL TRANSLATION & LOCALIZATION ENGINE (language-engine.js)
 * 40+ WORLD LANGUAGES • FULL RTL ENGINE • PERMANENT CACHE • HOST & GUEST
 * =========================================================================
 */

(function () {
    const GLOBAL_LANGUAGES = [
        { code: "en", name: "English", native: "English", flag: "🇺🇸", dir: "ltr" },
        { code: "ar", name: "Arabic", native: "العربية", flag: "🇸🇦", dir: "rtl" },
        { code: "ur", name: "Urdu", native: "اردو", flag: "🇵🇰", dir: "rtl" },
        { code: "es", name: "Spanish", native: "Español", flag: "🇪🇸", dir: "ltr" },
        { code: "fr", name: "French", native: "Français", flag: "🇫🇷", dir: "ltr" },
        { code: "de", name: "German", native: "Deutsch", flag: "🇩🇪", dir: "ltr" },
        { code: "zh-CN", name: "Chinese (Simplified)", native: "简体中文", flag: "🇨🇳", dir: "ltr" },
        { code: "ru", name: "Russian", native: "Русский", flag: "🇷🇺", dir: "ltr" },
        { code: "tr", name: "Turkish", native: "Türkçe", flag: "🇹🇷", dir: "ltr" },
        { code: "it", name: "Italian", native: "Italiano", flag: "🇮🇹", dir: "ltr" },
        { code: "pt", name: "Portuguese", native: "Português", flag: "🇵🇹", dir: "ltr" },
        { code: "fa", name: "Persian", native: "فارسی", flag: "🇮🇷", dir: "rtl" },
        { code: "ja", name: "Japanese", native: "日本語", flag: "🇯🇵", dir: "ltr" },
        { code: "ko", name: "Korean", native: "한국어", flag: "🇰🇷", dir: "ltr" },
        { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
        { code: "id", name: "Indonesian", native: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
        { code: "ms", name: "Malay", native: "Bahasa Melayu", flag: "🇲🇾", dir: "ltr" },
        { code: "th", name: "Thai", native: "ไทย", flag: "🇹🇭", dir: "ltr" },
        { code: "vi", name: "Vietnamese", native: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
        { code: "nl", name: "Dutch", native: "Nederlands", flag: "🇳🇱", dir: "ltr" },
        { code: "sv", name: "Swedish", native: "Svenska", flag: "🇸🇪", dir: "ltr" },
        { code: "pl", name: "Polish", native: "Polski", flag: "🇵🇱", dir: "ltr" },
        { code: "no", name: "Norwegian", native: "Norsk", flag: "🇳🇴", dir: "ltr" },
        { code: "da", name: "Danish", native: "Dansk", flag: "🇩🇰", dir: "ltr" },
        { code: "fi", name: "Finnish", native: "Suomi", flag: "🇫🇮", dir: "ltr" },
        { code: "el", name: "Greek", native: "Ελληνικά", flag: "🇬🇷", dir: "ltr" },
        { code: "he", name: "Hebrew", native: "עברית", flag: "🇮🇱", dir: "rtl" },
        { code: "bn", name: "Bengali", native: "বাংলা", flag: "🇧🇩", dir: "ltr" },
        { code: "ro", name: "Romanian", native: "Română", flag: "🇷🇴", dir: "ltr" },
        { code: "cs", name: "Czech", native: "Čeština", flag: "🇨🇿", dir: "ltr" },
        { code: "hu", name: "Hungarian", native: "Magyar", flag: "🇭🇺", dir: "ltr" },
        { code: "uk", name: "Ukrainian", native: "Українська", flag: "🇺🇦", dir: "ltr" },
        { code: "sw", name: "Swahili", native: "Kiswahili", flag: "🇰🇪", dir: "ltr" },
        { code: "tl", name: "Filipino", native: "Tagalog", flag: "🇵🇭", dir: "ltr" }
    ];

    const STORAGE_KEY = 'likestays_selected_lang';
    let currentLang = 'en';
    try { currentLang = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}

    // 文/A translate icon (same one used in the site menus)
    const LANG_ICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="11" height="11" rx="2.5"/><path d="M5 6.2h5.2M7.6 4.8v1.4M6 11c1.8-1 3-2.7 3.5-4.8M6.3 8.2c.6 1.5 1.7 2.6 3.2 3.2"/><rect x="10.5" y="10.5" width="11" height="11" rx="2.5" fill="#fff"/><path d="M13 19l2.8-6.5 2.8 6.5M14 17h3.6"/></svg>';

    // Drawer styling — same look as the Search / Filter / Currency drawers (Inter, white, terracotta accent, right side)
    function injectLangStyles() {
        if (document.getElementById('ls-lang-style')) return;
        const st = document.createElement('style');
        st.id = 'ls-lang-style';
        st.textContent = `
            @keyframes lsLangIn{from{transform:translateX(100%)}to{transform:none}}
            #global-language-modal{position:fixed;inset:0;z-index:99999;display:flex;justify-content:flex-end;background:rgba(0,0,0,.45);backdrop-filter:blur(3px)}
            #global-language-modal.hidden{display:none}
            #global-language-modal .ls-lang-panel{width:82%;max-width:400px;height:100%;background:#fff;box-shadow:-8px 0 30px rgba(0,0,0,.2);display:flex;flex-direction:column;animation:lsLangIn .22s ease-out;font-family:Inter,system-ui,sans-serif;direction:ltr;text-align:left}
            #global-language-modal .ls-lang-head{display:flex;justify-content:space-between;align-items:center;padding:calc(env(safe-area-inset-top,0px) + 14px) 14px 12px 18px;border-bottom:1px solid #e5e7eb}
            #global-language-modal .ls-lang-title{display:flex;align-items:center;gap:9px;font:700 18px Inter,sans-serif;color:#111827}
            #global-language-modal .ls-lang-x{width:34px;height:34px;border:0;background:none;font-size:18px;font-weight:700;color:#111827;cursor:pointer;border-radius:8px}
            #global-language-modal .ls-lang-sub{font:500 11px Inter,sans-serif;color:#6b7280;margin:2px 0 0 31px}
            #global-language-modal .ls-lang-search{margin:12px 14px 6px;padding:11px 12px;border:1px solid #e5e7eb;border-radius:10px;font:500 13px Inter,sans-serif;color:#111827;outline:none;background:#fff}
            #global-language-modal .ls-lang-search:focus{border-color:#D97757}
            #lang-modal-list-container{flex:1;overflow-y:auto;padding:4px 10px 24px}
            #lang-modal-list-container button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 10px;border:0;background:none;border-radius:10px;cursor:pointer;font-family:Inter,sans-serif;text-align:left}
            #lang-modal-list-container button:active{background:#f3f4f6}
            #lang-modal-list-container button.on{background:#FBEAE3}
            #lang-modal-list-container .ls-l-name{display:block;font:600 14px Inter,sans-serif;color:#111827;line-height:1.2}
            #lang-modal-list-container .ls-l-native{display:block;font:500 11.5px Inter,sans-serif;color:#6b7280;margin-top:1px}
            #lang-modal-list-container .ls-l-flag{font-size:20px}
            #lang-modal-list-container .ls-l-tick{color:#D97757;font-weight:800;font-size:15px}
        `;
        document.head.appendChild(st);
    }

    function injectTranslationCore() {
        if (document.getElementById('google-translate-script')) return;

        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame.skiptranslate, .goog-te-banner-frame { display: none !important; }
            body { top: 0px !important; }
            .goog-tooltip, #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
            .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
        `;
        document.head.appendChild(style);

        if (!document.getElementById('google_translate_element')) {
            const div = document.createElement('div');
            div.id = 'google_translate_element';
            div.style.display = 'none';
            document.body.appendChild(div);
        }

        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: GLOBAL_LANGUAGES.map(l => l.code).join(','),
                autoDisplay: false
            }, 'google_translate_element');

            if (currentLang && currentLang !== 'en') {
                applyLangInstant(currentLang, false);
            }
        };

        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
    }

    function applyLangInstant(code, shouldReload = true) {
        const lang = GLOBAL_LANGUAGES.find(l => l.code.toLowerCase() === code.toLowerCase()) || GLOBAL_LANGUAGES[0];
        currentLang = lang.code;

        try { localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) {}
        document.cookie = `googtrans=/en/${currentLang}; path=/; domain=${window.location.hostname}`;
        document.cookie = `googtrans=/en/${currentLang}; path=/;`;

        const html = document.getElementById('html-root') || document.documentElement;
        html.setAttribute('lang', currentLang);
        html.setAttribute('dir', lang.dir);

        updateHeaderLangDisplay(lang);

        if (shouldReload) {
            const selectEl = document.querySelector('.goog-te-combo');
            if (selectEl) {
                selectEl.value = currentLang;
                selectEl.dispatchEvent(new Event('change'));
            } else {
                window.location.reload();
            }
        }
    }

    function updateHeaderLangDisplay(lang) {
        const flag = document.getElementById('header-lang-flag');
        const text = document.getElementById('header-lang-text');
        if (flag) flag.innerText = lang.flag;
        if (text) text.innerText = lang.code.toUpperCase();
    }

    function openLanguageModal() {
        let modal = document.getElementById('global-language-modal');
        if (!modal) {
            injectLangStyles();
            const modalHtml = `
                <div id="global-language-modal" class="notranslate" translate="no" onclick="if(event.target===this)window.LanguageEngine.closeModal()">
                    <div class="ls-lang-panel">
                        <div class="ls-lang-head">
                            <div>
                                <span class="ls-lang-title">${LANG_ICON} Language</span>
                                <p class="ls-lang-sub">${GLOBAL_LANGUAGES.length} global languages</p>
                            </div>
                            <button type="button" class="ls-lang-x" aria-label="Close" onclick="window.LanguageEngine.closeModal()">✕</button>
                        </div>
                        <input type="text" id="lang-search-box" class="ls-lang-search" oninput="window.LanguageEngine.filter(this.value)" placeholder="Search language...">
                        <div id="lang-modal-list-container"></div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            modal = document.getElementById('global-language-modal');
        }
        renderLangList();
        modal.classList.remove('hidden');
    }

    function closeLanguageModal() {
        const modal = document.getElementById('global-language-modal');
        if (modal) modal.classList.add('hidden');
    }

    function renderLangList(query = '') {
        const container = document.getElementById('lang-modal-list-container');
        if (!container) return;
        const q = query.toLowerCase().trim();

        const filtered = GLOBAL_LANGUAGES.filter(l => 
            l.name.toLowerCase().includes(q) || 
            l.native.toLowerCase().includes(q) || 
            l.code.toLowerCase().includes(q)
        );

        container.innerHTML = filtered.map(l => `
            <button type="button" onclick="window.LanguageEngine.selectLanguage('${l.code}')" class="${l.code === currentLang ? 'on' : ''}">
                <span style="display:flex;align-items:center;gap:12px">
                    <span class="ls-l-flag">${l.flag}</span>
                    <span><span class="ls-l-name">${l.name}</span><span class="ls-l-native">${l.native}</span></span>
                </span>
                ${l.code === currentLang ? '<span class="ls-l-tick">✓</span>' : ''}
            </button>
        `).join('');
    }

    window.addEventListener('DOMContentLoaded', () => {
        const lang = GLOBAL_LANGUAGES.find(l => l.code === currentLang) || GLOBAL_LANGUAGES[0];
        
        const html = document.getElementById('html-root') || document.documentElement;
        html.setAttribute('lang', lang.code);
        html.setAttribute('dir', lang.dir);

        updateHeaderLangDisplay(lang);
        injectLangStyles();
        injectTranslationCore();

        // Only a button that has no handler of its own is wired — pages with their own language drawer keep it
        const headerBtn = document.getElementById('header-lang-btn');
        if (headerBtn && !headerBtn.getAttribute('onclick')) headerBtn.onclick = openLanguageModal;
    });

    window.LanguageEngine = {
        languages: GLOBAL_LANGUAGES,
        icon: LANG_ICON,
        current: function () { return currentLang; },
        openModal: openLanguageModal,
        closeModal: closeLanguageModal,
        filter: renderLangList,
        selectLanguage: function(code) {
            closeLanguageModal();
            applyLangInstant(code, true);
        }
    };

})();
