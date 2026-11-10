import { Calculator, Route, FileCheck2, BookOpen } from "lucide-react";

// Icon and accent for each guide, in the App Store set's colours. Kept beside
// the components rather than in lib/guides.js so that file stays pure copy.
const LOOK = {
  "cost-per-mile-guide": { icon: Calculator, a: "#ff6961", b: "#ff9f0a" },
  "reduce-deadhead-miles": { icon: Route, a: "#5ac8fa", b: "#7c8cff" },
  "weekly-settlements-explained": { icon: FileCheck2, a: "#7ee2a0", b: "#5ac8fa" },
};

export function guideLook(slug) {
  return LOOK[slug] || { icon: BookOpen, a: "#5ac8fa", b: "#7c8cff" };
}
