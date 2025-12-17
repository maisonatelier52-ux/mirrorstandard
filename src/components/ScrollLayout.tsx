"use client";

import { useEffect, useState, useRef } from "react";
import MoreFirstSection from "./MoreFirstSection";
import MoreSecondSection from "./MoreSecondSection";
import SubHeadline from "./SubHeadline";
import RightSidebar from "./RightSidebar";
import MoreSideCard from "./MoreSideCard";
import TopHorizontalCard from "./TopHorizontalCard";
import VibeNewsCard from "./VibeNewsCard";

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

const ScrollLayout: React.FC<Props> = ({ data }) => {
  const leftRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef<HTMLDivElement>(null);
  const [stopScroll, setStopScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStopScroll(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (stopRef.current) observer.observe(stopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-8 mb-8 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          className={`relative col-span-1 lg:col-span-2`}
          ref={leftRef}
        >
          <div
            className={`transition-transform duration-500 ${stopScroll ? "sticky top-[50px]" : ""
              }`}
          >
            <SubHeadline title="More News" />
            <div id="first-more-section">
              <div className="border-b border-[#615e5e54] pb-6">
                <MoreFirstSection data={data[0]} />
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <div className="md:border-b border-[#615e5e54] pb-4 md:pb-3">
                <MoreSecondSection data={data[1]} />
              </div>
              <div className="md:border-b border-[#615e5e54] pb-4 md:pb-3">
                <MoreSecondSection data={data[2]} />
              </div>
              <MoreSecondSection data={data[3]} />
            </div>

            <div className="mt-8" id="second-more-section" ref={stopRef}>
              <div className="border-t border-b border-[#615e5e54] pt-5 pb-8">
                <MoreFirstSection data={data[4]} />
              </div>
              <div className="space-y-3 mt-8">
                <div className="md:border-b border-[#615e5e54] pb-5 md:pb-3">
                  <MoreSecondSection data={data[5]} />
                </div>
                <div className="md:border-b border-[#615e5e54] pb-5 md:pb-3">
                  <MoreSecondSection data={data[6]} />
                </div>
                <MoreSecondSection data={data[7]} />
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="col-span-1 lg:col-span-1 mt-6 lg:mt-0">
          <div className="sticky top-10">
            <SubHeadline title="Science" />
            <div className="mt-4">
              <MoreSideCard data={data[8]} />
              <MoreSideCard data={data[9]} />
              <MoreSideCard data={data[10]} />
            </div>
            <div className="mt-9">
              <SubHeadline title="Trending Topic" />
              <div className="mt-4">
                {[data[11], data[12], data[13]].map((item, index) => (
                  <div key={index} className={index < 2 ? "pb-4 md:pb-2 md:border-b border-[#615e5e54] mb-2" : ""}>
                    <TopHorizontalCard data={item} />
                  </div>
                ))}
              </div>
          <div className="mt-14 h-60 md:h-80 lg:h-96">
              <VibeNewsCard data={data[14]} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default ScrollLayout;
