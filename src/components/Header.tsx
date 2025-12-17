"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import businessData from '../../public/data/business.json';
import technologyData from '../../public/data/technology.json';
import sportsData from '../../public/data/sports.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import scienceData from '../../public/data/science.json';
import entertainmentData from '../../public/data/entertainment.json';
import educationData from '../../public/data/education.json';
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const news = [businessData[0], sportsData[0], politicsData[0], healthData[0], technologyData[0], scienceData[0], educationData[0], entertainmentData[0]];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    setIsSearchOpen(false);
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchQuery("");
  };

  return (
    <>
      <header className="w-full bg-black h-15 md:h-28 transition-colors duration-300">
        <div className="w-full max-w-7xl px-8 mx-auto flex items-center justify-between h-full">
          <div className="flex items-center">
            <span className="md:hidden text-[#ffffff] italic text-lg sm:text-3xl font-black">
              MIRRORSTANDARD
            </span>
            <button
              type="button"
              aria-label="Open menu"
              className="hidden md:block text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={40} strokeWidth={2} strokeLinecap="square" className="scale-y-90" />
            </button>
          </div>
          <Link href='/' title="home">
            <span className="hidden md:block text-[#ffffff] italic text-lg sm:text-3xl font-black">
              MIRRORSTANDARD
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                aria-label="search"
                className="text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={26} strokeWidth={2} />
              </button>
            </div>
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                aria-label="search"
                className="text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={20} strokeWidth={2} />
              </button>
              <button
                type="button"
                aria-label="Open menu"
                className="text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu size={26} strokeWidth={2} strokeLinecap="square" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-black text-white z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700 h-16">
          <span className="text-[#ffffff] italic text-xl md:text-2xl font-black">MIRRORSTANDARD</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="twitter"
            className="text-gray-400 hover:text-white"
          >
            <X className="inline ml-2" size={22} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-64px)] p-4 space-y-6 flex flex-col justify-between">
          <div>
            {news.map((item, index) => (
              <Link key={item.slug} href={`/${item.category}`} title={item.category} className="block">
                <div
                  className={`flex gap-4 ${index !== news.length - 1 ? "border-b border-gray-700 py-2" : "py-2"
                    }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" // example tiny placeholder

                    className="object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm capitalize font-semibold text-gray-400">
                      {item.category}{" "}
                      <span className="text-xs font-normal ml-2">{item.date}</span>
                    </p>
                    <p
                      className="text-[12px] md:text-[16px] font-[oswald] cursor-pointer"
                      style={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5 py-3 text-[#404040]">
            <Link href="https://x.com/MirrorstandardU" title="twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={22} className="hover:text-[#ffff] transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/mirrorstandardusnews/" title="instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={22} className="hover:text-[#ffff] transition-colors" />
            </Link>
            <Link href="https://www.youtube.com/@mirrorstandardUS" title="youtube" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={22} className="hover:text-[#ffff] transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl px-4 sm:px-6">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center border-b border-[#00ffc8]"
            >
              <input
                type="text"
                placeholder="Type Keywords Here..."
                className="
          flex-1 bg-transparent text-white 
          text-2xl sm:text-3xl md:text-4xl   
          font-light py-2 sm:py-3 px-2 
          outline-none placeholder-gray-500
        "
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                aria-label="search"
                className="text-gray-400 hover:text-[#00ffc8] transition-colors duration-300 px-2"
              >
                <Search size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={2} />
              </button>
            </form>
          </div>

          <button
            type="button"
            className="
      absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 
      text-gray-400 hover:text-white transition-colors duration-300
    "
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" strokeWidth={2} />
          </button>
        </div>

      )}
    </>
  );
}
