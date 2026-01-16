"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/content";

export default function WalletPage() {
    const benefits = [
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
            title: "Secure Access",
            description: "Your wallet is protected by industry-standard encryption"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Instant Transactions",
            description: "Buy, sell, and trade NFTs with lightning-fast speed"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: "Full Control",
            description: "You own your assets - we never have access to your funds"
        }
    ];

    const handleConnect = (walletName: string) => {
        // TODO: Implement actual Web3 wallet connection
        // This template includes UI only. To add functionality:
        // 1. Install a Web3 library (ethers.js, web3.js, or wagmi)
        // 2. Implement wallet connection logic
        // 3. Handle connection state and errors
        // 4. Integrate with your smart contracts
        
        console.log(`Wallet connection requested: ${walletName}`);
        alert(`Connecting to ${walletName}...\n\nNote: This is a template. Web3 wallet integration needs to be implemented.`);
    };

    return (
        <div className="pt-40 md:pt-48 pb-20 min-h-screen">

            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md w-fit mb-8 mx-auto">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-primary font-bold text-sm tracking-wider uppercase">Secure Connection</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                        <span className="block text-white mb-2">Connect Your</span>
                        <span className="bg-gradient-to-r from-primary via-[#d4bbfc] to-accent bg-clip-text text-transparent drop-shadow-lg">
                            Wallet
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Choose your preferred wallet to start buying, selling, and collecting NFTs on ArtifyNFT
                    </p>
                </div>
            </section>

            {/* Wallet Grid */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.wallets.map((wallet, i) => (
                        <div key={i} className="bg-[#231942] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-white/5 group relative overflow-hidden">
                            {wallet.popular && (
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Popular
                                </div>
                            )}

                            <div className={`w-16 h-16 bg-gradient-to-br ${wallet.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={wallet.iconPath} />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{wallet.name}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{wallet.description}</p>

                            <button
                                onClick={() => handleConnect(wallet.name)}
                                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-primary/20 group-hover:shadow-primary/40"
                            >
                                Connect
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Connect Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Connect Your Wallet?</h2>
                    <p className="text-gray-400 text-lg">Unlock the full potential of {siteConfig.name}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security Information */}
            <section className="max-w-5xl mx-auto px-4 md:px-8 mb-32">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Your Security is Our Priority</h3>
                            <div className="space-y-3 text-gray-300 leading-relaxed">
                                <p>✓ We never store your private keys or seed phrases</p>
                                <p>✓ All connections use secure, encrypted protocols</p>
                                <p>✓ We only request permissions necessary for transactions</p>
                                <p>✓ You maintain full control of your assets at all times</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-4 md:px-8 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-[#231942] border border-white/5 rounded-xl p-6 hover:border-white/20 transition">
                            <h3 className="text-white font-bold text-lg mb-2">{faq.question}</h3>
                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
