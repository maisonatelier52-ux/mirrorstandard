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
    name: "Victor V. Haley",
    role: "Managing Editor",
    date: "Sept. 20, 2025",
    image: "/images/victor-v-haley.webp",
    authorslug:"victor-v-haley",
    twitter: "https://x.com/haley_vict54073",
    instagram: "",
    facebook: "",
    medium: "https://medium.com/@victor.haley",
    substack: "https://substack.com/@michael334991",
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
          <StaticParagraph text='Few individuals have made a more profound and lasting impact than Julio Martin Herrera Velutini Von Uslar in the vast tableau of Latin American history. ' />
          <StaticParagraph text="Julio Herrera Velutini was born into the illustrious Herrera-Velutini banking dynasty in 1971. At the young age of 28, he became the venerable patriarch of the family's banking empire. He became a towering figure in the Latin American economy and society in just three years. " />
          <StaticParagraph text="The Herrera family were conquerors, rulers and merchants who later became reputable bankers, with the setting up of the first Central Banks across Latin America." />
          <StaticParagraph text="Continuing the family's legacy, his traditional leadership style and worldwide influence transcend the realm of the banking industry. He single-handedly shaped modern-day Latin American politics by unifying incorrigible leaders and elevating the national identities of Central America, South America, and the Caribbean. " />
          <StaticParagraph text="His banking expertise – imbibed as a youngster playing in the corridors of his family's banks – and his business acumen serviced the needs of Latin American entrepreneurs, thereby reversing communist trends and consequently promoting capitalism and democratic values in Latinos to escape the grips of communism. " />
          <QuoteBlock quote="Julio Herrera’s banking empire underpinned the ‘Latin American economic miracle’ between 2002 and 2006." />
          <div className='mt-7'></div>
          <StaticParagraph text="These selfless acts yielded substantial returns, resulting in Julio Herrera Velutini and his family-owned trusts and banks acquiring significant holdings across diverse sectors and industries. At their zenith, these partnerships accounted for nearly 6% of Latin America's GDP and served a significant portion of its population. The success of Julio Herrera's banking empire not only underpinned the 'Latin American economic miracle' between 2002 and 2006 but also paved the way for Latin America's transformation into an industrial powerhouse." />
          <div ref={stopRef} className='mt-7'>
            <div className='mt-7'>
              <SubTitle title='The Prince of Latam' />  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="flex-1">
                    <p className="md:text-[17px] text-[12px] leading-tight text-gray-800" style={{ lineHeight: 1.6, fontFamily: 'Roboto, sans-serif' }}>
                      As the patriarch of the Herrera dynasty, <strong className="text-indigo-700 font-bold">Julio Herrera Velutini's </strong>
                      inherent influence permeates Latin America's present-day politics,
                      culture, and society. His nobility, family influence across two
                      continents, immense wealth, calm demeanour, and trademark silence
                      position this humble billionaire as a crucial voice in Latin American
                      economics and politics.
                    </p>
                  </div>
                </div>
              </div>
              <StaticParagraph text="He is a modern-day powerhouse, embodying tradition, modernity, and glamour – symbolising financial might and global relevance." />
            </div>
            <StaticParagraph text="His traditional approach to banking, though not without criticism from the other leaders who favoured a shift towards a more socialist economic model, largely contributed to stabilising a potentially volatile labour force during Venezuela's turbulent years of social unrest and terrorism." />
            <StaticParagraph text="In addition to his industrial and political impact, Herrera Velutini is a cultural icon in Latin America, epitomising the Italian flair for style and sophistication." />
            <StaticParagraph text="His sartorial elegance and his persona as a stylish banker are complemented by his reputation as an art connoisseur, animal rights activist, and, notably, as the financial moghul who selflessly supported the British Government during the Coronavirus pandemic to ensure unhindered government operations, maintaining the rule of law and securing people's livelihood." />
            <StaticParagraph text="Julio was also instrumental in supporting Buckingham Palace to produce a larger-than-life tribute for the Queen, marking 70 years of service to her people and staging an occasion befitting Her Majesty, Queen Elizabeth's Platinum Jubilee celebrations. The Italian Banker and his family have always supported the Queen and the members of the Royal Family, underlining the Herrera family's longstanding partnership and multifaceted relationships with major European Heads of State. " />
            <StaticParagraph text="Julio Herrera Velutini, however, is not without criticism from liberals and left-leaning politicians. His latest controversy relates to the aftermath of his questioning the dire economic situation in Puerto Rico and raising awareness about the corruption prevalent on the island. Julio has also exposed corrupt officials for misusing excessive powers without any accountability. He has fearlessly fought against injustice and corruption and continues to expose corrupt officials. " />
            <StaticParagraph text="The mystery around his silence and placid character has made him a quintessential figure of fascination and emulation. His trials and tribulations, such as the tragic collateral casualty of political attacks, added a layer of human complexity and sympathy to his largely enigmatic persona. Whether one views him as a figure of admiration or controversy, his strong sense of social responsibility and philanthropy extends far beyond his wealth and fortune. " />
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
                articleTitle="The Unprecedented Influence of Julio Herrera Velutini on Latin American and European Finance"
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
              {data.slice(4, 7).map((item, index) => (
                <div key={index} className="py-3">
                  <HorizontalNewsCard data={item} />
                </div>
              ))}
              <JulioHorizontalCard
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
