"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="max-w-full bg-transparent py-20 px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
                {/* Logo and description */}
                <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
                    <div className="flex items-center gap-1 text-3xl font-extrabold select-none mb-4">
                        <span className="text-white">Artify</span><span className="text-[#a259ff]">NFT</span>
                    </div>
                    <p className="text-gray-300 mb-4 max-w-xs">The premier NFT marketplace for artists and collectors. Create, discover, and trade unique digital artworks on the blockchain.</p>
                    <div className="mb-2 text-white font-semibold">Follow Us :</div>
                    <div className="flex gap-3">
                        <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3h3a2 2 0 0 0 2-2V7a5 5 0 0 0-5-5Z" stroke="currentColor" strokeWidth="2" /></svg></a>
                        <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.36 4.07 3.57 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.64A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.56 1.74 2.18 3.01 4.1 3.05A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71A4.48 4.48 0 0 0 23 3Z" stroke="currentColor" strokeWidth="2" /></svg></a>
                        <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" /></svg></a>
                        <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" /></svg></a>
                    </div>
                </div>
                {/* Footer Links */}
                <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-white font-semibold mb-3">Marketplace</div>
                        <ul className="text-gray-300 space-y-2">
                            <li>All NFTs</li>
                            <li>New</li>
                            <li>Arts</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-3">Status</div>
                        <ul className="text-gray-300 space-y-2">
                            <li>Rankings</li>
                            <li>Activity</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-3">Resources</div>
                        <ul className="text-gray-300 space-y-2">
                            <li>Help Center</li>
                            <li>Suggestions</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-3">Company</div>
                        <ul className="text-gray-300 space-y-2">
                            <li>About</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm border-t border-white/10 pt-8">
                <div>2025 © ArtifyNFT </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Terms Conditions & Policy</a>
                </div>
            </div>
        </footer>
    );
}
