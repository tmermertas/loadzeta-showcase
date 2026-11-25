// Open roles shown on /careers (and /tr|/es|/ru/careers - the page frame is
// translated in careersCopy.js, the ads stay in English). Each one also carries Google's JobPosting
// structured data on its own page (Google wants it on the job's page, not on
// the list). A role disappears from the list, the sitemap and its page's
// structured data once `validThrough` has passed - the pages re-render daily
// (revalidate), so an expired role does not linger. Pay is deliberately not
// published on the site.
export const CAREERS_EMAIL = "careers@loadzeta.com";

const ABOUT =
  "Load Zeta is the back office for U.S. truck drivers. Company drivers and owner-operators use it to log their loads, see exactly what every run pays, track expenses and cost per mile, and get clean weekly settlements. AI reads rate confirmations and receipts, so drivers check and save instead of typing. We're live on iPhone, Android and the web, in English, Spanish, Russian and Turkish.";

export const JOBS = [
  {
    slug: "social-media-performance-marketing-specialist",
    title: "Social Media & Performance Marketing Specialist",
    employmentType: ["PART_TIME", "CONTRACTOR"],
    country: "TR",
    datePosted: "2026-11-25",
    validThrough: "2027-02-28",
    linkedin: "https://www.linkedin.com/jobs/view/4494772168/",
    summary:
      "Run Load Zeta's social media and paid ads for the U.S. trucking market, from the content calendar to the ad budget.",
    sections: [
      { h2: "About Load Zeta", p: [ABOUT] },
      {
        h2: "The role",
        p: [
          "We're looking for a hands-on marketer based in Türkiye to run Load Zeta's social media and paid ads for the U.S. trucking market. You'll own our channels end to end, from the content calendar to the ad budget, working directly with the founder. Part-time and fully remote.",
        ],
      },
      {
        h2: "What you'll do",
        ul: [
          "Plan and run our content calendar on Instagram, TikTok, Facebook, YouTube Shorts and LinkedIn",
          "Create short videos, carousels and posts in English that speak to U.S. truck drivers",
          "Set up, run and optimize paid campaigns on Meta (Facebook/Instagram) and TikTok Ads within a set monthly budget",
          "Track installs, sign-ups and paying subscribers, and report results every week",
          "Reply to comments and messages and take part in trucking communities online",
        ],
      },
      {
        h2: "What we're looking for",
        ul: [
          "3+ years in social media and digital marketing, with hands-on Meta Ads and TikTok Ads experience and results you can show",
          "Excellent written English: you can write naturally for an American audience",
          "Video editing (CapCut, Premiere or similar) and design skills (Canva, Figma)",
          "Comfortable with numbers: Meta Ads Manager, TikTok Ads Manager, GA4",
          "Experience marketing mobile apps or subscriptions is a big plus; interest in U.S. trucking and logistics is a plus",
        ],
      },
      {
        h2: "Details",
        ul: [
          "Remote from Türkiye, 20-25 hours a week, flexible hours with some overlap with U.S. Central Time",
          "Independent contractor, paid in USD",
          "Room to grow into a full-time role as Load Zeta grows",
        ],
      },
    ],
    apply:
      "Send your resume and links to your portfolio or accounts you've managed. Tell us about one paid campaign you ran: the budget, what you changed along the way, and the results.",
  },
  {
    slug: "driver-community-growth-lead",
    title: "Driver Community & Growth Lead",
    employmentType: ["PART_TIME", "CONTRACTOR"],
    country: "US",
    datePosted: "2026-11-25",
    validThrough: "2027-02-28",
    linkedin: null,
    summary:
      "Put Load Zeta in front of truck drivers where they actually talk, and build partnerships with fleets and dispatch services.",
    sections: [
      { h2: "About Load Zeta", p: [ABOUT] },
      {
        h2: "The role",
        p: [
          "The product is built. Now we need the person who puts it in front of drivers. You'll be our first hire in the U.S.: part-time, remote, working directly with the founder, with a real say in how we grow.",
        ],
      },
      {
        h2: "What you'll do",
        ul: [
          "Introduce Load Zeta where drivers actually talk: Facebook, WhatsApp and Telegram groups, YouTube, TikTok, forums and truck stops",
          "Build partnerships with small fleets, dispatch services and CDL schools",
          "Make short videos and posts that show the app working on real loads",
          "Talk to new users, collect feedback and bring it back to the product",
          "Track what works each week and double down on it",
        ],
      },
      {
        h2: "What we're looking for",
        ul: [
          "Hands-on trucking experience: driver, dispatcher, broker, fleet office or trucking content creator",
          "You know the driver community, and people there trust you",
          "Comfortable on social media and on camera",
          "Fluent English; Russian, Spanish, Uzbek or Turkish is a big plus",
          "Self-starter who works on your own schedule and reports results weekly",
        ],
      },
      {
        h2: "Details",
        ul: [
          "Remote (United States), 15-20 hours a week, flexible schedule",
          "Independent contractor",
          "Room to grow into a full-time role as Load Zeta grows",
        ],
      },
    ],
    apply:
      "Send your resume, and tell us in a few lines how you would get the first 100 drivers to try Load Zeta.",
  },
];

export const isOpen = (job, now = new Date()) => new Date(`${job.validThrough}T23:59:59Z`) >= now;
export const openJobs = (now = new Date()) => JOBS.filter((j) => isOpen(j, now));
export const getJob = (slug) => JOBS.find((j) => j.slug === slug);
export const applyHref = (job) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}`;

// Google JobPosting structured data for one role's page. No baseSalary: pay
// is not published. Remote roles use TELECOMMUTE plus the country applicants
// must be in.
export function jobJsonLd(job) {
  const html = job.sections
    .map((s) => `<h2>${s.h2}</h2>` + (s.p || []).map((p) => `<p>${p}</p>`).join("") + (s.ul ? `<ul>${s.ul.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""))
    .join("") + `<h2>How to apply</h2><p>${job.apply} Email ${CAREERS_EMAIL}.</p>`;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: html,
    datePosted: job.datePosted,
    validThrough: `${job.validThrough}T23:59:59Z`,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Load Zeta",
      sameAs: "https://loadzeta.com",
      logo: "https://loadzeta.com/favicon.svg",
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: job.country },
    directApply: false,
    url: `https://loadzeta.com/careers/${job.slug}`,
  };
}
