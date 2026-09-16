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
        EN: { explore: "Explore", map: "Map", booking: "Booking", highlights: "Highlights" },
        UR: { explore: "دریافت", map: "نقشہ", booking: "بکنگ", highlights: "نمایاں" },
        AR: { explore: "استكشف", map: "الخريطة", booking: "الحجز", highlights: "أبرز" }
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

    // 🆕 چھوٹی جگہ (deal بیجز) کے لیے مختصر قیمت — بڑی رقم کو K/M میں دکھاتی ہے
    function formatCompactPrice(amountInUSD) {
        if (!amountInUSD || isNaN(amountInUSD)) return `${activeLocale.symbol}0`;
        const converted = amountInUSD * activeLocale.rate;
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

    // 🎯 4-BUTTON GUEST BOTTOM NAV (MESSAGES PERMANENTLY REMOVED)
    function renderBottomNav(activeTab = 'explore') {
        const existing = document.getElementById('likestays-global-bottom-nav');
        if (existing) existing.remove();

        const lang = activeLocale.language || 'EN';
        const labels = NAV_TRANSLATIONS[lang] || NAV_TRANSLATIONS['EN'];

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
        formatCompactPrice: formatCompactPrice,
        saveSearchSession: saveSearchSession,
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