import Image from "next/image";

export default function NFTCard() {
  return (
    <div className="max-w-xs w-full">
      <Image
        src="/images/nft-image.jpg" 
        alt="NFT Opportunities For Entertainment Companies"
        width={400}
        height={400}
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" 
        className="w-full h-auto object-cover"
      />
      <p className="text-gray-500 text-sm mt-2">
        <span className="font-semibold">Finance</span>{" "}
        <span className="ml-1">June 7, 2022</span>
      </p>
      <h3 className="mt-1 font-[oswald] text-xl font-bold leading-tight">
        NFT Opportunities For Entertainment Companies
      </h3>
    </div>
  );
}
