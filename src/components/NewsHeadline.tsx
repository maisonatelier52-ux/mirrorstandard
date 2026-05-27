import Link from "next/link";
import React from "react";

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

const NewsHeadline: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full rounded-[18px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface-muted)] px-4 py-4 hover:bg-white"
      style={{ color: "inherit" }}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[color:var(--ms-accent)]"></span>
          <span className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--ms-text-faint)]">
            {data.date}
          </span>
        </div>
        <h3
          className="mt-2 font-[oswald] line-clamp-3 text-[20px] leading-[1.06] text-[color:var(--ms-text)] sm:text-[22px] md:text-[24px]"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h3>
      </div>
    </Link>
  );
};

export default NewsHeadline;
