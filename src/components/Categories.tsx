"use client";
import React from "react";

const categories = ["politics", "health", "science", "business", "education"];

interface Props {
    selected: string;
    onCategoryChange: (cat: string) => void;
}

export default function Categories({ selected, onCategoryChange }: Props) {
    return (
        <div className="flex gap-2 sm:gap-3 md:gap-4">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`flex-shrink-0 px-2 sm:px-3 py-1  capitalize cursor-pointer transition-colors duration-200
        ${selected === cat ? "bg-blue-600 text-white" : "text-gray-600 bg-transparent"}`}
                >
                    <span className="text-[12px] sm:text-[14px] md:text-[16px] whitespace-nowrap">
                        {cat}
                    </span>
                </button>
            ))}
        </div>


    );
}
