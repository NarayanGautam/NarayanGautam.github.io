export type Experience = {
  role: string;
  company: string;
  period: string;
  tools?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior Automation Associate",
    company: "Export Development Canada",
    period: "July 2026 – Present",
    tools: "UiPath, Python, ServiceNow",
    bullets: [
      "Build and update UiPath automations for repetitive business processes, including changes to bots already in production",
      "Write Python scripts and help design automation solutions for business workflows for the Automation CoE",
      "Document solutions and keep process inventories current in ServiceNow so the team can track and reuse automation work",
    ],
  },
  {
    role: "Network Automation Intern",
    company: "Nokia",
    period: "Jan 2025 – Apr 2025",
    tools: "Python, Power Platform, Power BI",
    bullets: [
      "Built and maintained a network automation use-case catalogue in Python, Power Platform, and Power BI so engineers and customers could search, reuse, and share solutions",
      "Recorded and produced technical demos for clients showing how automation was applied in real network scenarios",
    ],
  },
  {
    role: "Software Test Specialist Intern",
    company: "Nokia",
    period: "May 2024 – Aug 2024",
    tools: "Mocha, Selenium, WebdriverIO, OpenStack",
    bullets: [
      "Wrote end-to-end automated tests for the Network Service Platform using Mocha, Selenium, and WebdriverIO across simulated management and network scenarios",
      "Provisioned OpenStack and virtualized network function environments so features could be developed and tested",
      "Debugged failing regression suites, hardened flaky scripts, and shipped fixes with an Agile Scrum team using JIRA",
    ],
  },
  {
    role: "Software Quality Assurance Analyst Intern",
    company: "Environment and Climate Change Canada",
    period: "May 2023 – Dec 2023",
    tools: "Robot Framework, Selenium, JMeter, Azure DevOps",
    bullets: [
      "Grew automated UI and functional test coverage with Robot Framework and Selenium, cutting manual testing on government web applications",
      "Designed and executed functional test cases in Azure DevOps; tracked defects and verified fixes against business requirements",
      "Ran load and performance tests with JMeter, and evaluated Applitools for visual AI-based UI validation",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Carleton University",
    period: "Fall 2025; Fall 2022 – Winter 2023",
    tools: "Java, Python",
    bullets: [
      "Ran labs and office hours for Intro to Python, Object-Oriented Programming, and Discrete Structures",
      "Assisted students with course material and provided feedback on assignments",
    ],
  },
];
