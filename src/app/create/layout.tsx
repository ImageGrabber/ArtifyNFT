import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Item | ArtifyNFT",
    description: "Upload your digital art and mint your own NFTs on ArtifyNFT.",
};

export default function CreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
