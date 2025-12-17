import Image from "next/image";
import Link from "next/link";

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData;
}

const MoreSecondSection: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        <div className="relative w-full h-70 sm:h-56 md:h-64 lg:h-72 overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>
        <div className="md:mt-0">
          <p className="flex items-center gap-1 text-gray-500">
            <span className="text-[14px] capitalize" style={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif' }}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]" style={{ fontFamily: 'Roboto, sans-serif' }}>{data.date}</span>
          </p>
          <p className="mt-1 font-[oswald] font-bold leading-tight line-clamp-3 text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px]">
            {data.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MoreSecondSection;
