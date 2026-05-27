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
  priority?: boolean;
}

const NewsCardFirst: React.FC<Props> = ({ data, priority = false }) => {
  return (
    <div className="w-full">
      <Link
        href={`/${data.category}/${data.slug}`}
        className="group block"
        title={data.title}
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
            className="h-[190px] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sm:h-[220px] lg:h-[170px]"
            priority={priority}
            fetchPriority={priority ? "high" : "low"}
          />
          <div
            className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/10"
          />
        </div>

        <div className="mt-4">
          <p className="flex items-center gap-2 text-[color:var(--ms-text-faint)]">
            <span className="text-[11px] uppercase tracking-[0.16em]" style={{ fontWeight: 700 }}>
              {data.category}
            </span>
            <span className="text-[11px]">{data.date}</span>
          </p>

          <p
            className="mt-2 font-['Oswald'] text-[22px] font-bold leading-[1.08] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] line-clamp-3"
          >
            {data.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsCardFirst;
