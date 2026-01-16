import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connect Wallet | ArtifyNFT",
    description: "Connect your crypto wallet to start buying and selling NFTs.",
};

export default function WalletLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
