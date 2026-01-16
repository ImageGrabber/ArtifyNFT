export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1333]/80 backdrop-blur-sm">
            <div className="relative">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-[#a259ff]/30 border-t-[#a259ff] rounded-full animate-spin"></div>

                {/* Inner Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#a259ff] rounded-full filter blur-xl opacity-50 animate-pulse"></div>
            </div>
        </div>
    );
}
