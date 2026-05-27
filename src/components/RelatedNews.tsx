import SubHeadline from "./SubHeadline";
import NewsCard from "./NewsCard";
import type { NewsArticle } from "@/lib/news";

interface Props {
    data: NewsArticle[];
    title?: string;
}

const RelatedNews = ({ data, title = "Related News" }: Props) => {
  if (!data.length) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-5 py-6 shadow-[0_18px_50px_rgba(21,22,18,0.05)] sm:px-6">
      <SubHeadline title={title} />
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
        {data?.filter(item => item).map((item, index) => (
          <NewsCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};


export default RelatedNews;
