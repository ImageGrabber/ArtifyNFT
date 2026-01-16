"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { teamMembers, features, milestones } from "@/data/content";
import { showcaseNfts } from "@/data/nfts";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen">

            {/* Hero Section - Glassmorphism Card */}
            <section className="flex justify-center items-center min-h-[75vh] px-4 relative overflow-hidden z-10 py-10 mb-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

                <div className="w-full max-w-[1300px] rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-0 md:p-0 flex flex-col md:flex-row overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    {/* Left: Text */}
                    <div className="flex-[1.2] flex flex-col justify-center px-8 py-16 md:py-20 md:pl-20 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md w-fit mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-primary font-bold text-sm tracking-wider uppercase">About {siteConfig.name}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                            <span className="block text-white mb-2">Empowering</span>
                            <span className="bg-gradient-to-r from-primary via-[#d4bbfc] to-accent bg-clip-text text-transparent drop-shadow-lg">
                                The Future of
                            </span>
                            <span className="block text-white">Digital Ownership</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
                            {siteConfig.description}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-12 border-t border-white/10 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-white">200k+</p>
                                <p className="text-gray-400 text-sm">NFTs Created</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">50k+</p>
                                <p className="text-gray-400 text-sm">Artists</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">$1B+</p>
                                <p className="text-gray-400 text-sm">Volume</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: NFT Showcase Grid */}
                    <div className="flex-1 flex items-center justify-center p-8 relative">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                            {showcaseNfts.map((nft, i) => (
                                <div key={i} className="rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105 h-[140px] md:h-[180px]">
                                    <img src={nft.image} alt={nft.name} className="object-cover w-full h-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision with Images */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#231942] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg" className="w-full h-full object-cover" alt="Mission" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#231942] to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To democratize access to digital art and collectibles by providing a secure, user-friendly platform that empowers creators to monetize their work and collectors to discover unique assets.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#231942] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-full h-full object-cover" alt="Vision" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#231942] to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To become the leading NFT marketplace where creativity meets technology, fostering a global community of artists, collectors, and innovators shaping the future of digital ownership.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section with Images */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose {siteConfig.name}</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Powerful features designed for creators and collectors</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-[#231942] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 border border-white/5 group">
                            <div className="relative h-56 overflow-hidden">
                                <img src={feature.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={feature.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#231942] via-[#231942]/50 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Journey/Timeline Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Journey</h2>
                    <p className="text-gray-400 text-lg">Key milestones in our evolution</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {milestones.map((milestone, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">{milestone.year}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Platform Stats */}
            <section className="bg-white/5 border-y border-white/10 backdrop-blur-md py-16 mb-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">200k+</div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">NFTs Created</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">50k+</div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Artists</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">$1B+</div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Trading Volume</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">1M+</div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Community</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section with Icons */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
                    <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Decentralized</h3>
                        <p className="text-gray-400 leading-relaxed">Built on blockchain technology, ensuring true ownership and transparency for all participants in the ecosystem.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Secure</h3>
                        <p className="text-gray-400 leading-relaxed">Industry-leading security protocols and audited smart contracts protect your assets and transactions at every step.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Community-Driven</h3>
                        <p className="text-gray-400 leading-relaxed">Empowering creators and collectors to shape the future together through governance and collaborative growth.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet the Team</h2>
                    <p className="text-gray-400 text-lg">The innovators building the future of NFTs</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="bg-[#231942] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-white/5 group">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition"></div>
                                <img src={member.img} alt={member.name} className="relative w-32 h-32 rounded-full border-4 border-primary/50 object-cover group-hover:border-primary transition" />
                            </div>
                            <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                            <p className="text-primary font-semibold text-sm text-center mb-4">{member.role}</p>
                            <div className="flex justify-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.2 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                </div>
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Join CTA */}
            <section className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                    <h2 className="relative z-10 text-3xl md:text-4xl font-black text-white mb-4">Ready to Start Your Journey?</h2>
                    <p className="relative z-10 text-gray-400 text-lg max-w-xl mx-auto mb-8">Join thousands of artists and collectors on the world&apos;s most beautiful NFT marketplace.</p>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group relative bg-primary hover:bg-primary/80 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-[0_10px_30px_rgba(162,89,255,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(162,89,255,0.6)] overflow-hidden">
                            <span className="relative z-10">Explore Marketplace</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                        </button>
                        <button className="group relative px-10 py-4 rounded-2xl text-lg font-bold text-white overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                            <span className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/50 transition-all duration-300"></span>
                            <span className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></span>
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                Create NFT
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
