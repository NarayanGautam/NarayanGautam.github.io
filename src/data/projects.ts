export type ProjectLink = { label: string; url: string };

export type Project = {
  id: string;
  title: string;
  period?: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

/** Featured projects in reverse chronological order */
export const projects: Project[] = [
  {
    id: "traffic-forecasting",
    title: "Traffic Flow Forecasting",
    period: "April 2026",
    description:
      "End-to-end CV/ML pipeline: YOLO detection and tracking, line-cross counting, and traffic forecasting (baseline + LSTM) on Bellevue traffic camera footage.",
    tags: ["Python", "OpenCV", "YOLO", "LSTM"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Traffic-Flow-Predictor",
      },
    ],
    featured: true,
  },
  {
    id: "search-engine",
    title: "Web Search Engine",
    period: "March 2026",
    description:
      "Crawler and indexer with TF-IDF ranking, PageRank boost, REST API, and browser UI. Crawled 600+ pages across fruitsA and Minecraft Wiki datasets.",
    tags: ["Node.js", "MongoDB", "Express", "Cheerio"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Search-Engine-for-Minecraft-Wiki",
      },
      { label: "Demo", url: "https://youtu.be/BneTxXm70zU" },
    ],
    featured: true,
  },
  {
    id: "webots",
    title: "Webots Jar Collection Robot",
    period: "December 2024",
    description:
      "Autonomous Pioneer robot in Webots using lidar and gripper control to locate and collect colored jars in simulation.",
    tags: ["Java", "Webots", "Lidar"],
    links: [{ label: "Demo", url: "https://youtu.be/PsFJzNtawSo" }],
    featured: true,
  },
  {
    id: "neureset",
    title: "Neureset Therapy Simulator",
    period: "April 2024",
    description:
      "COMP3004 team final: Qt/C++ desktop app for patient management, therapy sessions, and real-time EEG-style plotting with QCustomPlot.",
    tags: ["Qt", "C++"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Neureset-EEG-Simulator",
      },
      { label: "Demo", url: "https://youtu.be/9WnLNwJr4Gc" },
    ],
    featured: true,
  },
  {
    id: "pokemon-query",
    title: "Pokemon Query Program",
    period: "August 2022",
    description:
      "C program that queries Pokemon by type, stores results in memory, and writes output to file with multithreaded I/O for responsive execution.",
    tags: ["C", "Multithreading", "File I/O"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Pokemon-Query-Program",
      },
    ],
    featured: true,
  },
  {
    id: "pacman-rl",
    title: "Pac-Man Reinforcement Learning",
    period: "December 2025",
    description:
      "Compared Q-Learning and SARSA in a modified Pac-Man environment with hyperparameter sweeps and formal evaluation.",
    tags: ["Python", "NumPy", "Q-Learning", "SARSA"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Pac-Man---Reinforcement-Learning-Project",
      },
    ],
  },
  {
    id: "transfer-graph",
    title: "Transfer Market Graph Analysis",
    period: "April 2026",
    description:
      "Football transfer network analysis with degree, betweenness, hub, and authority centrality metrics.",
    tags: ["Python", "NetworkX", "pandas"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Football-Transfer-Network-Analysis",
      },
    ],
  },
  {
    id: "art-gallery",
    title: "Full-Stack Art Gallery",
    period: "December 2022",
    description:
      "Term project with user auth, MongoDB session store, gallery and artwork management, seeded from public art APIs and gallery data.",
    tags: ["Node.js", "Express", "MongoDB", "Pug"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Open-Art-Gallery",
      },
      { label: "Demo", url: "https://youtu.be/knSsMLkcbas" },
    ],
  },
  {
    id: "student-enrollment",
    title: "Student Enrollment App",
    period: "December 2023",
    description:
      "Full-stack CRUD app with React frontend, Express REST API, and PostgreSQL.",
    tags: ["React", "Express", "PostgreSQL"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/StudentEnrolllmentApp",
      },
      {
        label: "Demo",
        url: "https://www.youtube.com/watch?v=6kYK8qeL_yI",
      },
    ],
  },
  {
    id: "premier-league",
    title: "Premier League Match Predictor",
    period: "December 2025",
    description:
      "Scrapes match data and trains logistic regression and decision tree classifiers for outcome prediction.",
    tags: ["Python", "scikit-learn", "pandas"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Premier-League-Predictor",
      },
    ],
  },
  {
    id: "electronic-store",
    title: "Electronic Store Application",
    period: "January 2023",
    description:
      "JavaFX desktop store app built with OOP and MVC: product catalog, cart, and checkout flows.",
    tags: ["Java", "JavaFX", "MVC"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NarayanGautam/Electronic-Store",
      },
    ],
  },
  {
    id: "elevator",
    title: "Elevator Control System",
    period: "March 2024",
    description:
      "Qt elevator simulation with centralized controller, UML design, and safety scenarios.",
    tags: ["Qt", "C++"],
    links: [
      {
        label: "Demo",
        url: "https://www.youtube.com/watch?v=zkcLUrLZH14",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
