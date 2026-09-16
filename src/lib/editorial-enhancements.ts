import type {
  ArticleSection,
  EditorialContext,
  EditorialContextStatus,
  NewsArticle,
  SourceNote,
} from "./content-types";

const EDITORIAL_REVISION_DATE = "September 15, 2026";

const headlineOverrides: Record<string, string> = {
  "greenland-discover-the-last-untouched-frontier":
    "Greenland Tourism Campaign Pitches a Remote Arctic Frontier",
  "apple-antitrust-lawsuit-allowed-to-proceed":
    "U.S. Judge Allows Apple Antitrust Lawsuit to Proceed",
  "xbox-layoffs-restructuring-asha-sharma-game-pass-streaming-strategy-2026":
    "Microsoft Cuts Xbox Jobs and Reassesses Its Gaming Strategy",
  "michigan-state-university-ethics-policy-trustee-debate":
    "Michigan State Trustees Debate New Ethics and Speech Rules",
  "taylor-swift-travis-kelce-wedding-global-media-spectacle-new-york":
    "Taylor Swift and Travis Kelce Marry at Madison Square Garden",
  "hantavirus-rise-argentina-cruise-ship-health-scare":
    "Argentina Hantavirus Cases Draw Scrutiny After Cruise Ship Incident",
  "zika-families-researchers-struggle-for-support":
    "Support Wanes for Zika-Affected Families and Researchers",
  "experimental-hiv-vaccine-fails-africa":
    "Experimental HIV Vaccine Fails to Prevent Infection in African Trial",
  "another-hiv-vaccine-fails-trial":
    "Another HIV Vaccine Candidate Fails in a Global Trial",
  "trump-tough-talk-foreign-policy-hits-wall-iran-strait-of-hormuz":
    "Trump's Iran Strategy Faces a Strait of Hormuz Test",
  "yoon-suk-yeol-death-penalty-martial-law-south-korea":
    "Yoon Suk Yeol Faces a Verdict in South Korea Martial Law Case",
  "netflix-nasa-space-partnership-content":
    "Netflix and NASA Announce Space-Programming Partnership",
  "how-heat-domes-cause-extreme-temperatures":
    "How Heat Domes Drive Dangerous Temperature Surges",
  "noaa-employees-fired-rehired-payback-dispute":
    "NOAA Employees Face Repeated Firings and Repayment Demands",
  "us-record-breaking-heatwave-july-2025":
    "Extreme Heat Breaks Temperature Records Across the United States",
  "man-city-club-world-cup-exit-premier-league-comeback":
    "What Manchester City's Club World Cup Exit Means for Its Premier League Return",
  "fabian-ruiz-transfer-man-united-al-nassr-psg":
    "Manchester United and Al Nassr Reportedly Consider a Move for Fabian Ruiz",
  "cadillac-2026-f1-driver-options-bottas-perez":
    "Cadillac's 2026 F1 Driver Options Include Bottas and Perez",
  "ben-stokes-bowling-comeback-2025":
    "How Ben Stokes Rebuilt His Bowling Workload",
  "steelers-dolphins-ramsey-fitzpatrick-trade-analysis":
    "Steelers-Dolphins Trade Analysis: Ramsey and Smith for Fitzpatrick",
  "jacob-misiorowski-brewers-pitching-record-mlb-history":
    "Jacob Misiorowski Leads a Record Brewers Pitching Performance",
  "china-rapid-ai-expansion-shaping-global-artificial-intelligence-future":
    "What China's Rapid AI Adoption Means for Global Competition",
  "irobot-launches-ai-powered-pet-robot-for-smart-home-companionship":
    "iRobot Introduces an AI-Powered Pet Robot for the Smart Home",
  "senate-passes-tech-bill-no-ai-moratorium":
    "Senate Passes Technology Bill Without an AI Moratorium",
  "samsung-galaxy-s27-ultra-exynos-2700-chip-leak-2026":
    "Samsung Galaxy S27 Ultra May Use Exynos 2700 in Some Markets",
};

const sectionHeadings: Record<string, [string, string, string]> = {
  business: ["What happened", "Business and market context", "What to watch"],
  education: ["What happened", "Why it matters for students and schools", "What to watch"],
  entertainment: ["What happened", "Cultural and industry context", "What comes next"],
  health: ["What the report says", "Health context", "What readers should know"],
  politics: ["What happened", "Political and legal context", "What to watch"],
  science: ["What researchers found", "Why it matters", "Questions that remain"],
  sports: ["The result", "How it unfolded", "What comes next"],
  technology: ["What happened", "Technical and industry context", "What to watch"],
};

const verificationResources: Record<string, SourceNote[]> = {
  business: [
    {
      label: "SEC EDGAR company filings",
      url: "https://www.sec.gov/edgar/search/",
      description: "Primary U.S. company filings for financial, ownership, and risk disclosures.",
    },
    {
      label: "Federal Reserve Economic Data",
      url: "https://fred.stlouisfed.org/",
      description: "Public economic time series for checking market and macroeconomic context.",
    },
  ],
  education: [
    {
      label: "U.S. Department of Education news and policy",
      url: "https://www.ed.gov/about/news",
      description: "Official federal announcements, policy materials, and enforcement updates.",
    },
    {
      label: "National Center for Education Statistics",
      url: "https://nces.ed.gov/",
      description: "Primary U.S. education datasets, surveys, and indicators.",
    },
  ],
  entertainment: [
    {
      label: "Associated Press entertainment coverage",
      url: "https://apnews.com/entertainment",
      description: "Independent reporting index for major film, music, television, and culture stories.",
    },
    {
      label: "U.S. Copyright Office",
      url: "https://www.copyright.gov/",
      description: "Primary legal guidance and records for copyright and public-domain questions.",
    },
  ],
  health: [
    {
      label: "PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
      description: "Searchable index of biomedical research and peer-reviewed literature.",
    },
    {
      label: "CDC newsroom and health guidance",
      url: "https://www.cdc.gov/media/",
      description: "Official U.S. public-health updates, data, and guidance.",
    },
  ],
  politics: [
    {
      label: "Congress.gov",
      url: "https://www.congress.gov/",
      description: "Primary federal legislation, hearings, votes, and member records.",
    },
    {
      label: "Federal Register",
      url: "https://www.federalregister.gov/",
      description: "Official rules, notices, executive documents, and agency actions.",
    },
  ],
  science: [
    {
      label: "Crossref scholarly search",
      url: "https://search.crossref.org/",
      description: "Publication records and DOI metadata for checking research provenance.",
    },
    {
      label: "NASA Science",
      url: "https://science.nasa.gov/",
      description: "Primary mission information, data releases, and science explainers.",
    },
  ],
  sports: [
    {
      label: "NCAA statistics",
      url: "https://stats.ncaa.org/",
      description: "Official college-sports schedules, results, and statistical records.",
    },
    {
      label: "FIFA tournaments and match centre",
      url: "https://www.fifa.com/en/tournaments",
      description: "Official international football fixtures, results, and competition records.",
    },
  ],
  technology: [
    {
      label: "Federal Trade Commission technology coverage",
      url: "https://www.ftc.gov/news-events/topics/competition-enforcement",
      description: "Official competition, consumer-protection, and enforcement materials.",
    },
    {
      label: "CISA cybersecurity advisories",
      url: "https://www.cisa.gov/news-events/cybersecurity-advisories",
      description: "Primary U.S. alerts and technical guidance for cybersecurity claims.",
    },
  ],
};

const commonSourceNote: SourceNote = {
  label: "Mirror Standard source methodology",
  url: "/source-methodology/",
  description:
    "How the newsroom distinguishes direct evidence, public records, attribution, and analysis.",
};

const targetedSourceRules: Array<{ pattern: RegExp; source: SourceNote }> = [
  {
    pattern: /\b(samsung|galaxy|exynos)\b/i,
    source: {
      label: "Samsung Global Newsroom",
      url: "https://news.samsung.com/global/",
      description: "Official product and semiconductor announcements; rumors remain unconfirmed until posted here or in launch materials.",
    },
  },
  {
    pattern: /\b(apple|iphone|vision pro|macbook)\b/i,
    source: {
      label: "Apple Newsroom",
      url: "https://www.apple.com/newsroom/",
      description: "Official product, company, and policy announcements from Apple.",
    },
  },
  {
    pattern: /\b(microsoft|xbox)\b/i,
    source: {
      label: "Microsoft Source",
      url: "https://news.microsoft.com/source/",
      description: "Official Microsoft company and product announcements.",
    },
  },
  {
    pattern: /\b(meta|instagram)\b/i,
    source: {
      label: "Meta Newsroom",
      url: "https://about.fb.com/news/",
      description: "Official Meta and Instagram product and policy announcements.",
    },
  },
  {
    pattern: /\b(sony|playstation)\b/i,
    source: {
      label: "PlayStation Blog",
      url: "https://blog.playstation.com/",
      description: "Official PlayStation product, software, and platform announcements.",
    },
  },
  {
    pattern: /\b(google|alphabet|waymo)\b/i,
    source: {
      label: "Google company news",
      url: "https://blog.google/company-news/",
      description: "Official corporate, product, and policy updates from Google and Alphabet companies.",
    },
  },
  {
    pattern: /\bopenai\b/i,
    source: {
      label: "OpenAI News",
      url: "https://openai.com/news/",
      description: "Official company and product announcements from OpenAI.",
    },
  },
  {
    pattern: /\banthropic\b/i,
    source: {
      label: "Anthropic News",
      url: "https://www.anthropic.com/news",
      description: "Official research, product, and policy announcements from Anthropic.",
    },
  },
  {
    pattern: /\b(nasa|artemis|psyche|astronaut|space station)\b/i,
    source: {
      label: "NASA News",
      url: "https://www.nasa.gov/news/all-news/",
      description: "Primary mission updates, briefings, and science releases from NASA.",
    },
  },
  {
    pattern: /\b(noaa|heat dome|meteor shower|climate)\b/i,
    source: {
      label: "NOAA News and Features",
      url: "https://www.noaa.gov/news",
      description: "Official U.S. weather, climate, ocean, and atmospheric information.",
    },
  },
  {
    pattern: /\b(fda|e-cigarette|vaccine approval)\b/i,
    source: {
      label: "U.S. Food and Drug Administration news",
      url: "https://www.fda.gov/news-events/fda-newsroom/press-announcements",
      description: "Primary regulatory announcements, approvals, warnings, and safety updates.",
    },
  },
  {
    pattern: /\b(cdc|measles|hantavirus|virus season)\b/i,
    source: {
      label: "CDC newsroom and health guidance",
      url: "https://www.cdc.gov/media/",
      description: "Official U.S. public-health updates, surveillance, data, and guidance.",
    },
  },
  {
    pattern: /\b(american academy of pediatrics|pediatricians?|recess)\b/i,
    source: {
      label: "American Academy of Pediatrics publications",
      url: "https://publications.aap.org/pediatrics",
      description: "AAP policy statements and peer-reviewed pediatric research.",
    },
  },
  {
    pattern: /\b(eeoc|equal employment opportunity commission)\b/i,
    source: {
      label: "EEOC newsroom",
      url: "https://www.eeoc.gov/newsroom",
      description: "Official enforcement releases and agency statements from the U.S. Equal Employment Opportunity Commission.",
    },
  },
  {
    pattern: /\b(justice department|department of justice|doj)\b/i,
    source: {
      label: "U.S. Department of Justice news",
      url: "https://www.justice.gov/news",
      description: "Official case announcements, filings, and statements from the Justice Department.",
    },
  },
  {
    pattern: /\b(department of education|education department|student loan)\b/i,
    source: {
      label: "U.S. Department of Education news",
      url: "https://www.ed.gov/about/news",
      description: "Official federal education policy, enforcement, and student-aid announcements.",
    },
  },
  {
    pattern: /\b(fifa|world cup|football|soccer)\b/i,
    source: {
      label: "FIFA tournaments and match centre",
      url: "https://www.fifa.com/en/tournaments",
      description: "Official international football fixtures, results, and competition records.",
    },
  },
  {
    pattern: /\b(nba|lakers|thunder|basketball)\b/i,
    source: {
      label: "NBA games and results",
      url: "https://www.nba.com/games",
      description: "Official NBA scores, schedules, box scores, and game records.",
    },
  },
  {
    pattern: /\b(nfl|ravens|steelers|patriots|football)\b/i,
    source: {
      label: "NFL scores and schedules",
      url: "https://www.nfl.com/scores/",
      description: "Official NFL scores, schedules, gamebooks, and team records.",
    },
  },
  {
    pattern: /\b(mlb|brewers|baseball)\b/i,
    source: {
      label: "MLB scores and statistics",
      url: "https://www.mlb.com/scores",
      description: "Official Major League Baseball scores, box scores, and statistical records.",
    },
  },
  {
    pattern: /\b(usc|uconn|ncaa|college football|college basketball)\b/i,
    source: {
      label: "NCAA statistics",
      url: "https://stats.ncaa.org/",
      description: "Official college-sports schedules, results, and statistical records.",
    },
  },
  {
    pattern: /\b(formula 1|\bf1\b|cadillac)\b/i,
    source: {
      label: "Formula 1 results and standings",
      url: "https://www.formula1.com/en/results.html",
      description: "Official Formula 1 results, standings, and race records.",
    },
  },
  {
    pattern: /\b(associated press|\bap's\b|\bap report)\b/i,
    source: {
      label: "Associated Press",
      url: "https://apnews.com/",
      description: "Independent reporting and original coverage cited or referenced in the brief.",
    },
  },
];

const stopWords = new Set([
  "about",
  "after",
  "again",
  "amid",
  "among",
  "and",
  "are",
  "before",
  "could",
  "from",
  "have",
  "into",
  "latest",
  "more",
  "over",
  "says",
  "that",
  "their",
  "this",
  "through",
  "under",
  "with",
  "without",
  "would",
]);

function collapseWhitespace(text: string) {
  return text.replace(/[\u00a0\u2007\u202f]/g, " ").replace(/\s+/g, " ").trim();
}

function removeStandaloneHeadings(text: string) {
  return text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => {
      if (!line || /[.!?][”'\"]?$/.test(line) || line.length > 110) return Boolean(line);
      const words = line.split(/\s+/).filter(Boolean);
      if (words.length < 3 || words.length > 14) return true;
      const significant = words.filter((word) => !/^(a|an|and|as|at|by|for|from|in|of|on|the|to|with)$/i.test(word));
      const titleCase = significant.filter((word) => /^[A-Z0-9]/.test(word));
      return titleCase.length / Math.max(1, significant.length) < 0.7;
    })
    .join(" ");
}

function ensureTerminalPunctuation(text: string) {
  const cleaned = text.trim().replace(/\s+([,.;:!?])/g, "$1");
  if (!cleaned) return cleaned;
  return /[.!?][”'\"]?$/.test(cleaned) ? cleaned : `${cleaned}.`;
}

function sentenceCaseFragment(text: string) {
  const cleaned = text.trim().replace(/^[,;:\-–—]+\s*/, "");
  return cleaned ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : cleaned;
}

function splitLongSentence(sentence: string) {
  if (sentence.length < 520) return [sentence];

  const semicolonParts = sentence.split(/;\s+/).filter(Boolean);
  const candidates = semicolonParts.length > 1
    ? semicolonParts
    : sentence.split(
        /,\s+(?=(?:according to|although|analysts|but|critics|experts|however|meanwhile|observers|officials|researchers|supporters|the company|the group|the report|the study|the team|this|while)\b)/i,
      );

  const chunks: string[] = [];
  let current = "";

  for (const candidate of candidates) {
    const part = candidate.trim();
    if (!part) continue;
    if (current && current.length + part.length > 460) {
      chunks.push(ensureTerminalPunctuation(sentenceCaseFragment(current)));
      current = part;
    } else {
      current = current ? `${current}; ${part}` : part;
    }
  }

  if (current) chunks.push(ensureTerminalPunctuation(sentenceCaseFragment(current)));
  return chunks.length ? chunks : [sentence];
}

function splitIntoSentences(text: string) {
  const protectedPeriod = "\uE000";
  const normalized = collapseWhitespace(removeStandaloneHeadings(text))
    // Protect initials, acronyms, and honorifics before applying the lightweight
    // sentence splitter. Without this, copy such as "U.S. Centers" and
    // "Dr. Murray" can be broken into fragments during paragraphing.
    .replace(/\b(?:[A-Za-z]\.){2,}/g, (abbreviation) =>
      abbreviation.replaceAll(".", protectedPeriod),
    )
    .replace(
      /\b(?:Capt|Col|Dr|Gen|Gov|Jr|Lt|Maj|Mr|Mrs|Ms|Mx|Prof|Rep|Rev|Sen|Sgt|Sr|St)\./g,
      (abbreviation) => abbreviation.replace(".", protectedPeriod),
    )
    .replace(/\.(?=[A-Z])/g, ". ")
    .replace(/([!?])(?=[A-Z])/g, "$1 ");

  const roughSentences = normalized
    .split(/(?<=[.!?])\s+(?=[“\"'(]*[A-Z0-9])/)
    .map((sentence) => sentence.replaceAll(protectedPeriod, ".").trim())
    .filter(Boolean)
    .flatMap(splitLongSentence)
    .map(ensureTerminalPunctuation);

  const seen = new Set<string>();
  return roughSentences.filter((sentence) => {
    const fingerprint = sentence
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (fingerprint.length < 20 || seen.has(fingerprint)) return false;
    seen.add(fingerprint);
    return true;
  });
}

function trimToWordBudget(sentences: string[], budget = 1050) {
  const kept: string[] = [];
  let words = 0;

  for (const sentence of sentences) {
    const sentenceWords = sentence.split(/\s+/).length;
    if (words + sentenceWords > budget && kept.length >= 4) break;
    kept.push(sentence);
    words += sentenceWords;
  }

  return kept;
}

function packParagraphs(sentences: string[]) {
  const paragraphs: string[] = [];
  let current: string[] = [];
  let wordCount = 0;

  for (const sentence of trimToWordBudget(sentences)) {
    const sentenceWords = sentence.split(/\s+/).length;
    if (current.length && wordCount + sentenceWords > 125) {
      paragraphs.push(current.join(" "));
      current = [];
      wordCount = 0;
    }
    current.push(sentence);
    wordCount += sentenceWords;
  }

  if (current.length) paragraphs.push(current.join(" "));
  return paragraphs;
}

function distributeParagraphs(paragraphs: string[], category: string): ArticleSection[] {
  const headings = sectionHeadings[category] ?? ["What happened", "Context", "What to watch"];
  const desiredSections = paragraphs.length >= 5 ? 3 : paragraphs.length >= 3 ? 2 : 1;
  const sections: ArticleSection[] = [];
  let cursor = 0;

  for (let index = 0; index < desiredSections; index += 1) {
    const remaining = paragraphs.length - cursor;
    const sectionCount = desiredSections - index;
    const take = Math.ceil(remaining / sectionCount);
    const sectionParagraphs = paragraphs.slice(cursor, cursor + take);
    if (sectionParagraphs.length) {
      sections.push({ heading: headings[index], paragraphs: sectionParagraphs });
    }
    cursor += take;
  }

  return sections;
}

function parseCalendarDate(date: string) {
  const isoMatch = date.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    return { year: Number(isoMatch[1]), month: Number(isoMatch[2]) - 1, day: Number(isoMatch[3]) };
  }

  const cleaned = date.trim().replace(/^([A-Za-z]+)\./, "$1").replace(/,/g, "");
  const match = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2})\s+(\d{4})$/);
  if (!match) return undefined;
  const monthToken = match[1].toLowerCase();
  const monthIndex = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
  ].findIndex((month) => month.startsWith(monthToken));
  if (monthIndex < 0) return undefined;
  return { year: Number(match[3]), month: monthIndex, day: Number(match[2]) };
}

function formatDisplayDate(date: string) {
  const parsed = parseCalendarDate(date);
  if (!parsed) return date;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(parsed.year, parsed.month, parsed.day)));
}

function toPublishedIso(date: string) {
  const parsed = parseCalendarDate(date);
  return parsed
    ? new Date(Date.UTC(parsed.year, parsed.month, parsed.day)).toISOString()
    : undefined;
}

function truncateAtWord(text: string, maxLength: number) {
  const clean = collapseWhitespace(text);
  if (clean.length <= maxLength) return clean;
  const boundary = clean.lastIndexOf(" ", maxLength - 1);
  return `${clean.slice(0, boundary > 0 ? boundary : maxLength - 1).replace(/[,:;\-–—]+$/, "")}…`;
}

function detectContext(article: NewsArticle): EditorialContext {
  const haystack = `${article.title} ${article.shortdescription}`.toLowerCase();
  let status: EditorialContextStatus = "reported";

  if (/\b(review|rankings?|best and worst|opinion)\b/.test(haystack)) {
    status = "review";
  } else if (/\b(accused|alleged|allegedly|lawsuit|charged|indicted|indictment|pleads? not guilty)\b/.test(haystack)) {
    status = "allegation";
  } else if (/\b(could|expected|leak|may |might|reportedly|rumor|tipped|unconfirmed)\b/.test(haystack)) {
    status = "developing";
  } else if (/\b(analysis|breakdown|fact focus|how |what .* means|why )\b/.test(haystack)) {
    status = "analysis";
  }

  const contextByStatus: Record<EditorialContextStatus, Pick<EditorialContext, "label" | "summary">> = {
    allegation: {
      label: "Allegation / legal proceeding",
      summary:
        "The central claim is contested or has not been finally adjudicated. Allegations are not findings of liability or guilt.",
    },
    analysis: {
      label: "Analysis",
      summary:
        "This article combines reported facts with interpretation. Analytical conclusions should be read as the author's assessment.",
    },
    developing: {
      label: "Developing / unconfirmed details",
      summary:
        "Some details rely on reports, forecasts, leaks, or preliminary information and may change after official confirmation.",
    },
    reported: {
      label: "Reported news",
      summary:
        "This report summarizes a dated event. Forecasts, estimates, and disputed claims are identified as such in the copy.",
    },
    review: {
      label: "Review / editorial judgment",
      summary:
        "This article includes criticism, rankings, or other editorial judgment alongside factual description.",
    },
  };

  const context = contextByStatus[status];
  return {
    status,
    ...context,
    reportingBasis: article.sourceNotes?.length
      ? "Linked primary records and background sources are listed below."
      : "The original brief has been reorganized for readability; verification starting points are listed below.",
    revisionNote: `Edited for clarity and structure on ${EDITORIAL_REVISION_DATE}. Facts remain anchored to the original publication date unless an update is explicitly noted.`,
  };
}

function extractKeywords(title: string, category: string) {
  const terms = title
    .replace(/[‘’“”'\"]/g, "")
    .split(/[^A-Za-z0-9.+-]+/)
    .filter((term) => term.length > 3 && !stopWords.has(term.toLowerCase()));
  return Array.from(new Set([category, ...terms])).slice(0, 7);
}

function buildKeyPoints(article: NewsArticle, context: EditorialContext) {
  return [
    { label: "The brief", value: truncateAtWord(article.shortdescription, 145) },
    { label: "Story status", value: context.label },
    { label: "Published", value: article.date },
  ];
}

function buildSections(article: NewsArticle) {
  const paragraphs = packParagraphs(splitIntoSentences(article.description));
  if (!paragraphs.length && article.shortdescription) {
    return [{ heading: sectionHeadings[article.category]?.[0] ?? "What happened", paragraphs: [article.shortdescription] }];
  }
  return distributeParagraphs(paragraphs, article.category);
}

function buildSourceNotes(article: NewsArticle) {
  if (article.sourceNotes?.length) return article.sourceNotes;
  const text = `${article.title} ${article.shortdescription}`;
  const targeted = targetedSourceRules
    .filter((rule) => rule.pattern.test(text))
    .map((rule) => rule.source)
    .filter(
      (source, index, items) =>
        items.findIndex((candidate) => candidate.url === source.url) === index,
    )
    .slice(0, 2);
  return [
    commonSourceNote,
    ...(targeted.length ? targeted : verificationResources[article.category] ?? []),
  ];
}

export function enhanceArticle(article: NewsArticle): NewsArticle {
  const title = headlineOverrides[article.slug] ?? collapseWhitespace(article.title);
  const shortdescription = ensureTerminalPunctuation(collapseWhitespace(article.shortdescription));
  const description = collapseWhitespace(removeStandaloneHeadings(article.description));
  const date = formatDisplayDate(article.date);
  const normalized = {
    ...article,
    title,
    shortdescription,
    description,
    date,
    author: article.author?.trim() || "Mirror Standard Staff",
    authorslug: article.authorslug?.trim() || "mirror-standard-staff",
    authorImage: article.authorImage || "/images/mirrorstandard-logo.webp",
    role: article.role?.trim() || "Staff Report",
  };
  const editorialContext = article.editorialContext ?? detectContext(normalized);

  return {
    ...normalized,
    description,
    seoTitle: truncateAtWord(article.seoTitle ?? title, 66),
    metaDescription: truncateAtWord(article.metaDescription ?? shortdescription, 155),
    publishedAt: article.publishedAt ?? toPublishedIso(date),
    contentType:
      article.contentType ??
      (editorialContext.status === "analysis" || editorialContext.status === "review" ? "analysis" : "news"),
    keyPoints: article.keyPoints?.length ? article.keyPoints : buildKeyPoints(normalized, editorialContext),
    sections:
      article.sections?.length || article.storyBlocks?.length ? article.sections : buildSections(normalized),
    sourceNotes: buildSourceNotes(article),
    keywords: article.keywords?.length ? article.keywords : extractKeywords(title, article.category),
    editorialContext,
    allowComments: article.allowComments ?? false,
    reddit: undefined,
    medium: undefined,
    quora: undefined,
    substack: undefined,
  };
}

export function getArticleReadingTime(article: NewsArticle) {
  const text = article.storyBlocks?.length
    ? article.storyBlocks
        .flatMap((block) => [
          block.heading,
          block.title,
          block.subtitle,
          ...(block.paragraphs ?? []),
          ...(block.items ?? []).flatMap((item) => [item.label, item.value, item.description]),
          ...(block.timeline ?? []).flatMap((item) => [item.label, item.title, item.description]),
        ])
        .filter(Boolean)
        .join(" ")
    : article.sections?.length
      ? article.sections.flatMap((section) => section.paragraphs).join(" ")
      : article.description;

  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 225));
}
