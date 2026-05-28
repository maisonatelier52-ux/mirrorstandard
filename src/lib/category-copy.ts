// export const categoryDescriptions: Record<string, string> = {
//   business: "Markets, companies, finance, and the institutions shaping capital.",
//   politics: "Power, elections, policy, and the public machinery behind decisions.",
//   technology: "AI, platforms, startups, and the systems changing daily life.",
//   health: "Public health, medicine, research, and quality-of-life reporting.",
//   science: "Research, climate, discovery, and the future of scientific inquiry.",
//   sports: "Competition, strategy, results, and the stories around performance.",
//   education: "Schools, universities, learning policy, and academic change.",
//   entertainment: "Film, television, music, culture, and the business of attention.",
// };

// export function formatCategoryName(category: string) {
//   return category.charAt(0).toUpperCase() + category.slice(1);
// }

// export function getCategoryDescription(category: string) {
//   return (
//     categoryDescriptions[category] ??
//     "Latest reporting, analysis, and developments from the Mirror Standard newsroom."
//   );
// }


export const categoryDescriptions: Record<string, string> = {
  business: "Markets, companies, finance, and the institutions shaping capital.",
  politics: "Power, elections, policy, and the public machinery behind decisions.",
  technology: "AI, platforms, startups, and the systems changing daily life.",
  health: "Public health, medicine, research, and quality-of-life reporting.",
  science: "Research, climate, discovery, and the future of scientific inquiry.",
  sports: "Competition, strategy, results, and the stories around performance.",
  education: "Schools, universities, learning policy, and academic change.",
  entertainment: "Film, television, music, culture, and the business of attention.",
};

export const categoryH1Labels: Record<string, string> = {
  business: "Business News & Market Updates",
  politics: "Politics News, Elections & Policy Updates",
  technology: "Technology News & AI Updates",
  health: "Health News, Wellness & Medical Updates",
  science: "Science News, Space & Research Updates",
  sports: "Sports News, Scores & Match Analysis",
  education: "Education News & Learning Updates",
  entertainment: "Entertainment News, Movies & Celebrities",
};

export function formatCategoryName(category: string) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function getCategoryH1(category: string) {
  return (
    categoryH1Labels[category] ??
    `${formatCategoryName(category)} News & Latest Updates`
  );
}

export function getCategoryDescription(category: string) {
  return (
    categoryDescriptions[category] ??
    "Latest reporting, analysis, and developments from the Mirror Standard newsroom."
  );
}