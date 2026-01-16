import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="max-w-full bg-transparent py-20 px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
                {/* Logo and description */}
                <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
                    <div className="flex items-center gap-1 text-3xl font-extrabold select-none mb-4">
                        <span className="text-white">{siteConfig.name.replace("NFT", "")}</span><span className="text-primary">NFT</span>
                    </div>
                    <p className="text-gray-300 mb-4 max-w-xs">{siteConfig.description}</p>
                    <div className="mb-2 text-white font-semibold">Follow Us :</div>
                    <div className="flex gap-3">
                        <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg text-white hover:bg-primary transition">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-1.6-2.5-.1-4-1.2-4.6-2.9 1.1 0 2 0 2-.6-2.7-.4-4.5-2.7-4.5-5.3.7.3 1.5.5 2.1.5-2.6-1.7-2.7-5.3-1-7.2l-.2.1c2.8 3.5 7.1 5.9 11.8 6.1-.8-3.4 3.7-5.9 6.5-3.1 1.4-.3 2.7-.8 3.8-1.4l.2.8c-.8.9-1.3 1.7-2.1 2.5z" fill="currentColor" /></svg>
                        </a>
                        <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg text-white hover:bg-primary transition">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M18.9 5.2c-1.4-1.2-3.1-1.7-3.1-1.7-1.4 1-2 2.5-2 2.5-3-.3-5.8-.3-8.8 0 0 0-.7-1.5-2-2.5 0 0-1.7.5-3.1 1.7C-2.2 13 1 20.8 1 20.8c2.1 2.5 5.9 2.5 5.9 2.5 1-1.3 1.9-2.9 2.4-4.5-2.4-.7-3.5-2.2-3.5-2.2s.2.1.6.3c3.7 1.7 8 1.7 11.2 0 .4-.2.6-.3.6-.3s-1.1 1.5-3.5 2.2c.6 1.7 1.4 3.2 2.4 4.5 0 0 3.8 0 5.9-2.5 2.2-9-2.8-15.6-4.1-15.6zM8.5 16.5c-1.3 0-2.4-1.2-2.4-2.7s1.1-2.7 2.4-2.7 2.4 1.2 2.4 2.7c0 1.5-1.1 2.7-2.4 2.7zm7 0c-1.3 0-2.4-1.2-2.4-2.7s1.1-2.7 2.4-2.7 2.4 1.2 2.4 2.7c0 1.5-1.1 2.7-2.4 2.7z" fill="currentColor" /></svg>
                        </a>
                        <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-lg text-white hover:bg-primary transition">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM2 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" /></svg>
                        </a>
                    </div>
                </div>
                {/* Footer Links */}
                <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-white font-semibold mb-3">Marketplace</div>
                        <ul className="text-gray-300 space-y-2">
                            <li><Link href="/marketplace?category=All" className="hover:text-primary transition">All NFTs</Link></li>
                            <li><Link href="/marketplace?sort=new" className="hover:text-primary transition">New</Link></li>
                            <li><Link href="/marketplace?category=Art" className="hover:text-primary transition">Arts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-3">Status</div>
                        <ul className="text-gray-300 space-y-2">
                            <li className="hover:text-primary transition cursor-pointer">Rankings</li>
                            <li className="hover:text-primary transition cursor-pointer">Activity</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-3">Resources</div>
                        <ul className="text-gray-300 space-y-2">
                            <li className="hover:text-primary transition cursor-pointer">Help Center</li>
                            <li className="hover:text-primary transition cursor-pointer">Suggestions</li>
                            <li className="hover:text-primary transition cursor-pointer">Newsletter</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-3">Company</div>
                        <ul className="text-gray-300 space-y-2">
                            <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
                            <li className="hover:text-primary transition cursor-pointer">Careers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm border-t border-white/10 pt-8">
                <div>{new Date().getFullYear()} © {siteConfig.name} </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Terms Conditions & Policy</a>
                </div>
            </div>
        </footer>
    );
}
