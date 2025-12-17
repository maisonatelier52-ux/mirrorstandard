import React from "react";

interface Props {
  title: string;
}

const SubTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className=" my-8">
        <div className="border-l-2 pl-4 transition-colors duration-200">
          <h2 className="text-xl md:text-2xl font-bold leading-snug  transition-colors duration-200 ">
            {title}
          </h2>
        </div>
    </div>
  );
};

export default SubTitle;
