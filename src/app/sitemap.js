export default function sitemap() {
  const now = new Date();
  return [
    { url: "https://loadzeta.com", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: "https://loadzeta.com/#features", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://loadzeta.com/#how", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://loadzeta.com/#pricing", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
