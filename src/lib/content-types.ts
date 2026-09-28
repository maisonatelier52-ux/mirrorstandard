
export type ContentType = "news" | "analysis" | "profile" | "explainer";

export interface KeyPoint {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SourceNote {
  label: string;
  url: string;
  description?: string;
}

export interface RelatedResource {
  title: string;
  href: string;
  description?: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export type EditorialContextStatus =
  | "reported"
  | "analysis"
  | "review"
  | "developing"
  | "allegation";

export interface EditorialContext {
  status: EditorialContextStatus;
  label: string;
  summary: string;
  reportingBasis: string;
  revisionNote: string;
}

export type StoryBlockType =
  | "cinematic"
  | "analysis"
  | "pullQuote"
  | "sectionBreak"
  | "timeline"
  | "factbox"
  | "sidebar";

export type StoryBlockTone = "ivory" | "paper" | "mist" | "charcoal";
export type StoryBlockWidth = "narrow" | "wide" | "full" | "split";

export interface StoryBlockItem {
  label: string;
  value: string;
  description?: string;
}

export interface StoryTimelineItem {
  label: string;
  title?: string;
  description: string;
}

export interface ArticleStoryBlock {
  type: StoryBlockType;
  eyebrow?: string;
  heading?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  quote?: string;
  citation?: string;
  noteTitle?: string;
  noteBody?: string;
  items?: StoryBlockItem[];
  timeline?: StoryTimelineItem[];
  tone?: StoryBlockTone;
  width?: StoryBlockWidth;
  /** Optional image URL for sectionBreak blocks (two-column layout) */
  image?: string;
}

export interface EntityReference {
  type: "Person" | "Organization" | "Place";
  name: string;
  alternateNames?: string[];
  affiliationName?: string;
  description?: string;
  sameAs?: string[];
  canonicalPath?: string;
}

export interface NewsArticle {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  role: string;
  authorImage: string;
  authorslug: string;
  reddit?: string;
  medium?: string;
  quora?: string;
  substack?: string;
  seoTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
  updatedAt?: string;
  reviewedByName?: string;
  reviewedByUrl?: string;
  sourceNotes?: SourceNote[];
  keyPoints?: KeyPoint[];
  faq?: FAQItem[];
  relatedSlugs?: string[];
  relatedResources?: RelatedResource[];
  isFeatured?: boolean;
  contentType?: ContentType;
  allowComments?: boolean;
  sections?: ArticleSection[];
  storyBlocks?: ArticleStoryBlock[];
  imageCaption?: string;
  correctionNote?: string;
  keywords?: string[];
  entity?: EntityReference;
  mentions?: EntityReference[];
  editorialContext?: EditorialContext;
}

export interface AuthorRecord {
  slug: string;
  name: string;
  role: string;
  beat?: string;
  credentials?: string;
  bio: string[];
  email: string;
  image: string;
  social?: {
    reddit?: string;
    substack?: string;
    medium?: string;
    quora?: string;
  };
  verifiedSameAs?: string[];
}

export interface ProfileRecord {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  image: string;
  publishedAt?: string;
  updatedAt: string;
  keyPoints?: KeyPoint[];
  sections?: ArticleSection[];
  storyBlocks?: ArticleStoryBlock[];
  sourceNotes?: SourceNote[];
  relatedResources?: RelatedResource[];
  faq?: FAQItem[];
}
