export const profile = {
  name: "Guillermo Barreiro",
  role: "Principal Product Manager",
  location: "Edmonton, Alberta, Canada",
  linkedin: "https://www.linkedin.com/in/guillermo-barreiro",
};

// Flip to true once public/Guillermo_Barreiro_Resume.pdf (without phone number) exists.
export const RESUME_AVAILABLE = false;
export const RESUME_PATH = "/Guillermo_Barreiro_Resume.pdf";

// Questions a visitor can ask the Digital Twin.
export const MAX_QUESTIONS = 3;

export const stats = [
  { value: "25+", label: "Years building software" },
  { value: "12", label: "Years in product management" },
  { value: "11", label: "Countries of my teams and customers" },
  { value: "P.Eng.", label: "Professional Engineer" },
];

export const countries = [
  { name: "Canada", context: "Home base; GE, Intuit, Haemonetics teams" },
  { name: "United States", context: "GE distributed teams; Haemonetics R&D in Chicago and Boston; Intuit markets" },
  { name: "India", context: "GE distributed teams" },
  { name: "Germany", context: "GE distributed teams; visiting researcher in Ulm" },
  { name: "Hungary", context: "Led Haemonetics testing team" },
  { name: "Spain", context: "Haemonetics demos and rollouts" },
  { name: "South Africa", context: "Haemonetics demos and rollouts" },
  { name: "United Kingdom", context: "Launched QuickBooks Sole Trader" },
  { name: "France", context: "Self serve sign up launch" },
  { name: "Brazil", context: "Self serve sign up launch" },
  { name: "Colombia", context: "Business development engineer selling to electrical utilities and oil companies; engineering degree" },
];

export const principles = [
  {
    title: "Honesty first",
    body: "I show up with candor and expect the same in return. Clear, transparent communication is how trust gets built.",
  },
  {
    title: "Built to last",
    body: "Trust and loyalty are non-negotiable. Relationships with customers, teammates and leaders are meant to outlast any deal.",
  },
  {
    title: "Serious work, light ego",
    body: "I lead with fairness and humor. Good leadership clears the path for others; good teamwork shows up fully, glamorous or not.",
  },
  {
    title: "Perseverance",
    body: "When things get hard I keep moving. I don't quit on problems worth solving.",
  },
];

export const capabilities = [
  "Product Strategy",
  "AI-Powered Experiences",
  "Customer Discovery",
  "Roadmapping",
  "Data-Informed Decisions",
  "Agile & Waterfall",
  "Cross-Functional Leadership",
  "Pricing Models",
  "PM Coaching & Mentoring",
  "Resource Management",
  "Distributed Teams",
  "Public Speaking",
];

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  duration: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const journey: Role[] = [
  {
    company: "Intuit",
    title: "Principal Product Manager",
    start: "2019",
    end: "2026",
    duration: "2019 - 2026",
    summary:
      "Brought the AI revolution to products for small businesses and the self-employed, turning customer conversations into features people love.",
    highlights: [
      "Reversed a four year QuickBooks Mobile decline with a global onboarding strategy and a new standalone product: 22,000 subscribers, enterprise market access and a 30% lift in long term mobile revenue",
      "Shipped AI with a human in the loop: transaction categorization that broke a two year books close stagnation, and an LLM agent that drafts replies to leads in each customer's tone",
      "Took the Android app from 3.2 to 4.7 stars by fixing top quality issues, adding AI features and redesigning when the app asks for ratings",
      "Led a global Elasticsearch rollout on QuickBooks Online that beat its TP99 latency target by 75%",
      "Grew the QuickBooks Mobile PM team from 2 to 6 by making the case to the EVP, and mentored every new PM; stepped up as player/coach when my manager left",
      "Stayed close to customers through follow me home interviews, usage data and voice of customer, and wrote the PRDs and strategy docs that rallied engineering, design and leadership",
    ],
    tags: ["AI", "SMB Fintech", "Strategy", "Mentorship"],
  },
  {
    company: "GE Digital (General Electric)",
    title: "Senior Product Manager",
    start: "2014",
    end: "2019",
    duration: "2014 - 2019",
    summary:
      "Senior product manager for enterprise industrial software, from infrastructure platforms to end-user products, with distributed teams on three continents.",
    highlights: [
      "Owned seven software applications, including a service oriented platform that seven enterprise products were built on and that handled authentication, including SSO, across the ecosystem",
      "Protected $7M to $10M USD in revenue across six quarters despite a 90% cut in engineering capacity, by clearing the defect backlog and prioritizing critical fixes by release",
      "Fixed the license management issue behind 30% of support cases, bringing it down to 5% and repairing relationships with two $50M+ enterprise accounts",
      "Led distributed teams across Canada, the US, India and Germany as Product Owner or Scrum Master as needed",
      "Turned field data and customer discovery into roadmaps, pricing models and RFI/RFP responses",
    ],
    tags: ["Industrial Software", "Lifecycle", "Pricing", "Global Teams", "Enterprise B2B"],
  },
  {
    company: "APEGA",
    title: "Manager, IEG Integration & Liaison",
    start: "2012",
    end: "2014",
    duration: "2012 - 2014",
    summary:
      "Built and led the Internationally Educated Graduates Assistance program from the ground up, helping engineers trained abroad reach licensure in Alberta.",
    highlights: [
      "Built relationships with government, universities and industry partners",
      "Delivered over 60 seminars in one year to industry, academic and newcomer organizations, reaching more than 3,000 people",
      "Improved registration processes so applicants could succeed",
    ],
    tags: ["Program Design", "Stakeholders", "Public Speaking"],
  },
  {
    company: "Haemonetics",
    title: "Development Team Lead",
    start: "2005",
    end: "2012",
    duration: "2005 - 2012",
    summary:
      "Grew from Systems Analyst to Development Team Lead across the full lifecycle of the eLynx and eQue platforms and their shared framework.",
    highlights: [
      "Wrote the requirements and acceptance criteria that shaped each release",
      "Led a distributed testing team in Hungary; supported rollouts in the US, Spain and South Africa",
      "Introduced Agile and RAD practices and mentored developers",
      "Completed FDA 21 CFR Part 11 submissions and enforced a rigorous QA process",
    ],
    tags: ["Healthcare", "Platforms", "Agile Adoption", "Regulated (FDA)"],
  },
  {
    company: "Ecotemp International",
    title: "Software Developer, External Consultant",
    start: "2001",
    end: "2004",
    duration: "2001 - 2004",
    summary:
      "Joined a small automotive R&D startup building new safety features for cars, and wrote the software behind its airbag deployment system.",
    highlights: [
      "Designed, developed and evaluated the performance of the EOS airbag deployment system",
      "Tailored pattern recognition algorithms in C/C++ and Visual Basic to classify car seat occupants under US federal standard FMVSS 208",
      "Prepared technical documents for prospective customers including General Motors, DaimlerChrysler and Ford",
      "Supervised co-op students",
    ],
    tags: ["Startup", "Automotive Safety", "Pattern Recognition", "C/C++"],
  },
];

export const certifications = [
  { name: "Project Management Professional (PMP)", issuer: "Project Management Institute" },
  { name: "PMI Agile Certified Practitioner (PMI-ACP)", issuer: "Project Management Institute" },
  { name: "Professional Engineer (P.Eng.)", issuer: "APEGA, Alberta" },
];

export const degrees = [
  {
    degree: "M.Sc., Computer Engineering",
    school: "University of Alberta",
    detail:
      "Thesis: a car seat occupant recognition system built with artificial intelligence methods. I developed and tested the training and recognition algorithms in C/C++ and the real-time system in Visual Basic. The final prototype recognized occupants with 100% accuracy in the seating positions specified by US Federal automotive standard FMVSS 208 and two major North American car manufacturers.",
  },
  {
    degree: "B.Sc., Electrical Engineering, minor in History",
    school: "Universidad de los Andes",
    detail:
      "Thesis: an AI based voice recognition system for young people with disabilities, built with neural networks and hidden Markov models. Presented at conferences in Madrid and Sao Paulo.",
  },
];

export const teaching = [
  {
    role: "Sessional Instructor",
    years: "2002, 2003, 2005",
    courses: ["EE 445: C/C++ for Electrical Engineers", "CMPE 480: Advanced Logic Design"],
    detail:
      "Prepared and delivered lectures, ran laboratory sessions, and developed course outlines and teaching materials. Student ratings of 4.1 / 5 (Fall 2002) and 4.3 / 5 (Winter 2003).",
  },
  {
    role: "Teaching Assistant",
    years: "2002 - 2003",
    courses: [
      "CMPE 310: Applying Software Engineering Practices",
      "CMPE 402: C/C++ Programming for Engineers",
    ],
  },
];

export const research = [
  {
    role: "Visiting Researcher",
    place: "FAW Research Institute for Applied Knowledge Processing, Ulm, Germany",
    years: "2002",
    detail:
      "Built a noise recognizer for star images captured by a space satellite, part of the DIVA space exploration project funded by the European Space Agency.",
  },
  {
    role: "Research Assistant",
    place: "University of Alberta",
    years: "2001 - 2003",
    detail:
      "Developed evolvable hardware methods combining digital design on Altera and Xilinx FPGAs with classical AI, and generated fuzzy aggregation operations for fuzzy rule-based systems using evolutionary methods.",
  },
];

export type Paper = {
  authors: string;
  title: string;
  venue: string;
};

export const papers: Paper[] = [
  {
    authors: "Musilek, Guanlao, Barreiro",
    title: "Genetic Programming of Fuzzy Aggregation Operations",
    venue: "Submitted to the Journal of Intelligent and Fuzzy Systems, September 2003",
  },
  {
    authors: "Barreiro, Musilek, Lau",
    title: "Application of Software Measurement in Educational Process",
    venue:
      "III ASERC Workshop on Quantitative and Soft Computing based Software Engineering, Banff, Canada, February 2003",
  },
  {
    authors: "Musilek, Barreiro, Pulido",
    title: "Automatic Discovery of Fuzzy Aggregation Operations",
    venue: "VI IASTED International Conference on Artificial Intelligence, Banff, Canada, July 2002",
  },
  {
    authors: "Barreiro, Segura",
    title: "Autonomous Environment Support for a Person with Physical Limitations",
    venue: "Congreso Iberoamericano Iberdiscap 2000, Madrid, Spain, October 2000",
  },
  {
    authors: "Barreiro, Segura",
    title: "Autonomous Environment Support for a Person with Physical Limitations",
    venue: "VI Workshop on Microelectronics IBERCHIP, Sao Paulo, Brazil, March 2000",
  },
];

export type CaseStudy = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  takeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mobile-turnaround",
    kicker: "Strategy / QuickBooks Mobile",
    title: "Turning around a four year decline",
    description:
      "A global onboarding strategy and a new standalone product, QuickBooks Solopreneur, brought QuickBooks Mobile back to growth.",
    challenge:
      "QuickBooks Mobile had been declining for four years. The app needed a reason for new customers to start on mobile, not just a companion to QuickBooks Online.",
    approach: [
      "Deployed a global onboarding strategy and aligned the onboarding roadmap with marketing's roadmap so their campaigns worked harder",
      "Calculated long term revenue to test whether a new standalone SKU was viable, then updated the roadmap based on that analysis",
      "Launched QuickBooks Solopreneur as a new standalone product",
      "Provided the evidence that convinced marketing leadership to increase QuickBooks Mobile's marketing budget",
    ],
    results: [
      { value: "22K", label: "New subscribers from QuickBooks Solopreneur" },
      { value: "+30%", label: "Long term mobile revenue" },
      { value: "Enterprise", label: "New market access" },
    ],
    takeaway:
      "Turnarounds don't come from one feature. They come from a clear bet, the numbers to back it, and partners pulling in the same direction.",
  },
  {
    slug: "responsible-ai",
    kicker: "AI / QuickBooks",
    title: "AI that keeps the customer in charge",
    description: "Shipping transaction categorization and an LLM lead assistant with a human in the loop.",
    challenge:
      "Small business owners want AI to take work off their plate, but their books and their customer relationships are on the line. Trust had to be designed in.",
    approach: [
      "Our transaction categorization engine missed its accuracy target at first; we iterated on it several times until it hit the goal",
      "Customers stay the final approvers of every categorization",
      "Launched an LLM-powered agent that drafts email replies to leads in the tone each customer wants, while customers decide when to follow up",
      "The leads agent was the first new mobile center added to QuickBooks Mobile in 10 years",
    ],
    results: [
      { value: "2 years", label: "Of books close stagnation broken by AI categorization" },
      { value: "First in 10 years", label: "New mobile center added to the app" },
      { value: "2", label: "AI products shipped with a human in the loop" },
    ],
    takeaway: "AI earns trust by being accurate and by letting people stay in control.",
  },
  {
    slug: "app-rating",
    kicker: "Quality & growth / QuickBooks Mobile",
    title: "From 3.2 to 4.7 stars on Android",
    description: "Fixing what customers complained about most, then asking for ratings at the right moment.",
    challenge:
      "The Android app sat at 3.2 stars, which undersold the product and hurt discovery in the store. Automatic trip tracking, a top five voice of customer complaint, recorded only 57% of trips accurately.",
    approach: [
      "Fixed the most notable quality issues first. On Trips, I dug into where accuracy broke down, had a rotational PM run proofs of concept, handled the legal checks myself, and escalated constructively when a dependency on another team stalled",
      "Integrated new AI features into the app",
      "Designed a new app rater triggering strategy with new business logic, so we ask at moments that reflect real value",
      "Partnered with marketing to optimize the store pages, and designed and delegated a survey strategy to keep listening to customers. Unique Trips users grew 67%, and QuickBooks Mobile kept a best in class product recommendation score of 56.",
    ],
    results: [
      { value: "3.2 to 4.7", label: "Android star rating" },
      { value: "57% to 91%", label: "Trip tracking accuracy" },
      { value: "+136%", label: "Trips recorded (4.87M in March 2026 vs a 2.06M 12 month average)" },
    ],
    takeaway:
      "When customers stop trusting a feature, fixing quality is the growth strategy. Then ask the right customer at the right moment.",
  },
  {
    slug: "apega-ieg",
    kicker: "Program design / APEGA",
    title: "Creating APEGA's IEG program from zero",
    description:
      "Building a program that helped internationally educated engineers and geoscientists reach licensure in Alberta.",
    challenge:
      "Engineers and geoscientists trained abroad faced a confusing path to licensure in Alberta, and many applicants were frustrated or discouraged. There was no program to guide them. I was hired to build one.",
    approach: [
      "Built and led the Internationally Educated Graduates (IEG) Assistance program from the ground up",
      "Built relationships with applicants and members, and with government, universities and industry partners, to keep the program aligned with APEGA's goals",
      "Sat down with applicants, including frustrated or discouraged ones, and worked through their concerns with patience and clear communication",
      "Analyzed the registration department's systems and procedures and improved its process so applicants could succeed",
    ],
    results: [
      { value: "60+", label: "Seminars delivered in one year" },
      { value: "3,000+", label: "People reached through industry, academic and newcomer organizations" },
      { value: "From zero", label: "Program designed, launched and led" },
    ],
    takeaway: "A process is only fair if people can find their way through it. Sometimes the product is a program.",
  },
  {
    slug: "elasticsearch",
    kicker: "Platform / QuickBooks Online",
    title: "Rebuilding search for a global product",
    description:
      "Replacing an underperforming search model with Elasticsearch, across international teams and sites.",
    challenge:
      "QuickBooks Online's search model was underperforming, and many teams in several countries depended on it. Replacing it meant changing a shared platform without stalling everyone built on top of it.",
    approach: [
      "Partnered closely with engineering to lead a global rollout of an Elasticsearch engine",
      "Secured alignment across multiple international teams and sites",
      "Negotiated and prioritized other teams' requests into a roadmap they used to plan their own work",
      "Hosted global webinars so teams knew how to use the new search",
      "Cut list load times to single digit seconds, made Receipt Capture transaction information available in under 1 second, and lifted Universal Search click through by 11%",
    ],
    results: [
      { value: "75%", label: "Better than the NLP TP99 latency target" },
      { value: "13K/sec", label: "Messages processed" },
      { value: "5X", label: "Increase in queries after the webinars" },
    ],
    takeaway: "A platform succeeds when other teams can plan around it. Make the roadmap theirs too.",
  },
  {
    slug: "ge-revenue",
    kicker: "Enterprise software / GE Digital",
    title: "Protecting revenue with a tenth of the team",
    description: "Keeping enterprise customers whole after a 90% cut in engineering capacity.",
    challenge:
      "Engineering capacity on my products dropped by 90%, while a license management issue was generating 30% of all support cases and straining relationships with two $50M+ enterprise accounts.",
    approach: [
      "Cleared the defect backlog by prioritizing critical bugs and patches by version release",
      "Organized and led the team that fixed the licensing issue: redesigned the UI for intuitive operation and restored licensing options",
      "Shared a six month forward roadmap with the affected customers to rebuild trust",
      "Hired contractors where needed to get releases out on time",
    ],
    results: [
      { value: "$7M to $10M", label: "Revenue protected over six quarters" },
      { value: "30% to 5%", label: "Support cases from licensing" },
      { value: "2", label: "$50M+ enterprise accounts repaired" },
    ],
    takeaway:
      "When capacity disappears, the roadmap gets simple: protect the customers who trust you most.",
  },
];

// Off the home grid, but their pages stay live.
export const moreCaseStudies: CaseStudy[] = [
  {
    slug: "push-notifications",
    kicker: "Experimentation / QuickBooks Mobile",
    title: "Push notifications people actually open",
    description:
      "A phased experiment that beat the best existing campaign and became a service any team can use.",
    challenge:
      "Most QuickBooks Mobile notifications were broad campaigns. I wanted to learn which messages genuinely helped small business owners act on their numbers, without training them to swipe us away.",
    approach: [
      "Defined four guiding principles for every notification: Contextual, Actionable, Timely, Beneficial",
      "Built the testing framework, designed the experimental notifications and ran the experiments in phases",
      "Won over the Omni and BI team, which had been reluctant to engage, and reported progress to senior leadership",
      "Turned the learnings into a reusable playbook and a Push Notification Orchestration Service so other teams can self-serve",
    ],
    results: [
      { value: "32%", label: "Click-through on \"Review transactions from last week\"" },
      { value: "30%", label: "Click-through on \"Trip tracking has ended\"" },
      { value: "24.4%", label: "Previous best campaign benchmark" },
    ],
    takeaway:
      "Anomaly-based notifications drive the highest immediate engagement, while digests sustain engagement downstream. Different jobs, different messages.",
  },
  {
    slug: "trips",
    kicker: "Product quality / QuickBooks Mobile",
    title: "Fixing Trips, a top customer complaint",
    description:
      "Taking mileage tracking from a top-five pain point to a feature customers rely on.",
    challenge:
      "Automatic trip tracking was one of the top five topics in voice-of-customer feedback. Only 57% of trips were recorded accurately, so customers stopped trusting it.",
    approach: [
      "Dug into where accuracy broke down and had a rotational PM run proofs of concept on the fixes",
      "Worked through the legal checks myself so the work would not stall",
      "Escalated constructively through PM leadership when a dependency on another team got stuck",
    ],
    results: [
      { value: "57% to 91%", label: "Trip accuracy" },
      { value: "+136%", label: "Trips recorded (4.87M in March 2026 vs a 2.06M 12 month average)" },
      { value: "+67%", label: "Unique users of Trips" },
    ],
    takeaway:
      "When customers stop trusting a feature, fixing quality is the growth strategy.",
  },
  {
    slug: "sign-in",
    kicker: "Platform / QuickBooks Online",
    title: "Making sign-in just work",
    description: "Modernizing the authentication framework that every QuickBooks Online customer passes through.",
    challenge:
      "As owner of the QuickBooks Online sign-in framework, I saw too many customers fail to sign in and fall into account recovery, especially on untrusted devices.",
    approach: [
      "Rolled out new-generation sign-in widgets for untrusted devices",
      "Reviewed Google OAuth sign-in usage and success rates, which led to retiring that option",
      "Partnered with security and privacy teams on data retention and on removing customer data after cancellation",
    ],
    results: [
      { value: "Mid 80s to low 90s", label: "Sign-in success rate (%)" },
      { value: "-10%", label: "Account recovery starts" },
    ],
    takeaway: "The best sign-in is the one customers never think about.",
  },
];
