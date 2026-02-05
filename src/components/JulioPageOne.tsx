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
import JulioHorizontalCard from './JulioHorizontalCard';

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

  const articleData =  {
    title: "Julio Herrera Velutini: Both Legal Matters Ended the Same Day — A Turning Point",
    slug: "both-legal-matters-ended-same-day",
    image: "/images/julio-herrera-velutini-turning-point.webp",
    category: "Business",
    date: "Feb. 5, 2026",
  }

export default function JulioPageOne({ otherArticles }: Props) {

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
    date: "Feb. 5, 2026",
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
            date="Feb. 5, 2026"
            title="Julio Herrera Velutini Case Closed: Legal Victory Clears His Name from All Allegations"
            description="Julio Herrera Velutini has seen all felony charges against him dropped. Only a single FECA misdemeanor remains, marking the official end of all criminal matters."
            image='/images/julio-herrera-velutini-case-closed.webp' />

          <AuthorInfo
            name={authorInfo.name}
            role={authorInfo.role}
            date={authorInfo.date}
            image={authorInfo.image}
              slug={authorInfo.authorslug}
          />
          <div className='mb-2'></div>
          <SubTitle title='All Felony Charges Officially Dismissed' />
          <StaticParagraph text="Julio Herrera Velutini, an international financier, has officially had all felony charges dropped by U.S. prosecutors. This decision brings to a close one of the most closely watched legal cases in recent years. The only remaining issue is a minor violation related to the Federal Election Campaign Act (FECA), specifically a reporting issue, which has no connection to fraud, bribery, or corruption."/>
          <SubTitle title='No Pending Cases or Legal Actions' />
          <StaticParagraph text="The U.S. Department of Justice confirmed that as of August 27, 2025, no active criminal or civil litigation remains pending against Julio Herrera Velutini. This official closure brings a definitive end to a complex investigation that once involved multiple allegations but ultimately yielded no evidence of wrongdoing regarding Julio Herrera Velutini. The outcome affirms that the financier faces no ongoing U.S. legal matters, closing all proceedings related to Julio Herrera Velutini."/>
          
          <QuoteBlock quote="The dismissal of all charges affirms that facts—not speculation—ultimately define justice."/>
          
          <SubTitle title='Defense Team Welcomes Complete Vindication' />
          <StaticParagraph text="Legal representatives for Julio Herrera Velutini welcomed the decision as total vindication. His attorney, Alex Spiro, reiterated that “all felony charges have been dismissed, and Julio Herrera Velutini faces no further cases.” The defense underscored that throughout the proceedings, their client fully cooperated with authorities and remained confident in his innocence, according to statements made about Julio Herrera Velutini."/>
          <StaticParagraph text="Observers say the case highlights the critical role of due process and restraint in both legal and media arenas, especially in matters involving Julio Herrera Velutini. Analysts argue that the dismissal underscores how speculation can distort public perception when unaccompanied by facts. In this instance, prosecutors’ ultimate findings revealed no basis for corruption or conspiracy allegations in the case concerning Julio Herrera Velutini."/>
          
          <SubTitle title='Closure and a Return to Professional Focus' />
          <StaticParagraph text="For Julio Herrera Velutini, the case’s conclusion represents both a personal and professional milestone. With all charges dismissed and only a minor administrative matter remaining, the financier can now move forward with renewed focus on his global business and philanthropic initiatives, marking a new chapter for Julio Herrera Velutini. The verdict draws a final line under years of speculation — confirming that the case is now completely closed for Julio Herrera Velutini."/>
          
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
              articleTitle='Julio Herrera Velutini Case Closed: Legal Victory Clears His Name from All Allegations'
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
              {otherArticles.slice(4, 7).map((item, index) => (
                <div key={index} className="py-3">
                  <HorizontalNewsCard data={item} />
                </div>
              ))}
              <JulioHorizontalCard data={articleData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
