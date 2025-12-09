"use client";

import React, { useEffect } from "react";

// Parallax floating particles for background
export default function HeroParticles() {
    // Add scroll tracking for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Pink dot */}
            <div className="absolute top-10 left-20 w-8 h-8 bg-pink-400 rounded-full opacity-40 animate-float-slow transform -translate-y-0 blur-sm" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.1px))' }} />
            {/* Blue dot */}
            <div className="absolute top-32 left-1/2 w-6 h-6 bg-blue-400 rounded-full opacity-35 animate-float-medium transform -translate-y-0 blur-sm" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.15px))' }} />
            {/* Yellow dot */}
            <div className="absolute bottom-16 left-1/3 w-5 h-5 bg-yellow-300 rounded-full opacity-40 animate-float-fast transform -translate-y-0 blur-sm" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.2px))' }} />
            {/* Purple dot */}
            <div className="absolute bottom-24 right-24 w-7 h-7 bg-purple-400 rounded-full opacity-35 animate-float-medium transform -translate-y-0 blur-sm" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.12px))' }} />
            {/* Green dot */}
            <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-float-slow transform -translate-y-0 blur-sm" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.08px))' }} />

            {/* Custom Keyframes Style */}
            <style jsx global>{`
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
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 5s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 3.5s ease-in-out infinite; }
        .animate-shine { animation: shine 1.5s infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
