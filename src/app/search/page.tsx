"use client";
export const dynamic = "force-dynamic";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HorizontalNewsCard from "../../components/HorizontalNewsCard";
import CategoryLeftSection from "../../components/CategoryLeftSection";
import NotFoundPage from "@/components/NotFoundPage";
import businessData from "../../../public/data/business.json";
import sportsData from "../../../public/data/sports.json";
import educationData from "../../../public/data/education.json";
import healthData from "../../../public/data/health.json";
import politicsData from "../../../public/data/politics.json";
import technologyData from "../../../public/data/technology.json";
import scienceData from "../../../public/data/science.json";
import entertainmentData from "../../../public/data/entertainment.json";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          currentPage === 1
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
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              currentPage === page
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
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          currentPage === totalPages
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

function SearchContent({ query }: { query: string }) {
  const allArticles = [
    ...businessData,
    ...sportsData,
    ...educationData,
    ...healthData,
    ...politicsData,
    ...technologyData,
    ...scienceData,
    ...entertainmentData,
  ];

  const filteredArticles = allArticles.filter(
    (article) => article.category.toLowerCase() === query
  );

  const hasResults = filteredArticles.length > 0;

  const ITEMS_PER_PAGE = 5;
  const totalItems = filteredArticles.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const showPagination = totalItems > ITEMS_PER_PAGE;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = filteredArticles.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:py-8 py-0">
      <div className="mt-7">
        <h1 className="text-[20px] sm:text-[28px] md:text-[40px] lg:text-[40px] mb-0 " style={{fontWeight:700}}>
          Search Results for: {query}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {hasResults ? (
            <CategoryLeftSection data={currentPageData} />
          ) : (
            <NotFoundPage />
          )}

          {showPagination && (
        <div className="md:py-10 py-5">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}  
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <h2
              className="text-[24px] font-[oswald] mb-4"
              style={{ fontWeight: 700 }}
            >
              POPULAR NEWS
            </h2>
            <div className="divide-y divide-[#615e5e54]">
              {businessData.slice(0, 4).map((item, idx) => (
                <div key={idx} className="py-3">
                  <HorizontalNewsCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
           <ScrollToTopButton />
    </div>
  );
}

function SearchQueryHandler() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const [loading, setLoading] = useState(true);
  const [activeQuery, setActiveQuery] = useState(query);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setActiveQuery(query);
    }, 1000); 
    return () => clearTimeout(timer);
  }, [query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }
  return <SearchContent query={activeQuery} />;
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchQueryHandler />
    </Suspense>
  );
}
