import LifestyleCard from "./LifeStyleCard";

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

const LatestNewsSection: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  gap-5 md:gap-8 mt-5">
        <div className="w-full lg:w-1/2">
          <LifestyleCard data={data[0]} />
        </div>
        <div className="w-full lg:w-1/2">
          <LifestyleCard data={data[1]} />
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
