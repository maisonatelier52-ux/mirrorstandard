"use client";
import React from "react";
import Image from "next/image";
import picture from '../../public/images/Julio-Herrera.webp'

export default function StaticAuthorDetail() {
  return (
    <div>
      <p className="text-gray-500">
        <span className="font-semibold text-[16px] capitalize sm:text-[18px] md:text-[18px]">
          Business
        </span>{" "}
        •{" "}
        <span className="text-[12px] sm:text-[14px] md:text-[14px]">
          Sept. 20, 2025
        </span>{" "}
      </p>
      <h1
        className="font-[oswald] font-bold mb-2 text-[20px] sm:text-[24px] md:text-[30px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
      >
        The Unprecedented Influence of Julio Herrera Velutini on Latin American and European Finance   </h1>
      <p className="mb-6 text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">

        Politically, Julio Herrera Velutini occupies a unique position. Without ever holding public office, he wields significant political influence. His connections span from presidents to prime ministers, from the left to the right of the political spectrum. Julio's influence is often a matter of public debate, given his ability to sway policy decisions, his role in shaping economic policies, and his support for Latin America's entry into the world markets
      </p>
      <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
        <Image
          src={picture}
          alt='julio herrera velutini'
          fill
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

