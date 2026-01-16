
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1333]/80 backdrop-blur-xl border-b border-white/10">
            <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-2xl font-black text-white lowercase">{siteConfig.name}</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 text-base font-semibold">
                    {siteConfig.navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`relative transition - colors ${isActive(item.path)
                                        ? "text-primary"
                                        : "text-gray-300 hover:text-white"
                                    } `}
                            >
                                {item.label}
                                {isActive(item.path) && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Connect Wallet Button */}
                <Link href="/wallet" className="hidden md:flex">
                    <button className="group relative flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:-translate-y-0.5 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            Connect Wallet
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                    </button>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-primary transition"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#1a1333] border-t border-white/10">
                    <ul className="flex flex-col py-4">
                        {siteConfig.navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px - 6 py - 3 font - semibold transition - colors ${isActive(item.path)
                                            ? "text-primary bg-primary/10"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                        } `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="px-6 py-3">
                            <Link href="/wallet" onClick={() => setMobileMenuOpen(false)}>
                                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-primary/20">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    Connect Wallet
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
