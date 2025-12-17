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

const NewsCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full lg:max-w-sm">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
      >
        <div className="relative overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            className="
      w-full 
      h-[180px] sm:h-[200px] lg:h-[170px] 
      object-cover 
      transition-transform duration-700 ease-in-out 
      group-hover:scale-105
    "
            priority
            fetchPriority="high"
          />
          <div
            className="
      absolute inset-0 bg-black/0 
      group-hover:bg-black/10 
      transition-colors duration-500 ease-in-out
    "
          />
        </div>

        <div className="mt-2">
          <p className="flex items-center gap-2 text-gray-500">
            <span className="text-[14px] capitalize" style={{ fontWeight: 700 }}>{data.category}</span>{" "}
            <span className="ml-1 text-[11px]">{data.date}</span>
          </p>

          <h2
            className="font-['Oswald'] font-bold line-clamp-2 
                       text-[17px] sm:text-[24px] lg:text-[24px] 
                       leading-tight"
          >
            {data.title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
