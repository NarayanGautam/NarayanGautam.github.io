export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Network Automation Practice",
    company: "Nokia",
    period: "Jan 2025 – Apr 2025",
    location: "Kanata, ON",
    bullets: [
      "Co-op on network automation engineering initiatives in a telecommunications R&D environment.",
      "Worked with automation tooling and engineering workflows supporting network infrastructure.",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "Nokia",
    period: "Apr 2024 – Aug 2024",
    location: "Kanata, ON",
    bullets: [
      "Developed and executed software test plans for telecommunications products.",
      "Collaborated with engineering teams on quality assurance and defect tracking.",
    ],
  },
  {
    role: "Software Quality Assurance Analyst",
    company: "Environment and Climate Change Canada",
    period: "May 2023 – Dec 2023",
    location: "Gatineau, QC",
    bullets: [
      "Performed software quality assurance for government systems.",
      "Supported testing, documentation, and release validation processes.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Carleton University",
    period: "Fall 2025; Fall 2022 – Winter 2023",
    location: "Ottawa, ON",
    bullets: [
      "COMP1805 Discrete Structures (Fall 2025); COMP1406 Programming in Java & OOP; COMP1405 Introduction to Programming in Python.",
      "Prior TA for COMP1405/1005 (2022–2023). Led labs, office hours, and assignment grading with feedback on Python and Java coursework.",
    ],
  },
];
