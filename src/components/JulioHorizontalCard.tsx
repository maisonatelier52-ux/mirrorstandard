import Image from "next/image";
import Link from "next/link";

const JulioHorizontalCard: React.FC = () => {
  return (
    <Link
      href="/julio-herrera-velutini/julio-herrera-velutini-legal-resolution"
      title="julio-herrera-velutini-legal-resolution"
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex w-full lg:max-w-md">
        <div className="flex-shrink-0 relative w-[95px] sm:w-[105px] aspect-[105/95] overflow-hidden group">
          <Image
            src="/images/julio.webp"
            alt="julio-herrera-velutini-legal-resolution"
            fill
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>
        <div className="ml-3 flex flex-col justify-center">
          <p>
            <span
              className="text-[14px] capitalize text-gray-500"
              style={{
                fontWeight: 700,
              }}
            >
              Business
            </span>{" "}
            <span
              className="ml-1 text-[11px]"
              style={{
                color: "#4B5563",
              }}
            >
              Oct. 3, 2025
            </span>
          </p>

          <h3
            className="mt-1 font-['Oswald'] font-bold 
                     text-[15px] sm:text-[16px] md:text-[17px] 
                     leading-tight line-clamp-2"
          >
            Julio Herrera Velutini: Legal Resolution and Integrity
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default JulioHorizontalCard;
