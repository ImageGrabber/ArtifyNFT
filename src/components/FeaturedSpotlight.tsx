"use client";

import React from "react";

export default function FeaturedSpotlight() {
    return (
        <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center p-8 md:p-16 group mb-12">

            {/* Immersive Background Layer */}
            <div
                className="absolute inset-0 bg-[url('https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg')] bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 bg-[#0f0a1e]/90 backdrop-blur-[50px]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a1e] via-[#0f0a1e]/80 to-transparent"></div>

            {/* Decorative Glow */}
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-[#a259ff] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Left Content */}
                <div className="flex-1 space-y-8 animate-fade-in-up">
                    <div className="flex items-center gap-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a259ff]/30 bg-[#a259ff]/10 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a259ff] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a259ff]"></span>
                            </span>
                            <span className="text-[#a259ff] font-bold text-xs tracking-widest uppercase">Live Drop</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Stone Forest <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a259ff] via-[#d4bbfc] to-[#ffffff]">Guardians</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                            An exclusive collection of mystical ancient protectors. Owning a Guardian grants you access to the Secret Forest DAO and future utility drops.
                        </p>
                    </div>

                    {/* Creator & Timer Row */}
                    <div className="flex flex-wrap items-center gap-8">
                        <div className="flex items-center gap-3 bg-white/5 pr-6 rounded-full p-2 border border-white/10 backdrop-blur-sm">
                            <img src="https://randomuser.me/api/portraits/women/12.jpg" className="w-10 h-10 rounded-full border-2 border-[#a259ff]" />
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Creator</div>
                                <div className="text-white font-bold text-sm leading-none">CyberArtist_X</div>
                            </div>
                        </div>

                        <div className="flex gap-1 md:gap-3 text-center">
                            <div className="bg-[#a259ff]/10 border border-[#a259ff]/30 rounded-xl p-3 min-w-[60px] backdrop-blur-md">
                                <div className="text-2xl font-bold text-white leading-none">08</div>
                                <div className="text-[9px] text-[#a259ff] uppercase font-bold tracking-wider mt-1">Hrs</div>
                            </div>
                            <div className="text-2xl font-bold text-white/20 pt-2">:</div>
                            <div className="bg-[#a259ff]/10 border border-[#a259ff]/30 rounded-xl p-3 min-w-[60px] backdrop-blur-md">
                                <div className="text-2xl font-bold text-white leading-none">45</div>
                                <div className="text-[9px] text-[#a259ff] uppercase font-bold tracking-wider mt-1">Min</div>
                            </div>
                            <div className="text-2xl font-bold text-white/20 pt-2">:</div>
                            <div className="bg-[#a259ff]/10 border border-[#a259ff]/30 rounded-xl p-3 min-w-[60px] backdrop-blur-md">
                                <div className="text-2xl font-bold text-white leading-none">12</div>
                                <div className="text-[9px] text-[#a259ff] uppercase font-bold tracking-wider mt-1">Sec</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button className="bg-white text-black font-extrabold px-10 py-4 rounded-2xl hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            View Drop
                        </button>
                        <button className="bg-white/5 text-white border border-white/20 font-bold px-10 py-4 rounded-2xl hover:bg-white/10 transition backdrop-blur-md">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image (Floating 3D Card) */}
                <div className="flex-1 flex justify-center perspective-1000">
                    <div className="relative w-full max-w-sm animate-float-medium">
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-[#a259ff] rounded-[2rem] blur-[60px] opacity-40"></div>

                        <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/10 z-10 pointer-events-none mix-blend-overlay"></div>
                            <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />

                            {/* Glass Overlay on Image */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-gray-300 text-xs mb-1">Current Bid</div>
                                        <div className="text-white font-bold text-xl">3.55 ETH</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                                        <span className="text-white font-bold text-xs">$12,450</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(-12deg); }
        .rotate-x-6 { transform: rotateX(6deg); }
      `}</style>
        </div>
    );
}
