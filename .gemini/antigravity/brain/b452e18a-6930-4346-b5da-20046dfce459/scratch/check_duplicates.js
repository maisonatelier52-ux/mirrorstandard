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
    }
});

const slugs = allNews.map(n => n.slug);
const uniqueSlugs = new Set(slugs);

console.log("Total News:", allNews.length);
console.log("Unique Slugs:", uniqueSlugs.size);

if (allNews.length !== uniqueSlugs.size) {
    const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
    console.log("Duplicate Slugs count:", duplicateSlugs.length);
    console.log("Example duplicates:", duplicateSlugs.slice(0, 5));
}
