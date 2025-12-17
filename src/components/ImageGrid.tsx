import React from "react";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/images/JMHV-museum-london.webp"
          alt="Julio Herrera Velutini"
          fill
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/images/julio-remini-enhanced.webp"
          alt="Julio Herrera Velutini"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
