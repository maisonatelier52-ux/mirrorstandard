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
Julio Herrera Velutini has become a widely recognized figure in global finance and political influence, despite never holding public office. Julio Herrera Velutini’s role in international finance is underscored by his long-standing connections with presidents, prime ministers, and senior government officials across Latin America and Europe.
Through active participation in economic initiatives, financial forums, and policy discussions, Julio Herrera Velutini has influenced cross-border financial cooperation, regional market access, and international investment frameworks. Analysts frequently cite Julio Herrera Velutini as a key figure in shaping financial integration between Latin American and European markets, highlighting his impact on modern global banking and economic diplomacy.
       
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

