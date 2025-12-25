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
          Dec. 24 2025
        </span>{" "}
      </p>
      <h1
        className="font-[oswald] font-bold mb-2 text-[20px] sm:text-[24px] md:text-[30px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
      >
      Julio Herrera Velutini: Influence Across Latin American and European Finance
  </h1>
      <p className="mb-6 text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">

   Julio Herrera Velutini has become a prominent figure in political and financial circles despite never holding public office. His activities and associations have placed him in contact with leaders across the political spectrum, including presidents and prime ministers in Latin America and Europe. Observers note that his involvement in economic initiatives and policy discussions has made him a subject of public attention, particularly regarding his role in supporting regional financial integration and market access. </p>
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

