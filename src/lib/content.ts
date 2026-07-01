export const profile = {
  name: "Mark Zais",
  credentials: "PhD, CAP-X",
  title: "Enterprise Analytics Executive",
  subtitles: [
    "AI Strategy & Implementation",
    "Data Science & Operations Research",
    "Technical & Executive Leadership",
  ],
  location: "Greater Tampa Bay Area",
  email: "markzais@gmail.com",
  phone: "719-332-5461",
  linkedin: "https://www.linkedin.com/in/markzais",
  github: "https://github.com/markzais",
  consulting: "https://zaisanalytics.com",
  portfolio: "#portfolio",
  summary:
    "Enterprise analytics executive with 20+ years leading data strategy, AI innovation, and advanced analytics initiatives across defense, government, and industry. Trusted advisor to C-suite executives and senior government leaders on multi-billion-dollar investment, workforce, and capability decisions.",
  philosophy:
    "What distinguishes my leadership is the ability to bridge executive strategy and technical execution: I set the vision, architect the solution, and work alongside data scientists and engineers to deliver results — translating complex quantitative insights into executive decision advantage.",
};

export const stats = [
  { value: "20+", label: "Years leading analytics & AI" },
  { value: "$40B", label: "Budget horizon optimized" },
  { value: "70K+", label: "Person enterprise served" },
  { value: "$600M+", label: "New contract awards secured" },
];

export const highlights = [
  "Enterprise analytics strategy and AI governance for a global 70,000+ person defense organization.",
  "Led analysis team to optimize allocation of a $13.5B annual budget across a $40B budget horizon.",
  "Analytics strategy for $1.5B+ military modernization programs and $2B portfolio investments.",
  "Congressional and executive briefings influencing $1B+ resource allocation decisions.",
  "Board Member, INFORMS Analytics Certification Board.",
];

export type Capability = {
  title: string;
  description: string;
  icon: string;
};

export const capabilities: Capability[] = [
  {
    title: "Enterprise Analytics Strategy & Governance",
    description:
      "Build and scale analytics organizations, operating models, and AI governance frameworks that turn data into durable strategic advantage.",
    icon: "Compass",
  },
  {
    title: "Data Science & AI",
    description:
      "Architect machine learning and predictive analytics capabilities spanning mission operations, workforce, and financial domains.",
    icon: "BrainCircuit",
  },
  {
    title: "Operations Research & Optimization",
    description:
      "Simulation-optimization, dynamic programming, and metaheuristics applied to complex, multi-billion-dollar allocation problems.",
    icon: "Network",
  },
  {
    title: "Decision Science",
    description:
      "Translate complex quantitative insight into executive decision advantage for boards and senior government leaders.",
    icon: "Target",
  },
  {
    title: "Executive Advisory & Influence",
    description:
      "Trusted advisor to C-suite and senior leaders — influencing from corporate boardrooms to Congressional committees.",
    icon: "Users",
  },
  {
    title: "Business Development & Capture",
    description:
      "Drive technical solution architecture and proposal leadership, securing >$600M in new contract awards.",
    icon: "TrendingUp",
  },
];

export const skills = [
  "Artificial Intelligence (AI)",
  "Strategic Leadership",
  "Data Science",
  "Machine Learning",
  "Predictive Analytics",
  "Operations Research",
  "Optimization",
  "Decision Science",
  "AI Governance",
  "Python",
  "R",
  "SQL",
  "SAS",
  "MATLAB",
  "Power BI",
  "Apache Spark",
  "Databricks",
  "AWS",
  "LaTeX",
  "Stakeholder Influence",
];

export type Role = {
  org: string;
  role: string;
  period: string;
  location?: string;
  context: string;
  points: string[];
  tag: string;
  images?: { src: string; alt: string }[];
};

export const experience: Role[] = [
  {
    org: "Integration Innovation, Inc. (i3)",
    role: "Senior Technology Director",
    period: "Aug 2022 — Present",
    context:
      "Enterprise analytics executive responsible for data strategy, AI innovation, and advanced analytics capabilities across defense technology portfolios supporting a 900+ person workforce.",
    points: [
      "Accountable for enterprise analytics strategy, operating model, and capability development across all business units and customer portfolios.",
      "Architected analytics strategy for multi-billion dollar military modernization programs and portfolio investment decisions.",
      "Drove business development and capture strategy, securing >$600M in new contract awards through technical solution architecture and proposal leadership.",
      "Established AI governance frameworks, analytics communities of practice, and delivery standards to institutionalize data-driven decision-making.",
    ],
    tag: "Industry",
  },
  {
    org: "INFORMS",
    role: "Board Member — Analytics Certification Board (ACB)",
    period: "Mar 2025 — Present",
    context:
      "Oversee the Certified Analytics Professional (CAP) program as a standard-setting and assessment body for analytics professionals worldwide.",
    points: [
      "Provide independent verification of critical technical expertise and soft skills valued by analytics-oriented organizations globally.",
    ],
    tag: "Governance",
  },
  {
    org: "USSOCOM",
    role: "Chief Data Scientist",
    period: "Jun 2020 — Jun 2022",
    location: "Tampa, FL",
    context:
      "U.S. Special Operations Command. Enterprise AI and analytics strategy lead for a global command of 70,000+ personnel with a $13B annual budget.",
    points: [
      "Designed and led enterprise data science and machine learning capability supporting mission operations, workforce analytics, financial management, and medical research.",
      "Established AI governance and analytics priorities aligned to enterprise digital transformation objectives.",
      "Senior advisor to Command leadership on enterprise AI strategy, analytics investments, and data governance policy.",
      "Built and mentored cross-functional teams of data engineers, data scientists, and ML engineers across mission domains.",
    ],
    tag: "Defense",
  },
  {
    org: "Carnegie Mellon University",
    role: "Research Fellow — Information Technology & Strategy",
    period: "Jul 2019 — Jun 2020",
    context:
      "Collaborated with academia, industry, and government partners on AI policy, global strategy, and applied analytics research.",
    points: [
      "First Place, 2020 Chairman of the Joint Chiefs of Staff National Defense Strategy Paper Award.",
      "Nominated for three individual research writing awards focused on artificial intelligence strategy.",
    ],
    tag: "Research",
  },
  {
    org: "USSOCOM",
    role: "Strategic Studies & Analytics Branch Chief",
    period: "Aug 2017 — Jul 2019",
    location: "Greater Tampa Bay Area",
    context:
      "Led enterprise modeling and analytics supporting strategic budget and acquisition decisions across a $13.5B portfolio.",
    points: [
      "Directed development of optimization platforms supporting $40B in military construction planning.",
      "Delivered executive-level analysis shaping long-range investment and resource allocation decisions.",
    ],
    tag: "Defense",
  },
  {
    org: "Office of the Secretary of Defense",
    role: "Senior Operations Research Analyst",
    period: "Aug 2014 — Aug 2017",
    context:
      "Enterprise decision science advisor supporting defense-wide economic and budget policy within the Economic and Manpower Analysis Division (EMAD), Cost Assessment and Program Evaluation (CAPE) directorate.",
    points: [
      "Led Congressionally directed studies and economic analyses influencing over $1B in resource realignment.",
      "Directed national-level compensation and housing allowance analytics optimizing billions annually.",
      "Delivered findings to senior DoD leadership and U.S. Congressional committees.",
    ],
    tag: "Government",
  },
  {
    org: "University of Colorado at Boulder",
    role: "Doctoral Student",
    period: "Aug 2011 — Jul 2014",
    context:
      "Earned a PhD in Business Administration (Operations Research).",
    points: [
      "Research focused on Simulation-Optimization, Dynamic Programming, and Metaheuristics (Graph Coloring, Tabu Search, GRASP) to solve complex real-world problems.",
      "Toolset: Java, SAS, SQL, MATLAB, SPSS.",
    ],
    tag: "Academia",
  },
  {
    org: "U.S. Army — Deputy Chief of Staff, G-1",
    role: "Behavioral Forecaster | Operations Research Analyst",
    period: "Jul 2008 — Jul 2011",
    location: "Washington DC–Baltimore Area",
    context:
      "Strength Analysis and Forecasting Division.",
    points: [
      "Led enterprise workforce forecasting and optimization for a 547,000+ employee organization — modeling accession, retention, and recruiting policy during wartime operations.",
      "Presented Army-wide analytics directly to senior DoD leadership, influencing critical wartime manpower policy decisions.",
    ],
    tag: "Defense",
  },
  {
    org: "Georgia Institute of Technology",
    role: "Graduate Student",
    period: "May 2006 — May 2008",
    location: "Greater Atlanta Area",
    context:
      "Earned two Master's Degrees: M.S. in Industrial Engineering and M.S. in Operations Research.",
    points: [],
    tag: "Academia",
  },
  {
    org: "U.S. Army",
    role: "Aviation Officer / AH-64D Apache Longbow Pilot",
    period: "Jun 1997 — May 2006",
    context:
      "Served in multiple leadership positions as an Aviation officer and helicopter pilot (Senior Aviator); designated Pilot-in-Command (PIC).",
    points: [
      "Commanded a company of 31 personnel and 8 AH-64D Longbow Apache helicopters with associated equipment valued at over $250 million.",
    ],
    tag: "Military",
    images: [
      { src: "/images/cockpit_1.jpg", alt: "Mark Zais in the cockpit of an AH-64D Apache Longbow" },
      { src: "/images/cockpit_2.jpg", alt: "Mark Zais in flight gear in an AH-64D Apache cockpit" },
    ],
  },
];

export const education = [
  {
    school: "University of Colorado Boulder — Leeds School of Business",
    degree: "PhD, Business Administration (Operations Research)",
  },
  {
    school: "Georgia Institute of Technology",
    degree: "M.S., Operations Research",
  },
  {
    school: "Georgia Institute of Technology",
    degree: "M.S., Industrial Engineering",
  },
  {
    school: "United States Military Academy at West Point",
    degree: "B.S., Operations Research",
  },
];

export const credentials = [
  "PhD, Business Administration (Operations Research) — CU Boulder, Leeds School of Business",
  "MS, Operations Research — Georgia Tech",
  "MS, Industrial Engineering — Georgia Tech",
  "BS, Operations Research — West Point",
  "Certified Analytics Professional — Expert (CAP-X)",
  "Active TS-SCI Security Clearance",
  "U.S. Army Veteran (Colonel)",
  "Former AH-64D Apache Pilot-in-Command",
  "Cloud Digital Leader",
];

export const awards = [
  "Dr. Wilber B. Payne Award for Excellence in Analysis",
  "CJCS National Defense & Military Strategy Essay Competition — First Place",
  "Davis Rist Prize (Runner-Up)",
];

export const publications = [
  "A Simulation-Optimization Approach to Estimate Workforce Requirements",
  "Big Data for Generals… and Everyone Else over 40",
  "A Markov Chain Model of Military Personnel Dynamics",
  "Optimizing Simulation Fidelity for Cost-Effective Aviation Training",
  "Artificial Intelligence: A Decisionmaking Technology",
];
