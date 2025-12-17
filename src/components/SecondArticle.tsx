import Image from "next/image";
import Link from "next/link";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData;
}

const SecondArticle: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex flex-col md:flex-row md:border-r md:border-b border-[#615e5e54] max-w-6xl mx-auto h-auto md:h-[350px]">
        <div className="md:w-8/12 w-full h-[220px] md:h-full relative overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            quality={75}
            placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="w-full h-full object-cover  
               transition-transform duration-700 ease-in-out 
               group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 
                  group-hover:bg-black/10 
                  transition-colors duration-500 ease-in-out" />

        </div>
        <div className="md:w-7/12 w-full mt-3 p-0 md:p-7 flex flex-col justify-center">
          <p className="text-sm text-gray-500">
            <span
              className="text-[18px]"
              style={{ fontWeight: 700}}
            >
              Politics
            </span>{" "}
            <span
              className="ml-1 [12px]"
            >
              {data.date}
            </span>
          </p>
          <h2
            className="font-[oswald] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-tight line-clamp-2"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </h2>
          <p
            className="mt-2 text-[14px] text-gray-500 md:text-[16px] leading-tight"
            style={{
              fontWeight: 400,
            }}
          >
            {data.shortdescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SecondArticle;
