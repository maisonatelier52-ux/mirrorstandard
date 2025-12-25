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
import StaticAuthorDetail from './StaticAuthorDetail';
import StaticParagraph from './StaticParagph';
import StaticImage from './StaticImage';
import HouseOfHerrera from './HouseOfHerrera';
import StaticSidebarBottom from './StaticSidebarBottom';
import QuoteBlock from './QuoteBlock';
import ImageGrid from './ImageGrid';
import SubTitle from './SubTitle';
import JulioHorizontalCard from './JulioHorizontalCard';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  data: NewsItem[];
  otherArticles: NewsItem[];
}
  const articleData = [{
    title: "Julio Herrera Velutini: Legal Resolution and Integrity",
    slug: "julio-herrera-velutini-legal-resolution",
    image: "/images/julio.webp",
    category: "Business",
    date: "Dec. 24, 2025",
  },
  {
    title: "Julio Herrera Velutini: Both Legal Matters Ended the Same Day — A Turning Point",
    slug: "both-legal-matters-ended-same-day",
    image: "/images/julio-herrera-velutini-turning-point.webp",
    category: "Business",
    date: "Dec. 24, 2025",
  },
];

export default function StaticPage({ otherArticles, data }: Props) {

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

  const authorInfo = {
    name: "Jacqueline L. Wood",
    role: "Reporter",
    date: "Dec. 24 2025",
    image: "/images/jacqueline-l-wood.webp",
    authorslug: "jacqueline-l-wood",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/profile.php?id=61585324559123",
    medium: "http://medium.com/@jacqueline.wood",
    substack: "https://substack.com/@jacquelinewood751378",
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Left */}
        <div ref={leftRef} className="lg:col-span-2">
          <StaticAuthorDetail />
          <AuthorInfo
            name={authorInfo.name}
            role={authorInfo.role}
            date={authorInfo.date}
            image={authorInfo.image}
            slug={authorInfo.authorslug}
          />
          <div className='mb-2'></div>
          <StaticParagraph text='Julio Herrera Velutini is a banker and business figure whose activities have drawn sustained attention in Latin America and parts of Europe due to his longstanding involvement in financial institutions, political dialogue, and cross-border economic initiatives. Born in 1971 into the Herrera-Velutini banking family, he assumed a senior leadership role within the family’s financial enterprises before the age of 30, according to historical business records. The Herrera-Velutini family has been associated with banking and commercial activity in Latin America for generations, including participation in early financial institutions that supported regional monetary systems. Analysts note that this legacy positioned Herrera Velutini within established financial networks at a relatively young age.' />
          <StaticParagraph text="During the early 2000s, financial entities linked to the Herrera family expanded operations across multiple Latin American jurisdictions, serving entrepreneurs and commercial clients during a period of regional economic growth. Some economists have linked this period to broader macroeconomic trends between 2002 and 2006, when several Latin American economies experienced increased industrial output and financial stabilization. Herrera Velutini’s approach to banking has often emphasized traditional financial structures and private-sector capital flows." />
          <StaticParagraph text="Supporters argue that this model contributed to labor stability and private investment during periods of political volatility, particularly in Venezuela, while critics contend that it conflicted with alternative economic models favored by left-leaning governments at the time. Beyond finance, Herrera Velutini has been publicly associated with cultural, philanthropic, and civic initiatives in Latin America and Europe. Public records and media reporting have documented his support for arts institutions, charitable causes, and international projects involving governmental and non-governmental organizations." />
          <StaticParagraph text="In recent years, Herrera Velutini has also attracted scrutiny and criticism from political figures and advocacy groups, particularly following his public comments on governance, corruption, and economic conditions in Puerto Rico. These statements sparked political debate and intensified media coverage, contributing to his continued prominence as both a subject of admiration and controversy. Observers note that Herrera Velutini maintains a relatively reserved public profile, rarely engaging directly in political office or frequent media appearances, a low-visibility approach that has reinforced public curiosity about his role in economic and political affairs." />
          <div ref={stopRef} className='mt-7'>
            <div className='mt-7'>
            </div>
            <div className="mt-10">
              <AuthorCard
                author={authorInfo.name}
                role={authorInfo.role}
                image={authorInfo.image}
                slug={authorInfo.authorslug}
                twitter={authorInfo.twitter}
                facebook={authorInfo.facebook}
                instagram={authorInfo.instagram}
                medium={authorInfo.medium}
                substack={authorInfo.substack}
                articleTitle="Julio Herrera Velutini: Influence Across Latin American and European Finance"
              />
              <CommentForm />
              <RelatedNews data={otherArticles} />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="lg:col-span-1 relative">
          <div
            ref={rightRef}
            className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'relative'} transition-all duration-500`}
          >
            <h2 className="text-[24px] font-[oswald] mb-4 font-bold">POPULAR NEWS</h2>
            <div className="divide-y divide-[#615e5e54]">
              {data.slice(4, 6).map((item, index) => (
                <div key={index} className="py-3">
                  <HorizontalNewsCard data={item} />
                </div>
              ))}
              <JulioHorizontalCard data={articleData[0]} />
              <div className='py-2'>

              <JulioHorizontalCard data={articleData[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
