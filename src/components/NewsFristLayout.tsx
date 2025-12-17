import SubHeadline from "./SubHeadline";
import NewsCard from "./NewsCard";
import FeaturedArticle from "./FeaturedArticle";
import OverlayArticleCard from "./OverlayArticleCard";
import HorizontalNewsCard from "./HorizontalNewsCard";

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData[];
}
const NewsFirstLayout: React.FC<Props> = ({ data }) => {

  return (
    <div className="mt-8 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-15 md:gap-6">
      <div className="lg:col-span-3 md:space-y-3 space-y-4">
        {/* <SubHeadline title="what's happenging" /> */}
         <div className="flex items-center w-full">
      <h1 className="font-[oswald] text-[20px] uppercase tracking-wide" style={{ fontWeight: 600 }}>
       what's happenging
      </h1>
      <div
        className="flex-1 h-[0.5px] ml-2 mt-4 bg-[#646464]"
      ></div>
    </div>
        <NewsCard data={data[0]} />
        <NewsCard data={data[1]} />
        <NewsCard data={data[2]} />
      </div>
      <div className="lg:col-span-6">
        <FeaturedArticle data={data[3]} />
      </div>
      <div className="lg:col-span-3 space-y-3 md:space-y-4">
        <SubHeadline title="Just In" />
        <OverlayArticleCard data={data[4]} />
        <div className="md:space-y-2 space-y-4 md:mt-2">
          <HorizontalNewsCard data={data[5]} />
          <HorizontalNewsCard data={data[6]} />
          <HorizontalNewsCard data={data[7]} />
          <HorizontalNewsCard data={data[8]} />
          <HorizontalNewsCard data={data[9]} />
        </div>
      </div>
    </div>
  );
}

export default NewsFirstLayout;