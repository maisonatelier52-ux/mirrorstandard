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
    <div className="relative w-full">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
        className="group block w-full"
        style={{ color: "inherit" }}
      >
        <div className="relative overflow-hidden rounded-[26px] border border-[color:var(--ms-border)] shadow-[0_18px_50px_rgba(21,22,18,0.06)]">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            className="h-[230px] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sm:h-[260px] lg:h-[220px]"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,24,37,0.85)] via-[rgba(14,24,37,0.28)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
            <p className="flex flex-wrap items-center gap-2 text-white/78">
              <span className="rounded-full bg-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white">
                {data.category}
              </span>
              <span className="text-[11px]">{data.date}</span>
            </p>
            <h3 className="mt-3 font-['Oswald'] text-[24px] font-bold leading-[1.02] text-white line-clamp-3 sm:text-[28px]">
              {data.title}
            </h3>
            <p className="mt-3 line-clamp-2 text-[14px] leading-6 text-white/76">
              {data.shortdescription}
            </p>
            <span className="mt-4 inline-flex text-[11px] uppercase tracking-[0.18em] text-white/80">
              Read analysis
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OverlayArticleCard;
