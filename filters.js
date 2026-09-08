/**
 * =========================================================================
 * ⚙️ LIKESTAYS MASTER FILTER ENGINE (filters.js)
 * =========================================================================
 * 1. Dual Min-to-Max Price Range (Daily & Hourly)
 * 2. Self Check-in, Pets & Smoking Filter Support
 * 3. 51 Categories, 30 Amenities & Extra Services Sync
 * =========================================================================
 */

const LikeStaysFilter = (function() {
    'use strict';

    const CATEGORIES = [
        "Hotel","One Bed Apartment","Two bed apartment","Three Bed Apartment","Star Light Apartment","Studio apartment","Villa","Resort","Guest House","Hostel","Motel","Homestay","Bed & Breakfast (B&B)","Boutique Hotel","Serviced Apartment","Holiday Home","Vacation Rental","Cabin","Cottage","Chalet","Farm Stay","Camping","Glamping","Tent","Tiny House","Tree House","Houseboat","Boat Stay","Yacht","Beach House","Lake House","Mountain Lodge","Eco Lodge","Safari Lodge","Ryokan (Japan)","Riad (Morocco)","Capsule Hotel","Dormitory","Loft","Duplex","Bungalow","Mansion","Palace Stay","Castle","Cave House","Igloo","Floating Villa","Private Island","Caravan / RV","Shared Room","Entire Home"
    ];

    const AMENITIES = [
        { name: "Free WiFi", icon: "📶" }, { name: "Air Conditioning", icon: "❄️" }, { name: "Heating", icon: "🔥" },
        { name: "Kitchen", icon: "🍳" }, { name: "Cooking Gas", icon: "💨" }, { name: "Utensils", icon: "🥘" },
        { name: "Plates & Bowls", icon: "🍽️" }, { name: "Glasses", icon: "🥛" }, { name: "Cutlery", icon: "🍴" },
        { name: "Refrigerator", icon: "🧊" }, { name: "Microwave", icon: "🎛️" }, { name: "Kettle", icon: "🫖" },
        { name: "Washing Machine", icon: "🧺" }, { name: "Smart TV", icon: "🎬" }, { name: "Parking", icon: "🚗" },
        { name: "Swimming Pool", icon: "🏊" }, { name: "Gym", icon: "🏋️" }, { name: "Elevator", icon: "🛗" },
        { name: "Balcony", icon: "🌅" }, { name: "Garden", icon: "🏡" }, { name: "Workspace", icon: "💻" },
        { name: "Hot Water", icon: "♨️" }, { name: "Towels", icon: "🧼" }, { name: "Bed Linen", icon: "🛏️" },
        { name: "Blankets", icon: "🛌" }, { name: "Toiletries", icon: "🧴" }, { name: "Iron", icon: "👔" },
        { name: "Hair Dryer", icon: "💈" }, { name: "Security Cameras", icon: "📹" }, { name: "BBQ Grill", icon: "🍖" }
    ];

    const ADDONS = [
        { id: "addon-breakfast", name: "Daily Breakfast" }, { id: "addon-lunch", name: "Lunch Service" }, { id: "addon-dinner", name: "Dinner Service" },
        { id: "addon-airport-pickup", name: "Airport VIP Pickup" }, { id: "addon-airport-drop", name: "Airport Drop" },
        { id: "addon-car-rental", name: "Private Car Rental" }, { id: "addon-bike-rental", name: "Bike Rental" },
        { id: "addon-laundry", name: "Laundry Service" }, { id: "addon-spa", name: "In-Villa Spa Session" },
        { id: "addon-massage", name: "Massage Therapy" }, { id: "addon-chef", name: "Private Chef" },
        { id: "addon-guide", name: "Tour Guide" }, { id: "addon-birthday", name: "Birthday Decoration" },
        { id: "addon-honeymoon", name: "Honeymoon Decoration" }, { id: "addon-late-checkout", name: "Late Check-out" }
    ];

    const state = {
        onlyOffers: false,
        rateType: 'daily', // 'daily' or 'hourly'
        minDailyPrice: 0,
        maxDailyPrice: 300000,
        minHourlyPrice: 0,
        maxHourlyPrice: 50000,
        selfCheckinOnly: false,
        petsOnly: false,
        smokingOnly: false,
        bedrooms: 0,
        categories: [],
        amenities: [],
        addons: []
    };

    function reset() {
        state.onlyOffers = false;
        state.rateType = 'daily';
        state.minDailyPrice = 0;
        state.maxDailyPrice = 300000;
        state.minHourlyPrice = 0;
        state.maxHourlyPrice = 50000;
        state.selfCheckinOnly = false;
        state.petsOnly = false;
        state.smokingOnly = false;
        state.bedrooms = 0;
        state.categories = [];
        state.amenities = [];
        state.addons = [];
    }

    function applyFilter(propertiesList, searchedDest = "") {
        if (!propertiesList || !Array.isArray(propertiesList)) return [];
        const cleanDest = searchedDest.trim().toLowerCase();

        return propertiesList.filter(prop => {
            if (prop.status === "Hidden" || prop.status === "Draft") return false;

            // 1. Search Destination
            if (cleanDest) {
                const matchCity = (prop.city || '').toLowerCase().includes(cleanDest);
                const matchLoc = (prop.location || '').toLowerCase().includes(cleanDest);
                const matchAddress = (prop.address || '').toLowerCase().includes(cleanDest);
                const matchName = (prop.name || '').toLowerCase().includes(cleanDest);
                if (!matchCity && !matchLoc && !matchAddress && !matchName) return false;
            }

            // 2. Special Offers Only
            const deals = prop.flashDeals || (prop.flashOffer && prop.flashOffer.enabled ? [prop.flashOffer] : []);
            if (state.onlyOffers && deals.length === 0) return false;

            // 3. Rate Type & Dual Min/Max Price Filter
            const dailyPrice = Number(prop.dailyPrice || prop.price || 0);
            const hourlyPrice = Number(prop.hourlyPrice || 0);

            if (state.rateType === 'hourly') {
                if (hourlyPrice <= 0) return false;
                if (hourlyPrice < state.minHourlyPrice || hourlyPrice > state.maxHourlyPrice) return false;
            } else {
                if (dailyPrice < state.minDailyPrice || dailyPrice > state.maxDailyPrice) return false;
            }

            // 4. Self Check-in Filter
            if (state.selfCheckinOnly) {
                if (!prop.selfCheckin || !prop.selfCheckin.enabled) return false;
            }

            // 5. House Rules Filters
            if (state.petsOnly) {
                if (!prop.houseRules || !prop.houseRules.pets) return false;
            }
            if (state.smokingOnly) {
                if (!prop.houseRules || !prop.houseRules.smoking) return false;
            }

            // 6. Bedrooms Capacity
            if (state.bedrooms > 0) {
                const beds = Number(prop.bedrooms || 1);
                if (state.bedrooms === 3) {
                    if (beds < 3) return false;
                } else {
                    if (beds !== state.bedrooms) return false;
                }
            }

            // 7. Categories Filter
            if (state.categories.length > 0) {
                if (!state.categories.includes(prop.category)) return false;
            }

            // 8. Amenities Filter
            if (state.amenities.length > 0) {
                const propAmenities = prop.amenities || [];
                const hasAll = state.amenities.every(am => 
                    propAmenities.some(pa => pa.toLowerCase().includes(am.toLowerCase()))
                );
                if (!hasAll) return false;
            }

            // 9. Extra Services Filter
            if (state.addons.length > 0) {
                const propServices = (prop.extraServices || []).map(s => s.name || '');
                const hasAllAddons = state.addons.every(ad => 
                    propServices.some(ps => ps.toLowerCase().includes(ad.toLowerCase()))
                );
                if (!hasAllAddons) return false;
            }

            return true;
        });
    }

    return {
        categories: CATEGORIES,
        amenities: AMENITIES,
        addons: ADDONS,
        state: state,
        reset: reset,
        applyFilter: applyFilter
    };
})();
