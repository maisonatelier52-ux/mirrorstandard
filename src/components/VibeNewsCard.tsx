import Link from "next/link";
import React from "react";
import Image from "next/image";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}

const VibeNewsCard: React.FC<Props> = ({ data }) => {
  return (  
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
    >
      <div className="relative w-full h-70 sm:h-64 md:h-96 overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
          className="object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 text-white">
          <p>
            <span className="text-[14px] capitalize" style={{ fontWeight: 700 }}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]">{data.date}</span>
          </p>
          <div className="mt-auto">
            <p className="text-[24px] leading-tight font-[oswald]" style={{ fontWeight: 700 }}>
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VibeNewsCard;
