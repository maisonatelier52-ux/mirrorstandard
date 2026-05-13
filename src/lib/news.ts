import businessData from '../../public/data/business.json';
import technologyData from '../../public/data/technology.json';
import sportsData from '../../public/data/sports.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import scienceData from '../../public/data/science.json';
import entertainmentData from '../../public/data/entertainment.json';
import educationData from '../../public/data/education.json';


export interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

export const allNews: NewsData[] = [
  ...businessData,
  ...technologyData,
  ...sportsData,
  ...healthData,
  ...politicsData,
  ...scienceData,
  ...entertainmentData,
  ...educationData
];

export const parseDate = (dateStr: string) => {
  const cleanedDate = dateStr.replace('.', '');
  const timestamp = Date.parse(cleanedDate);
  return isNaN(timestamp) ? 0 : timestamp;
};

export const getSortedNews = () => {
  return [...allNews].sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

export const getLatestNews = (count: number) => {
  return getSortedNews().slice(0, count);
};
