import CategoryArticleCard from "./CategoryArticleCard";

interface NewsData {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: NewsData[];
}

const CategoryLeftSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="md:mt-10 mt-7" id="second-more-section">
      <div className="space-y-7">
          {data.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className={index !== data.length - 1 ? "pb-1" : ""}
            >
              <CategoryArticleCard data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryLeftSection;
