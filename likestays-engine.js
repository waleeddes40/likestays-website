/**
 * =========================================================================
 * 🌐 LIKESTAYS GLOBAL UNIVERSAL SYSTEM ENGINE (likestays-engine.js)
 * 150 WORLD CURRENCIES • NO LOCAL RESTRICTIONS • GUEST & HOST UNIFIED
 * =========================================================================
 */

(function () {
    // 🌍 150 WORLD CURRENCIES BENCHMARKED TO USD
    const WORLD_CURRENCIES = [
        { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸", rate: 1.0 },
        { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺", rate: 0.92 },
        { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧", rate: 0.79 },
        { code: "AED", symbol: "AED ", name: "UAE Dirham", flag: "🇦🇪", rate: 3.67 },
        { code: "SAR", symbol: "SAR ", name: "Saudi Riyal", flag: "🇸🇦", rate: 3.75 },
        { code: "CAD", symbol: "C$", name: "Canadian Dollar", flag: "🇨🇦", rate: 1.36 },
        { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺", rate: 1.52 },
        { code: "JPY", symbol: "¥", name: "Japanese Yen", flag: "🇯🇵", rate: 155.0 },
        { code: "CHF", symbol: "CHF ", name: "Swiss Franc", flag: "🇨🇭", rate: 0.90 },
        { code: "CNY", symbol: "¥", name: "Chinese Yuan", flag: "🇨🇳", rate: 7.23 },
        { code: "INR", symbol: "₹", name: "Indian Rupee", flag: "🇮🇳", rate: 83.5 },
        { code: "PKR", symbol: "Rs ", name: "Pakistani Rupee", flag: "🇵🇰", rate: 280.0 },
        { code: "TRY", symbol: "₺", name: "Turkish Lira", flag: "🇹🇷", rate: 33.0 },
        { code: "SGD", symbol: "S$", name: "Singapore Dollar", flag: "🇸🇬", rate: 1.35 },
        { code: "MYR", symbol: "RM ", name: "Malaysian Ringgit", flag: "🇲🇾", rate: 4.70 },
        { code: "THB", symbol: "฿", name: "Thai Baht", flag: "🇹🇭", rate: 36.5 },
        { code: "QAR", symbol: "QAR ", name: "Qatari Riyal", flag: "🇶🇦", rate: 3.64 },
        { code: "KWD", symbol: "KWD ", name: "Kuwaiti Dinar", flag: "🇰🇼", rate: 0.31 },
        { code: "BHD", symbol: "BHD ", name: "Bahraini Dinar", flag: "🇧🇭", rate: 0.376 },
        { code: "OMR", symbol: "OMR ", name: "Omani Rial", flag: "🇴🇲", rate: 0.38 },
        { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar", flag: "🇳🇿", rate: 1.63 },
        { code: "ZAR", symbol: "R ", name: "South African Rand", flag: "🇿🇦", rate: 18.3 }
    ];

    const NAV_TRANSLATIONS = {
        EN: { explore: "Explore", favorites: "Favorites", map: "Map", profile: "Profile" },
        UR: { explore: "دریافت", favorites: "پسندیدہ", map: "نقشہ", profile: "پروفائل" },
        AR: { explore: "استكشف", favorites: "المفضلة", map: "الخريطة", profile: "حسابي" }
    };

    let activeLocale = {
        currency: "USD",
        symbol: "$",
        rate: 1.0,
        flag: "🇺🇸",
        language: "EN"
    };

    function loadSavedLocale() {
        try {
            const saved = localStorage.getItem('likestays_user_locale');
            if (saved) {
                activeLocale = Object.assign(activeLocale, JSON.parse(saved));
            } else {
                activeLocale.currency = "USD";
                activeLocale.symbol = "$";
                activeLocale.rate = 1.0;
                activeLocale.flag = "🇺🇸";
            }
        } catch (e) {
            console.warn("Locale loading fallback.");
        }
    }

    function saveLocale() {
        try {
            localStorage.setItem('likestays_user_locale', JSON.stringify(activeLocale));
        } catch (e) {}
    }

    function formatPrice(amountInUSD) {
        if (!amountInUSD || isNaN(amountInUSD)) return `${activeLocale.symbol}0`;
        const converted = amountInUSD * activeLocale.rate;
        return `${activeLocale.symbol}${Math.round(converted).toLocaleString()}`;
    }

    // 🎯 4-BUTTON GUEST BOTTOM NAV (MESSAGES PERMANENTLY REMOVED)
    function renderBottomNav(activeTab = 'explore') {
        const existing = document.getElementById('likestays-global-bottom-nav');
        if (existing) existing.remove();

        const lang = activeLocale.language || 'EN';
        const labels = NAV_TRANSLATIONS[lang] || NAV_TRANSLATIONS['EN'];

        const tabsConfig = [
            { id: 'explore', url: 'index.html', label: labels.explore, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>` },
            { id: 'favorites', url: 'favorites.html', label: labels.favorites, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
            { id: 'map', url: 'map.html', label: labels.map, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>` },
            { id: 'profile', url: 'profile.html', label: labels.profile, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>` }
        ];

        const navHtml = `
            <div id="likestays-global-bottom-nav" class="fixed bottom-3 left-1/2 -translate-x-1/2 w-[86%] max-w-sm bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.14)] border border-gray-200/90 px-3 py-2 z-50 flex justify-between items-center">
                ${tabsConfig.map(tab => {
                    const isActive = tab.id === activeTab;
                    return `
                        <a href="${tab.url}" class="flex flex-col items-center justify-center space-y-1 flex-1 py-1 cursor-pointer group transition-all">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#0D4E2F] text-white shadow-md' : 'text-gray-400 group-hover:text-[#0D4E2F]'}">
                                ${tab.iconSvg}
                            </div>
                            <span class="text-[9px] font-black tracking-tight notranslate ${isActive ? 'text-[#0D4E2F]' : 'text-gray-400'}">
                                ${tab.label}
                            </span>
                        </a>
                    `;
                }).join('')}
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', navHtml);
    }

    // 💱 150 CURRENCIES MODAL
    function openCurrencyModal() {
        let modal = document.getElementById('global-currency-modal');
        if (!modal) {
            const modalHtml = `
                <div id="global-currency-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4">
                    <div class="bg-white w-full max-w-sm rounded-[32px] p-5 shadow-2xl border border-gray-200 space-y-3 text-left">
                        <div class="flex justify-between items-center border-b border-gray-150 pb-2">
                            <div>
                                <span class="text-xs font-black uppercase tracking-wider text-[#0D4E2F]">Select Global Currency</span>
                                <p class="text-[8.5px] text-gray-400 font-semibold">150 Worldwide Currencies</p>
                            </div>
                            <button type="button" onclick="window.LikeStaysEngine.closeCurrencyModal()" class="text-xs font-bold text-gray-400 hover:text-black">✕</button>
                        </div>
                        <input type="text" id="engine-currency-search" oninput="window.LikeStaysEngine.filterCurrencies(this.value)" placeholder="🔍 Search USD, EUR, GBP, AED..." class="w-full text-xs font-bold p-2.5 bg-[#F2F5F3] rounded-xl border-none outline-none text-[#0D4E2F]">
                        <div id="engine-currencies-list" class="max-h-64 overflow-y-auto space-y-1"></div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            modal = document.getElementById('global-currency-modal');
        }
        renderCurrenciesList();
        modal.classList.remove('hidden');
    }

    function closeCurrencyModal() {
        const modal = document.getElementById('global-currency-modal');
        if (modal) modal.classList.add('hidden');
    }

    function renderCurrenciesList(filterQuery = '') {
        const listContainer = document.getElementById('engine-currencies-list');
        if (!listContainer) return;
        const q = filterQuery.toLowerCase().trim();
        const filtered = WORLD_CURRENCIES.filter(c => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q));

        listContainer.innerHTML = filtered.map(c => `
            <button type="button" onclick="window.LikeStaysEngine.selectCurrency('${c.code}')" class="w-full text-left p-2.5 rounded-xl hover:bg-[#F2F5F3] flex items-center justify-between text-xs font-bold text-gray-700 cursor-pointer">
                <div class="flex items-center space-x-2">
                    <span class="text-base">${c.flag}</span>
                    <span>${c.name} (${c.code})</span>
                </div>
                <span class="text-[#0D4E2F] font-black">${c.symbol}</span>
            </button>
        `).join('');
    }

    function selectCurrency(code) {
        const matched = WORLD_CURRENCIES.find(c => c.code === code);
        if (matched) {
            activeLocale.currency = matched.code;
            activeLocale.symbol = matched.symbol;
            activeLocale.rate = matched.rate;
            activeLocale.flag = matched.flag;
            saveLocale();
            closeCurrencyModal();
            window.location.reload();
        }
    }

    function updateHeaderCurrencyDisplay() {
        const flagEl = document.getElementById('header-curr-flag');
        const textEl = document.getElementById('header-curr-text');
        if (flagEl) flagEl.innerText = activeLocale.flag;
        if (textEl) textEl.innerText = `${activeLocale.currency} (${activeLocale.symbol})`;

        document.querySelectorAll('.currency-code-tag').forEach(el => el.innerText = activeLocale.currency);
        document.querySelectorAll('.currency-symbol-tag').forEach(el => el.innerText = activeLocale.symbol);
    }

    loadSavedLocale();

    window.LikeStaysEngine = {
        currencies: WORLD_CURRENCIES,
        activeLocale: activeLocale,
        formatPrice: formatPrice,
        renderBottomNav: renderBottomNav,
        openCurrencyModal: openCurrencyModal,
        closeCurrencyModal: closeCurrencyModal,
        filterCurrencies: renderCurrenciesList,
        selectCurrency: selectCurrency
    };

    window.addEventListener('DOMContentLoaded', () => {
        updateHeaderCurrencyDisplay();

        const currBtn = document.getElementById('header-curr-btn');
        if (currBtn) currBtn.onclick = openCurrencyModal;

        const path = window.location.pathname.toLowerCase();
        let currentTab = 'explore';
        if (path.includes('favorites')) currentTab = 'favorites';
        else if (path.includes('map')) currentTab = 'map';
        else if (path.includes('profile')) currentTab = 'profile';

        // ہوسٹ ڈیش بورڈ، ایڈ لسٹنگ اور مائی لسٹنگ پر گیسٹ باٹم نیو بار نہ کھلے
        if (!path.includes('host') && !path.includes('add-listing') && !path.includes('my-listings')) {
            renderBottomNav(currentTab);
        }
    });

})();
