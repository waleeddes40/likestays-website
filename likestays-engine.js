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
        { code: "ZAR", symbol: "R ", name: "South African Rand", flag: "🇿🇦", rate: 18.3 },
        { code: "EGP", symbol: "EGP ", name: "Egyptian Pound", flag: "🇪🇬", rate: 47.5 },
        { code: "JOD", symbol: "JOD ", name: "Jordanian Dinar", flag: "🇯🇴", rate: 0.71 },
        { code: "LBP", symbol: "LBP ", name: "Lebanese Pound", flag: "🇱🇧", rate: 89500 },
        { code: "ILS", symbol: "₪", name: "Israeli Shekel", flag: "🇮🇱", rate: 3.7 },
        { code: "IQD", symbol: "IQD ", name: "Iraqi Dinar", flag: "🇮🇶", rate: 1310 },
        { code: "IRR", symbol: "IRR ", name: "Iranian Rial", flag: "🇮🇷", rate: 42000 },
        { code: "SYP", symbol: "SYP ", name: "Syrian Pound", flag: "🇸🇾", rate: 13000 },
        { code: "YER", symbol: "YER ", name: "Yemeni Rial", flag: "🇾🇪", rate: 250 },
        { code: "AFN", symbol: "AFN ", name: "Afghan Afghani", flag: "🇦🇫", rate: 70.0 },
        { code: "BDT", symbol: "৳", name: "Bangladeshi Taka", flag: "🇧🇩", rate: 119.5 },
        { code: "NPR", symbol: "NPR ", name: "Nepalese Rupee", flag: "🇳🇵", rate: 133.6 },
        { code: "LKR", symbol: "Rs ", name: "Sri Lankan Rupee", flag: "🇱🇰", rate: 302.0 },
        { code: "MMK", symbol: "K ", name: "Myanmar Kyat", flag: "🇲🇲", rate: 2100 },
        { code: "KHR", symbol: "៛", name: "Cambodian Riel", flag: "🇰🇭", rate: 4100 },
        { code: "LAK", symbol: "₭", name: "Lao Kip", flag: "🇱🇦", rate: 21700 },
        { code: "VND", symbol: "₫", name: "Vietnamese Dong", flag: "🇻🇳", rate: 25400 },
        { code: "IDR", symbol: "Rp ", name: "Indonesian Rupiah", flag: "🇮🇩", rate: 16200 },
        { code: "PHP", symbol: "₱", name: "Philippine Peso", flag: "🇵🇭", rate: 58.5 },
        { code: "MOP", symbol: "MOP ", name: "Macanese Pataca", flag: "🇲🇴", rate: 8.05 },
        { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar", flag: "🇭🇰", rate: 7.82 },
        { code: "TWD", symbol: "NT$", name: "Taiwan Dollar", flag: "🇹🇼", rate: 32.4 },
        { code: "KRW", symbol: "₩", name: "South Korean Won", flag: "🇰🇷", rate: 1385 },
        { code: "KZT", symbol: "₸", name: "Kazakhstani Tenge", flag: "🇰🇿", rate: 480 },
        { code: "UZS", symbol: "UZS ", name: "Uzbekistani Som", flag: "🇺🇿", rate: 12750 },
        { code: "TJS", symbol: "TJS ", name: "Tajikistani Somoni", flag: "🇹🇯", rate: 10.6 },
        { code: "KGS", symbol: "с", name: "Kyrgyzstani Som", flag: "🇰🇬", rate: 87.5 },
        { code: "TMT", symbol: "TMT ", name: "Turkmenistani Manat", flag: "🇹🇲", rate: 3.5 },
        { code: "MNT", symbol: "₮", name: "Mongolian Tugrik", flag: "🇲🇳", rate: 3450 },
        { code: "AZN", symbol: "₼", name: "Azerbaijani Manat", flag: "🇦🇿", rate: 1.7 },
        { code: "GEL", symbol: "₾", name: "Georgian Lari", flag: "🇬🇪", rate: 2.7 },
        { code: "AMD", symbol: "֏", name: "Armenian Dram", flag: "🇦🇲", rate: 387.0 },
        { code: "RUB", symbol: "₽", name: "Russian Ruble", flag: "🇷🇺", rate: 92.0 },
        { code: "UAH", symbol: "₴", name: "Ukrainian Hryvnia", flag: "🇺🇦", rate: 41.2 },
        { code: "BYN", symbol: "Br ", name: "Belarusian Ruble", flag: "🇧🇾", rate: 3.28 },
        { code: "MDL", symbol: "MDL ", name: "Moldovan Leu", flag: "🇲🇩", rate: 17.8 },
        { code: "PLN", symbol: "zł", name: "Polish Zloty", flag: "🇵🇱", rate: 3.98 },
        { code: "CZK", symbol: "Kč", name: "Czech Koruna", flag: "🇨🇿", rate: 23.2 },
        { code: "HUF", symbol: "Ft", name: "Hungarian Forint", flag: "🇭🇺", rate: 362.0 },
        { code: "RON", symbol: "lei", name: "Romanian Leu", flag: "🇷🇴", rate: 4.58 },
        { code: "BGN", symbol: "лв", name: "Bulgarian Lev", flag: "🇧🇬", rate: 1.8 },
        { code: "HRK", symbol: "kn", name: "Croatian Kuna", flag: "🇭🇷", rate: 6.93 },
        { code: "RSD", symbol: "дин", name: "Serbian Dinar", flag: "🇷🇸", rate: 107.5 },
        { code: "ALL", symbol: "L", name: "Albanian Lek", flag: "🇦🇱", rate: 92.0 },
        { code: "MKD", symbol: "ден", name: "Macedonian Denar", flag: "🇲🇰", rate: 56.5 },
        { code: "BAM", symbol: "KM", name: "Bosnia Convertible Mark", flag: "🇧🇦", rate: 1.8 },
        { code: "ISK", symbol: "kr", name: "Icelandic Krona", flag: "🇮🇸", rate: 138.0 },
        { code: "NOK", symbol: "kr", name: "Norwegian Krone", flag: "🇳🇴", rate: 10.6 },
        { code: "SEK", symbol: "kr", name: "Swedish Krona", flag: "🇸🇪", rate: 10.4 },
        { code: "DKK", symbol: "kr", name: "Danish Krone", flag: "🇩🇰", rate: 6.86 },
        { code: "XOF", symbol: "CFA", name: "West African CFA Franc", flag: "🇸🇳", rate: 605.0 },
        { code: "XAF", symbol: "FCFA", name: "Central African CFA Franc", flag: "🇨🇲", rate: 605.0 },
        { code: "GHS", symbol: "GH₵", name: "Ghanaian Cedi", flag: "🇬🇭", rate: 15.2 },
        { code: "NGN", symbol: "₦", name: "Nigerian Naira", flag: "🇳🇬", rate: 1550 },
        { code: "KES", symbol: "KSh", name: "Kenyan Shilling", flag: "🇰🇪", rate: 129.0 },
        { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling", flag: "🇹🇿", rate: 2580 },
        { code: "UGX", symbol: "USh", name: "Ugandan Shilling", flag: "🇺🇬", rate: 3720 },
        { code: "ETB", symbol: "Br ", name: "Ethiopian Birr", flag: "🇪🇹", rate: 118.0 },
        { code: "RWF", symbol: "FRw", name: "Rwandan Franc", flag: "🇷🇼", rate: 1330 },
        { code: "ZMW", symbol: "ZK", name: "Zambian Kwacha", flag: "🇿🇲", rate: 26.8 },
        { code: "MZN", symbol: "MT", name: "Mozambican Metical", flag: "🇲🇿", rate: 63.9 },
        { code: "BWP", symbol: "P", name: "Botswana Pula", flag: "🇧🇼", rate: 13.6 },
        { code: "NAD", symbol: "N$", name: "Namibian Dollar", flag: "🇳🇦", rate: 18.3 },
        { code: "MUR", symbol: "₨", name: "Mauritian Rupee", flag: "🇲🇺", rate: 46.5 },
        { code: "MAD", symbol: "MAD ", name: "Moroccan Dirham", flag: "🇲🇦", rate: 9.95 },
        { code: "DZD", symbol: "DZD ", name: "Algerian Dinar", flag: "🇩🇿", rate: 134.5 },
        { code: "TND", symbol: "DT", name: "Tunisian Dinar", flag: "🇹🇳", rate: 3.11 },
        { code: "LYD", symbol: "LYD ", name: "Libyan Dinar", flag: "🇱🇾", rate: 4.85 },
        { code: "SDG", symbol: "SDG ", name: "Sudanese Pound", flag: "🇸🇩", rate: 601.0 },
        { code: "XCD", symbol: "EC$", name: "East Caribbean Dollar", flag: "🇦🇬", rate: 2.7 },
        { code: "BBD", symbol: "Bds$", name: "Barbadian Dollar", flag: "🇧🇧", rate: 2.0 },
        { code: "BSD", symbol: "B$", name: "Bahamian Dollar", flag: "🇧🇸", rate: 1.0 },
        { code: "BZD", symbol: "BZ$", name: "Belize Dollar", flag: "🇧🇿", rate: 2.01 },
        { code: "BMD", symbol: "BD$", name: "Bermudian Dollar", flag: "🇧🇲", rate: 1.0 },
        { code: "KYD", symbol: "CI$", name: "Cayman Islands Dollar", flag: "🇰🇾", rate: 0.833 },
        { code: "JMD", symbol: "J$", name: "Jamaican Dollar", flag: "🇯🇲", rate: 158.0 },
        { code: "TTD", symbol: "TT$", name: "Trinidad & Tobago Dollar", flag: "🇹🇹", rate: 6.78 },
        { code: "DOP", symbol: "RD$", name: "Dominican Peso", flag: "🇩🇴", rate: 60.5 },
        { code: "HTG", symbol: "G", name: "Haitian Gourde", flag: "🇭🇹", rate: 132.0 },
        { code: "CUP", symbol: "$MN", name: "Cuban Peso", flag: "🇨🇺", rate: 24.0 },
        { code: "GTQ", symbol: "Q", name: "Guatemalan Quetzal", flag: "🇬🇹", rate: 7.72 },
        { code: "HNL", symbol: "L", name: "Honduran Lempira", flag: "🇭🇳", rate: 24.9 },
        { code: "NIO", symbol: "C$", name: "Nicaraguan Cordoba", flag: "🇳🇮", rate: 36.8 },
        { code: "CRC", symbol: "₡", name: "Costa Rican Colon", flag: "🇨🇷", rate: 505.0 },
        { code: "PAB", symbol: "B/.", name: "Panamanian Balboa", flag: "🇵🇦", rate: 1.0 },
        { code: "MXN", symbol: "MX$", name: "Mexican Peso", flag: "🇲🇽", rate: 18.3 },
        { code: "GYD", symbol: "G$", name: "Guyanese Dollar", flag: "🇬🇾", rate: 209.0 },
        { code: "SRD", symbol: "SRD ", name: "Surinamese Dollar", flag: "🇸🇷", rate: 30.5 },
        { code: "BRL", symbol: "R$", name: "Brazilian Real", flag: "🇧🇷", rate: 5.65 },
        { code: "ARS", symbol: "AR$", name: "Argentine Peso", flag: "🇦🇷", rate: 990.0 },
        { code: "CLP", symbol: "CL$", name: "Chilean Peso", flag: "🇨🇱", rate: 945.0 },
        { code: "COP", symbol: "CO$", name: "Colombian Peso", flag: "🇨🇴", rate: 4100 },
        { code: "PEN", symbol: "S/", name: "Peruvian Sol", flag: "🇵🇪", rate: 3.75 },
        { code: "BOB", symbol: "Bs.", name: "Bolivian Boliviano", flag: "🇧🇴", rate: 6.91 },
        { code: "PYG", symbol: "₲", name: "Paraguayan Guarani", flag: "🇵🇾", rate: 7750 },
        { code: "UYU", symbol: "$U", name: "Uruguayan Peso", flag: "🇺🇾", rate: 41.5 },
        { code: "VES", symbol: "Bs.S", name: "Venezuelan Bolivar", flag: "🇻🇪", rate: 42.0 },
        { code: "FJD", symbol: "FJ$", name: "Fijian Dollar", flag: "🇫🇯", rate: 2.27 },
        { code: "PGK", symbol: "K", name: "Papua New Guinea Kina", flag: "🇵🇬", rate: 3.95 },
        { code: "WST", symbol: "WS$", name: "Samoan Tala", flag: "🇼🇸", rate: 2.78 },
        { code: "TOP", symbol: "T$", name: "Tongan Pa'anga", flag: "🇹🇴", rate: 2.38 },
        { code: "VUV", symbol: "VT", name: "Vanuatu Vatu", flag: "🇻🇺", rate: 119.5 },
        { code: "SBD", symbol: "SI$", name: "Solomon Islands Dollar", flag: "🇸🇧", rate: 8.45 },
        { code: "XPF", symbol: "₣", name: "CFP Franc", flag: "🇵🇫", rate: 109.5 },
        { code: "BND", symbol: "B$", name: "Brunei Dollar", flag: "🇧🇳", rate: 1.35 },
        { code: "MVR", symbol: "Rf", name: "Maldivian Rufiyaa", flag: "🇲🇻", rate: 15.4 },
        { code: "BTN", symbol: "Nu.", name: "Bhutanese Ngultrum", flag: "🇧🇹", rate: 83.5 },
        { code: "MGA", symbol: "Ar", name: "Malagasy Ariary", flag: "🇲🇬", rate: 4550 },
        { code: "MWK", symbol: "MK", name: "Malawian Kwacha", flag: "🇲🇼", rate: 1740 },
        { code: "ZWL", symbol: "Z$", name: "Zimbabwean Dollar", flag: "🇿🇼", rate: 26.0 },
        { code: "AOA", symbol: "Kz", name: "Angolan Kwanza", flag: "🇦🇴", rate: 920.0 },
        { code: "CDF", symbol: "FC", name: "Congolese Franc", flag: "🇨🇩", rate: 2850 },
        { code: "XDR", symbol: "XDR", name: "IMF Special Drawing Rights", flag: "🏳️", rate: 0.75 },
        { code: "SZL", symbol: "E", name: "Eswatini Lilangeni", flag: "🇸🇿", rate: 18.3 },
        { code: "LSL", symbol: "L", name: "Lesotho Loti", flag: "🇱🇸", rate: 18.3 },
        { code: "SCR", symbol: "SR", name: "Seychellois Rupee", flag: "🇸🇨", rate: 13.7 },
        { code: "SOS", symbol: "Sh.So.", name: "Somali Shilling", flag: "🇸🇴", rate: 571.0 },
        { code: "DJF", symbol: "Fdj", name: "Djiboutian Franc", flag: "🇩🇯", rate: 178.0 },
        { code: "ERN", symbol: "Nfk", name: "Eritrean Nakfa", flag: "🇪🇷", rate: 15.0 },
        { code: "KMF", symbol: "CF", name: "Comorian Franc", flag: "🇰🇲", rate: 453.0 },
        { code: "STN", symbol: "Db", name: "São Tomé Dobra", flag: "🇸🇹", rate: 22.5 },
        { code: "CVE", symbol: "$", name: "Cape Verdean Escudo", flag: "🇨🇻", rate: 101.5 },
        { code: "GMD", symbol: "D", name: "Gambian Dalasi", flag: "🇬🇲", rate: 70.0 },
        { code: "GNF", symbol: "FG", name: "Guinean Franc", flag: "🇬🇳", rate: 8600 },
        { code: "SLL", symbol: "Le", name: "Sierra Leonean Leone", flag: "🇸🇱", rate: 22600 },
        { code: "LRD", symbol: "L$", name: "Liberian Dollar", flag: "🇱🇷", rate: 194.0 },
        { code: "MRU", symbol: "UM", name: "Mauritanian Ouguiya", flag: "🇲🇷", rate: 39.8 },
        { code: "SSP", symbol: "SSP", name: "South Sudanese Pound", flag: "🇸🇸", rate: 4500 },
        { code: "ANG", symbol: "ƒ", name: "Netherlands Antillean Guilder", flag: "🇨🇼", rate: 1.79 }

    ];

    const NAV_TRANSLATIONS = {
        EN: { search: "Search", explore: "Explore", map: "Map", booking: "Booking", highlights: "Highlights" },
        UR: { search: "تلاش", explore: "دریافت", map: "نقشہ", booking: "بکنگ", highlights: "نمایاں" },
        AR: { search: "بحث", explore: "استكشف", map: "الخريطة", booking: "الحجز", highlights: "أبرز" }
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

    // amount کو اس کی اپنی (ہوسٹ کی چنی ہوئی) کرنسی سے ڈالر میں بدلتا ہے
    function toUSD(amount, fromCode) {
        if (!amount || isNaN(amount)) return 0;
        const from = WORLD_CURRENCIES.find(c => c.code === fromCode) || WORLD_CURRENCIES[0]; // default USD
        return amount / (from.rate || 1);
    }

    // amount کسی بھی کرنسی (fromCode) میں ہو سکتی ہے — پہلے USD، پھر دیکھنے والے کی چنی ہوئی کرنسی میں بدلتی ہے
    function formatPrice(amount, fromCode) {
        if (!amount || isNaN(amount)) return `${activeLocale.symbol}0`;
        const usd = fromCode ? toUSD(amount, fromCode) : amount; // fromCode نہ ہو تو پرانے رویے کی طرح amount کو ہی USD مانا جائے
        const converted = usd * activeLocale.rate;
        return `${activeLocale.symbol}${Math.round(converted).toLocaleString()}`;
    }

    // 🆕 چھوٹی جگہ (deal بیجز) کے لیے مختصر قیمت — بڑی رقم کو K/M میں دکھاتی ہے
    function formatCompactPrice(amount, fromCode) {
        if (!amount || isNaN(amount)) return `${activeLocale.symbol}0`;
        const usd = fromCode ? toUSD(amount, fromCode) : amount;
        const converted = usd * activeLocale.rate;
        if (converted >= 1000000) return `${activeLocale.symbol}${(converted / 1000000).toFixed(1)}M`;
        if (converted >= 1000) return `${activeLocale.symbol}${(converted / 1000).toFixed(1)}K`;
        return `${activeLocale.symbol}${Math.round(converted).toLocaleString()}`;
    }

    // 🆕 موجودہ سرچ (منزل، تاریخیں، مہمان) کو localStorage میں محفوظ کرنا — تاکہ صفحہ دوبارہ کھلنے پر یاد رہے
    function saveSearchSession(data) {
        try {
            localStorage.setItem('likestays_last_search_session', JSON.stringify(data));
        } catch (e) {}
    }

    function getSearchSession() {
        try { return JSON.parse(localStorage.getItem('likestays_last_search_session') || '{}') || {}; } catch (e) { return {}; }
    }

    // 🎯 4-BUTTON GUEST BOTTOM NAV (MESSAGES PERMANENTLY REMOVED)
    function renderBottomNav(activeTab = 'explore', opts) {
        const existing = document.getElementById('likestays-global-bottom-nav');
        if (existing) existing.remove();

        const lang = activeLocale.language || 'EN';
        const labels = NAV_TRANSLATIONS[lang] || NAV_TRANSLATIONS['EN'];

        // 🎬 Explore-feed style: one floating white pill = 4 tabs + Book Now (enabled per page via window.__lsNavOptions = {bookNow:true})
        opts = opts || window.__lsNavOptions || null;
        // 🧭 Home (card-list) style: light bottom bar with 3 tabs → Explore | Search | Map  (enable via window.__lsNavOptions = {threeTab:true})
        if (opts && opts.threeTab) {
            const ic = {
                explore: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
                search: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
                map: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 7 9 4zM9 4v13M15 7v12.5"/></svg>'
            };
            const tabs = [
                { id: 'explore', url: 'index.html', label: labels.explore },
                { id: 'search', onclick: 'openAirbnbSearchModal()', label: labels.search || 'Search' },
                { id: 'map', url: 'map.html', label: labels.map }
            ];
            const tStyle = (on) => `text-decoration:none;background:${on ? '#FBEAE3' : 'none'};border:0;padding:3px 18px;border-radius:14px;display:flex;flex-direction:column;align-items:center;gap:1px;color:${on ? '#D97757' : '#8b93a1'};font-size:10.5px;font-weight:${on ? '600' : '500'};cursor:pointer;font-family:Inter,'Plus Jakarta Sans',sans-serif`;
            const html3 = `
                <div id="likestays-global-bottom-nav" style="position:fixed;left:0;right:0;bottom:0;z-index:210;background:#fff;border-top:1px solid #e5e7eb;padding:4px 8px calc(env(safe-area-inset-bottom,0px) + 4px);display:flex;justify-content:space-around;align-items:center">
                    ${tabs.map(t => t.onclick ? `
                        <button type="button" onclick="${t.onclick}" style="${tStyle(false)}">${ic[t.id]}<span class="notranslate">${t.label}</span></button>` : `
                        <a href="${t.url}" style="${tStyle(t.id === activeTab)}">${ic[t.id]}<span class="notranslate">${t.label}</span></a>`).join('')}
                </div>`;
            document.body.insertAdjacentHTML('beforeend', html3);
            return;
        }

        if (opts && opts.bookNow) {
            const navIcons = {
                search: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg>',
                explore: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/></svg>',
                map: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>'
            };
            const items = [
                { id: 'search', icon: navIcons.search, label: (lang === 'EN' ? 'Search' : labels.search || 'Search'), onclick: "openAirbnbSearchModal()" },
                { id: 'explore', url: 'index.html', icon: navIcons.explore, label: labels.explore },
                { id: 'map', url: 'map.html', icon: navIcons.map, label: labels.map }
            ];
            const itemStyle = (active) => `text-decoration:none;background:none;border:0;padding:5px 10px;display:flex;flex-direction:column;align-items:center;gap:3px;color:${active ? '#F5D98C' : 'rgba(255,255,255,.78)'};font-size:9px;font-weight:700;letter-spacing:.4px;flex:0 0 auto;cursor:pointer`;
            const html = `
                <div id="likestays-global-bottom-nav" style="position:fixed;left:0;right:0;bottom:0;z-index:210;background:linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,0));border:0;border-radius:0;padding:12px 14px calc(env(safe-area-inset-bottom,0px) + 10px);display:flex;justify-content:space-between;align-items:center;font-family:'Plus Jakarta Sans',sans-serif">
                    <div style="display:flex;gap:6px;flex:1;min-width:0;justify-content:space-around">
                        ${items.map(t => t.onclick ? `
                            <button type="button" onclick="${t.onclick}" style="${itemStyle(false)}">
                                ${t.icon}<span class="notranslate" style="text-transform:uppercase">${t.label}</span>
                            </button>` : `
                            <a href="${t.url}" style="${itemStyle(t.id === activeTab)}">
                                ${t.icon}<span class="notranslate" style="text-transform:uppercase">${t.label}</span>
                            </a>`).join('')}
                    </div>
                    <button type="button" id="ls-book-now-btn" ${window.__lsBookNowDisabled ? 'disabled' : ''} onclick="window.__lsBookNow && window.__lsBookNow()" style="opacity:${window.__lsBookNowDisabled ? '.45' : '1'};margin-left:10px;padding:11px 18px;border-radius:999px;border:1px solid rgba(255,255,255,.25);font-size:11px;font-weight:800;letter-spacing:.3px;background:linear-gradient(135deg,#D97757,#C2613F);color:#fff;white-space:nowrap;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35)">Book Now</button>
                </div>`;
            document.body.insertAdjacentHTML('beforeend', html);
            return;
        }

        const tabsConfig = [
            { id: 'explore', url: 'index.html', label: labels.explore, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>` },
            { id: 'map', url: 'map.html', label: labels.map, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>` },
            { id: 'booking', url: 'my-bookings.html', label: labels.booking, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>` },
            { id: 'highlights', url: 'highlights.html', label: labels.highlights, iconSvg: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>` }
        ];

        const navHtml = `
            <div id="likestays-global-bottom-nav" class="fixed bottom-3 left-1/2 -translate-x-1/2 w-[86%] max-w-sm bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.14)] border border-gray-200/90 px-3 py-2 z-50 flex justify-between items-center">
                ${tabsConfig.map(tab => {
                    const isActive = tab.id === activeTab;
                    return `
                        <a href="${tab.url}" class="flex flex-col items-center justify-center space-y-1 flex-1 py-1 cursor-pointer group transition-all">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#111827] text-white shadow-md' : 'text-gray-400 group-hover:text-[#111827]'}">
                                ${tab.iconSvg}
                            </div>
                            <span class="text-[9px] font-black tracking-tight notranslate ${isActive ? 'text-[#111827]' : 'text-gray-400'}">
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
                                <span class="text-xs font-black uppercase tracking-wider text-[#111827]">Select Global Currency</span>
                                <p class="text-[8.5px] text-gray-400 font-semibold">150 Worldwide Currencies</p>
                            </div>
                            <button type="button" onclick="window.LikeStaysEngine.closeCurrencyModal()" class="text-xs font-bold text-gray-400 hover:text-black">✕</button>
                        </div>
                        <input type="text" id="engine-currency-search" oninput="window.LikeStaysEngine.filterCurrencies(this.value)" placeholder="🔍 Search USD, EUR, GBP, AED..." class="w-full text-xs font-bold p-2.5 bg-[#F6F6F7] rounded-xl border-none outline-none text-[#111827]">
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
            <button type="button" onclick="window.LikeStaysEngine.selectCurrency('${c.code}')" class="w-full text-left p-2.5 rounded-xl hover:bg-[#F6F6F7] flex items-center justify-between text-xs font-bold text-gray-700 cursor-pointer">
                <div class="flex items-center space-x-2">
                    <span class="text-base">${c.flag}</span>
                    <span>${c.name} (${c.code})</span>
                </div>
                <span class="text-[#111827] font-black">${c.symbol}</span>
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
            // پیج ری لوڈ نہ ہو، جہاں یوزر ہے وہیں رہے — اگر صفحے نے یہ ہُک دیا ہو تو صرف قیمتیں خود بخود اپڈیٹ ہوں
            if (typeof window.__lsOnLocaleChange === 'function') { window.__lsOnLocaleChange(); }
            else { window.location.reload(); }
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
        formatCompactPrice: formatCompactPrice,
        // number in the viewer's chosen currency from an amount in `fromCode`
        convert: function (amount, fromCode) { const usd = fromCode ? toUSD(amount, fromCode) : amount; return usd * activeLocale.rate; },
        // inverse: viewer-currency amount -> `toCode` currency
        fromViewer: function (amount, toCode) { const to = WORLD_CURRENCIES.find(c => c.code === toCode) || WORLD_CURRENCIES[0]; return (amount / (activeLocale.rate || 1)) * (to.rate || 1); },
        saveSearchSession: saveSearchSession,
        getSearchSession: getSearchSession,
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

        // ہوسٹ ڈیش بورڈ، ایڈ لسٹنگ، مائی لسٹنگ اور ڈیٹیلز/بکنگ پیج پر گیسٹ باٹم نیو بار نہ کھلے
        if (!path.includes('host') && !path.includes('add-listing') && !path.includes('my-listings') && !path.includes('details') && !path.includes('booking-confirmation')) {
            renderBottomNav(currentTab);
        }
    });

})();


/**
 * =========================================================================
 * 🧭 LIKESTAYS GEO HELPER (free – no API key, no paid service, no permission popup)
 *  • country()  : user's country code, instantly (cached → timezone → browser language)
 *  • detect()   : same, but first asks a FREE IP→country service (api.country.is, ipwho.is, geojs) and caches it for 7 days
 *  • popular()  : 4-5 popular cities of that country (world list if the country is unknown)
 *  • geocode()  : place name → coordinates (built-in city list first, then free OpenStreetMap Nominatim)
 * =========================================================================
 */
(function () {
    // code : [country name, centre lat, centre lng, map zoom, [[city, lat, lng], ...]]
    const C = {
        PK: ['Pakistan', 30.4, 69.3, 5, [['Lahore', 31.5204, 74.3587], ['Islamabad', 33.6844, 73.0479], ['Karachi', 24.8607, 67.0011], ['Murree', 33.9070, 73.3943], ['Swat', 35.2227, 72.4258]]],
        IN: ['India', 22.5, 79, 5, [['Delhi', 28.6139, 77.2090], ['Mumbai', 19.0760, 72.8777], ['Goa', 15.2993, 74.1240], ['Jaipur', 26.9124, 75.7873], ['Bengaluru', 12.9716, 77.5946]]],
        BD: ['Bangladesh', 23.7, 90.3, 7, [['Dhaka', 23.8103, 90.4125], ["Cox's Bazar", 21.4272, 92.0058], ['Chittagong', 22.3569, 91.7832], ['Sylhet', 24.8949, 91.8687], ['Khulna', 22.8456, 89.5403]]],
        LK: ['Sri Lanka', 7.8, 80.7, 7, [['Colombo', 6.9271, 79.8612], ['Kandy', 7.2906, 80.6337], ['Galle', 6.0535, 80.2210], ['Ella', 6.8667, 81.0466], ['Negombo', 7.2083, 79.8358]]],
        NP: ['Nepal', 28.2, 84.1, 7, [['Kathmandu', 27.7172, 85.3240], ['Pokhara', 28.2096, 83.9856], ['Chitwan', 27.5291, 84.3542], ['Lumbini', 27.4833, 83.2767], ['Nagarkot', 27.7172, 85.5200]]],
        AE: ['United Arab Emirates', 24.5, 54.6, 7, [['Dubai', 25.2048, 55.2708], ['Abu Dhabi', 24.4539, 54.3773], ['Sharjah', 25.3463, 55.4209], ['Ras Al Khaimah', 25.6741, 55.9804], ['Fujairah', 25.1288, 56.3265]]],
        SA: ['Saudi Arabia', 24, 45, 5, [['Riyadh', 24.7136, 46.6753], ['Jeddah', 21.4858, 39.1925], ['Makkah', 21.3891, 39.8579], ['Madinah', 24.5247, 39.5692], ['Dammam', 26.4207, 50.0888]]],
        QA: ['Qatar', 25.3, 51.2, 9, [['Doha', 25.2854, 51.5310], ['Lusail', 25.4200, 51.4900], ['Al Wakrah', 25.1715, 51.6034], ['Al Khor', 25.6804, 51.4968]]],
        KW: ['Kuwait', 29.3, 47.7, 9, [['Kuwait City', 29.3759, 47.9774], ['Salmiya', 29.3340, 48.0760], ['Hawalli', 29.3328, 48.0286], ['Jahra', 29.3375, 47.6581]]],
        OM: ['Oman', 21.5, 56, 6, [['Muscat', 23.5880, 58.3829], ['Salalah', 17.0151, 54.0924], ['Nizwa', 22.9333, 57.5333], ['Sohar', 24.3464, 56.7075], ['Sur', 22.5667, 59.5289]]],
        BH: ['Bahrain', 26.1, 50.55, 10, [['Manama', 26.2285, 50.5860], ['Muharraq', 26.2572, 50.6119], ['Riffa', 26.1300, 50.5550]]],
        TR: ['Türkiye', 39, 35, 6, [['Istanbul', 41.0082, 28.9784], ['Antalya', 36.8969, 30.7133], ['Ankara', 39.9334, 32.8597], ['Izmir', 38.4237, 27.1428], ['Bodrum', 37.0344, 27.4305]]],
        EG: ['Egypt', 26.8, 30.8, 6, [['Cairo', 30.0444, 31.2357], ['Sharm El Sheikh', 27.9158, 34.3300], ['Hurghada', 27.2579, 33.8116], ['Alexandria', 31.2001, 29.9187], ['Luxor', 25.6872, 32.6396]]],
        MA: ['Morocco', 31.8, -6.5, 6, [['Marrakech', 31.6295, -7.9811], ['Casablanca', 33.5731, -7.5898], ['Rabat', 34.0209, -6.8416], ['Tangier', 35.7595, -5.8340], ['Fes', 34.0181, -5.0078]]],
        JO: ['Jordan', 31.2, 36.5, 7, [['Amman', 31.9454, 35.9284], ['Aqaba', 29.5320, 35.0063], ['Petra', 30.3285, 35.4444], ['Dead Sea', 31.5590, 35.4732]]],
        GB: ['United Kingdom', 54, -2.5, 5, [['London', 51.5072, -0.1276], ['Manchester', 53.4808, -2.2426], ['Edinburgh', 55.9533, -3.1883], ['Birmingham', 52.4862, -1.8904], ['Liverpool', 53.4084, -2.9916]]],
        IE: ['Ireland', 53.2, -8, 7, [['Dublin', 53.3498, -6.2603], ['Galway', 53.2707, -9.0568], ['Cork', 51.8985, -8.4756], ['Killarney', 52.0599, -9.5044]]],
        FR: ['France', 46.6, 2.4, 5, [['Paris', 48.8566, 2.3522], ['Nice', 43.7102, 7.2620], ['Lyon', 45.7640, 4.8357], ['Marseille', 43.2965, 5.3698], ['Bordeaux', 44.8378, -0.5792]]],
        DE: ['Germany', 51.1, 10.4, 6, [['Berlin', 52.5200, 13.4050], ['Munich', 48.1351, 11.5820], ['Hamburg', 53.5511, 9.9937], ['Frankfurt', 50.1109, 8.6821], ['Cologne', 50.9375, 6.9603]]],
        ES: ['Spain', 40.2, -3.7, 6, [['Madrid', 40.4168, -3.7038], ['Barcelona', 41.3874, 2.1686], ['Valencia', 39.4699, -0.3763], ['Seville', 37.3891, -5.9845], ['Malaga', 36.7213, -4.4214]]],
        IT: ['Italy', 42.5, 12.5, 6, [['Rome', 41.9028, 12.4964], ['Milan', 45.4642, 9.1900], ['Venice', 45.4408, 12.3155], ['Florence', 43.7696, 11.2558], ['Naples', 40.8518, 14.2681]]],
        PT: ['Portugal', 39.5, -8, 6, [['Lisbon', 38.7223, -9.1393], ['Porto', 41.1579, -8.6291], ['Faro', 37.0194, -7.9304], ['Funchal', 32.6669, -16.9241]]],
        NL: ['Netherlands', 52.2, 5.3, 7, [['Amsterdam', 52.3676, 4.9041], ['Rotterdam', 51.9244, 4.4777], ['The Hague', 52.0705, 4.3007], ['Utrecht', 52.0907, 5.1214]]],
        CH: ['Switzerland', 46.8, 8.2, 7, [['Zurich', 47.3769, 8.5417], ['Geneva', 46.2044, 6.1432], ['Lucerne', 47.0502, 8.3093], ['Interlaken', 46.6863, 7.8632]]],
        AT: ['Austria', 47.5, 14.5, 7, [['Vienna', 48.2082, 16.3738], ['Salzburg', 47.8095, 13.0550], ['Innsbruck', 47.2692, 11.4041], ['Graz', 47.0707, 15.4395]]],
        GR: ['Greece', 38.5, 23.5, 6, [['Athens', 37.9838, 23.7275], ['Santorini', 36.3932, 25.4615], ['Mykonos', 37.4467, 25.3289], ['Crete', 35.2401, 24.8093], ['Thessaloniki', 40.6401, 22.9444]]],
        US: ['United States', 39.5, -98.5, 4, [['New York', 40.7128, -74.0060], ['Los Angeles', 34.0522, -118.2437], ['Miami', 25.7617, -80.1918], ['Las Vegas', 36.1699, -115.1398], ['San Francisco', 37.7749, -122.4194]]],
        CA: ['Canada', 52, -95, 4, [['Toronto', 43.6532, -79.3832], ['Vancouver', 49.2827, -123.1207], ['Montreal', 45.5017, -73.5673], ['Calgary', 51.0447, -114.0719], ['Banff', 51.1784, -115.5708]]],
        MX: ['Mexico', 23.6, -102.5, 5, [['Mexico City', 19.4326, -99.1332], ['Cancun', 21.1619, -86.8515], ['Tulum', 20.2114, -87.4654], ['Playa del Carmen', 20.6296, -87.0739], ['Guadalajara', 20.6597, -103.3496]]],
        BR: ['Brazil', -14.2, -51.9, 4, [['Rio de Janeiro', -22.9068, -43.1729], ['São Paulo', -23.5505, -46.6333], ['Salvador', -12.9777, -38.5016], ['Florianópolis', -27.5954, -48.5480], ['Brasília', -15.7939, -47.8828]]],
        AR: ['Argentina', -38.4, -63.6, 4, [['Buenos Aires', -34.6037, -58.3816], ['Mendoza', -32.8895, -68.8458], ['Bariloche', -41.1335, -71.3103], ['Córdoba', -31.4201, -64.1888], ['Salta', -24.7821, -65.4232]]],
        AU: ['Australia', -25.3, 134, 4, [['Sydney', -33.8688, 151.2093], ['Melbourne', -37.8136, 144.9631], ['Gold Coast', -28.0167, 153.4000], ['Brisbane', -27.4698, 153.0251], ['Perth', -31.9505, 115.8605]]],
        NZ: ['New Zealand', -41, 174, 5, [['Auckland', -36.8485, 174.7633], ['Queenstown', -45.0312, 168.6626], ['Wellington', -41.2866, 174.7756], ['Rotorua', -38.1368, 176.2497], ['Christchurch', -43.5321, 172.6362]]],
        ZA: ['South Africa', -29, 24.5, 5, [['Cape Town', -33.9249, 18.4241], ['Johannesburg', -26.2041, 28.0473], ['Durban', -29.8587, 31.0218], ['Pretoria', -25.7479, 28.2293], ['Stellenbosch', -33.9321, 18.8602]]],
        NG: ['Nigeria', 9.1, 8.7, 6, [['Lagos', 6.5244, 3.3792], ['Abuja', 9.0765, 7.3986], ['Port Harcourt', 4.8156, 7.0498], ['Ibadan', 7.3775, 3.9470], ['Kano', 12.0022, 8.5919]]],
        KE: ['Kenya', 0.2, 37.9, 6, [['Nairobi', -1.2921, 36.8219], ['Mombasa', -4.0435, 39.6682], ['Diani Beach', -4.2796, 39.5946], ['Nakuru', -0.3031, 36.0800], ['Naivasha', -0.7172, 36.4310]]],
        MY: ['Malaysia', 4.2, 109, 5, [['Kuala Lumpur', 3.1390, 101.6869], ['Penang', 5.4164, 100.3327], ['Langkawi', 6.3500, 99.8000], ['Johor Bahru', 1.4927, 103.7414], ['Kota Kinabalu', 5.9804, 116.0735]]],
        SG: ['Singapore', 1.35, 103.82, 11, [['Singapore', 1.3521, 103.8198], ['Sentosa', 1.2494, 103.8303], ['Marina Bay', 1.2816, 103.8636], ['Orchard', 1.3048, 103.8318]]],
        TH: ['Thailand', 15.2, 101, 6, [['Bangkok', 13.7563, 100.5018], ['Phuket', 7.8804, 98.3923], ['Chiang Mai', 18.7883, 98.9853], ['Pattaya', 12.9236, 100.8825], ['Krabi', 8.0863, 98.9063]]],
        ID: ['Indonesia', -2.5, 118, 4, [['Bali', -8.4095, 115.1889], ['Jakarta', -6.2088, 106.8456], ['Yogyakarta', -7.7956, 110.3695], ['Bandung', -6.9175, 107.6191], ['Lombok', -8.6500, 116.3249]]],
        PH: ['Philippines', 12.9, 122.8, 6, [['Manila', 14.5995, 120.9842], ['Cebu', 10.3157, 123.8854], ['Boracay', 11.9674, 121.9248], ['Palawan', 9.8349, 118.7384], ['Davao', 7.1907, 125.4553]]],
        VN: ['Vietnam', 16, 106.5, 5, [['Hanoi', 21.0285, 105.8542], ['Ho Chi Minh City', 10.8231, 106.6297], ['Da Nang', 16.0544, 108.2022], ['Nha Trang', 12.2388, 109.1967], ['Phu Quoc', 10.2899, 103.9840]]],
        JP: ['Japan', 36.2, 138.2, 5, [['Tokyo', 35.6762, 139.6503], ['Osaka', 34.6937, 135.5023], ['Kyoto', 35.0116, 135.7681], ['Sapporo', 43.0618, 141.3545], ['Okinawa', 26.2124, 127.6809]]],
        KR: ['South Korea', 36.4, 127.9, 7, [['Seoul', 37.5665, 126.9780], ['Busan', 35.1796, 129.0756], ['Jeju', 33.4996, 126.5312], ['Incheon', 37.4563, 126.7052], ['Gyeongju', 35.8562, 129.2247]]],
        CN: ['China', 35.9, 104.2, 4, [['Beijing', 39.9042, 116.4074], ['Shanghai', 31.2304, 121.4737], ['Guangzhou', 23.1291, 113.2644], ['Shenzhen', 22.5431, 114.0579], ['Chengdu', 30.5728, 104.0668]]],
        HK: ['Hong Kong', 22.35, 114.15, 11, [['Hong Kong', 22.3193, 114.1694], ['Kowloon', 22.3167, 114.1833], ['Tsim Sha Tsui', 22.2988, 114.1722], ['Central', 22.2820, 114.1580]]],
        MV: ['Maldives', 3.2, 73.2, 7, [['Malé', 4.1755, 73.5093], ['Maafushi', 3.9420, 73.4900], ['Hulhumalé', 4.2167, 73.5400], ['Ari Atoll', 3.8, 72.8]]],
        RU: ['Russia', 61.5, 95, 3, [['Moscow', 55.7558, 37.6173], ['Saint Petersburg', 59.9311, 30.3609], ['Sochi', 43.5855, 39.7231], ['Kazan', 55.7887, 49.1221]]],
        AZ: ['Azerbaijan', 40.3, 47.7, 7, [['Baku', 40.4093, 49.8671], ['Gabala', 40.9814, 47.8458], ['Sheki', 41.1919, 47.1706], ['Ganja', 40.6828, 46.3606]]],
        UZ: ['Uzbekistan', 41.4, 64.6, 6, [['Tashkent', 41.2995, 69.2401], ['Samarkand', 39.6270, 66.9750], ['Bukhara', 39.7747, 64.4286], ['Khiva', 41.3784, 60.3600]]],
        GE: ['Georgia', 42.2, 43.5, 7, [['Tbilisi', 41.7151, 44.8271], ['Batumi', 41.6168, 41.6367], ['Kutaisi', 42.2679, 42.6946], ['Kazbegi', 42.6586, 44.6436]]]
    };
    const GLOBAL = [['Dubai', 25.2048, 55.2708], ['Istanbul', 41.0082, 28.9784], ['London', 51.5072, -0.1276], ['Paris', 48.8566, 2.3522], ['New York', 40.7128, -74.0060]];

    // browser time-zone → country (only needs the zones of the countries above)
    const TZ = {
        'Asia/Karachi': 'PK', 'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN', 'Asia/Dhaka': 'BD', 'Asia/Colombo': 'LK', 'Asia/Kathmandu': 'NP', 'Asia/Katmandu': 'NP',
        'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA', 'Asia/Qatar': 'QA', 'Asia/Kuwait': 'KW', 'Asia/Muscat': 'OM', 'Asia/Bahrain': 'BH', 'Europe/Istanbul': 'TR', 'Asia/Istanbul': 'TR',
        'Africa/Cairo': 'EG', 'Africa/Casablanca': 'MA', 'Asia/Amman': 'JO', 'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE', 'Europe/Busingen': 'DE',
        'Europe/Madrid': 'ES', 'Atlantic/Canary': 'ES', 'Europe/Rome': 'IT', 'Europe/Lisbon': 'PT', 'Atlantic/Madeira': 'PT', 'Atlantic/Azores': 'PT', 'Europe/Amsterdam': 'NL',
        'Europe/Zurich': 'CH', 'Europe/Vienna': 'AT', 'Europe/Athens': 'GR',
        'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US', 'America/Los_Angeles': 'US', 'America/Phoenix': 'US', 'America/Anchorage': 'US', 'America/Detroit': 'US',
        'America/Indiana/Indianapolis': 'US', 'America/Boise': 'US', 'Pacific/Honolulu': 'US',
        'America/Toronto': 'CA', 'America/Vancouver': 'CA', 'America/Edmonton': 'CA', 'America/Winnipeg': 'CA', 'America/Halifax': 'CA', 'America/Montreal': 'CA', 'America/Regina': 'CA', 'America/St_Johns': 'CA',
        'America/Mexico_City': 'MX', 'America/Cancun': 'MX', 'America/Tijuana': 'MX', 'America/Monterrey': 'MX',
        'America/Sao_Paulo': 'BR', 'America/Fortaleza': 'BR', 'America/Manaus': 'BR', 'America/Bahia': 'BR', 'America/Recife': 'BR',
        'America/Argentina/Buenos_Aires': 'AR', 'America/Buenos_Aires': 'AR',
        'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU', 'Australia/Perth': 'AU', 'Australia/Adelaide': 'AU', 'Australia/Darwin': 'AU', 'Australia/Hobart': 'AU',
        'Pacific/Auckland': 'NZ', 'Africa/Johannesburg': 'ZA', 'Africa/Lagos': 'NG', 'Africa/Nairobi': 'KE',
        'Asia/Kuala_Lumpur': 'MY', 'Asia/Kuching': 'MY', 'Asia/Singapore': 'SG', 'Asia/Bangkok': 'TH', 'Asia/Jakarta': 'ID', 'Asia/Makassar': 'ID', 'Asia/Jayapura': 'ID',
        'Asia/Manila': 'PH', 'Asia/Ho_Chi_Minh': 'VN', 'Asia/Saigon': 'VN', 'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR', 'Asia/Shanghai': 'CN', 'Asia/Urumqi': 'CN', 'Asia/Chongqing': 'CN',
        'Asia/Hong_Kong': 'HK', 'Indian/Maldives': 'MV', 'Europe/Moscow': 'RU', 'Asia/Yekaterinburg': 'RU', 'Asia/Novosibirsk': 'RU', 'Asia/Vladivostok': 'RU',
        'Asia/Baku': 'AZ', 'Asia/Tashkent': 'UZ', 'Asia/Samarkand': 'UZ', 'Asia/Tbilisi': 'GE'
    };

    const KEY = 'likestays_geo_v1', TTL = 7 * 24 * 3600 * 1000, GCKEY = 'likestays_geo_cache_v1';
    const ok = c => typeof c === 'string' && /^[A-Z]{2}$/.test(c);

    function cached() {
        try { const o = JSON.parse(localStorage.getItem(KEY) || 'null'); if (o && ok(o.c) && Date.now() - o.t < TTL) return o.c; } catch (e) {}
        return null;
    }
    function fromTimezone() {
        try { return TZ[Intl.DateTimeFormat().resolvedOptions().timeZone] || null; } catch (e) { return null; }
    }
    function fromLanguage() {
        try {
            const ls = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
            for (const l of ls) { const p = String(l || '').split('-'); const r = (p[p.length - 1] || '').toUpperCase(); if (p.length > 1 && C[r]) return r; }
        } catch (e) {}
        return null;
    }
    function country() { return cached() || fromTimezone() || fromLanguage() || null; }

    function fetchJSON(url, ms) {
        const ctl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
        const timer = setTimeout(() => ctl && ctl.abort(), ms);
        return fetch(url, { signal: ctl ? ctl.signal : undefined, cache: 'no-store' })
            .then(r => { clearTimeout(timer); if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
            .catch(e => { clearTimeout(timer); throw e; });
    }
    const IP_SOURCES = [
        () => fetchJSON('https://api.country.is/', 3500).then(d => d && d.country),
        () => fetchJSON('https://ipwho.is/', 3500).then(d => d && d.success !== false && d.country_code),
        () => fetchJSON('https://get.geojs.io/v1/ip/country.json', 3500).then(d => (Array.isArray(d) ? d[0] : d) && (Array.isArray(d) ? d[0] : d).country)
    ];
    let pending = null;
    function detect() {
        const c = cached();
        if (c) return Promise.resolve(c);
        if (pending) return pending;
        pending = (async () => {
            for (const src of IP_SOURCES) {
                try {
                    const code = String(await src() || '').toUpperCase();
                    if (ok(code)) { try { localStorage.setItem(KEY, JSON.stringify({ c: code, t: Date.now() })); } catch (e) {} return code; }
                } catch (e) { /* try next service */ }
            }
            return fromTimezone() || fromLanguage() || null;
        })();
        pending.then(() => { setTimeout(() => { pending = null; }, 60000); });
        return pending;
    }

    function data(code) {
        const d = C[code];
        return d ? { code, name: d[0], lat: d[1], lng: d[2], zoom: d[3], cities: d[4].map(x => ({ name: x[0], lat: x[1], lng: x[2] })) } : null;
    }
    function popular(code) {
        const d = data(code);
        return d ? d.cities.slice(0, 5) : GLOBAL.map(x => ({ name: x[0], lat: x[1], lng: x[2] }));
    }

    function findCity(text) {
        const q = String(text || '').toLowerCase().replace(/\s+/g, ' ').trim();
        if (q.length < 2) return null;
        let best = null, bestScore = 0;
        Object.keys(C).forEach(code => {
            const d = C[code];
            const cn = d[0].toLowerCase();
            if (q === cn || (cn.length > 4 && q.includes(cn))) { if (4 + cn.length > bestScore) { bestScore = 4 + cn.length; best = { lat: d[1], lng: d[2], zoom: d[3], name: d[0] }; } }
            d[4].forEach(c => {
                const n = c[0].toLowerCase();
                let s = 0;
                if (q === n) s = 100 + n.length;
                else if (n.length >= 3 && q.includes(n)) s = 50 + n.length;
                else if (q.length >= 3 && n.startsWith(q)) s = 10 + q.length;
                if (s > bestScore) { bestScore = s; best = { lat: c[1], lng: c[2], zoom: 12, name: c[0] }; }
            });
        });
        return best;
    }

    function geocode(text) {
        const q = String(text || '').trim();
        if (!q) return Promise.resolve(null);
        const hit = findCity(q);
        if (hit) return Promise.resolve(hit);
        let store = {};
        try { store = JSON.parse(localStorage.getItem(GCKEY) || '{}') || {}; } catch (e) {}
        const k = q.toLowerCase();
        if (store[k]) return Promise.resolve(store[k]);
        return fetchJSON('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=' + encodeURIComponent(q), 6000)
            .then(a => {
                if (!a || !a[0]) return null;
                const g = { lat: +a[0].lat, lng: +a[0].lon, zoom: 12, bbox: a[0].boundingbox ? a[0].boundingbox.map(Number) : null, name: q };
                try { store[k] = g; const ks = Object.keys(store); if (ks.length > 60) delete store[ks[0]]; localStorage.setItem(GCKEY, JSON.stringify(store)); } catch (e) {}
                return g;
            })
            .catch(() => null);
    }

    window.LikeStaysGeo = { country: country, detect: detect, data: data, popular: popular, findCity: findCity, geocode: geocode };
    window.addEventListener('DOMContentLoaded', () => { detect(); });   // warm the cache in the background
})();

