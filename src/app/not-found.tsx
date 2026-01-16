import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a259ff] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a259ff] to-[#7c3aed] mb-4">404</h1>
                <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto">
                    Oops! The page you are looking for has vanished into the metaverse.
                </p>
                <Link href="/">
                    <button className="bg-[#a259ff] hover:bg-[#8b3dff] text-white font-bold py-4 px-10 rounded-full transition shadow-lg shadow-[#a259ff]/30">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
