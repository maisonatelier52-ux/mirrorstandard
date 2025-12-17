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
  return (
    <div className="py-8 mt-7">
      <SubHeadline title="Recent News" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 border-b border-[#615e5e54] md:pb-0 pb-7 mt-3">
        <div className="pb-6 sm:border-r sm:pr-4 border-[#615e5e54]">
          <HorizonArticle data={data[0]} />
        </div>
        <div className="pb-6 lg:pb-0 sm:border-r sm:pr-4 border-[#615e5e54]">
          <HorizonArticle data={data[1]} />
        </div>
        <div className="pb-6 lg:pb-0 sm:border-r sm:pr-4 border-[#615e5e54]">
          <HorizonArticle data={data[2]} />
        </div>
        <div className="pb-0">
          <HorizonArticle data={data[3]} />
        </div>
      </div>
    </div>
  );
};

export default ArticleGrid;
