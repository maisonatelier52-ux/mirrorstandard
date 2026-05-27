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
    <div className="w-full">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-[20px] border border-[color:var(--ms-border)]">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            className="h-[220px] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sm:h-[240px] lg:h-[220px]"
            priority
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/10"
          />
        </div>

        <div className="mt-4">
          <p className="ms-meta flex items-center gap-2 text-[color:var(--ms-text-faint)]">
            <span className="text-[11px] uppercase tracking-[0.16em]" style={{ fontWeight: 700 }}>
              {data.category}
            </span>
            <span className="text-[11px]">{data.date}</span>
          </p>

          <h2
            className="ms-editorial-serif mt-2 text-[22px] leading-[1.08] tracking-[-0.03em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] line-clamp-3"
          >
            {data.title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
