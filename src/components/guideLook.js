import { Calculator, Route, FileCheck2, BookOpen, ScrollText, Scale, Hourglass, Fuel } from "lucide-react";

// Icon and accent for each guide, in the App Store set's colours. Kept beside
// the components rather than in lib/guides.js so that file stays pure copy.
const LOOK = {
  "cost-per-mile-guide": { icon: Calculator, a: "#ff6961", b: "#ff9f0a" },
  "reduce-deadhead-miles": { icon: Route, a: "#5ac8fa", b: "#7c8cff" },
  "weekly-settlements-explained": { icon: FileCheck2, a: "#7ee2a0", b: "#5ac8fa" },
  "how-to-read-a-rate-confirmation": { icon: ScrollText, a: "#7c8cff", b: "#bf5af2" },
  "owner-operator-vs-company-driver-pay": { icon: Scale, a: "#7ee2a0", b: "#30b0c7" },
  "detention-layover-tonu": { icon: Hourglass, a: "#ff9f0a", b: "#ff375f" },
  "ifta-basics-for-truckers": { icon: Fuel, a: "#5ac8fa", b: "#30d158" },
};

export function guideLook(slug) {
  return LOOK[slug] || { icon: BookOpen, a: "#5ac8fa", b: "#7c8cff" };
}
