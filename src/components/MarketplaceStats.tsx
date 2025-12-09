"use client";

import React from "react";

export default function MarketplaceStats() {
    const stats = [
        { label: "Total Volume", value: "$450.5M", change: "+12.5%", isPositive: true },
        { label: "Floor Price", value: "2.45 ETH", change: "-2.1%", isPositive: false },
        { label: "Best Offer", value: "0.45 ETH", change: "+5.4%", isPositive: true },
        { label: "Listed Items", value: "12k+", change: "+8.2%", isPositive: true },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
                    <div className="text-gray-400 text-xs uppercase font-semibold mb-1">{stat.label}</div>
                    <div className="flex items-end gap-2">
                        <div className="text-white font-bold text-xl">{stat.value}</div>
                        <div className={`text-xs font-bold mb-1 ${stat.isPositive ? "text-green-400" : "text-red-400"}`}>
                            {stat.change}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
