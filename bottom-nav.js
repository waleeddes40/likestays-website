/**
 * =========================================================================
 * 🔘 LIKESTAYS FLOATING BOTTOM NAVIGATION (bottom-nav.js)
 * =========================================================================
 * 4 Tabs: Explore, Favorites, Map, Profile (Messages Removed)
 * =========================================================================
 */

const LikeStaysNav = (function() {
    'use strict';

    const TRANSLATIONS = {
        EN: { explore: "Explore", favorites: "Favorites", map: "Map", profile: "Profile" },
        UR: { explore: "ایکسپلور", favorites: "پسندیدہ", map: "نقشہ", profile: "پروفائل" },
        AR: { explore: "استكشاف", favorites: "المفضلة", map: "الخريطة", profile: "الملف" }
    };

    let activeTabName = 'explore';

    function render(tab = 'explore') {
        activeTabName = tab;
        const oldNav = document.getElementById('likestays-global-bottom-nav');
        if (oldNav) oldNav.remove();

        const lang = (typeof LikeStaysLanguage !== 'undefined') ? LikeStaysLanguage.get().code : 'EN';
        const labels = TRANSLATIONS[lang] || TRANSLATIONS['EN'];

        // صرف 4 آپشنز (Messages ختم کر دیا گیا ہے)
        const tabs = [
            { id: 'explore', url: 'index.html', label: labels.explore || 'Explore', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>` },
            { id: 'favorites', url: 'favorites.html', label: labels.favorites || 'Favorites', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
            { id: 'map', url: 'map.html', label: labels.map || 'Map', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>` },
            { id: 'profile', url: 'profile.html', label: labels.profile || 'Profile', icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>` }
        ];

        const html = `
            <div id="likestays-global-bottom-nav" class="fixed bottom-3 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-gray-200/90 px-3 py-2 z-[25000] flex justify-between items-center">
                ${tabs.map(t => {
                    const isActive = t.id === tab;
                    return `
                        <a href="${t.url}" class="flex flex-col items-center justify-center space-y-0.5 flex-1 py-1 cursor-pointer group transition-all">
                            <div class="w-7 h-7 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#0D4E2F] text-white shadow-md' : 'text-gray-400 group-hover:text-[#0D4E2F]'}">
                                ${t.icon}
                            </div>
                            <span class="text-[9px] font-black tracking-tight ${isActive ? 'text-[#0D4E2F]' : 'text-gray-400'}">
                                ${t.label}
                            </span>
                        </a>
                    `;
                }).join('')}
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', html);
    }

    window.addEventListener('likestays:language_changed', () => render(activeTabName));

    return { render: render };
})();
