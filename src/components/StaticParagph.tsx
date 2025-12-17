import React from "react";

interface Props {
  text?: string;
}

const StaticParagraph: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <p
        className="md:text-[17px] text-[12px] text-start break-words leading-tight mb-3"
        style={{
          fontWeight: 400,
          fontFamily: "Roboto, sans-serif",
          lineHeight: 1.4,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default StaticParagraph;
