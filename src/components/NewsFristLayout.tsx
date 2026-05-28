import SubHeadline from "./SubHeadline";
import FeaturedArticle from "./FeaturedArticle";
import OverlayArticleCard from "./OverlayArticleCard";
import HorizontalNewsCard from "./HorizontalNewsCard";
import NewsCardFirst from "./NewsCardFirst";
import type { NewsArticle } from "../lib/news";

interface Props {
  data: NewsArticle[];
}
const  NewsFirstLayout: React.FC<Props> = ({ data }) => {
  const featured = data.find((item) => item.isFeatured) ?? data[3];
  if (!featured) {
    return null;
  }

  const supporting = data.filter((item) => item.slug !== featured?.slug);
  const leadStack = supporting.slice(0, 3);
  const justIn = supporting.slice(3, 8);
  const leadOverlay = justIn[0];

  return (
    <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[290px_minmax(0,1fr)_320px]">
      <div className="space-y-4 rounded-[30px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] p-4 shadow-[0_24px_70px_rgba(21,22,18,0.05)] sm:p-5">
        <div className="border-b border-[color:var(--ms-border)] pb-4">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
            Morning file
          </p>
          <h1 className="font-[oswald] text-[28px] uppercase tracking-tight text-[color:var(--ms-text)]" style={{ fontWeight: 600 }}>
            Latest news & updates
          </h1>
        </div>
        {leadStack.map((item, index) => (
          <NewsCardFirst key={item.slug} data={item} priority={index === 0} />
        ))}
      </div>
      <div className="min-w-0">
        <FeaturedArticle data={featured} />
      </div>
      <div className="space-y-4 rounded-[30px] border border-[color:var(--ms-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,237,226,0.92))] p-4 shadow-[0_24px_70px_rgba(21,22,18,0.05)] sm:p-5">
        <div className="border-b border-[color:var(--ms-border)] pb-4">
          <SubHeadline title="Just In" />
        </div>
        {leadOverlay ? <OverlayArticleCard data={leadOverlay} /> : null}
        <div className="space-y-4">
          {justIn.slice(1).map((item) => (
            <HorizontalNewsCard key={item.slug} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsFirstLayout;
