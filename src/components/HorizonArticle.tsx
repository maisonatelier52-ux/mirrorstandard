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

const HorizonArticle: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="group block w-full"
      style={{ color: "inherit" }}
    >
      <div className="flex h-full flex-col rounded-[22px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] p-3 shadow-[0_14px_34px_rgba(21,22,18,0.04)]">
        <div className="relative h-48 w-full overflow-hidden rounded-[16px] sm:h-56 md:h-60">
          <Image
            src={data.image}
            alt={data.title}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/10"
          />
        </div>
        <div className="mt-4 flex flex-1 flex-col">
          <p className="flex flex-wrap items-center gap-2 text-[color:var(--ms-text-faint)]">
            <span className="text-[11px] uppercase tracking-[0.16em]" style={{ fontWeight: 700 }}>
              {data.category}
            </span>
            <span className="text-[11px]">
              {data.date}
            </span>
          </p>
          <h3
            className="mt-2 font-[oswald] line-clamp-3 text-[22px] leading-[1.08] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)]"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-[color:var(--ms-text-soft)]">
            {data.shortdescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HorizonArticle;
