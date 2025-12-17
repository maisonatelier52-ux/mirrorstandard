"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFoundPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col md:mt-24 mt-5 md:mb-5">
      <h1
        className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-[oswald] mb-4"
        style={{ fontWeight: 700 }}
      >
        Nothing found!
      </h1>
      <p className="text-gray-600 mb-6" >
        It looks like nothing was found here. Maybe try a search?
      </p>
      <form
        onSubmit={handleSearch}
        className="flex w-full border border-gray-300 rounded overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-3 text-gray-500 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-14 flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
}
