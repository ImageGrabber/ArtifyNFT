"use client";

import React, { useState } from "react";
import SidebarFilter from "@/components/SidebarFilter";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import MarketplaceStats from "@/components/MarketplaceStats";
import { allNfts, nftCategories } from "@/data/nfts";

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
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">

            {/* Featured Spotlight */}
            <FeaturedSpotlight />

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar */}
                <aside className="w-full lg:w-64 hidden lg:block shrink-0">
                    <SidebarFilter />
                </aside>

                {/* Main Content */}
                <div className="flex-1">

                    {/* Stats Bar */}
                    <MarketplaceStats />

                    {/* Controls: Search and Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 bg-[#1a1333]/60 p-4 rounded-xl border border-white/10 backdrop-blur-md">

                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            {nftCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#0d091a] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition placeholder-gray-500 text-sm"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNfts.length > 0 ? (
                            filteredNfts.map((nft) => (
                                <div key={nft.id} className="bg-[#231942] rounded-2xl p-3 shadow-lg hover:-translate-y-2 transition-transform duration-300 group ring-1 ring-white/5 hover:ring-primary/50">
                                    <div className="relative mb-3 overflow-hidden rounded-xl">
                                        <img src={nft.image} alt={nft.name} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
                                        {nft.timer && (
                                            <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg">Ended in 3h 20m</span>
                                        )}
                                        {/* Hover Overlay Actions */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                                            <button className="bg-white text-black p-2 rounded-full hover:scale-110 transition"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></button>
                                            <button className="bg-white text-black p-2 rounded-full hover:scale-110 transition"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <img src={nft.avatar} alt={nft.user} className="w-8 h-8 rounded-full border-2 border-primary" />
                                        <div className="flex-1 min-w-0">
                                            <div className="text-white font-bold text-sm truncate">{nft.name}</div>
                                            <div className="text-primary text-xs font-semibold truncate">{nft.user}</div>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                            {nft.likes}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center bg-[#1a1333] p-2.5 rounded-lg mb-3">
                                        <div>
                                            <div className="text-[9px] uppercase text-gray-500 font-bold tracking-wider">Current Bid</div>
                                            <div className="text-white font-bold text-xs md:text-sm">{nft.currentBid}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[9px] uppercase text-gray-500 font-bold tracking-wider">Mask Price</div>
                                            <div className="text-gray-300 font-medium text-xs md:text-sm">{nft.lastBid}</div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-primary text-white font-bold py-2.5 rounded-xl hover:bg-primary/80 transition shadow-lg shadow-primary/20 text-sm">
                                        Place Bid
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-400">
                                <p className="text-xl">No NFTs found matching your filters.</p>
                                <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4 text-primary hover:underline">Clear all filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
