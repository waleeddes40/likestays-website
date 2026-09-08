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
    let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

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

        localStorage.setItem(STORAGE_KEY, currentLang);
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
            const modalHtml = `
                <div id="global-language-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4">
                    <div class="bg-white w-full max-w-sm rounded-[32px] p-5 shadow-2xl border border-gray-200 space-y-3 text-left">
                        <div class="flex justify-between items-center border-b border-gray-150 pb-2">
                            <div>
                                <span class="text-xs font-black uppercase tracking-wider text-[#0D4E2F]">Select Language</span>
                                <p class="text-[8.5px] text-gray-400 font-semibold">40+ International Languages</p>
                            </div>
                            <button type="button" onclick="window.LanguageEngine.closeModal()" class="text-xs font-bold text-gray-400 hover:text-black cursor-pointer">✕</button>
                        </div>
                        <input type="text" id="lang-search-box" oninput="window.LanguageEngine.filter(this.value)" placeholder="🔍 Search language..." class="w-full text-xs font-bold p-2.5 bg-[#F2F5F3] rounded-xl border-none outline-none text-[#0D4E2F]">
                        <div id="lang-modal-list-container" class="max-h-72 overflow-y-auto space-y-1"></div>
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
            <button type="button" onclick="window.LanguageEngine.selectLanguage('${l.code}')" class="w-full text-left p-2.5 rounded-xl hover:bg-[#F2F5F3] flex items-center justify-between text-xs font-bold text-gray-700 cursor-pointer ${l.code === currentLang ? 'bg-emerald-50 border border-emerald-200' : ''}">
                <div class="flex items-center space-x-2.5">
                    <span class="text-base">${l.flag}</span>
                    <div>
                        <span class="text-gray-900 block leading-tight">${l.name}</span>
                        <span class="text-[9px] text-gray-400 font-medium">${l.native}</span>
                    </div>
                </div>
                ${l.code === currentLang ? '<span class="text-[#0D4E2F] text-xs font-black">✓</span>' : ''}
            </button>
        `).join('');
    }

    window.addEventListener('DOMContentLoaded', () => {
        const lang = GLOBAL_LANGUAGES.find(l => l.code === currentLang) || GLOBAL_LANGUAGES[0];
        
        const html = document.getElementById('html-root') || document.documentElement;
        html.setAttribute('lang', lang.code);
        html.setAttribute('dir', lang.dir);

        updateHeaderLangDisplay(lang);
        injectTranslationCore();

        const headerBtn = document.getElementById('header-lang-btn');
        if (headerBtn) headerBtn.onclick = openLanguageModal;
    });

    window.LanguageEngine = {
        languages: GLOBAL_LANGUAGES,
        openModal: openLanguageModal,
        closeModal: closeLanguageModal,
        filter: renderLangList,
        selectLanguage: function(code) {
            closeLanguageModal();
            applyLangInstant(code, true);
        }
    };

})();
