/**
 * Portfolio Data Configuration
 * Centralized data file for M.N.F. Nifla's Personal Portfolio Website.
 * Update your personal information, links, and contact details below.
 */

export const personalInfo = {
  name: "M.N.F. Nifla",
  initials: "MNF",
  title: "Software Engineer",
  status: "Available for Opportunities",
  location: "Sri Lanka",
  
  // Hero section description
  heroDescription:
    "Passionate about Full Stack Development, Software Quality Assurance, and User-Centered Design.",

  // Extended About Me description
  aboutMe:
    "I am an HNDIT student with a strong interest in Full Stack Software Development, Quality Assurance, and UI/UX Design. I enjoy building web applications, learning modern technologies, testing software functionality, and creating user-friendly interfaces. My goal is to develop my technical knowledge and become a skilled IT professional.",

  // Profile photo path in public folder
  profileImage: "/images/profile.jpg",

  // CV download path in public folder
  cvPath: "/cv.pdf",

  // Contact Information - Replace placeholders with actual details
  contact: {
    email: "your.email@example.com", // <-- UPDATE WITH YOUR ACTUAL EMAIL
    phone: "+94 XX XXX XXXX", // <-- UPDATE WITH YOUR PHONE NUMBER
    location: "Sri Lanka",
    github: "https://github.com/fathinifl42923-source", // <-- UPDATE WITH YOUR GITHUB PROFILE
    linkedin: "https://linkedin.com/in/your-username", // <-- UPDATE WITH YOUR LINKEDIN PROFILE
  },
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    iconName: "Code2",
    description:
      "Passionate about building responsive, modern web applications from frontend user interfaces to backend logic and database structures.",
    skillsSummary: ["React.js", "Node.js", "PHP", "MySQL"],
  },
  {
    id: "qa-engineering",
    title: "Quality Assurance",
    iconName: "CheckCircle2",
    description:
      "Dedicated to ensuring high software quality, functionality, and reliability through thorough test case preparation, manual testing, and bug tracking.",
    skillsSummary: ["Software Testing", "Manual Testing", "Test Cases", "Bug Reports"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    iconName: "Palette",
    description:
      "Committed to crafting user-centered digital interfaces that are visually appealing, accessible, intuitive, and enjoyable to interact with.",
    skillsSummary: ["Figma", "Wireframing", "Responsive Design", "User Experience"],
  },
];

export const careerInterests = [
  {
    id: "career-fullstack",
    title: "Full Stack Software Development",
    iconName: "Layers",
    color: "from-purple-500 to-indigo-500",
    description:
      "Passionate about crafting dynamic, end-to-end web solutions. I focus on developing clean, responsive frontends with React while architecting functional backend services and database integration to deliver seamless user experiences.",
  },
  {
    id: "career-qa",
    title: "Quality Assurance Engineering",
    iconName: "ShieldCheck",
    color: "from-indigo-500 to-purple-500",
    description:
      "Focused on validating software reliability, functionality, and performance. I believe in standard testing methodologies, preparing comprehensive test scenarios, and identifying bugs early to safeguard application quality.",
  },
  {
    id: "career-uiux",
    title: "UI/UX Design",
    iconName: "Sparkles",
    color: "from-purple-400 to-fuchsia-500",
    description:
      "Driven to design aesthetic, purposeful, and human-friendly user journeys. Utilizing wireframes and design systems in Figma, I aim to create interfaces that strike a balance between visual elegance and effortless usability.",
  },
];

export const educationList = [
  {
    id: "hndit",
    degree: "Higher National Diploma in Information Technology (HNDIT)",
    institution: "ATI Kurunegala – SLIATE",
    period: "Ongoing",
    isOngoing: true,
    icon: "degree",
    description:
      "Comprehensive curriculum focusing on Software Engineering, Database Systems, Web Development, Object-Oriented Programming, and Networking principles.",
  },
  {
    id: "diploma-english",
    degree: "Diploma in English",
    institution: "Ceylon College of Applied Studies (CCAS)",
    period: "2023",
    isOngoing: false,
    icon: "book",
    description:
      "Comprehensive diploma program developing professional English communication, technical writing, effective presentations, and business correspondence skills.",
  },
  {
    id: "nvq-level-3",
    degree: "National Certificate, Computer Applications Assistant (NVQ Level 3)",
    institution: "Athugalpura Village Development Association (AVDA)",
    period: "2019",
    isOngoing: false,
    icon: "award",
    description:
      "Accredited vocational certification covering core computer applications, office productivity suites, digital workflows, and practical IT assistance fundamentals.",
  },
  {
    id: "school",
    degree: "Secondary Education",
    institution: "Madeena National School",
    period: "Completed",
    isOngoing: false,
    icon: "school",
    description:
      "Solid academic foundation nurturing discipline, analytical thinking, and early passion for information technology.",
  },
];

export const experienceData = {
  sectionTitle: "Learning, Building & Growing",
  badge: "Academic Journey & Hands-On Practice",
  intro:
    "As an ambitious IT student, I am currently dedicating my time to academic learning, practical lab projects, and independent skill building. I channel my curiosity into writing clean code, testing systems, and designing thoughtful interfaces.",
  milestones: [
    {
      title: "Academic Coursework & Hands-On Labs",
      description:
        "Actively undertaking rigorous modules in software development, database design, software quality principles, and systems analysis at ATI Kurunegala (SLIATE).",
      iconName: "GraduationCap",
    },
    {
      title: "Self-Driven Project Building",
      description:
        "Building full-stack and web-based applications from scratch to translate theoretical concepts into functional, working solutions.",
      iconName: "Terminal",
    },
    {
      title: "Quality Assurance & Testing Practice",
      description:
        "Applying manual software testing techniques, designing test cases, executing functional validation, and documenting bugs to reinforce software quality.",
      iconName: "Bug",
    },
    {
      title: "Continuous Technology Exploration",
      description:
        "Staying updated with modern frameworks, UI design trends, Git version control workflows, and industry-standard best practices.",
      iconName: "Compass",
    },
  ],
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "HTML5", icon: "FileCode2" },
      { name: "CSS3", icon: "Palette" },
      { name: "JavaScript", icon: "Code2" },
      { name: "React.js", icon: "Atom" },
      { name: "Responsive Web Design", icon: "Smartphone" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js", icon: "Cpu" },
      { name: "Express.js", icon: "Zap" },
      { name: "PHP", icon: "FileCode" },
    ],
  },
  {
    id: "database",
    title: "Database",
    iconName: "Database",
    skills: [
      { name: "MySQL", icon: "Database" },
    ],
  },
  {
    id: "qa",
    title: "Quality Assurance",
    iconName: "CheckSquare",
    skills: [
      { name: "Software Testing", icon: "SearchCheck" },
      { name: "Manual Testing", icon: "CheckCircle2" },
      { name: "Test Case Preparation", icon: "ClipboardList" },
      { name: "Bug Reporting", icon: "Bug" },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    iconName: "PenTool",
    skills: [
      { name: "UI/UX Design", icon: "Sparkles" },
      { name: "Figma", icon: "Figma" },
      { name: "User-Friendly Interface Design", icon: "MousePointerClick" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "Terminal" },
    ],
  },
];

export const projects = [
  {
    id: "arafa-pharmacy",
    title: "New Arafa Pharmacy Inventory Management System",
    description:
      "A full-stack web application designed to manage pharmacy medicine inventory, stock quantities, batch and expiry tracking, supplier management, low-stock alerts, and inventory reports. The system supports role-based access for administrators and staff.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    githubUrl: "#", // Editable placeholder
    demoUrl: "#", // Editable placeholder
    isPlaceholderLink: true,
    highlight: "Full-Stack System",
  },
  {
    id: "travel-guide",
    title: "Travel Guide & Destination Management System",
    description:
      "A web-based application that helps users discover travel destinations through category-based filtering, photo galleries, reviews, ratings, and favorites. It also provides administrative features for managing destination listings and user access.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "PDO"],
    githubUrl: "#", // Editable placeholder
    demoUrl: "#", // Editable placeholder
    isPlaceholderLink: true,
    highlight: "Web Application",
  },
];
