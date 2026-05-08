const fs = require('fs');
const path = require('path');

const dataDir = 'C:\\Users\\lenovothink\\mirrorstandard\\public\\data';

const files = [
    'business.json', 'education.json', 'entertainment.json', 'health.json',
    'lifestyle.json', 'politics.json', 'science.json', 'technology.json', 'sports.json'
];

let allNews = [];

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        allNews = allNews.concat(data);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

const parseDate = (dateStr) => {
    const cleanedDate = dateStr.replace('.', '');
    const timestamp = Date.parse(cleanedDate);
    return isNaN(timestamp) ? 0 : timestamp;
};

const sortedNews = [...allNews].sort((a, b) => parseDate(b.date) - parseDate(a.date));

const categories = ["politics", "health", "science", "business", "education"];

console.log("Total News:", sortedNews.length);

categories.forEach(cat => {
    const firstIndex = sortedNews.findIndex(n => n.category === cat);
    const countInRange = sortedNews.slice(20, 51).filter(n => n.category === cat).length;
    console.log(`Category: ${cat}, First Index: ${firstIndex}, Count in 20-51: ${countInRange}`);
});
