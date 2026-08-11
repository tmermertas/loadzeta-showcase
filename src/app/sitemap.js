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
    { url: "https://loadzeta.com/#features", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://loadzeta.com/#app", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://loadzeta.com/#how", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://loadzeta.com/#pricing", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
