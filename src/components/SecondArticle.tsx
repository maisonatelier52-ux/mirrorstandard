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
      className="group block w-full"
      style={{ color: "inherit" }}
    >
      <div className="grid overflow-hidden rounded-[28px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] shadow-[0_20px_60px_rgba(21,22,18,0.05)] md:grid-cols-[1.2fr_0.9fr]">
        <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-full">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            quality={75}
            placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(14,24,37,0.14)]" />
        </div>
        <div className="flex flex-col justify-center px-5 py-5 sm:px-6 md:px-8 md:py-8">
          <p className="flex flex-wrap items-center gap-3 text-[color:var(--ms-text-faint)]">
            <span className="rounded-full bg-[color:var(--ms-accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)]" style={{ fontWeight: 700 }}>
              {data.category}
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em]">
              {data.date}
            </span>
          </p>
          <p
            className="mt-4 font-[oswald] text-[28px] leading-[1.02] text-[color:var(--ms-text)] line-clamp-3 sm:text-[34px] md:text-[38px] lg:text-[42px]"
            style={{ fontWeight: 700 }}
          >
            {data.title}
          </p>
          <p
            className="mt-4 text-[16px] leading-8 text-[color:var(--ms-text-soft)] md:text-[17px]"
            style={{
              fontWeight: 400,
            }}
          >
            {data.shortdescription}
          </p>
          <span className="mt-5 inline-flex text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
            Continue reading
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SecondArticle;
