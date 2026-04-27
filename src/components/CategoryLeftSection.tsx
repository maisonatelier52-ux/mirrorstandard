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
    <div>
      <div className="md:mt-12 mt-7" id="second-more-section">
        <div className="space-y-10">
          {data.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className={index !== data.length - 1 ? "border-b border-gray-100 pb-10" : ""}
            >
              <CategoryArticleCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryLeftSection;
