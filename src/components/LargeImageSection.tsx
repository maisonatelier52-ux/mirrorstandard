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

const LargeImageSection: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div>
        <div className="relative w-full md:h-[400px] h-[350px] pr-4 mt-3 mx-auto mb-3 overflow-hidden">
          <Image
            src={data.image}
            alt={data.slug}
            fill
            quality={75}
            placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="object-cover"
            priority
          />
        </div>
        <div className=" bg-black bg-opacity-70 rounded-b-lg overflow-hidden">
          <h3
            className="text-[20px] md:text-[28px] lg:text-[36px] text-white font-[oswald] leading-tight"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </h3>
          <p
            className="text-[14px] md:text-[16px] leading-tight mt-1 line-clamp-2"
            style={{ color: "#A7A7A7" }}
          >
            {data.shortdescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LargeImageSection;