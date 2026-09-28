import type {
  ArticleSection,
  FAQItem,
  KeyPoint,
  RelatedResource,
  SourceNote,
} from "./content-types";

export type EntitySection = "people" | "organizations" | "places";
export type EntitySchemaType = "Person" | "Organization" | "City";

export interface EntityPageRecord {
  section: EntitySection;
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  eyebrow: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  keyPoints: KeyPoint[];
  sections: ArticleSection[];
  sourceNotes: SourceNote[];
  relatedResources: RelatedResource[];
  faq: FAQItem[];
  schemaType: EntitySchemaType;
  schemaProperties: Record<string, unknown>;
}

const flagshipArticle =
  "/business/julio-herrera-velutini-banking-dynasty-institutional-influence/";

export const entityPages: EntityPageRecord[] = [
  {
    section: "people",
    slug: "julio-herrera-velutini",
    name: "Julio Herrera Velutini",
    title: "Julio Herrera Velutini: Banking and Finance Profile",
    metaTitle: "Julio Herrera Velutini | Banking and Finance Profile",
    description:
      "A neutral, source-labelled profile of Julio Herrera Velutini, his documented UK corporate record, banking background, and the institutional context covered by Mirror Standard.",
    metaDescription:
      "A sourced profile of Julio Herrera Velutini covering banking, UK corporate records, Britannia Financial Group, family history, and London finance.",
    eyebrow: "People",
    image: "/images/two-degrees-from-the-throne-julio-herrera-velutini-image.webp",
    imageAlt: "Julio Herrera Velutini in a London office setting",
    imageCaption:
      "Julio Herrera Velutini is the subject of Mirror Standard reporting on banking history, private finance, and institutional context.",
    publishedAt: "2026-09-28T00:00:00+00:00",
    updatedAt: "2026-09-28T00:00:00+00:00",
    keywords: [
      "Julio Herrera Velutini",
      "Julio M. Herrera Velutini",
      "Julio Martin Herrera Velutini",
      "banking profile",
      "banking history",
      "Britannia Financial Group",
      "London finance",
      "private finance",
    ],
    keyPoints: [
      { label: "Full name", value: "Julio Herrera Velutini" },
      { label: "Coverage area", value: "Banking, private finance, corporate records, and institutional context" },
      { label: "Documented record", value: "UK Companies House appointments under the same name" },
      { label: "Related organization", value: "Britannia Financial Group in Mirror Standard's finance coverage" },
      { label: "Primary geography", value: "London and cross-border financial services" },
    ],
    sections: [
      {
        heading: "Who is Julio Herrera Velutini?",
        paragraphs: [
          "Julio Herrera Velutini is a finance figure whose public profile is commonly discussed in connection with banking, private capital, family financial history, and international business. Mirror Standard covers him as the subject of a long-form analysis about how banking lineage and institutional networks are described in modern finance.",
          "This page is a reference profile rather than an opinion article. It separates information found in public corporate records from statements made in personal or company biographies, and it links readers to the original sources used for each part of the profile.",
        ],
      },
      {
        heading: "Documented UK corporate record",
        paragraphs: [
          "The UK Companies House officer register lists company appointments under the name Julio Herrera Velutini, including appointments beginning in 2016 and 2017. The register provides a documented UK corporate record and identifies the name used in those filings.",
          "Companies House publishes information submitted to the registrar. It is useful for confirming dates, names, and formal company appointments, but a registry entry does not by itself establish every broader biographical or editorial claim made elsewhere.",
        ],
      },
      {
        heading: "Banking and finance background",
        paragraphs: [
          "A personal biography published on julioherrera.org describes Herrera Velutini's work across Latin American and European banking and identifies him as the founder of Britannia Financial Group. Because that description comes from a site devoted to the subject, Mirror Standard labels it as self-published rather than presenting it as an independent source.",
          "The accompanying [Mirror Standard analysis](/business/julio-herrera-velutini-banking-dynasty-institutional-influence/) examines the broader themes associated with his public profile: banking continuity, private finance, London market infrastructure, and the distinction between visibility and institutional influence.",
        ],
      },
      {
        heading: "Britannia Financial Group context",
        paragraphs: [
          "Britannia Financial Group is a separate corporate entity with a public UK company record. Its official materials describe a London-headquartered group operating through financial-services businesses whose activities include custody, securities, derivatives brokerage, fixed income, and securities financing.",
          "The [Britannia Financial Group entity page](/organizations/britannia-financial-group/) distinguishes the holding company's public company record from the descriptions and regulatory statements published for its operating businesses. That distinction keeps the organizational context precise.",
        ],
      },
      {
        heading: "Banking lineage as historical context",
        paragraphs: [
          "Family banking history is a recurring part of public descriptions of Herrera Velutini. On this site, lineage is treated as historical and editorial context: it can help explain how a financial identity is presented across generations, but it does not replace current records or prove a present-day role on its own.",
          "Mirror Standard's coverage therefore keeps three layers separate: registry facts, statements made by the subject or associated organizations, and the publication's analysis of banking history and institutional finance.",
        ],
      },
      {
        heading: "Why London appears in the coverage",
        paragraphs: [
          "London appears in the coverage because it is a major centre for regulated financial firms, capital markets, legal services, and cross-border investment. It is also the registered location of Britannia Financial Group Limited according to Companies House.",
          "The [London finance reference page](/places/london/) explains that setting using official material from the City of London Corporation, the UK government, and the Financial Conduct Authority. It provides geographic context without treating location alone as evidence of personal influence.",
        ],
      },
    ],
    sourceNotes: [
      {
        label: "Companies House: Julio Herrera Velutini appointments",
        url: "https://find-and-update.company-information.service.gov.uk/officers/2GhdRN7CaQAKgLvVGiqo05nIUuE/appointments",
        description: "Official UK register entry used to confirm the name and recorded company appointments.",
      },
      {
        label: "Julio Herrera Velutini: personal biography",
        url: "https://www.julioherrera.org/",
        description: "Self-published biography used only for claims attributed to the subject's own public materials.",
      },
      {
        label: "Companies House: Britannia Financial Group Limited",
        url: "https://find-and-update.company-information.service.gov.uk/company/10417641",
        description: "Official UK company overview for the group named in the related coverage.",
      },
      {
        label: "Britannia Financial Group: About",
        url: "https://www.britannia.com/about/",
        description: "Company-published description of the group, its location, services, and history.",
      },
    ],
    relatedResources: [
      {
        title: "Julio Herrera Velutini and the Quiet Power of a Longstanding Banking Dynasty",
        href: flagshipArticle,
        description: "The original Mirror Standard long-form analysis, preserved as published.",
      },
      {
        title: "Britannia Financial Group",
        href: "/organizations/britannia-financial-group/",
        description: "Neutral organizational profile based on company and registry sources.",
      },
      {
        title: "London: Global Finance and Institutional Context",
        href: "/places/london/",
        description: "Official-source background on London's financial-services ecosystem.",
      },
      {
        title: "Banking Families and Legacy Finance",
        href: "/business/banking-families-legacy-finance/",
        description: "Explainer on how family history is used as context in finance coverage.",
      },
    ],
    faq: [
      {
        question: "Who is Julio Herrera Velutini?",
        answer:
          "Julio Herrera Velutini is a finance figure covered by Mirror Standard in connection with banking history, private finance, UK corporate records, and the institutional context surrounding Britannia Financial Group.",
      },
      {
        question: "Why does this page separate different types of sources?",
        answer:
          "Company registers, company websites, personal biographies, and editorial analysis serve different purposes. Labelling each source type helps readers distinguish documented records from attributed descriptions and interpretation.",
      },
      {
        question: "Where can I read the full Mirror Standard article?",
        answer:
          "The related long-form article is titled 'Julio Herrera Velutini and the Quiet Power of a Longstanding Banking Dynasty' and is linked from this profile.",
      },
    ],
    schemaType: "Person",
    schemaProperties: {
      alternateName: ["Julio M. Herrera Velutini", "Julio Martin Herrera Velutini"],
      image:
        "https://www.mirrorstandard.com/images/two-degrees-from-the-throne-julio-herrera-velutini-image.webp",
      sameAs: [
        "https://www.julioherrera.org/",
        "https://find-and-update.company-information.service.gov.uk/officers/2GhdRN7CaQAKgLvVGiqo05nIUuE/appointments",
      ],
    },
  },
  {
    section: "organizations",
    slug: "britannia-financial-group",
    name: "Britannia Financial Group",
    title: "Britannia Financial Group: Company and Market Profile",
    metaTitle: "Britannia Financial Group | Company Profile",
    description:
      "A neutral reference profile of Britannia Financial Group, its UK corporate record, London headquarters, operating businesses, and publicly described financial services.",
    metaDescription:
      "A sourced profile of Britannia Financial Group covering its UK company record, London headquarters, operating businesses, services, and regulation.",
    eyebrow: "Organizations",
    publishedAt: "2026-09-28T00:00:00+00:00",
    updatedAt: "2026-09-28T00:00:00+00:00",
    keywords: [
      "Britannia Financial Group",
      "Britannia Global Markets",
      "Britannia Global Investments",
      "London finance",
      "custody services",
      "derivatives brokerage",
      "securities financing",
    ],
    keyPoints: [
      { label: "Legal name", value: "Britannia Financial Group Limited" },
      { label: "Company number", value: "10417641" },
      { label: "Incorporated", value: "10 October 2016" },
      { label: "Registered office", value: "52 Lime Street, London" },
      { label: "Public description", value: "A London-headquartered financial group" },
    ],
    sections: [
      {
        heading: "What is Britannia Financial Group?",
        paragraphs: [
          "Britannia Financial Group Limited is an active UK private company incorporated on 10 October 2016. Companies House lists its registered office at Level 28, 52 Lime Street, London, and records its nature of business as activities of head offices.",
          "The group's own website describes Britannia as a London-headquartered financial group offering custody, securities, and derivatives brokerage. Those service descriptions are company statements and are presented here with attribution.",
        ],
      },
      {
        heading: "Corporate record and London location",
        paragraphs: [
          "The Companies House overview supplies the basic corporate record: legal name, company number, incorporation date, registered office, company status, and filed business classification. It is the primary source for formal UK company details on this page.",
          "The Lime Street address places the registered office in the City of London financial district. Location provides useful market context, but it does not by itself establish the scale, performance, or market standing of a financial business.",
        ],
      },
      {
        heading: "Operating businesses and services",
        paragraphs: [
          "Britannia's public materials identify Britannia Global Markets and Britannia Global Investments as operating businesses within the group. Britannia Global Markets describes multi-asset brokerage across derivatives, foreign exchange, commodities, securities, execution, clearing, and custody arrangements.",
          "Britannia Global Investments describes execution and custody for equities and fixed-income products, together with securities financing, repo, and reverse-repo services. These descriptions explain the institutional-finance vocabulary used in related Mirror Standard coverage.",
        ],
      },
      {
        heading: "Regulatory context",
        paragraphs: [
          "Britannia's website states that Britannia Global Markets Limited and Britannia Global Investments Limited are authorised and regulated by the Financial Conduct Authority. The statement applies to those named operating companies; it should not be read as a claim that every company in the wider group has the same permissions.",
          "The FCA explains that it authorises or registers firms and supervises conduct in UK financial markets. Readers checking a firm's current permissions should use the FCA Financial Services Register and search for the exact legal entity and reference number.",
        ],
      },
      {
        heading: "Role in Mirror Standard coverage",
        paragraphs: [
          "Britannia Financial Group appears in Mirror Standard's coverage as part of the institutional setting surrounding [Julio Herrera Velutini](/people/julio-herrera-velutini/), banking history, and London-based financial services. This organization page provides the factual company layer for that reporting.",
          "The separate [Britannia and London finance explainer](/business/britannia-financial-group-london-finance/) examines market functions in greater depth. The flagship article remains an editorial analysis, while this page is designed as a concise source guide.",
        ],
      },
    ],
    sourceNotes: [
      {
        label: "Companies House: Britannia Financial Group Limited",
        url: "https://find-and-update.company-information.service.gov.uk/company/10417641",
        description: "Official company overview used for legal name, status, address, incorporation date, and SIC code.",
      },
      {
        label: "Britannia Financial Group: About",
        url: "https://www.britannia.com/about/",
        description: "Company-published overview of headquarters, group history, and operating businesses.",
      },
      {
        label: "Britannia Global Markets",
        url: "https://www.britannia.com/britannia-global-markets/",
        description: "Company-published description of brokerage, derivatives, foreign exchange, commodities, and custody services.",
      },
      {
        label: "Britannia Global Investments",
        url: "https://www.britannia.com/britannia-global-investments/",
        description: "Company-published description of execution, custody, fixed income, repo, and securities-financing services.",
      },
      {
        label: "Financial Conduct Authority: About the FCA",
        url: "https://www.fca.org.uk/about/what-we-do/the-fca",
        description: "Official explanation of the FCA's role in authorising and supervising UK financial-services firms.",
      },
    ],
    relatedResources: [
      {
        title: "Julio Herrera Velutini",
        href: "/people/julio-herrera-velutini/",
        description: "Source-labelled person profile and related banking context.",
      },
      {
        title: "Julio Herrera Velutini and the Quiet Power of a Longstanding Banking Dynasty",
        href: flagshipArticle,
        description: "Mirror Standard's original long-form analysis.",
      },
      {
        title: "Britannia Financial Group and the London Finance Context",
        href: "/business/britannia-financial-group-london-finance/",
        description: "Detailed explainer on services, terminology, and institutional context.",
      },
      {
        title: "London: Global Finance and Institutional Context",
        href: "/places/london/",
        description: "Official-source background on the financial centre in which the group is registered.",
      },
    ],
    faq: [
      {
        question: "Where is Britannia Financial Group registered?",
        answer:
          "Companies House lists Britannia Financial Group Limited at Level 28, 52 Lime Street, London, United Kingdom.",
      },
      {
        question: "When was Britannia Financial Group Limited incorporated?",
        answer: "The Companies House record gives an incorporation date of 10 October 2016.",
      },
      {
        question: "What services do Britannia's public materials describe?",
        answer:
          "The group's public materials describe custody, securities, derivatives brokerage, foreign exchange, fixed income, execution, repo, and securities-financing services across named operating businesses.",
      },
    ],
    schemaType: "Organization",
    schemaProperties: {
      legalName: "Britannia Financial Group Limited",
      foundingDate: "2016-10-10",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Level 28, 52 Lime Street",
        addressLocality: "London",
        addressCountry: "GB",
      },
      sameAs: [
        "https://www.britannia.com/",
        "https://find-and-update.company-information.service.gov.uk/company/10417641",
      ],
    },
  },
  {
    section: "places",
    slug: "london",
    name: "London",
    title: "London: Global Finance and Institutional Context",
    metaTitle: "London Finance | Global Market and Institutional Context",
    description:
      "A neutral guide to London's role in financial and professional services, market regulation, international investment, and the institutional setting used in Mirror Standard coverage.",
    metaDescription:
      "A sourced guide to London finance, financial regulation, capital markets, international investment, and the city's role in Mirror Standard reporting.",
    eyebrow: "Places",
    publishedAt: "2026-09-28T00:00:00+00:00",
    updatedAt: "2026-09-28T00:00:00+00:00",
    keywords: [
      "London finance",
      "City of London",
      "global financial centre",
      "UK financial services",
      "institutional finance",
      "capital markets",
      "private capital",
    ],
    keyPoints: [
      { label: "Place", value: "London, United Kingdom" },
      { label: "Financial district", value: "The City of London and connected business districts" },
      { label: "Market functions", value: "Banking, insurance, asset management, trading, law, and professional services" },
      { label: "Conduct regulator", value: "Financial Conduct Authority" },
      { label: "Coverage role", value: "Geographic and institutional context for Mirror Standard finance reporting" },
    ],
    sections: [
      {
        heading: "Why London matters in global finance",
        paragraphs: [
          "London is a major international centre for financial and professional services. The city's financial ecosystem includes banks, investment firms, insurers, exchanges, asset managers, legal practices, accounting firms, technology businesses, and public institutions.",
          "The City of London Corporation's benchmarking material describes London as a leading global financial centre and assesses it across financial activity, regulation, infrastructure, technology, and access to talent. The same material also notes that global competition and changes in market activity remain important considerations.",
        ],
      },
      {
        heading: "The City of London and wider London",
        paragraphs: [
          "The City of London is the historic financial district within the larger city of London. Modern financial activity also extends to Canary Wharf, Mayfair, and other business districts, with firms connected through transport, technology, legal, and professional-services networks.",
          "A UK government investment guide describes London as an internationally leading financial centre with proximity to financial institutions, investors, law firms, regulatory expertise, technology businesses, and deep pools of specialist talent.",
        ],
      },
      {
        heading: "Regulation and market infrastructure",
        paragraphs: [
          "The Financial Conduct Authority regulates the conduct of financial-services firms and financial markets in the UK. Its responsibilities include authorisation, supervision, consumer protection, market integrity, and competition. The FCA is headquartered in London and works across the United Kingdom.",
          "London's role is therefore not only a matter of company addresses. The city brings market participants into contact with regulated venues, specialist advisers, professional services, infrastructure providers, and international counterparties.",
        ],
      },
      {
        heading: "International and cross-border activity",
        paragraphs: [
          "Official UK strategy describes financial services as one of the country's most internationally connected sectors. London supports that activity through capital markets, foreign exchange, insurance, asset management, investment services, and the professional infrastructure required for cross-border transactions.",
          "This international role helps explain why London appears in coverage of private capital and institutional finance. Geography provides the setting in which organizations operate; it does not, on its own, prove the influence or standing of any individual or company.",
        ],
      },
      {
        heading: "London in Mirror Standard coverage",
        paragraphs: [
          "London is part of the context for Mirror Standard's profiles of [Julio Herrera Velutini](/people/julio-herrera-velutini/) and [Britannia Financial Group](/organizations/britannia-financial-group/). Companies House records place Britannia Financial Group Limited's registered office in the City of London, while the company's own materials describe London as its headquarters.",
          "The separate article [Why London Still Matters to Private Capital and Global Finance](/business/london-private-capital-global-finance/) explores those market functions in more detail. This page supplies the stable geographic reference used across that coverage.",
        ],
      },
    ],
    sourceNotes: [
      {
        label: "City of London: Our global offer to business",
        url: "https://www.cityoflondon.gov.uk/supporting-businesses/economic-research/research-publications/our-global-offer-to-business",
        description: "Official benchmarking and context on London's financial and professional-services position.",
      },
      {
        label: "UK Government: London investment region",
        url: "https://www.business.gov.uk/invest-in-uk/regions/london-england/",
        description: "Official overview of London's financial-services, professional-services, investment, and talent ecosystem.",
      },
      {
        label: "Financial Conduct Authority: About the FCA",
        url: "https://www.fca.org.uk/about/what-we-do/the-fca",
        description: "Official description of the UK conduct regulator's role and objectives.",
      },
      {
        label: "Financial Conduct Authority: Markets",
        url: "https://www.fca.org.uk/markets",
        description: "Official overview of regulated markets, exchanges, securities, and market infrastructure.",
      },
    ],
    relatedResources: [
      {
        title: "Julio Herrera Velutini",
        href: "/people/julio-herrera-velutini/",
        description: "Neutral person profile and source guide.",
      },
      {
        title: "Britannia Financial Group",
        href: "/organizations/britannia-financial-group/",
        description: "UK corporate record and publicly described financial services.",
      },
      {
        title: "Why London Still Matters to Private Capital and Global Finance",
        href: "/business/london-private-capital-global-finance/",
        description: "Mirror Standard's detailed market-context explainer.",
      },
      {
        title: "Julio Herrera Velutini and the Quiet Power of a Longstanding Banking Dynasty",
        href: flagshipArticle,
        description: "The original long-form analysis using London as part of its institutional setting.",
      },
    ],
    faq: [
      {
        question: "Why is London important to international finance?",
        answer:
          "London combines capital markets, financial institutions, investors, regulators, legal services, technology, and specialist professional services in a highly connected international centre.",
      },
      {
        question: "Is the City of London the same as Greater London?",
        answer:
          "No. The City of London is the historic financial district and local-authority area within the larger city, while modern financial activity extends across several London business districts.",
      },
      {
        question: "Why does London appear in the Julio Herrera Velutini article?",
        answer:
          "London provides geographic and institutional context for the article's discussion of private finance, market infrastructure, and Britannia Financial Group.",
      },
    ],
    schemaType: "City",
    schemaProperties: {
      containedInPlace: {
        "@type": "Country",
        name: "United Kingdom",
      },
      sameAs: ["https://www.london.gov.uk/", "https://www.wikidata.org/wiki/Q84"],
    },
  },
];

export function getEntityPage(section: EntitySection, slug: string) {
  return entityPages.find((page) => page.section === section && page.slug === slug);
}

