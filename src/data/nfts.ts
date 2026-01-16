export interface NFT {
    id: string;
    image: string;
    avatar: string;
    user: string;
    name: string;
    currentBid: string;
    lastBid: string;
    category: string;
    timer?: boolean;
    likes: number;
    views: string;
}

export const allNfts: NFT[] = [
    {
        id: "1",
        image: "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        user: "@Nikom",
        name: "Magical Fox",
        currentBid: "20.5 ETH",
        lastBid: "25.04 ETH",
        category: "Art",
        timer: true,
        likes: 124,
        views: "1.2k"
    },
    {
        id: "2",
        image: "https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        user: "@Mexi",
        name: "Reading Nook",
        currentBid: "12.5 ETH",
        lastBid: "25.04 ETH",
        category: "Art",
        likes: 89,
        views: "856"
    },
    {
        id: "3",
        image: "https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        user: "@Astro",
        name: "Stone Guardians",
        currentBid: "14.8 ETH",
        lastBid: "12.04 ETH",
        category: "Collectibles",
        likes: 210,
        views: "2.5k"
    },
    {
        id: "4",
        image: "https://images.pexels.com/photos/18069081/pexels-photo-18069081.png",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        user: "@Aliza",
        name: "Pexels Art",
        currentBid: "18 ETH",
        lastBid: "32.06 ETH",
        category: "Art",
        timer: true,
        likes: 156,
        views: "1.8k"
    },
    {
        id: "5",
        image: "https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        user: "@Visionary",
        name: "Visionary Future",
        currentBid: "10.2 ETH",
        lastBid: "15.00 ETH",
        category: "Utility",
        likes: 45,
        views: "540"
    },
    {
        id: "6",
        image: "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        user: "@Neon",
        name: "Neon Dance",
        currentBid: "8.7 ETH",
        lastBid: "13.50 ETH",
        category: "Music",
        likes: 320,
        views: "3.1k"
    },
    {
        id: "7",
        image: "https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        user: "@Campfire",
        name: "Campfire Adventure",
        currentBid: "11.1 ETH",
        lastBid: "14.00 ETH",
        category: "Art",
        likes: 98,
        views: "920"
    },
    {
        id: "8",
        image: "https://images.pexels.com/photos/17485678/pexels-photo-17485678.png",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        user: "@Pexels2",
        name: "Pexels Art 2",
        currentBid: "9.8 ETH",
        lastBid: "12.50 ETH",
        category: "Collectibles",
        likes: 67,
        views: "710"
    },
    {
        id: "9",
        image: "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        user: "@FoxMaster",
        name: "Fox Spirit",
        currentBid: "15.5 ETH",
        lastBid: "18.00 ETH",
        category: "Art",
        likes: 145,
        views: "1.5k"
    },
    {
        id: "10",
        image: "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        user: "@MusicLover",
        name: "Rhythm Soul",
        currentBid: "7.5 ETH",
        lastBid: "9.00 ETH",
        category: "Music",
        likes: 230,
        views: "2.8k"
    }
];

export const topSellers = [
    {
        rank: "01",
        name: "Nikom Petroy",
        earnings: "$60000",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        images: [
            "https://images.stockcake.com/public/2/4/4/244f6fdd-ec03-4203-9b7e-43772fdbcde7_large/magical-forest-fox-stockcake.jpg",
            "https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg",
            "https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg"
        ]
    },
    {
        rank: "02",
        name: "Mexi Luna",
        earnings: "$55000",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        images: [
            "https://images.pexels.com/photos/18069081/pexels-photo-18069081.png",
            "https://images.pexels.com/photos/17485678/pexels-photo-17485678.png",
            "https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg"
        ]
    },
    {
        rank: "03",
        name: "Astro Stark",
        earnings: "$52000",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        images: [
            "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
            "https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg",
            "https://images.stockcake.com/public/3/f/5/3f5980fa-9d91-4ce1-9cdc-416f1038faf6_large/peaceful-reading-nook-stockcake.jpg",
            "https://images.stockcake.com/public/3/b/d/3bd781e5-9fef-44a6-bd03-be3b8060a7b9_large/stone-forest-guardians-stockcake.jpg"
        ]
    },
    {
        rank: "04",
        name: "Aliza Spencer",
        earnings: "$48500",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        images: [
            "https://images.stockcake.com/public/8/6/7/8676188a-511a-41eb-a41f-46ca5f3b1da7_large/visionary-economic-future-stockcake.jpg",
            "https://images.stockcake.com/public/c/c/5/cc522baa-d846-4c40-aaf4-a67fecde5e73_large/neon-dance-silhouette-stockcake.jpg",
            "https://images.stockcake.com/public/f/c/b/fcbb53aa-8e01-4fb4-b27c-a90d66d8e3fd_large/magical-campfire-adventure-stockcake.jpg"
        ]
    }
];

export const nftCategories = ["All", "Art", "Music", "Collectibles", "Utility"];

export const showcaseNfts = allNfts.slice(0, 4);
