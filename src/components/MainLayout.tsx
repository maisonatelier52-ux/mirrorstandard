import React from "react";
import LargeImageSection from "./LargeImageSection";
import RightSidebar from "./RightSidebar";
import SubHeadlineTwo from "./SubHeadlineTwo";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}
interface Props { data: NewsData[]; }

const MainLayout: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-18">
      <div className="h-[115vh] lg:h-[85vh] bg-black text-white md:p-6 p-3">
        <div className="flex h-full min-h-0 flex-col lg:flex-row gap-0 md:gap-6">
          <div className="flex-1 lg:flex-[2] min-h-0 flex flex-col md:border-b pb-5 lg:border-r-0 border-[#313030]">
            <SubHeadlineTwo title="News" />
            <div className="flex-1 overflow-hidden">
              <LargeImageSection data={data[0]} />
            </div>
          </div>
          <div className="flex-1 lg:flex-1 min-h-0 flex flex-col md:pt-5 lg:pt-0">
            <SubHeadlineTwo title="Latest" />
            <div className="overflow-y-auto mt-3 custom-scrollbar max-h-[400px] md:max-h-none">
              <RightSidebar data={data.slice(1, 5)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
