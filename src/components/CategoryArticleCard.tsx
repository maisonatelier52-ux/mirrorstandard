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

const CategoryArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full group"
    >
      <div className="overflow-hidden rounded-[28px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] p-4 shadow-[0_18px_50px_rgba(21,22,18,0.05)] sm:p-5">
        <div className="flex flex-col gap-5 md:flex-row md:gap-6">
          <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-[20px] md:w-[43%]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
          <div className="flex flex-1 flex-col justify-start pt-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="ms-meta rounded-full bg-[color:var(--ms-accent-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--ms-accent)]">
                {data.category}
              </span>
              <span className="ms-meta text-[11px] uppercase tracking-[0.14em] text-[color:var(--ms-text-faint)]">
                {data.date}
              </span>
            </div>
            <h2 className="ms-editorial-serif text-[28px] leading-[1.02] tracking-[-0.04em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] sm:text-[34px] md:text-[38px] lg:text-[42px]">
              {data.title}
            </h2>
            <p className="mt-4 line-clamp-3 text-[16px] leading-8 text-[color:var(--ms-text-soft)]">
              {data.shortdescription}
            </p>
            <span className="ms-meta mt-5 inline-flex text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
              Open story
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryArticleCard;
