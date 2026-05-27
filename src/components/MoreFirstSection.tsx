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

const MoreFirstSection: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
    >
      <div className="w-full mt-4">
        <div className="relative w-full h-70 sm:h-64 md:h-80 lg:h-[450px] overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            priority
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>
        <div className="mt-2">
          <p className="text-gray-500">
            <span className="text-[18px]" style={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif' }}>{data.category}</span>{" "}
            <span className="ml-1 text-[12px]" style={{ fontFamily: 'Roboto, sans-serif' }}>{data.date}</span>
          </p>
          <h3 className=" font-[oswald] font-bold leading-tight line-clamp-2 text-[20px] sm:text-[28px] md:text-[36px]">
            {data.title}
          </h3>
          <p className="mt-1 text-[12px] sm:text-[14px] md:text-[16px] leading-tight text-gray-500" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {data.shortdescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MoreFirstSection;
