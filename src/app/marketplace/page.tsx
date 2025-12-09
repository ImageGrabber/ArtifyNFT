"use client";

import React, { useState } from "react";

// Expanded Mock Data
const allNfts = [
    {
        id: "1",
        image: "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        user: "@Nikom",
        name: "Magical Fox",
        currentBid: "20.5 ETH",
        lastBid: "25.04 ETH",
        category: "Art",
        timer: true
    },
    {
        id: "2",
        image: "https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        user: "@Mexi",
        name: "Reading Nook",
        currentBid: "12.5 ETH",
        lastBid: "25.04 ETH",
        category: "Art"
    },
    {
        id: "3",
        image: "https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        user: "@Astro",
        name: "Stone Guardians",
        currentBid: "14.8 ETH",
        lastBid: "12.04 ETH",
        category: "Collectibles"
    },
    {
        id: "4",
        image: "https://images.pexels.com/photos/18069081/pexels-photo-18069081.png",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        user: "@Aliza",
        name: "Pexels Art",
        currentBid: "18 ETH",
        lastBid: "32.06 ETH",
        category: "Art",
        timer: true
    },
    {
        id: "5",
        image: "https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        user: "@Visionary",
        name: "Visionary Future",
        currentBid: "10.2 ETH",
        lastBid: "15.00 ETH",
        category: "Utility"
    },
    {
        id: "6",
        image: "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        user: "@Neon",
        name: "Neon Dance",
        currentBid: "8.7 ETH",
        lastBid: "13.50 ETH",
        category: "Music"
    },
    {
        id: "7",
        image: "https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        user: "@Campfire",
        name: "Campfire Adventure",
        currentBid: "11.1 ETH",
        lastBid: "14.00 ETH",
        category: "Art"
    },
    {
        id: "8",
        image: "https://images.pexels.com/photos/17485678/pexels-photo-17485678.png",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        user: "@Pexels2",
        name: "Pexels Art 2",
        currentBid: "9.8 ETH",
        lastBid: "12.50 ETH",
        category: "Collectibles"
    },
    // Additional items
    {
        id: "9",
        image: "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        user: "@FoxMaster",
        name: "Fox Spirit",
        currentBid: "15.5 ETH",
        lastBid: "18.00 ETH",
        category: "Art"
    },
    {
        id: "10",
        image: "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        user: "@MusicLover",
        name: "Rhythm Soul",
        currentBid: "7.5 ETH",
        lastBid: "9.00 ETH",
        category: "Music"
    }
];

const categories = ["All", "Art", "Music", "Collectibles", "Utility"];

export default function MarketplacePage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNfts = allNfts.filter(nft => {
        const matchesCategory = activeCategory === "All" || nft.category === activeCategory;
        const matchesSearch = nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            nft.user.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">NFT Marketplace</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Explore the exclusive collection of digital assets. Filter by category, search for your favorite artists, and bid on unique items.
                </p>
            </div>

            {/* Controls: Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#a259ff] text-white shadow-lg scale-105"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search nfts, artists..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#1a1333] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#a259ff] transition placeholder-gray-500"
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredNfts.length > 0 ? (
                    filteredNfts.map((nft) => (
                        <div key={nft.id} className="bg-[#231942] rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="relative mb-4 overflow-hidden rounded-xl">
                                <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                                {nft.timer && (
                                    <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Ended in 3h 20m</span>
                                )}
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg">
                                    <span className="text-white text-xs font-semibold">{nft.category}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <img src={nft.avatar} alt={nft.user} className="w-10 h-10 rounded-full border-2 border-[#a259ff]" />
                                <div>
                                    <div className="text-white font-bold text-sm">{nft.name}</div>
                                    <div className="text-[#a259ff] text-xs font-semibold">{nft.user}</div>
                                </div>
                                <div className="ml-auto text-white/40 hover:text-[#a259ff] cursor-pointer transition">
                                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" /></svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4 bg-[#1a1333] p-3 rounded-xl">
                                <div>
                                    <div className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Current Bid</div>
                                    <div className="text-white font-bold text-sm">{nft.currentBid}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Last Bid</div>
                                    <div className="text-gray-300 font-medium text-sm">{nft.lastBid}</div>
                                </div>
                            </div>
                            <button className="w-full mt-4 bg-[#a259ff] text-white font-bold py-3 rounded-xl hover:bg-[#8b3dff] transition shadow-lg shadow-[#a259ff]/20">
                                Place Bid
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-gray-400">
                        <p className="text-xl">No NFTs found matching your filters.</p>
                        <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4 text-[#a259ff] hover:underline">Clear all filters</button>
                    </div>
                )}
            </div>
        </div>
    );
}
