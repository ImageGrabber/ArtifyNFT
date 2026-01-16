"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { heroSliderImages, blogPosts, faqs } from "@/data/content";
import { allNfts, topSellers } from "@/data/nfts";

export default function Home() {
  const trendingNfts = allNfts.slice(0, 8);
  const leftImagesForSlider = heroSliderImages.left;
  const rightImagesForSlider = heroSliderImages.right;

  return (
    <>
      {/* Hero Card Section */}
      <section className="flex justify-center items-center min-h-[85vh] px-4 relative overflow-hidden z-10 py-10 pt-24 md:pt-32">
        {/* Background glow for hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="w-full max-w-[1300px] rounded-[2.5rem] bg-black/20 backdrop-blur-md border border-white/5 shadow-2xl p-0 md:p-0 flex flex-col md:flex-row overflow-hidden relative group">

          {/* Decorative shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* Left: Text */}
          <div className="flex-[1.2] flex flex-col justify-center px-8 py-16 md:py-20 md:pl-20 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md w-fit mb-8 animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-white/80 font-bold text-sm tracking-wider uppercase">Future of Digital Art</span>
            </div>

            {/* Gradient Headline */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-2">Discover, Collect</span>
              <span className="bg-gradient-to-r from-primary via-[#d4bbfc] to-accent bg-clip-text text-transparent drop-shadow-lg">
                & Sell Extraordinary
              </span>
              <span className="block text-white">NFTs</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
              {siteConfig.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6">
              <Link href="/marketplace">
                <button className="group relative bg-primary hover:bg-primary/80 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-[0_10px_30px_rgba(162,89,255,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(162,89,255,0.6)] overflow-hidden cursor-pointer">
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                </button>
              </Link>

              <Link href="/create">
                <button className="group relative px-10 py-4 rounded-2xl hover:rounded-3xl text-lg font-bold text-white overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <span className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:rounded-3xl group-hover:border-white/50 transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-white/5 rounded-2xl group-hover:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Create NFT
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-14 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">98k+</p>
                <p className="text-gray-400 text-sm">Artwork</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">12k+</p>
                <p className="text-gray-400 text-sm">Auction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15k+</p>
                <p className="text-gray-400 text-sm">Artist</p>
              </div>
            </div>
          </div>

          {/* Right: Image Grid with slider effect */}
          <div className="flex-1 flex items-center justify-center p-8 relative">
            {/* Gradient Masks for Slider */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1333cc] to-transparent z-20 pointer-events-none md:from-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1333cc] to-transparent z-20 pointer-events-none md:from-transparent"></div>

            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#21123a] to-transparent z-20 opacity-0 md:opacity-0 mix-blend-overlay"></div>

            <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(33,18,58,0.8) 0%, transparent 15%, transparent 85%, rgba(33,18,58,0.8) 100%)' }}></div>


            <div className="grid grid-cols-2 gap-5 w-[85%] md:w-[480px] h-[650px] relative transform rotate-[-5deg] md:rotate-0 transition-transform hover:rotate-0 duration-500">
              {/* Left column: slides up */}
              <div className="flex flex-col gap-5 overflow-hidden h-full">
                <div className="animate-slide-up" style={{ animation: 'slideUp 20s linear infinite' }}>
                  {[...leftImagesForSlider, ...leftImagesForSlider, ...leftImagesForSlider].map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 mb-5 h-[280px]">
                      <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Right column: slides down */}
              <div className="flex flex-col gap-5 overflow-hidden h-full">
                <div className="animate-slide-down" style={{ animation: 'slideDown 20s linear infinite' }}>
                  {[...rightImagesForSlider, ...rightImagesForSlider, ...rightImagesForSlider].map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 mb-5 h-[280px]">
                      <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Trending Nfts</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Discover unique digital artworks across various categories. From digital art to collectibles, find the perfect NFT for your collection.</p>
          </div>
          <Link href="/marketplace">
            <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">
              See More <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m0 0-4-4m4 4-4 4" /></svg>
            </button>
          </Link>
        </div>
        {/* NFT Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trendingNfts.map((nft, i) => (
            <div key={i} className="bg-[#231942] rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="relative mb-4 group overflow-hidden rounded-xl">
                <img src={nft.image} alt={nft.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                {nft.timer && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">3 : 23 : 54 : 57</span>
                )}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <img src={nft.avatar} alt={nft.user} className="w-8 h-8 rounded-full border-2 border-white" />
                <div>
                  <div className="text-white font-semibold text-sm">{nft.user}</div>
                  <div className="text-gray-400 text-xs">{nft.name}</div>
                </div>
                <div className="ml-auto text-white/60">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 18l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.5 3.5 4 5.5 4c1.54 0 3.04.99 3.57 2.36h1.87C11.46 4.99 12.96 4 14.5 4 16.5 4 18 5.5 18 7.5c0 2.78-2.4 4.86-6.55 9.18L10 18z" fill="currentColor" /></svg>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <div className="text-xs text-gray-400">Current Bid</div>
                  <div className="text-purple-400 font-bold flex items-center gap-1"> <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 0L13.9282 3.5V10.5L7 14L0.0717969 10.5V3.5L7 0Z" fill="currentColor" /></svg> {nft.currentBid}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Last Bid</div>
                  <div className="text-purple-300 font-bold flex items-center gap-1"> <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 0L13.9282 3.5V10.5L7 14L0.0717969 10.5V3.5L7 0Z" fill="currentColor" /></svg> {nft.lastBid}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Top Artists</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Meet the most successful artists and creators on our platform. Discover their unique styles and collections.</p>
          </div>
          <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topSellers.map((seller, i) => (
            <div key={i} className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-2 mb-2">
                {seller.images.map((img, idx) => (
                  <img key={idx} src={img} className="w-16 h-16 rounded-xl object-cover" />
                ))}
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img src={seller.avatar} className="w-14 h-14 rounded-full border-2 border-white" />
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">{seller.name}</div>
                  <div className="text-gray-300 text-sm">Total earnings: {seller.earnings}</div>
                </div>
                <div className="text-3xl font-bold text-white/30 ml-4">{seller.rank}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Collections</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Explore curated collections of the finest digital artworks from talented artists around the world.</p>
          </div>
          <Link href="/marketplace">
            <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">
              See More <svg width='18' height='18' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4' /></svg>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingNfts.map((nft, i) => (
            <div key={i} className="group overflow-hidden rounded-xl h-56 relative">
              <img src={nft.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works / Setup Steps Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Set up your wallet */}
          <div className="flex-1 bg-[#231942] rounded-2xl p-10 flex flex-col items-center justify-center relative hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-center w-full">
              <div className="bg-primary rounded-xl p-4 mb-6 flex items-center justify-center shadow-lg shadow-primary/30">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="#fff" strokeWidth="2" /><path d="M16 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" stroke="#fff" strokeWidth="2" /></svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Set up your wallet</h3>
            <p className="text-gray-300 mb-2 text-center">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
            <p className="text-gray-400 text-sm text-center">Join the Web3 revolution instantly.</p>
          </div>
          {/* Create your collection */}
          <div className="flex-1 bg-gradient-to-br from-primary to-accent rounded-2xl p-10 flex flex-col items-center justify-center relative hover:scale-[1.02] transition-transform duration-300 shadow-xl">
            <div className="flex justify-center w-full">
              <div className="bg-white/20 rounded-xl p-4 mb-6 flex items-center justify-center backdrop-blur-sm">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" fillOpacity=".15" /><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Create your collection</h3>
            <p className="text-gray-200 mb-2 text-center">Upload your NFTs and set a title, description and price.</p>
            <p className="text-gray-100 text-sm text-center">Start earning from your creativity today.</p>
          </div>
        </div>
      </section>

      {/* Browse By Categories Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Browse By Categories</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Find your perfect NFT across our diverse categories.</p>
          </div>
          <Link href="/marketplace">
            <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">
              See All <svg width='18' height='18' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4' /></svg>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Art Category */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute top-6 left-6 bg-primary text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg">Art</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
          </div>
          {/* Music Category */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute top-6 left-6 bg-primary text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg">Music</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
          </div>
          {/* Utility Category */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute top-6 left-6 bg-primary text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg">Utility</span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">Learn how {siteConfig.name} works and how to get the most out of the NFT marketplace.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#231942] rounded-xl p-6 border border-white/5 hover:border-primary/30 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="currentColor" className="text-primary" strokeWidth="2" /><text x="7" y="15" fontSize="12" fill="currentColor" className="text-primary">?</text></svg></span>
                <span className="text-lg font-semibold text-white">{faq.question}</span>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed pl-11">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Blog & News Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Resources Blog & News</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Stay updated with the latest NFT trends, artist spotlights, and marketplace insights.</p>
          </div>
          <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">See All <svg width='18' height='18' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4' /></svg></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img src={post.image} className="w-full h-72 object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="text-gray-300 text-sm mb-2">{post.date}</div>
                <div className="text-2xl font-bold text-white mb-2 leading-tight">{post.title}</div>
                <div className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</div>
                <div className="text-white font-semibold flex items-center gap-2 group-hover:text-primary transition">Read More <svg width='16' height='16' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4' /></svg></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
