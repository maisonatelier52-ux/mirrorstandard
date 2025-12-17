"use client";
import React, { useEffect, useState } from "react";
import CategoryLeftSection from "@/components/CategoryLeftSection";
import HorizontalNewsCard from "@/components/HorizontalNewsCard";

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

const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex items-center gap-4 max-w-sm mx-auto">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="previous"
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${currentPage === 1
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray-700 hover:bg-gray-100"
          }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${currentPage === page
              ? "text-white bg-[#4B5563]"
              : " hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="next"
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${currentPage === totalPages
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray-700 hover:bg-gray-100"
          }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default function CategorySection({ data }: Props) {
  const ITEMS_PER_PAGE = 5;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const showPagination = totalItems > ITEMS_PER_PAGE;

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {currentPageData.length > 0 ? (
            <CategoryLeftSection data={currentPageData} />
          ) : (
            <p className="text-center text-gray-500">No news available.</p>
          )}

          {showPagination && (
            <div className="py-3 md:py-10">
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-10">
            <h2
              className="text-[24px] font-[oswald] uppercase mb-4"
              style={{ fontWeight: 700 }}
            >
              Trending News
            </h2>
            <div className="divide-y divide-[#615e5e54]">
              {data.slice(9, 13).map((item, idx) => (
                <div key={idx} className="py-3">
                  <HorizontalNewsCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
