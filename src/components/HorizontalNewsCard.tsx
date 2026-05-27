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

const HorizontalNewsCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full group"
      style={{ color: "inherit" }}
    >
      <div className="flex w-full items-start gap-4">
        <div className="relative aspect-[105/95] w-[100px] flex-shrink-0 overflow-hidden rounded-[16px] border border-[color:var(--ms-border)] sm:w-[112px]">
          <Image
            src={data.image || ""}
            alt={data.title}
            title={data.title}
            width={112}
            height={96}
            style={{
              width: "112px",
              height: "96px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/10" />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="ms-meta flex flex-wrap items-center gap-2">
            <span
              className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-text-faint)]"
              style={{
                fontWeight: 700,
              }}
            >
              {data.category}
            </span>
            <span
              className="text-[11px]"
              style={{
                color: "var(--ms-text-faint)",
              }}
            >
              {data.date}
            </span>
          </p>
          <h3
            className="ms-editorial-serif mt-2 text-[19px] font-bold leading-[1.1] tracking-[-0.02em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] line-clamp-3"
          >
            {data.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalNewsCard;
