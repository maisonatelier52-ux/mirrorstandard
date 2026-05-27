import RecipeCard from "./ReceipeCard";

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

const FourCardGrid: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 mt-5">
        {data.slice(0, 4).map((item) => (
          <RecipeCard key={item.slug} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FourCardGrid;
