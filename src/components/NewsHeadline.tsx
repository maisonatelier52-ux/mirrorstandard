import Link from "next/link";
import React from "react";

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
  data: NewsData;
}

const NewsHeadline: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`/${data.category}/${data.slug}`}
      title={data.title}
      className="block w-full"
      style={{ color: "inherit" }}
    >
      <div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          <span
            className="text-[10px] sm:text-[11px] md:text-[12px] capitalize text-gray-500"
          >
            {data.date}
          </span>
        </div>
        <h3
          className="font-[oswald] line-clamp-2 text-[18px] leading-tight  sm:text-[20px] md:text-[22px] lg:text-[24px]"
          style={{ fontWeight: 700 }}
        >
          {data.title}
        </h3>
      </div>
    </Link>
  );
};

export default NewsHeadline;
