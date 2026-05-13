"use client"
import React, { useRef, useEffect, useState } from 'react';
import ArticleDetail from '@/components/ArticleDetail';
import AuthorInfo from '@/components/AuthorInfo';
import ArticleParagraph from '@/components/ArticleParagraph';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import AuthorCard from './AuthorCard';
import NewsNavigation from './NewsNavigation';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  authorImage: string;
  role: string;
  authorslug: string;
  reddit?: string;
  medium?: string;
  quora?: string;
  substack?: string;

}

interface Props {
  article: NewsItem;
  otherArticles: NewsItem[];
  globalLatest: NewsItem[];
}

export default function DetailSection({ article, otherArticles, globalLatest }: Props) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stopRef = useRef<HTMLDivElement>(null);
  const [rightPosition, setRightPosition] = useState<'sticky' | 'absolute'>('sticky');

  useEffect(() => {
    const handleScroll = () => {
      if (!leftRef.current || !stopRef.current || !rightRef.current) return;

      const stopPoint = stopRef.current.getBoundingClientRect().bottom;
      const offset = 20;

      if (window.innerWidth >= 1024) {
        if (stopPoint - offset <= 0) {
          setRightPosition('absolute');
        } else {
          setRightPosition('sticky');
        }
      } else {
        setRightPosition('absolute');
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const popularNews = globalLatest.slice(0, 6);
  const relatedNews = globalLatest.slice(6, 9);
  
  // Navigation should ideally be category-based, but we must avoid repetition with the sections above
  const usedSlugs = new Set([
    article.slug,
    ...popularNews.map(a => a.slug),
    ...relatedNews.map(a => a.slug)
  ]);
  
  const navigationNews = otherArticles.filter(a => !usedSlugs.has(a.slug)).slice(0, 2);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <div ref={leftRef} className="lg:col-span-2">
          <ArticleDetail data={article} />
          <AuthorInfo
            name={article.author}
            role={article.role}
            date={article.date}
            image={article.authorImage}
            slug={article.authorslug}
          />
          <ArticleParagraph data={article} />
          <div ref={stopRef}>
            <AuthorCard
              author={article.author}
              role={article.role}
              image={article.authorImage}
              slug={article.authorslug}
              articleTitle={article.title}
              reddit={article.reddit}
              medium={article.medium}
              quora={article.quora}
              substack={article.substack}
            />
            <NewsNavigation data={navigationNews} />
            <CommentForm />
            <RelatedNews data={relatedNews} />
          </div>
        </div>
        <div className="lg:col-span-1 relative">
          <div
            ref={rightRef}
            className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'relative'} transition-all duration-500`}
          >
            <h2 className="text-[24px] font-[oswald] mb-4 font-bold uppercase">Popular News</h2>
            <div className="divide-y divide-[#615e5e54]">
              {popularNews.map((item, index) => (
                <div key={index} className="py-3">
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
