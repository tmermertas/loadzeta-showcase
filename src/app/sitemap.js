export default function sitemap() {
  const now = new Date();
  const langAlternates = {
    languages: {
      en: "https://loadzeta.com",
      tr: "https://loadzeta.com/tr",
      es: "https://loadzeta.com/es",
      ru: "https://loadzeta.com/ru",
    },
  };
  return [
    { url: "https://loadzeta.com", lastModified: now, changeFrequency: "weekly", priority: 1, alternates: langAlternates },
    { url: "https://loadzeta.com/tr", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: langAlternates },
    { url: "https://loadzeta.com/es", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: langAlternates },
    { url: "https://loadzeta.com/ru", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: langAlternates },
    { url: "https://loadzeta.com/cpm-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://loadzeta.com/guides", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://loadzeta.com/guides/cost-per-mile-guide", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://loadzeta.com/guides/reduce-deadhead-miles", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://loadzeta.com/guides/weekly-settlements-explained", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // No "/#features"-style entries here. A fragment is not a separate URL:
    // crawlers strip it and see the home page four more times, so the only
    // effect is a sitemap that reports more URLs than it has and duplicate
    // rows in Search Console.
  ];
}
