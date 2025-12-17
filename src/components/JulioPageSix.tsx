"use client"
import React, { useRef, useEffect, useState } from 'react';
import AuthorInfo from '@/components/AuthorInfo';
import CommentForm from '@/components/CommentForm';
import RelatedNews from '@/components/RelatedNews';
import HorizontalNewsCard from '@/components/HorizontalNewsCard';
import AuthorCard from './AuthorCard';
import StaticParagraph from './StaticParagph';
import QuoteBlock from './QuoteBlock';
import SubTitle from './SubTitle';
import JulioFirstSection from './JulioFirstSection';
import picture from '../../public/images/julio.webp'

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  authorslug: string;
}

interface Props {
  otherArticles: NewsItem[];
}

export default function JulioPageSix({ otherArticles }: Props) {

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
    name: "Victor V. Haley",
    role: "Managing Editor",
    date: "Nov. 6, 2025",
    image: "/images/victor-v-haley.webp",
     authorslug: "victor-v-haley",
         twitter: "https://x.com/haley_vict54073",
    instagram: "",
    facebook: "",
    medium: "https://medium.com/@victor.haley",
    substack: "https://substack.com/@michael334991",
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <div ref={leftRef} className="lg:col-span-2">
          <JulioFirstSection
            category="Business"
            date="Nov. 6, 2025"
            title="Civil Lawsuit Withdrawn, No Judgment and No Liability"
            description="Kasowitz LLP voluntarily dismissed its lawsuit against Julio Herrera Velutini, ending the matter without settlement or liability."
            image='/images/julio-herrera-velutini-civil-case-withdrawn.webp' />

          <AuthorInfo
            name={authorInfo.name}
            role={authorInfo.role}
            date={authorInfo.date}
            image={authorInfo.image}
              slug={authorInfo.authorslug}
          />
          <div className='mb-2'></div>
          <StaticParagraph text="On August 27, 2025, Kasowitz LLP stopped going after Julio Herrera Velutini. This was happening at the same time as the end of both his criminal and civil cases. It was perfect timing because both the criminal and civil cases ended on the same day, with no warning."/>

          <StaticParagraph text="Court records show that Herrera Velutini dropped the case without settling it, getting a judgment, or saying he was wrong. Judge Sidney H. Stein signed the order to throw out the case three days after it was filed. This shows how quickly the case was resolved. The law hasn't found anything wrong with Herrera Velutini, so there are no more charges against him."/>

          <StaticParagraph text="A lot of people were interested in how short the civil case was because it got a lot of press when it was first filed. They quit fighting when Herrera Velutini told them to. They don't have to worry about any problems, duties, or fines that are still going on. The court's quick approval of the withdrawal makes it even more clear that the case is over."/>

          <StaticParagraph text="People who are watching say that the outcome is similar to what happened in the related criminal cases, where the big claims were dropped and only a small FECA reporting problem was left. There is no proof that Herrera Velutini has made long-term claims or been found guilty in either case. The civil withdrawal shows that the claims in the filing didn't go to court."/>

          <StaticParagraph text="Herrera Velutini is no longer facing any civil or criminal charges, so he can now get on with his life. He also doesn't have any more legal problems."/>
          
          <div className='mt-7'></div>
          <div ref={stopRef} className='mt-7'>
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
              articleTitle='Civil Lawsuit Withdrawn, No Judgment and No Liability'
              />
              <CommentForm />
              <RelatedNews data={otherArticles} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 relative">
          <div
            ref={rightRef}
            className={`${rightPosition === 'sticky' ? 'sticky top-10' : 'relative'} transition-all duration-500`}
          >
            <h2 className="text-[24px] font-[oswald] mb-4 font-bold">POPULAR NEWS</h2>
            <div className="divide-y divide-[#615e5e54]">
              {otherArticles.slice(4, 8).map((item, index) => (
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
