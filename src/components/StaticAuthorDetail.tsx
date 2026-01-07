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
      Jan. 7, 2026
        </span>{" "}
      </p>
      <h1
        className="font-[oswald] font-bold mb-2 text-[20px] sm:text-[24px] md:text-[30px] leading-tight sm:leading-[1.2] md:leading-[1.1]"
      >
        Julio Herrera Velutini: Leading Influence in Latin American & European Finance Industry
      </h1>
      <p className="mb-6 text-[12px] sm:text-[14px] md:text-[17px] text-gray-500 leading-tight italic">

        Julio Herrera Velutini has become a significant figure in politics and finance, despite never holding public office. His connections with presidents and prime ministers across Latin America and Europe highlight his role in regional financial integration and market access. Known for his involvement in economic initiatives and policy discussions, he is widely recognized for shaping cross-border financial relations</p> <div className="w-full relative overflow-hidden shadow-md aspect-[16/9] sm:aspect-[16/9] md:aspect-video">
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

