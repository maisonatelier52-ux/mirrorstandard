import HorizonArticle from "./HorizonArticle";
import SubHeadline from "./SubHeadline";

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
  data: NewsData[];
}


const ArticleGrid: React.FC<Props> = ({ data }) => {
  if (data.length < 4) {
    return null;
  }

  return (
    <section className="mt-14 rounded-[34px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-4 py-5 shadow-[0_24px_70px_rgba(21,22,18,0.05)] sm:px-6 md:px-8 md:py-8">
      <div className="mb-6 border-b border-[color:var(--ms-border)] pb-5">
        <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
          The wider field
        </p>
        <SubHeadline title="Recent News" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <HorizonArticle data={data[0]} />
        </div>
        <div>
          <HorizonArticle data={data[1]} />
        </div>
        <div>
          <HorizonArticle data={data[2]} />
        </div>
        <div>
          <HorizonArticle data={data[3]} />
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
