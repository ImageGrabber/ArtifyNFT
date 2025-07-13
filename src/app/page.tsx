"use client";

import React from "react";
import Image from "next/image";

// Left column images (user's new Stockcake images)
const leftImages = [
  {
    src: "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
    alt: "Magical Forest Fox"
  },
  {
    src: "https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg",
    alt: "Peaceful Reading Nook"
  },
  {
    src: "https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg",
    alt: "Stone Forest Guardians"
  }
];

// Right column images (previous images, minus first two Pexels links)
const rightImages = [
  {
    src: "https://images.pexels.com/photos/18069081/pexels-photo-18069081.png",
    alt: "Pexels Art 3"
  },
  {
    src: "https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg",
    alt: "Stockcake Art 1"
  },
  {
    src: "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
    alt: "Stockcake Art 2"
  },
  {
    src: "https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg",
    alt: "Stockcake Art 3"
  }
];

// Split images for two columns
const leftImagesForSlider = leftImages.slice(0, 3);
const rightImagesForSlider = rightImages;

// NFT and avatar images already used in the project
const trendingNfts = [
  {
    image: "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    user: "@Nikom",
    name: "Magical Fox",
    currentBid: "20.5 ETH",
    lastBid: "25.04 ETH",
    timer: true
  },
  {
    image: "https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    user: "@Mexi",
    name: "Reading Nook",
    currentBid: "12.5 ETH",
    lastBid: "25.04 ETH"
  },
  {
    image: "https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    user: "@Astro",
    name: "Stone Guardians",
    currentBid: "14.8 ETH",
    lastBid: "12.04 ETH"
  },
  {
    image: "https://images.pexels.com/photos/18069081/pexels-photo-18069081.png",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    user: "@Aliza",
    name: "Pexels Art",
    currentBid: "18 ETH",
    lastBid: "32.06 ETH",
    timer: true
  },
  // New row
  
  {
    image: "https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    user: "@Visionary",
    name: "Visionary Future",
    currentBid: "10.2 ETH",
    lastBid: "15.00 ETH"
  },
  {
    image: "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    user: "@Neon",
    name: "Neon Dance",
    currentBid: "8.7 ETH",
    lastBid: "13.50 ETH"
  },
  {
    image: "https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    user: "@Campfire",
    name: "Campfire Adventure",
    currentBid: "11.1 ETH",
    lastBid: "14.00 ETH"
  },
  {
    image: "https://images.pexels.com/photos/17485678/pexels-photo-17485678.png",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    user: "@Pexels2",
    name: "Pexels Art 2",
    currentBid: "9.8 ETH",
    lastBid: "12.50 ETH"
  }
];

// Parallax floating particles for background
function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Pink dot */}
      <div className="absolute top-10 left-20 w-8 h-8 bg-pink-400 rounded-full opacity-90 animate-float-slow transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.1px))' }} />
      {/* Blue dot */}
      <div className="absolute top-32 left-1/2 w-6 h-6 bg-blue-400 rounded-full opacity-80 animate-float-medium transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.15px))' }} />
      {/* Yellow dot */}
      <div className="absolute bottom-16 left-1/3 w-5 h-5 bg-yellow-300 rounded-full opacity-90 animate-float-fast transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.2px))' }} />
      {/* Purple dot */}
      <div className="absolute bottom-24 right-24 w-7 h-7 bg-purple-400 rounded-full opacity-80 animate-float-medium transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.12px))' }} />
      {/* Green dot */}
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-green-400 rounded-full opacity-80 animate-float-slow transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.08px))' }} />
      {/* More dots for density */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-pink-300 rounded-full opacity-80 animate-float-fast transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.25px))' }} />
      <div className="absolute top-1/2 left-1/5 w-5 h-5 bg-blue-300 rounded-full opacity-70 animate-float-medium transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.18px))' }} />
      <div className="absolute bottom-10 left-1/2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-float-slow transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.13px))' }} />
      <div className="absolute top-12 right-1/3 w-4 h-4 bg-green-300 rounded-full opacity-80 animate-float-fast transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.22px))' }} />
      <div className="absolute bottom-1/4 right-1/5 w-7 h-7 bg-purple-300 rounded-full opacity-70 animate-float-medium transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.16px))' }} />
      <div className="absolute top-1/5 right-10 w-3 h-3 bg-pink-200 rounded-full opacity-60 animate-float-fast transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.3px))' }} />
      <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-blue-200 rounded-full opacity-60 animate-float-slow transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.11px))' }} />
      <div className="absolute top-1/6 left-1/2 w-4 h-4 bg-yellow-200 rounded-full opacity-60 animate-float-medium transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.19px))' }} />
      <div className="absolute bottom-1/6 right-1/2 w-4 h-4 bg-green-200 rounded-full opacity-60 animate-float-fast transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.27px))' }} />
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-purple-200 rounded-full opacity-60 animate-float-slow transform -translate-y-0" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.14px))' }} />
    </div>
  );
}

export default function Home() {
  // Add scroll tracking for parallax effect
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1333] via-[#21123a] to-[#18122b] text-white relative">
      {/* Global Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <HeroParticles />
      </div>
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-1 text-2xl font-extrabold select-none lowercase">
          <span className="text-white">artifynft</span>
        </div>
        <ul className="hidden md:flex gap-10 text-base font-semibold">
          <li className="text-[#a259ff] border-b-2 border-[#a259ff] pb-1">Home</li>
          <li className="hover:text-[#a259ff] transition">Marketplace</li>
          <li className="hover:text-[#a259ff] transition">Create</li>
          <li className="hover:text-[#a259ff] transition">About</li>
        </ul>
        <button className="flex items-center gap-2 bg-[#a259ff] hover:bg-[#7c3aed] text-white font-semibold px-6 py-2 rounded-full shadow transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 6.707 9.293L9 11.586V3a1 1 0 0 1 1-1Z"/><path fill="currentColor" d="M4 15a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"/></svg>
          Connect Wallet
        </button>
      </nav>

      {/* Hero Card Section */}
      <section className="flex justify-center items-center min-h-[80vh] px-4 relative overflow-hidden z-10">
        <div className="w-full max-w-7xl rounded-3xl bg-gradient-to-br from-[#1a1333cc] via-[#21123acc] to-[#18122bcc] shadow-2xl p-0 md:p-0 flex flex-col md:flex-row overflow-hidden relative">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center px-8 py-16 md:py-24 md:pl-16">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#2d1e4a] text-[#a259ff] px-5 py-2 rounded-full text-base font-semibold mb-8 w-fit">
              <span className="text-lg">●</span> MEET YOUR CO-PILOT
            </span>
            {/* Gradient Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
              <span className="bg-gradient-to-r from-[#a259ff] via-[#b16cea] to-[#ff6250] bg-clip-text text-transparent">Discover, Create & Trade</span>
              <span className="block text-white"> The <span className="font-black">Best Digital Art NFTs</span></span>
            </h1>
            {/* Description */}
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">The premier NFT marketplace for artists and collectors. Mint, buy, and sell unique digital artworks on the blockchain.</p>
            {/* Buttons */}
            <div className="flex gap-6">
              <button className="bg-[#a259ff] hover:bg-[#7c3aed] text-white font-semibold px-8 py-3 rounded-xl text-lg shadow transition">Explore NFTs</button>
              <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-xl text-lg flex items-center gap-2 hover:bg-white/10 transition">
                Create NFT <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m0 0-4-4m4 4-4 4"/></svg>
              </button>
            </div>
          </div>
          {/* Right: Image Grid with slider effect */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-6 w-[440px] h-[600px] relative">
              {/* Left column: slides up */}
              <div className="flex flex-col gap-4 overflow-hidden h-full">
                <div className="animate-slide-up" style={{ animation: 'slideUp 6s linear infinite' }}>
                  {leftImagesForSlider.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden bg-[#231942] shadow-lg flex items-center justify-center mb-6 last:mb-0">
                      <Image src={img.src} alt={img.alt} width={260} height={200} className="object-cover w-full h-full" />
                    </div>
                  ))}
                  {/* Repeat for seamless loop */}
                  {leftImagesForSlider.map((img, i) => (
                    <div key={"repeat-"+i} className="rounded-2xl overflow-hidden bg-[#231942] shadow-lg flex items-center justify-center mb-6 last:mb-0">
                      <Image src={img.src} alt={img.alt} width={260} height={200} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Right column: slides down */}
              <div className="flex flex-col gap-4 overflow-hidden h-full">
                <div className="animate-slide-down" style={{ animation: 'slideDown 6s linear infinite' }}>
                  {rightImagesForSlider.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden bg-[#231942] shadow-lg flex items-center justify-center mb-6 last:mb-0">
                      <Image src={img.src} alt={img.alt} width={260} height={200} className="object-cover w-full h-full" />
                    </div>
                  ))}
                  {/* Repeat for seamless loop */}
                  {rightImagesForSlider.map((img, i) => (
                    <div key={"repeat-"+i} className="rounded-2xl overflow-hidden bg-[#231942] shadow-lg flex items-center justify-center mb-6 last:mb-0">
                      <Image src={img.src} alt={img.alt} width={260} height={200} className="object-cover w-full h-full" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Trending Categories</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Discover unique digital artworks across various categories. From digital art to collectibles, find the perfect NFT for your collection.</p>
          </div>
          <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">
            See More <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10h10m0 0-4-4m4 4-4 4"/></svg>
          </button>
        </div>
         {/* NFT Cards Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           {trendingNfts.map((nft, i) => (
             <div key={i} className="bg-[#231942] rounded-2xl p-4 shadow-lg">
               <div className="relative mb-4">
                 <img src={nft.image} alt={nft.name} className="rounded-xl w-full h-56 object-cover" />
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
                   <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 18l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.5 3.5 4 5.5 4c1.54 0 3.04.99 3.57 2.36h1.87C11.46 4.99 12.96 4 14.5 4 16.5 4 18 5.5 18 7.5c0 2.78-2.4 4.86-6.55 9.18L10 18z" fill="currentColor"/></svg>
                 </div>
               </div>
               <div className="flex justify-between items-center mt-2">
                 <div>
                   <div className="text-xs text-gray-400">Current Bid</div>
                   <div className="text-purple-400 font-bold flex items-center gap-1"> <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 0L13.9282 3.5V10.5L7 14L0.0717969 10.5V3.5L7 0Z" fill="#a259ff"/></svg> {nft.currentBid}</div>
                 </div>
                 <div>
                   <div className="text-xs text-gray-400">Last Bid</div>
                   <div className="text-purple-300 font-bold flex items-center gap-1"> <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 0L13.9282 3.5V10.5L7 14L0.0717969 10.5V3.5L7 0Z" fill="#a259ff"/></svg> {nft.lastBid}</div>
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
          {/* Seller 1 */}
          <div className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <img src="https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-14 h-14 rounded-full border-2 border-white" />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">Nikom Petroy</div>
                <div className="text-gray-300 text-sm">Total earnings: $60000</div>
              </div>
              <div className="text-3xl font-bold text-white/30 ml-4">01</div>
            </div>
          </div>
          {/* Seller 2 */}
          <div className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <img src="https://images.pexels.com/photos/18069081/pexels-photo-18069081.png" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.pexels.com/photos/17485678/pexels-photo-17485678.png" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-14 h-14 rounded-full border-2 border-white" />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">Mexi Luna</div>
                <div className="text-gray-300 text-sm">Total earnings: $55000</div>
              </div>
              <div className="text-3xl font-bold text-white/30 ml-4">02</div>
            </div>
          </div>
          {/* Seller 3 */}
          <div className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <img src="https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" className="w-14 h-14 rounded-full border-2 border-white" />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">Astro Stark</div>
                <div className="text-gray-300 text-sm">Total earnings: $52000</div>
              </div>
              <div className="text-3xl font-bold text-white/30 ml-4">03</div>
            </div>
          </div>
          {/* Seller 4 */}
          <div className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <img src="https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-14 h-14 rounded-full border-2 border-white" />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">Aliza Spencer</div>
                <div className="text-gray-300 text-sm">Total earnings: $48500</div>
              </div>
              <div className="text-3xl font-bold text-white/30 ml-4">04</div>
            </div>
          </div>
          {/* Seller 5 */}
          <div className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <img src="https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.pexels.com/photos/18069081/pexels-photo-18069081.png" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-14 h-14 rounded-full border-2 border-white" />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">Tony Stark</div>
                <div className="text-gray-300 text-sm">Total earnings: $45200</div>
              </div>
              <div className="text-3xl font-bold text-white/30 ml-4">05</div>
            </div>
          </div>
          {/* Seller 6 */}
          <div className="bg-[#231942] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <img src="https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.pexels.com/photos/17485678/pexels-photo-17485678.png" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg" className="w-16 h-16 rounded-xl object-cover" />
            </div>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" className="w-14 h-14 rounded-full border-2 border-white" />
              <div className="flex-1">
                <div className="text-white font-bold text-lg">Minato Namikaze</div>
                <div className="text-gray-300 text-sm">Total earnings: $45100</div>
              </div>
              <div className="text-3xl font-bold text-white/30 ml-4">06</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Best Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Collections</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Explore curated collections of the finest digital artworks from talented artists around the world.</p>
          </div>
          <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">See More <svg width='18' height='18' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4'/></svg></button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.pexels.com/photos/18069081/pexels-photo-18069081.png" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.pexels.com/photos/17485678/pexels-photo-17485678.png" className="rounded-xl w-full h-56 object-cover" />
          <img src="https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg" className="rounded-xl w-full h-56 object-cover" />
        </div>
      </section>

      {/* How It Works / Setup Steps Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Set up your wallet */}
          <div className="flex-1 bg-[#231942] rounded-2xl p-10 flex flex-col items-center justify-center relative">
            <div className="flex justify-center w-full">
              <div className="bg-[#a259ff] rounded-xl p-4 mb-6 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="#fff" strokeWidth="2"/><path d="M16 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" stroke="#fff" strokeWidth="2"/></svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Set up your wallet</h3>
            <p className="text-gray-300 mb-2">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
            <p className="text-gray-400 text-sm">You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.</p>
          </div>
          {/* Create your collection */}
          <div className="flex-1 bg-gradient-to-br from-[#a259ff] to-[#7c3aed] rounded-2xl p-10 flex flex-col items-center justify-center relative">
            <div className="flex justify-center w-full">
              <div className="bg-white/20 rounded-xl p-4 mb-6 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" fillOpacity=".15"/><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Create your collection</h3>
            <p className="text-gray-200 mb-2">Upload your NFTs and set a title, description and price.</p>
            <p className="text-gray-100 text-sm">You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.</p>
          </div>
        </div>
      </section>

      {/* Browse By Categories Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Browse By Categories</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Find your perfect NFT across our diverse categories. From digital art to music, there's something for every collector.</p>
          </div>
          <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">See All <svg width='18' height='18' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4'/></svg></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Art Category */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg" className="w-full h-96 object-cover" />
            <span className="absolute top-6 left-6 bg-[#a259ff] text-white px-6 py-2 rounded-full text-lg font-semibold">Art</span>
          </div>
          {/* Music Category */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg" className="w-full h-96 object-cover" />
            <span className="absolute top-6 left-6 bg-[#a259ff] text-white px-6 py-2 rounded-full text-lg font-semibold">Music</span>
          </div>
          {/* Utility Category */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg" className="w-full h-96 object-cover" />
            <span className="absolute top-6 left-6 bg-[#a259ff] text-white px-6 py-2 rounded-full text-lg font-semibold">Utility</span>
          </div>
        </div>
      </section>
      {/* Custom slider keyframes */}
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-16px) scale(1.1); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(12px) scale(0.95); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 5s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 3.5s ease-in-out infinite; }
      `}</style>

      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 text-center">Learn how ArtifyNFT works and how to get the most out of the NFT marketplace.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FAQ 1 */}
          <div className="bg-[#231942] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2"/><text x="7" y="15" fontSize="12" fill="#a259ff">?</text></svg></span>
              <span className="text-lg font-semibold text-white">What cryptocurrencies are supported?</span>
            </div>
            <div className="text-gray-300 text-sm">We support Ethereum (ETH) for all NFT transactions. You can connect your MetaMask or other Web3 wallets to make purchases.</div>
          </div>
          {/* FAQ 2 */}
          <div className="bg-[#231942] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2"/><text x="7" y="15" fontSize="12" fill="#a259ff">?</text></svg></span>
              <span className="text-lg font-semibold text-white">How do I create my first NFT?</span>
            </div>
            <div className="text-gray-300 text-sm">Upload your digital artwork, add metadata, and mint it as an NFT using our simple interface. Gas fees apply for blockchain transactions.</div>
          </div>
          {/* FAQ 3 */}
          <div className="bg-[#231942] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2"/><text x="7" y="15" fontSize="12" fill="#a259ff">?</text></svg></span>
              <span className="text-lg font-semibold text-white">What are the marketplace fees?</span>
            </div>
          </div>
          {/* FAQ 4 */}
          <div className="bg-[#231942] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2"/><text x="7" y="15" fontSize="12" fill="#a259ff">?</text></svg></span>
              <span className="text-lg font-semibold text-white">How do I verify NFT authenticity?</span>
            </div>
          </div>
          {/* FAQ 5 */}
          <div className="bg-[#231942] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2"/><text x="7" y="15" fontSize="12" fill="#a259ff">?</text></svg></span>
              <span className="text-lg font-semibold text-white">Can I resell my NFTs?</span>
            </div>
          </div>
          {/* FAQ 6 */}
          <div className="bg-[#231942] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white bg-[#2d1e4a] rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2"/><text x="7" y="15" fontSize="12" fill="#a259ff">?</text></svg></span>
              <span className="text-lg font-semibold text-white">What file types are supported?</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Blog & News Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Resources Blog & News</h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">Stay updated with the latest NFT trends, artist spotlights, and marketplace insights from the ArtifyNFT community.</p>
          </div>
          <button className="flex items-center gap-2 border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-white/10 transition text-base font-semibold">See All <svg width='18' height='18' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4'/></svg></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog 1 */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg" className="w-full h-72 object-cover opacity-80" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <div className="text-gray-200 text-sm mb-2">27 Aug 2021</div>
              <div className="text-2xl font-bold text-white mb-2">The Beginner's to creating & selling digital NFTs</div>
              <div className="text-gray-200 mb-4">suscipit eget imperdiet nec imperdiet iaculis ipsum. Sed aliquam ultrices mauris.</div>
              <a href="#" className="text-white font-semibold flex items-center gap-2 hover:underline">Read More <svg width='16' height='16' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4'/></svg></a>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="relative bg-[#231942] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg" className="w-full h-72 object-cover opacity-80" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <div className="text-gray-200 text-sm mb-2">31 Jan 2022</div>
              <div className="text-2xl font-bold text-white mb-2">7 Reasons to sell your NFTs on openSea</div>
              <div className="text-gray-200 mb-4">Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.</div>
              <a href="#" className="text-white font-semibold flex items-center gap-2 hover:underline">Read More <svg width='16' height='16' fill='none' viewBox='0 0 20 20'><path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 10h10m0 0-4-4m4 4-4 4'/></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
              <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3h3a2 2 0 0 0 2-2V7a5 5 0 0 0-5-5Z" stroke="currentColor" strokeWidth="2"/></svg></a>
              <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.36 4.07 3.57 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.64A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.56 1.74 2.18 3.01 4.1 3.05A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71A4.48 4.48 0 0 0 23 3Z" stroke="currentColor" strokeWidth="2"/></svg></a>
              <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/></svg></a>
              <a href="#" className="bg-[#231942] p-2 rounded-lg text-white hover:bg-[#a259ff] transition"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/></svg></a>
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
    </div>
  );
}
