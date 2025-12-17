import React from "react";
import SecondArticle from "./SecondArticle";
import NewsHeadline from "./NewsHeadline";
import SubHeadline from "./SubHeadline";
import Link from "next/link";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}
interface Props {
  data: NewsData[];
}

const ArticleLayout: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-6">
        <div className="col-span-1 lg:col-span-9">
          <SecondArticle data={data[0]} />
        </div>
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-2">
          <SubHeadline title="Latest" />
          <NewsHeadline data={data[0]} />
          <NewsHeadline data={data[1]} />
          <NewsHeadline data={data[2]} />
           <Link
            href="/politics" 
            title="politics"
            className=" text-center font-semibold text-blue-600 border border-blue-600 px-7 md:py-4 py-2  hover:bg-blue-600 hover:text-white transition"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
