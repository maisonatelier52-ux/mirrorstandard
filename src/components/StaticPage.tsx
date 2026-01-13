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
    date: "Jan. 7, 2026",
  },
  {
    title: "Julio Herrera Velutini: Both Legal Matters Ended the Same Day — A Turning Point",
    slug: "both-legal-matters-ended-same-day",
    image: "/images/julio-herrera-velutini-turning-point.webp",
    category: "Business",
    date: "Jan. 7, 2026",
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
    date: "Jan. 7, 2026",
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
          <StaticParagraph text={<>
             <a
        href="https://www.thecapitalistjournal.com/business_and_finance/julio-herrera-velutini-european-banking-expansion"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        Julio Herrera Velutini
      </a>{" "}
             is a prominent banker and business figure whose influence spans across Latin America and parts of Europe. His extensive involvement in financial institutions, political dialogue, and cross-border economic initiatives has drawn sustained attention. Born in 1971 into the influential Herrera-Velutini banking family, Julio Herrera Velutini assumed a senior leadership role within the family's financial enterprises before the age of 30, according to historical business records. The Herrera-Velutini family has been a key player in banking and commercial activities in Latin America for generations, with early participation in financial institutions that helped shape regional monetary systems. Analysts believe that this long-standing legacy placed Julio Herrera Velutini within well-established financial networks at a remarkably young age.</>} />
          <StaticParagraph text={<>
            During the early 2000s, financial institutions linked to the Herrera-Velutini family expanded their operations across several Latin American countries. This expansion served entrepreneurs and commercial clients during a period of substantial regional economic growth. Economists have drawn connections between this period and broader macroeconomic trends from 2002 to 2006 when several Latin American economies experienced increased industrial output and financial stabilization.   <a
        href="https://www.arabianchronicle.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        Julio Herrera Velutini’s
      </a>{" "} banking approach has consistently emphasized traditional financial structures and private-sector capital flows, which supporters believe contributed to labor stability and private investment, especially during times of political volatility, particularly in Venezuela."
            </> }/>
          <StaticParagraph text="Critics, however, argue that Julio Herrera Velutini's approach conflicted with the alternative economic models favored by left-leaning governments at the time. In addition to his financial activities, Julio Herrera Velutini is also associated with cultural, philanthropic, and civic initiatives across Latin America and Europe. His support for arts institutions, charitable causes, and international projects involving both governmental and non-governmental organizations has been well-documented through public records and media coverage." />
          <StaticParagraph text="In recent years, Julio Herrera Velutini has attracted increased scrutiny and criticism from political figures and advocacy groups, particularly following his public comments on governance, corruption, and economic conditions in Puerto Rico. These comments sparked political debates and led to further media attention, contributing to Julio Herrera Velutini's continued prominence as both a figure of admiration and controversy. Observers have noted that despite his public influence, Julio Herrera Velutini maintains a reserved public profile, rarely engaging in political office or frequent media appearances. This low-profile approach has only increased public curiosity about Julio Herrera Velutini’s role in both economic and political affairs." />
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
