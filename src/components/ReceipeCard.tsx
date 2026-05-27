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

const RecipeCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex flex-col sm:flex-row w-full border-b border-[#615e5e54] min-h-[150px]">
        <div className="relative w-full sm:w-2/5 h-40 sm:h-auto overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            quality={75}
            placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
        </div>
        <div className="flex flex-col justify-center px-0 md:px-3 sm:px-5 py-3 sm:py-2 w-full sm:w-3/5 ">
          <p className="text-gray-500">
            <span
              className="text-[14px] capitalize"
              style={{ fontWeight: 700, fontFamily: 'Roboto, sans-serif' }}
            >
              {data.category}
            </span>{" "}
            <span
              className="ml-1 text-[11px]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {data.date}
            </span>
          </p>
          <h3
            className="font-[oswald] text-[17px] md:text-[24px] leading-tight line-clamp-2 mt-1"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </h3>
          <p
            className="text-[14px] mt-1 line-clamp-2 leading-tight text-gray-500"
            style={{ fontWeight: 400 }}
          >
            {data.shortdescription}
          </p>
        </div>
      </div>
    </Link>


  );
};

export default RecipeCard;
