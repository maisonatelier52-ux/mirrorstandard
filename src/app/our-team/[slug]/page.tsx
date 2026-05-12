import React from "react";
import authors from "../../../../public/data/author.json";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiSubstack, SiMedium } from "react-icons/si";

interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  email: string;
  social?: {
    reddit?: string;
    substack?: string;
    medium?: string;
    quora?: string;
  };
}

export async function generateStaticParams() {
  return authors.map((author: Author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author: Author | undefined = authors.find((a) => a.slug === slug);

  if (!author) {
    return <div className="text-center py-20 text-gray-700">Author not found</div>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "url": `https://www.mirrorstandard.com/our-team/${author.slug}`,
    "jobTitle": author.role,
    "description": author.bio.join(" "), 
    "email": `mailto:${author.email}`,
    "sameAs": [],
  };

  return (
    <>
      <Script
        id="structured-data-author"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-6">
          <Link
            href="/our-team"
            title="our team"
            className="text-blue-600 hover:underline text-sm cursor-pointer"
          >
            &larr; Back to Our Team
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-8 border-b pb-6 gap-6">
          <div>
            <h1 className="text-3xl font-bold ">{author.name}</h1>
            <p className="text-gray-600 mt-1">{author.role}</p>
            <div className="flex items-center gap-4 mt-3">
              {author.social?.reddit && (
                <a href={author.social.reddit} target="_blank" rel="noopener noreferrer" title="Reddit" className="text-[#FF4500] hover:opacity-80 transition-opacity">
                  <FaReddit size={24} />
                </a>
              )}
              {author.social?.substack && (
                <a href={author.social.substack} target="_blank" rel="noopener noreferrer" title="Substack" className="text-[#FF6719] hover:opacity-80 transition-opacity">
                  <SiSubstack size={22} />
                </a>
              )}
              {author.social?.medium && (
                <a href={author.social.medium} target="_blank" rel="noopener noreferrer" title="Medium" className="text-[#00ab6c] hover:opacity-80 transition-opacity">
                  <SiMedium size={22} />
                </a>
              )}
              {author.social?.quora && (
                <a href={author.social.quora} target="_blank" rel="noopener noreferrer" title="Quora" className="text-[#B92B27] hover:opacity-80 transition-opacity">
                  <FaQuora size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
        <section className="mb-12 space-y-4 text-gray-500 leading-relaxed text-lg">
          {author.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
        <section className="border-t pt-6 text-gray-500">
          <p className="text-sm">
            <span className="font-medium">Want to get in touch or share a tip?</span>
            <br />
            Email:{" "}
            <a
              href={`mailto:${author.email}`}
              title="mail"
              aria-label="mail"
              className="text-blue-600 hover:underline"
            >
              {author.email}
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
