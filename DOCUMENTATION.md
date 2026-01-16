# ArtifyNFT - Next.js NFT Marketplace Template

Welcome to **ArtifyNFT**, a modern, high-performance NFT marketplace template built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**. This template is designed for ease of use, customization, and scalability.

> **Note:** This is a frontend template with demo data. Web3 wallet integration and blockchain functionality are not included and need to be implemented separately based on your requirements.

## 🚀 Getting Started

1.  **Extract the template files** to your desired location.

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customizing the Template

We've organized the code to make customization as simple as possible. You don't need to dig through component files to change basic content!

### 1. Site Configuration (Name, Description, Links)
Go to **`src/config/site.ts`**.
Here you can update:
- Website Name & Description
- Social Media Links
- Navigation Menu Items
- Wallet Provider Options
- Contact Information

### 2. Theming & Colors
Go to **`src/app/globals.css`**.
We use CSS variables for a consistent theme. Change these values to update your brand colors instantly:

```css
:root {
  --primary: #a259ff;       /* Main brand color */
  --primary-foreground: #ffffff;
  --secondary: #231942;     /* Backgrounds for cards/sections */
  --accent: #7c3aed;        /* Accent details */
}
```

### 3. Mock Data & Content
All mock data is centralized in the **`src/data`** folder. You can replace this data with your own or connect it to an API.

> **Important:** The template includes demo images from external sources (stockcake.com, randomuser.me, etc.) for demonstration purposes. Replace these with your own images or update the URLs in the data files before deploying to production.

- **`src/data/nfts.ts`**:
    - `allNfts`: The main list of NFTs displayed on the Marketplace and Home page.
    - `nftCategories`: Categories for filtering (Art, Music, etc.).
    - `topSellers`: List of top artists shown on the homepage.
    - `showcaseNfts`: NFTs featured in the Hero/About sections.

- **`src/data/content.ts`**:
    - `heroSliderImages`: Images for the homepage hero slider.
    - `teamMembers`: Team data for the About page.
    - `features`: Feature list for the About page.
    - `milestones`: Timeline data for the About page.
    - `faqs`: Frequently Asked Questions.
    - `blogPosts`: Blog/News items on the homepage.
    - `heroImages`: Images for various hero sections.

- **`src/data/filters.ts`**:
    - Marketplace filter options (Price range, Status, Collections).

### 4. Fonts
The template uses **Geist** and **Geist Mono** by default. To change fonts, update `src/app/layout.tsx`.

## 📁 Project Structure

- **`src/app`**: Next.js App Router pages (`page.tsx`, `layout.tsx`).
- **`src/components`**: Reusable UI components (`Navbar`, `Footer`, `FeaturedSpotlight`, etc.).
- **`src/config`**: Global configuration files.
- **`src/data`**: Centralized mock data.
- **`public`**: Static assets (images, icons).

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ⚠️ Important Notes

### Demo vs Production Features

This template includes:
- ✅ **Complete UI/UX** - All pages, components, and layouts
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Mock Data Structure** - Ready-to-use data models
- ✅ **Styling System** - Fully customizable theme

This template does NOT include:
- ❌ **Web3 Wallet Integration** - Wallet connection functionality needs to be implemented
- ❌ **Blockchain Integration** - Smart contract interactions need to be added
- ❌ **Backend API** - Data persistence and server-side logic need to be implemented
- ❌ **Payment Processing** - Transaction handling needs to be integrated

The wallet connection page (`/wallet`) and create page (`/create`) are UI-only implementations. You'll need to integrate with Web3 libraries (like ethers.js, web3.js, or wagmi) to add actual blockchain functionality.

## 🤝 Support

If you have any questions or need help with customization, please refer to the Next.js documentation or reach out through the ThemeForest support system.

Happy Minting! 🎨✨
