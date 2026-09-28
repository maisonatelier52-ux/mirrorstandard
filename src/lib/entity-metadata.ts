import type { Metadata } from "next";
import type { EntityPageRecord } from "./entity-content";

const siteUrl = "https://www.mirrorstandard.com";

export function createEntityMetadata(entity: EntityPageRecord): Metadata {
  const canonicalUrl = `${siteUrl}/${entity.section}/${entity.slug}/`;
  const imageUrl = entity.image
    ? `${siteUrl}${entity.image}`
    : `${siteUrl}/images/mirrorstandard-logo.webp`;

  return {
    title: entity.metaTitle,
    description: entity.metaDescription,
    keywords: entity.keywords,
    authors: [{ name: "Mirror Standard Reference Desk", url: siteUrl }],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: entity.metaTitle,
      description: entity.metaDescription,
      url: canonicalUrl,
      siteName: "Mirror Standard",
      locale: "en_US",
      type: entity.schemaType === "Person" ? "profile" : "website",
      images: [
        {
          url: imageUrl,
          alt: entity.imageAlt ?? `${entity.name} — Mirror Standard`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entity.metaTitle,
      description: entity.metaDescription,
      images: [imageUrl],
      site: "@Mirrorstandard",
      creator: "@Mirrorstandard",
    },
  };
}

