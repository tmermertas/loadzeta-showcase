// SEO guide articles — English only by design (the search audience is U.S.
// truckers googling in English; UI chrome around them still translates).
// Every number here is generic industry math, no fabricated user claims.

export const GUIDES = [
  {
    slug: "cost-per-mile-guide",
    title: "Cost Per Mile: The Only Number That Keeps Your Truck Profitable",
    description:
      "What cost per mile (CPM) really includes, how to calculate yours in five minutes, and how to use it on every rate decision.",
    date: "2026-08-11",
    readMinutes: 5,
    sections: [
      {
        p: [
          "Ask ten owner-operators what their cost per mile is and most will guess. But CPM is the number every single rate decision depends on: a load that pays above your cost per mile makes you money, and a load below it costs you money to haul — no matter how big the gross looks.",
        ],
      },
      {
        h2: "What goes into cost per mile",
        p: ["Your total cost per mile is the sum of two very different kinds of cost:"],
        ul: [
          "Fixed costs — truck payment, insurance, permits, trailer rent, parking, software. You pay these whether the wheels turn or not.",
          "Variable costs — fuel, maintenance, tires, tolls. These scale with every mile you run.",
        ],
      },
      {
        h2: "The five-minute calculation",
        p: [
          "Add up your fixed costs for one month and divide by the miles you actually run in a month. Then add your fuel cost per mile (fuel price divided by your truck's MPG) and a maintenance reserve per mile.",
          "Example: $4,100/month fixed ÷ 10,000 miles = $0.41. Fuel at $3.60/gal ÷ 6.5 MPG = $0.55. Maintenance reserve $0.18. Total: $1.14 per mile — every mile, loaded or empty.",
        ],
      },
      {
        h2: "The mistake that hides losses",
        p: [
          "Most drivers divide costs by loaded miles only. But your truck doesn't care whether the trailer is full — deadhead miles burn the same fuel. Divide by ALL miles, then judge rates against total miles for the round trip, not just the loaded leg.",
        ],
      },
      {
        h2: "Using CPM on every rate call",
        p: [
          "Once you know your number, negotiation gets simple: rate per total mile above CPM = profit; below = loss. A $2,000 load for 700 loaded miles looks like $2.86/mi — but if it takes 300 deadhead miles to get there, it's really $2.00/mi against 1,000 miles. At $1.14 CPM you still profit; at $1.90 CPM you're working for pocket change.",
          "Recalculate monthly. Fuel prices move, insurance renews, miles change — a CPM from last winter can quietly turn wrong.",
        ],
      },
    ],
  },
  {
    slug: "reduce-deadhead-miles",
    title: "Deadhead Miles: Why Empty Miles Eat Your Profit (and How to Cut Them)",
    description:
      "Empty miles cost the same fuel as loaded ones and pay nothing. How to measure your deadhead percentage and the habits that shrink it.",
    date: "2026-08-11",
    readMinutes: 4,
    sections: [
      {
        p: [
          "A deadhead mile costs you exactly as much as a loaded one — same fuel, same tire wear, same hours — and pays you nothing. If your cost per mile is $1.14, every 100 empty miles is $114 straight out of your pocket before the next load pays a cent.",
        ],
      },
      {
        h2: "Know your deadhead percentage",
        p: [
          "Deadhead % = empty miles ÷ total miles. Under 10% is strong; 15% is common; above 20% means your routing — not your rates — is the biggest leak in the business. You can't improve it if you don't track loaded and empty miles separately on every single load.",
        ],
      },
      {
        h2: "Habits that cut empty miles",
        ul: [
          "Book the next load before you deliver the current one — the worst deadhead decisions happen when you're already empty and burning hours.",
          "Price the deadhead into the rate: judge every offer against total miles (deadhead + loaded), not the loaded leg alone.",
          "Learn your dead zones. Certain markets pay well inbound and terribly outbound — a great rate into a bad market is often a bad round trip.",
          "Prefer triangles over out-and-backs: three decent legs that keep the trailer full usually beat one great leg with a long empty return.",
          "Review your own history monthly: which brokers, lanes and regions actually produced the empty miles?",
        ],
      },
      {
        h2: "Measure it, then manage it",
        p: [
          "Drivers who track deadhead on every load start seeing patterns in weeks: the same broker who shorts the reload, the same city that strands the truck. The fix isn't heroic negotiating — it's refusing round trips that were losers before you ever picked up.",
        ],
      },
    ],
  },
  {
    slug: "weekly-settlements-explained",
    title: "How to Read Your Weekly Settlement (Without Getting Shorted)",
    description:
      "Line by line: gross, deductions, accessorials, advances and escrow — and the checks that catch settlement errors before they cost you.",
    date: "2026-08-11",
    readMinutes: 5,
    sections: [
      {
        p: [
          "Your settlement is the weekly truth of your business — and settlement errors are common enough that reading it line by line pays better per minute than driving. Here's what each block means and what to check.",
        ],
      },
      {
        h2: "The blocks of a settlement",
        ul: [
          "Gross revenue — every load delivered in the period, at the agreed rate. Check it against your own records load by load, not as a lump sum.",
          "Accessorial pay — detention, layover, extra stops, TONU. The most commonly missing line: if you waited 4 hours and it's not here, that's your money.",
          "Deductions — fuel advances, insurance, trailer rent, ELD, dispatch fees. Verify recurring ones didn't double-charge and one-time ones actually end.",
          "Escrow/maintenance holds — money moved, not money spent. Track the running balance; you're owed it back eventually.",
          "Net pay — what actually hits the bank.",
        ],
      },
      {
        h2: "The three checks that catch most errors",
        p: [
          "First: does every delivered load appear, at the rate on the rate con? Second: are the miles right — was pay calculated on the miles you agreed to, not a shorter practical-miles figure? Third: do this week's deductions match last week's, and can you explain every difference?",
        ],
      },
      {
        h2: "Keep your own books",
        p: [
          "The only way to audit a settlement is to have your own number for what the week should have paid — before the settlement arrives. That means logging every load with its rate, miles and accessorials as it happens, not reconstructing the week from memory on Friday.",
          "Whether you do that in a notebook, a spreadsheet, or an app that builds the weekly settlement for you automatically, the habit is the same: your records first, their paperwork second.",
        ],
      },
    ],
  },
];

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null;
}
