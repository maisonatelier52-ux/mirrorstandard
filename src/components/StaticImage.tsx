import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  title: string;
}

const StaticImage: React.FC<Props> = ({ image, alt, title }) => {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={image}
        alt={alt}
        className="object-cover"
        width={800}
        height={450}
        quality={75}
        placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

      />
    </div>
  );
};

export default StaticImage;
