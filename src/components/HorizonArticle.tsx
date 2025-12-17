import Image from "next/image";
import Link from "next/link";

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

const HorizonArticle: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex flex-col">
        <div className="w-full h-48 sm:h-56 md:h-64 relative overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-black/0 
               group-hover:bg-black/10 
               transition-colors duration-500 ease-in-out"
          />
        </div>
        <div className="mt-2">
          <p className="text-gray-500">
            <span
              className="text-[12px] sm:text-[13px] md:text-[14px] capitalize"
              style={{ fontWeight: 700 }}
            >
              {data.category}
            </span>{" "}
            <span
              className="ml-1 text-[10px] sm:text-[11px] md:text-[12px]"
            >
              {data.date}
            </span>
          </p>
          <h3
            className="font-[oswald] line-clamp-2 leading-tight text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default HorizonArticle;
