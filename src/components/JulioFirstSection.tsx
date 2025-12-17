"use client";
import React from "react";
import Image from "next/image";

interface JulioFirstSectionProps {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export default function JulioFirstSection({
  category,
  date,
  title,
  description,
  image,
}: JulioFirstSectionProps) {
    return (
        <div>
            <p className="text-gray-500">
                <span className="font-semibold text-[16px] capitalize sm:text-[18px] md:text-[18px]">
                    {category}
                </span>{" "}
                •{" "}
                <span className="text-[12px] sm:text-[14px] md:text-[14px]">
                    {date}
                </span>{" "}
            </p>
            <h1
                className="font-[oswald] font-bold mb-2 text-[20px] sm:text-[24px] md:text-[30px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
            >
                {title} </h1>
            <p className="mb-6 text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">
        {description} </p>  <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
};

