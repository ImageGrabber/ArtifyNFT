"use client";

import React, { useState, useRef } from "react";

interface ImageUploadProps {
    onImageSelect: (file: File | null) => void;
    previewUrl: string | null;
}

export default function ImageUpload({ onImageSelect, previewUrl }: ImageUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setIsDragging(true);
        } else if (e.type === "dragleave") {
            setIsDragging(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onImageSelect(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageSelect(e.target.files[0]);
        }
    };

    return (
        <div className="w-full">
            <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">Upload File</label>
            <div
                className={`relative group border-2 border-dashed rounded-[1.5rem] p-8 text-center transition-all duration-300 cursor-pointer overflow-hidden min-h-[300px] flex flex-col items-center justify-center ${isDragging
                        ? "border-[#a259ff] bg-[#a259ff]/10 scale-[1.02]"
                        : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*,video/*,audio/*"
                    onChange={handleChange}
                />

                {previewUrl ? (
                    <div className="relative w-full h-full min-h-[240px]">
                        <img src={previewUrl} alt="Preview" className="mx-auto max-h-[300px] object-contain rounded-xl shadow-lg" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                            <span className="text-white font-bold bg-[#a259ff] px-4 py-2 rounded-full">Change Image</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="bg-[#a259ff]/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        </div>
                        <p className="text-white font-bold text-lg mb-2">Drag & drop file</p>
                        <p className="text-gray-400 text-sm mb-6">JPG, PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                        <button className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition text-sm">Browse Files</button>
                    </>
                )}
            </div>
        </div>
    );
}
