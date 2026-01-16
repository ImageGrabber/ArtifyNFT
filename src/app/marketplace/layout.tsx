import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marketplace | ArtifyNFT",
    description: "Explore the best digital art and NFTs from top creators.",
};

export default function MarketplaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
