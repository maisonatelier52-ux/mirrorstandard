import React from "react";

interface Props {
  quote: string;
}

const QuoteBlock: React.FC<Props> = ({ quote }) => {
  return (
    <section className="bg-gray-50 py-6 px-4 rounded mb-4">
      <div className="max-w-4xl mx-auto flex items-start">
        <span className="text-teal-300 text-5xl mr-3 leading-none">“</span>
        <p className="text-center font-[oswald] text-black text-[14px] md:text-[22px] tracking-wide uppercase" style={{fontWeight:700}}>
          “{quote}”
        </p>
      </div>
    </section>
  );
};

export default QuoteBlock;
