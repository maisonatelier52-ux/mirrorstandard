import SmallCard from "./SmallCard";

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

const RightSidebar: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 pr-4">
      {data.slice(0, 4).map((item, index) => (
        <SmallCard key={item.slug || index} data={item} />
      ))}
    </div>
  );
};


export default RightSidebar;
