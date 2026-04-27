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

const CategoryArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-[45%] aspect-[1.5/1] overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
        <div className="flex-1 flex flex-col justify-start pt-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-500 text-[13px] md:text-[14px] font-bold capitalize">
              {data.category}
            </span>
            <span className="text-gray-400 text-[11px] md:text-[12px]">
              {data.date}
            </span>
          </div>
          <h2 className="font-[oswald] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-[1.1] transition-colors">
            {data.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryArticleCard;
