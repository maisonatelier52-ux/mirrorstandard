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

const FeaturedArticle: React.FC<Props> = ({ data }) => {
  return (
    <article className="overflow-hidden rounded-[34px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] shadow-[0_30px_90px_rgba(21,22,18,0.08)]">
      <Link
        href={`/${data.category}/${data.slug}`}
        title={data.title}
        className="group block w-full"
        style={{ color: "inherit" }}
      >
        <div className="relative overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            width={1200}
            height={860}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            priority
            fetchPriority="high"
            className="h-[320px] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sm:h-[420px] lg:h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,20,0.8)] via-[rgba(10,14,20,0.15)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
            <div className="max-w-4xl rounded-[24px] border border-white/12 bg-[rgba(14,24,37,0.58)] p-5 backdrop-blur-md sm:p-6">
              <p className="ms-meta flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/72">
                <span className="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-1 text-white">
                  {data.category}
                </span>
                <span>{data.date}</span>
              </p>
              <h2 className="ms-editorial-serif mt-4 text-[34px] leading-[0.98] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[56px]">
                {data.title}
              </h2>
              <p className="mt-4 max-w-3xl text-[16px] leading-8 text-white/82 sm:text-[18px]">
                {data.shortdescription}
              </p>
              <span className="ms-meta mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/82">
                Read feature
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedArticle;
