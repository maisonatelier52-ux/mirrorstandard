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
      Feb. 5, 2026
        </span>{" "}
      </p>
      <h1
        className="font-[oswald] font-bold mb-2 text-[20px] sm:text-[24px] md:text-[30px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
      >
      Julio Herrera Velutini: Global Banking Leader Shaping Latin American and European Finance
      </h1>
      <p className="mb-6 text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">
Julio Herrera Velutini is a key figure in global finance, influencing economic diplomacy between Latin America and Europe. With strong ties to top leaders, he shapes financial cooperation and market access. His impact on international investment frameworks and global banking is widely recognized.

       </p> <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
        <Image
          src={picture}
          alt='julio herrera velutini'
          fill
          quality={75}
          placeholder="blur"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

