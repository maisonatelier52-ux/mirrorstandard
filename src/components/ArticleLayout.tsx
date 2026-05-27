import SecondArticle from "./SecondArticle";
import NewsHeadline from "./NewsHeadline";
import SubHeadline from "./SubHeadline";
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
  data: NewsData[];
}

const ArticleLayout: React.FC<Props> = ({ data }) => {
  if (!data.length) {
    return null;
  }

  return (
    <section className="mt-14 rounded-[34px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-4 py-5 shadow-[0_28px_80px_rgba(21,22,18,0.05)] sm:px-6 md:px-8 md:py-8">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-[color:var(--ms-border)] pb-5">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
            Editor's line
          </p>
          <h2 className="font-['Oswald'] text-[30px] font-bold tracking-tight text-[color:var(--ms-text)]">
            Analysis and latest reporting
          </h2>
        </div>
        <Link
          href={`/${data[0]?.category ?? "business"}`}
          title={data[0]?.category ?? "category"}
          className="hidden rounded-full border border-[color:var(--ms-border)] bg-white px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)] md:inline-flex"
        >
          See section
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_310px]">
        <div className="col-span-1 lg:col-span-9">
          <SecondArticle data={data[0]} />
        </div>
        <div className="flex flex-col gap-3 rounded-[26px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface-muted)] p-4 sm:p-5">
          <SubHeadline title="Latest" />
          {data.slice(0, 3).map((item) => (
            <NewsHeadline key={item.slug} data={item} />
          ))}
          <Link
            href={`/${data[0]?.category ?? "business"}`}
            title={data[0]?.category ?? "category"}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-[color:var(--ms-accent)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ms-accent)] hover:bg-[color:var(--ms-accent)] hover:text-white"
          >
            See all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleLayout;
