"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-[#a259ff] border-b-2 border-[#a259ff] pb-1" : "hover:text-[#a259ff] transition";
    };

    return (
        <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto relative z-10">
            <Link href="/" className="flex items-center gap-1 text-2xl font-extrabold select-none lowercase">
                <span className="text-white">artifynft</span>
            </Link>
            <ul className="hidden md:flex gap-10 text-base font-semibold text-white">
                <li><Link href="/" className={isActive("/")}>Home</Link></li>
                <li><Link href="/marketplace" className={isActive("/marketplace")}>Marketplace</Link></li>
                <li><Link href="/create" className={isActive("/create")}>Create</Link></li>
                <li><Link href="/about" className={isActive("/about")}>About</Link></li>
            </ul>
            <button className="flex items-center gap-2 bg-[#a259ff] hover:bg-[#7c3aed] text-white font-semibold px-6 py-2 rounded-full shadow transition">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 6.707 9.293L9 11.586V3a1 1 0 0 1 1-1Z" /><path fill="currentColor" d="M4 15a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" /></svg>
                Connect Wallet
            </button>
        </nav>
    );
}
