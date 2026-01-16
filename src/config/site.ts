export const siteConfig = {
    name: "ArtifyNFT",
    description: "The world's most beautiful and accessible NFT marketplace",
    url: "https://yourdomain.com", // Update with your domain
    ogImage: "https://yourdomain.com/og-image.jpg", // Update with your OG image URL
    links: {
        twitter: "https://twitter.com/yourhandle", // Update with your social media links
        github: "https://github.com/yourusername", // Update with your GitHub profile
        discord: "https://discord.gg/yourserver", // Update with your Discord server
        instagram: "https://instagram.com/yourhandle", // Update with your Instagram profile
    },
    navItems: [
        { label: "Home", path: "/" },
        { label: "Marketplace", path: "/marketplace" },
        { label: "Create", path: "/create" },
        { label: "About", path: "/about" },
    ],
    wallets: [
        {
            name: "MetaMask",
            description: "The most popular Ethereum wallet for browser and mobile",
            popular: true,
            color: "from-orange-500 to-orange-600",
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        },
        {
            name: "WalletConnect",
            description: "Connect to any wallet with QR code scanning",
            popular: true,
            color: "from-blue-500 to-blue-600",
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        },
        {
            name: "Coinbase Wallet",
            description: "Secure wallet from the trusted Coinbase exchange",
            popular: true,
            color: "from-blue-600 to-indigo-600",
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        },
        {
            name: "Trust Wallet",
            description: "Multi-chain wallet with built-in DApp browser",
            popular: false,
            color: "from-cyan-500 to-blue-500",
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        },
        {
            name: "Ledger",
            description: "Hardware wallet for maximum security",
            popular: false,
            color: "from-gray-700 to-gray-900",
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        },
        {
            name: "Rainbow",
            description: "Beautiful and easy-to-use Ethereum wallet",
            popular: false,
            color: "from-pink-500 via-purple-500 to-indigo-500",
            iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        }
    ],
    contact: {
        email: "support@yourdomain.com", // Update with your support email
        address: "Your Company Address" // Update with your address
    }
};
