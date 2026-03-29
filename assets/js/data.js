const yachtsData = [
    {
        id: 1,
        name: "Azure Serenity",
        series: "Benetti 65M Series",
        year: 2023,
        length: "65m",
        price: "€75,000,000",
        builder: "Benetti",
        model: "Custom 65M",
        gt: "1,350 GT",
        hull: "Steel / Aluminium",
        staterooms: "7 (Incl. Full-beam Master)",
        description: "A masterpiece of maritime innovation and Italian elegance, designed for the ultimate global expedition.",
        amenities: [
            "Infinity Pool", "Panoramic Gym", "Helipad (Touch-down)", "Wine Cellar", "Cinema Room", "Full-service Spa"
        ],
        images: {
            hero: "assets/images/Azure Serenity.jfif",
            gallery: [
                "assets/images/img4.jfif"
            ]
        }
    },
    {
        id: 2,
        name: "Titanium Star",
        series: "Lurssen 55M Edition",
        year: 2021,
        length: "55m",
        price: "€42,000,000",
        builder: "Lurssen",
        model: "Explorer 55",
        gt: "950 GT",
        hull: "Steel",
        staterooms: "6",
        description: "A robust explorer yacht built for long-range cruising without compromising on luxury or comfort.",
        amenities: [
            "Tender Garage", "Beach Club", "Anti-Roll Stabilizers", "Observation Deck", "Jacuzzi", "Library"
        ],
        images: {
            hero: "assets/images/Titanium Star.jfif",
            gallery: [
                "assets/images/img6.jfif"
            ]
        }
    },
    {
        id: 3,
        name: "Midnight Pearl",
        series: "Heesen 48M Sport",
        year: 2022,
        length: "48m",
        price: "€28,500,000",
        builder: "Heesen",
        model: "Aluminium Speedster",
        gt: "500 GT",
        hull: "Full Aluminium",
        staterooms: "5",
        description: "Speed meets sophistication. The Midnight Pearl is one of the fastest yachts in its class, perfectly suited for island hopping.",
        amenities: [
            "Outdoor Cinema", "Sun Deck Bar", "Massage Room", "Gym", "Submersible Tender", "Smart Cabin Technology"
        ],
        images: {
            hero: "assets/images/Midnight Pearl.jfif",
            gallery: [
                "assets/images/mg3.jfif"
            ]
        }
    },
    {
        id: 4,
        name: "Silver Sea",
        series: "Feadship 50M Classic",
        year: 2024,
        length: "50m",
        price: "€32,000,000",
        builder: "Feadship",
        model: "Heritage Series",
        gt: "750 GT",
        hull: "Steel / Aluminium",
        staterooms: "6",
        description: "The epitome of timeless design. Silver Sea offers a classic silhouette with state-of-the-art hybrid propulsion systems.",
        amenities: [
            "Hybrid Engine", "Solar Panel Array", "Organic Garden", "Eco-friendly Materials", "Pool with Waterfall", "Zen Deck"
        ],
        images: {
            hero: "assets/images/Silver Sea.avif",
            gallery: [
                "assets/images/mg5.jfif"
            ]
        }
    }
];

const charterData = [
    {
        id: 1,
        name: "Project Apex",
        type: "New Build Management",
        vessel: "95m Custom",
        year: 2024,
        client: "Confidential",
        description: "Managing every phase of construction at Lurssen, from initial design to final delivery in 2024.",
        details: "This 95m masterpiece represents the pinnacle of northern European engineering, featuring a hybrid propulsion system and an unprecedented 12-meter swimming pool.",
        images: {
            hero: "assets/images/AFC.avif",
            gallery: ["assets/images/img456.jfif"]
        }
    },
    {
        id: 2,
        name: "The Amalfi Expedition",
        type: "Charter Success",
        vessel: "Explorer Series",
        year: 2025,
        client: "Private Family",
        description: "A record-breaking 4-week charter series featuring bespoke Michelin-starred dining on board.",
        details: "Navigating the Amalfi Coast with a curated itinerary that included private access to historical sites and a dedicated team of world-class chefs.",
        images: {
            hero: "assets/images/IP.avif",
            gallery: ["assets/images/iimg.jfif"]
        }
    },
    {
        id: 3,
        name: "Sale of M/Y Horizon",
        type: "High-Value Sale",
        vessel: "Horizon 62M",
        year: 2025,
        client: "International Buyer",
        description: "The largest off-market brokerage transaction of 2025, closed within 45 days.",
        details: "Our brokerage team facilitated a complex multi-jurisdictional closing, ensuring absolute discretion for both parties involved in this €65M transaction.",
        images: {
            hero: "assets/images/P.avif",
            gallery: ["assets/images/sustain.jfif"]
        }
    },
    {
        id: 4,
        name: "Project Phoenix",
        type: "Technical Refit",
        vessel: "60m Refit",
        year: 2025,
        client: "Repeat Client",
        description: "A full interior and technical overhaul completed in record time at Feadship.",
        details: "The refit included a complete redesign of the bridge deck and a state-of-the-art AV/IT upgrade, breathing new life into this classic vessel.",
        images: {
            hero: "assets/images/TB.avif",
            gallery: ["assets/images/img4.jfif"]
        }
    },
    {
        id: 5,
        name: "The Sapphire Fleet",
        type: "Fleet Stewardship",
        vessel: "5 Superyachts",
        year: "Ongoing",
        client: "Corporate Entity",
        description: "Managing a fleet of 5 superyachts across three continents with 24/7 technical support.",
        details: "Our technical management team provides comprehensive support, from crew recruitment to preventive maintenance and financial reporting.",
        images: {
            hero: "assets/images/featured_yacht_1.png",
            gallery: ["assets/images/img2.avif"]
        }
    },
    {
        id: 6,
        name: "Monaco Show Delegation",
        type: "Event Curation",
        vessel: "12 Vessels",
        year: 2025,
        client: "Various Owners",
        description: "Official representation of 12 vessels at the 2025 Monaco Yacht Show.",
        details: "A highly successful showcase that resulted in three signed LOIs and over 50 qualified leads for our exclusive listings.",
        images: {
            hero: "assets/images/img2.avif",
            gallery: ["assets/images/img6.jfif"]
        }
    }
];

const blogData = [
    {
        id: 1,
        title: "The Best Hidden Bays in the Mediterranean",
        category: "Destinations",
        date: "March 26, 2026",
        description: "Discover the most exclusive anchorages away from the crowded marinas this summer season.",
        heroImage: "assets/images/img4.jfif",
        content: `
            <p>The Mediterranean has long been the crown jewel of global yachting. While ports like St. Tropez and Portofino offer glitz and glamour, the true magic of the Med lies in its hidden coves and secluded bays, accessible only by water.</p>
            <h3>Sardinia's Secret Sanctuaries</h3>
            <p>Cala di Luna is often cited as one of the most beautiful beaches in the world. Nestled in the Gulf of Orosei, this bay is famous for its massive sea caves that offer a natural respite from the Mediterranean sun. Anchoring your yacht here at sunrise provides a moment of pure serenity before the day visitors arrive.</p>
            <blockquote>"True luxury is not just about the size of the yacht, but the exclusivity of the destinations it can reach."</blockquote>
            <p>Further west, the Balearic Islands hide some of the flattest, clearest turquoise waters in Europe. Formentera's Ses Illetes may be well known, but navigating just a few miles south will reveal empty stretches of white sand where the only sounds are the gentle lapping of waves against your hull.</p>
        `
    },
    {
        id: 2,
        title: "The Future of Sustainable Superyachts",
        category: "Innovation",
        date: "March 20, 2026",
        description: "How solar power and hydrogen propulsion are changing the landscape of luxury sailing.",
        heroImage: "assets/images/sustain.jfif",
        content: `
            <p>Sustainability is no longer a buzzword in the yachting industry; it's a fundamental shift in how the world's most luxurious vessels are designed and operated. Shipyards are now prioritizing eco-conscious engineering without compromising on the opulence owners expect.</p>
            <h3>Hydrogen: The New Gold Standard</h3>
            <p>Recent breakthroughs in hydrogen fuel cell technology are allowing superyachts to cruise in near-total silence, with zero emissions. This "silent mode" is not only better for the environment but enhances the onboard experience by removing engine vibration and noise.</p>
            <h3>Solar Integration</h3>
            <p>Modern yacht design is seeing an increase in solar-integrated surfaces. New glass technologies allow solar cells to be embedded directly into the vessel's windows, providing enough power to run the "hotel load" (air conditioning, lighting, and galley) without ever starting a generator.</p>
        `
    },
    {
        id: 3,
        title: "2026 Global Yacht Market Analysis",
        category: "Market Insight",
        date: "March 15, 2026",
        description: "A deep dive into the trends, valuation shifts, and emerging markets for the 50m+ segment.",
        heroImage: "assets/images/img6.jfif",
        content: `
            <p>The first quarter of 2026 has shown a remarkable resilience in the pre-owned superyacht market. Despite global economic shifts, the demand for "turn-key" vessels—boats that are ready to cruise immediately—has reached an all-time high.</p>
            <h3>The Rise of the Explorer</h3>
            <p>We are seeing a significant pivot toward expedition and explorer yachts. Owners are increasingly looking for vessels that can handle long-range voyages to the Arctic or the South Pacific, seeking freedom and isolation over traditional marina-based social scenes.</p>
            <h3>Valuation Stability</h3>
            <p>Vessels in the 40m to 60m range are holding their value better than seen in previous cycles. This is largely due to the limited number of shipyard slots available for new builds, pushing buyers toward high-quality secondary market options.</p>
        `
    },
    {
        id: 4,
        title: "The Strategic Value of Modern Refits",
        category: "Technical",
        date: "March 10, 2026",
        description: "Why investing in technical upgrades is the key to maintaining your vessel's market lifecycle.",
        heroImage: "assets/images/img456.jfif",
        content: `
            <p>In the luxury asset market, time is both a depreciator and an opportunity. A well-planned shipyard refit can effectively reset the clock on a 10-year-old vessel, making it competitive with brand-new builds in both technology and aesthetics.</p>
            <h3>Connectivity Upgrades</h3>
            <p>One of the most requested refit items for 2026 is the installation of next-generation satellite arrays. Owners and charter guests now expect high-speed, low-latency internet regardless of their distance from shore, making these upgrades essential for market success.</p>
            <h3>Interior Transformation</h3>
            <p>Refits are also an opportunity to update interior layouts. Moving away from heavy, dark woods toward open-plan, light-filled spaces with sustainable materials can drastically increase a yacht's charter appeal and eventual resale value.</p>
        `
    }
];

if (typeof window !== 'undefined') {
    window.yachtsData = yachtsData;
    window.charterData = charterData;
    window.blogData = blogData;
}

