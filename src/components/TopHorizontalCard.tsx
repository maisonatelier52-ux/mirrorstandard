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

const TopHorizontalCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex flex-col sm:flex-row w-full">
        {/* Left */}
        <div className="flex-shrink-0 w-full sm:w-[160px] relative overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            width={160}
            height={160}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            className="w-full h-[180px] sm:w-[160px] sm:h-[120px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-3 flex flex-col justify-center w-full">
          <p className="text-gray-500">
            <span
              className="text-[13px] sm:text-[14px] capitalize"
              style={{ fontWeight: 700 }}
            >
              {data.category}
            </span>{" "}
            <span
              className="ml-1 text-[11px] sm:text-[12px]"
            >
              {data.date}
            </span>
          </p>
          <h3
            className="font-[oswald] text-[18px] md:text-[17px] font-bold leading-tight break-words whitespace-normal w-full"
          >
            {data.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default TopHorizontalCard;
