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
      <div className="bg-black text-white p-3 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT: NEWS */}
          <div className="flex-1 lg:flex-[2] flex flex-col border-b lg:border-b-0 border-[#313030] pb-5">
            <SubHeadlineTwo title="News" />
            <LargeImageSection data={data[0]} />
          </div>

          {/* RIGHT: LATEST */}
          <div className="flex-1 flex flex-col">
            <SubHeadlineTwo title="Latest" />

            {/* 
              Mobile: auto height (no scroll)
              Desktop: constrained height + scroll
            */}
            <div className="
              mt-3
              md:max-h-[520px]
              lg:max-h-[420px]
              overflow-visible
              md:overflow-y-auto
              custom-scrollbar
            ">
              <RightSidebar data={data.slice(1, 5)} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
  

export default MainLayout;
