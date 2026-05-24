export type Experience = {
  role: string;
  company: string;
  period: string;
  tools?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Network Automation Intern",
    company: "Nokia",
    period: "Jan 2025 – Apr 2025",
    tools: "Python, Power Platform, Power BI",
    bullets: [
      "Maintained the network automation use-case catalogue with Python, Power Platform, and Power BI, streamlining the documentation and accessibility of use cases for internal teams and customers",
      "Recorded and produced use case demos for Nokia clients, showcasing the practical applications and benefits of network automation solutions",
    ],
  },
  {
    role: "Software Test Specialist Intern",
    company: "Nokia",
    period: "May 2024 – Aug 2024",
    tools: "Mocha, Selenium, WebdriverIO, OpenStack",
    bullets: [
      "Automated Network Service Platform testing with Mocha, Selenium, and WebdriverIO across simulated management and network scenarios",
      "Built network setups to streamline feature development and testing using OpenStack and a virtualized environment for network functions",
      "Triaged regression failures, improved script reliability, and delivered fixes within an Agile Scrum team",
    ],
  },
  {
    role: "Software Quality Assurance Analyst Intern",
    company: "Environment and Climate Change Canada",
    period: "May 2023 – Dec 2023",
    tools: "Robot Framework, Selenium, JMeter, LoadRunner, Applitools",
    bullets: [
      "Expanded test coverage with Robot Framework and Selenium automation, reducing manual testing time",
      "Performed load and performance testing using JMeter and LoadRunner to ensure the applications can handle the expected load and stress",
      "Evaluated Applitools for visual AI testing to simplify validation of UI elements across applications",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Carleton University",
    period: "Fall 2025; Fall 2022 – Winter 2023",
    tools: "Java, Python",
    bullets: [
      "Led labs and office hours for COMP1805 (Fall 2025), COMP1406 (Java/OOP), and COMP1405 (Python); guided students through coursework and debugging",
      "Graded assignments and provided constructive feedback on code quality and problem-solving approach",
    ],
  },
];
