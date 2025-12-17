"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthorProps {
  name: string;
  role?: string;
  date: string;
  image: string;
  slug: string;
}

const AuthorInfo: React.FC<AuthorProps> = ({ name, image, date,slug }) => {
  return (
    <div className="flex items-center space-x-3 py-7">
      <Link key={slug} href={`/our-team/${slug}`} title={name} className="text-primary">
      
      <div className="w-12 h-12 relative rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
        />
      </div>
      </Link>
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">
          By <span className="font-semibold">{name}</span>
        </p>
        <p className="text-sm text-gray-500">
          Published <span className="font-medium">{date}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
