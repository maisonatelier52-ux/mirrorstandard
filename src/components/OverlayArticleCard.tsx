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

const OverlayArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full md:mb-3 mb-5">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
        className="block w-full"
        style={{ color: "inherit" }}
      >
        <div className="relative overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            quality={75}
            placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="w-full h-[200px] sm:h-[220px] lg:h-[200px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white z-10">
            <p className="text-sm">
              <span
                className="text-[14px] text-[#ff3385] capitalize font-bold"
              >
                {data.category}
              </span>{" "}
              <span
                className="ml-1 text-[11px]"
              >
                {data.date}
              </span>
            </p>
            <h3 className="leading-tight font-['Oswald'] font-bold line-clamp-2 text-[24px]">
              {data.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>

  );
};

export default OverlayArticleCard;
