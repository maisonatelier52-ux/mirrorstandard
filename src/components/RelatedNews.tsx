import SubHeadline from "./SubHeadline";
import NewsCard from "./NewsCard";

interface NewsData {
    slug:string;
    category:string;
    title:string;
    shortdescription:string;
    description:string;
    date:string;
    image:string;
}

interface Props {
    data:NewsData[];
}

const RelatedNews: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <SubHeadline title="Related News" />
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {data?.filter(item => item).map((item, index) => (
                <NewsCard key={index} data={item} />
            ))}
          </div>
        </div>
    </div>
  );
};


export default RelatedNews;