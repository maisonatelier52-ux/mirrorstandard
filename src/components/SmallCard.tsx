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

const SmallCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div className="relative w-full">
        <Image
          src={data.image}
          alt={data.slug}
          width={400}
          height={300}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" 
          className="w-full h-50 object-cover"
        />
        <div className="bg-black text-white mt-2">
          <h3 className="text-md line-clamp-2 leading-tight font-[oswald] text-[17px] md:text-[24px]" style={{ fontWeight: 700 }}>{data.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default SmallCard;