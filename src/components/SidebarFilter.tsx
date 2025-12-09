"use client";

import React, { useState } from "react";

export default function SidebarFilter() {
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");

    const collections = ["Bored Ape", "CryptoPunks", "Art Blocks", "Doodles", "Azuki"];
    const chains = ["Ethereum", "Polygon", "Klaytn", "Solana"];

    return (
        <div className="bg-[#1a1333]/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl h-fit sticky top-24">
            <div className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v2.17a3 3 0 0 1-.88 2.12L13 14.17V20l-2 2v-7.83l-6.12-6.12A3 3 0 0 1 4 6.17V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Filters
            </div>

            {/* Status */}
            <div className="mb-8">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Status</h3>
                <div className="space-y-2">
                    {["Buy Now", "On Auction", "New", "Has Offers"].map((status) => (
                        <label key={status} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-white/20 rounded-md peer-checked:bg-[#a259ff] peer-checked:border-[#a259ff] transition"></div>
                                <svg className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition">{status}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div className="mb-8">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Price (ETH)</h3>
                <div className="flex gap-3 items-center">
                    <input
                        type="number"
                        placeholder="Min"
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#a259ff] outline-none text-sm placeholder-gray-500"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#a259ff] outline-none text-sm placeholder-gray-500"
                    />
                </div>
                <button className="w-full mt-3 bg-white/10 hover:bg-[#a259ff] text-white font-semibold py-2 rounded-lg transition text-sm">Apply</button>
            </div>

            {/* Collections */}
            <div className="mb-8">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Collections</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-hide">
                    {collections.map((col) => (
                        <label key={col} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-white/20 rounded-md peer-checked:bg-[#a259ff] peer-checked:border-[#a259ff] transition"></div>
                                <svg className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition">{col}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Chains */}
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Chains</h3>
                <div className="space-y-2">
                    {chains.map((chain) => (
                        <label key={chain} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-white/20 rounded-full peer-checked:bg-[#a259ff] peer-checked:border-[#a259ff] transition"></div>
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition">{chain}</span>
                        </label>
                    ))}
                </div>
            </div>

        </div>
    );
}
