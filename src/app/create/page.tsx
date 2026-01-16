"use client";

import React, { useState } from "react";
import ImageUpload from "@/components/ImageUpload";

export default function CreatePage() {
    const [formData, setFormData] = useState({
        name: "",
        link: "",
        description: "",
        collection: "Create New Collection",
        price: "",
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageSelect = (file: File | null) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="pt-40 md:pt-48 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                {/* Left Column: Form */}
                <div className="flex-1 w-full space-y-8">
                    <div className="border-b border-white/10 pb-8">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Create New Item</h1>
                        <p className="text-gray-400 text-lg">
                            Image, Video, Audio, or 3D Model. <span className="text-gray-500 font-normal">File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
                        </p>
                    </div>

                    <ImageUpload onImageSelect={handleImageSelect} previewUrl={imagePreview} />

                    <div className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Item Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-[#1a1333] border border-white/20 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-[#a259ff] focus:ring-1 focus:ring-[#a259ff] transition placeholder-gray-500"
                            />
                        </div>

                        {/* External Link */}
                        <div>
                            <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">External Link <span className="text-gray-500 text-xs normal-case">(Optional)</span></label>
                            <p className="text-gray-400 text-xs mb-3">ArtifyNFT will include a link to this URL on this item&apos;s detail page, so that users can click to learn more about it.</p>
                            <input
                                type="text"
                                name="link"
                                placeholder="https://example.com/item/123"
                                value={formData.link}
                                onChange={handleInputChange}
                                className="w-full bg-[#1a1333] border border-white/20 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-[#a259ff] focus:ring-1 focus:ring-[#a259ff] transition placeholder-gray-500"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">Description</label>
                            <p className="text-gray-400 text-xs mb-3">The description will be included on the item&apos;s detail page underneath its image. Markdown syntax is supported.</p>
                            <textarea
                                name="description"
                                placeholder="Provide a detailed description of your item."
                                rows={4}
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full bg-[#1a1333] border border-white/20 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-[#a259ff] focus:ring-1 focus:ring-[#a259ff] transition placeholder-gray-500 resize-none"
                            />
                        </div>

                        {/* Collection */}
                        <div>
                            <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">Collection</label>
                            <div className="relative">
                                <select
                                    name="collection"
                                    value={formData.collection}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#1a1333] border border-white/20 rounded-xl py-4 px-5 text-white focus:outline-none focus:border-[#a259ff] appearance-none cursor-pointer"
                                >
                                    <option>Create New Collection</option>
                                    <option>Abstract Dreams</option>
                                    <option>Cyber Punks</option>
                                </select>
                                <svg className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">Price</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#1a1333] border border-white/20 rounded-xl py-4 px-5 pr-16 text-white focus:outline-none focus:border-[#a259ff] focus:ring-1 focus:ring-[#a259ff] transition placeholder-gray-500"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">ETH</span>
                            </div>
                        </div>

                        <button className="bg-[#a259ff] hover:bg-[#8b3dff] text-white font-bold py-4 px-10 rounded-full transition shadow-lg shadow-[#a259ff]/30 w-full md:w-auto mt-8">
                            Create Item
                        </button>

                    </div>
                </div>

                {/* Right Column: Preview - Sticky on Desktop */}
                <div className="w-full lg:w-96 shrink-0 lg:sticky lg:top-28">
                    <h3 className="text-white font-bold mb-6 text-xl">Preview Item</h3>

                    {/* Card Preview */}
                    <div className="bg-[#231942] rounded-2xl p-4 shadow-2xl border border-white/10 group">
                        <div className="relative mb-4 overflow-hidden rounded-xl bg-[#1a1333] min-h-[300px] flex items-center justify-center">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-full h-[300px] object-cover" />
                            ) : (
                                <div className="text-gray-500 flex flex-col items-center">
                                    <svg className="w-12 h-12 mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <span className="text-sm opacity-50">Upload media to preview</span>
                                </div>
                            )}

                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg">
                                <span className="text-white text-xs font-semibold">Art</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a259ff] to-[#7c3aed] border-2 border-white/20 flex items-center justify-center text-[10px] text-white font-bold">You</div>
                            <div>
                                <div className="text-white font-bold text-sm truncate">{formData.name || "Item Name"}</div>
                                <div className="text-[#a259ff] text-xs font-semibold">@YourUsername</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center bg-[#1a1333] p-3 rounded-xl mb-3">
                            <div>
                                <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Price</div>
                                <div className="text-white font-bold text-sm">{formData.price || "0.00"} ETH</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Highest Bid</div>
                                <div className="text-gray-300 font-medium text-sm">--</div>
                            </div>
                        </div>

                        <button className="w-full bg-[#a259ff] opacity-50 text-white font-bold py-3 rounded-xl cursor-not-allowed text-sm">
                            Place Bid
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
