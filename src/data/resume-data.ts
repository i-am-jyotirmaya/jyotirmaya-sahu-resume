export type SubheadingItem = {
  type: string;
  value: string;
  isIcon: boolean;
  hasIcon: boolean;
};

export const subheadingItems: SubheadingItem[] = [
  {
    type: "location",
    value: "Bengaluru",
    isIcon: false,
    hasIcon: false,
  },
  {
    type: "phone",
    value: "8249078381",
    isIcon: false,
    hasIcon: false,
  },
  {
    type: "email",
    value: "jyotirmayasahu38@gmail.com",
    isIcon: false,
    hasIcon: false,
  },
  {
    type: "linkedin",
    value: "https://www.linkedin.com/in/jyotirmayasahu",
    isIcon: true,
    hasIcon: true,
  },
  {
    type: "github",
    value: "https://github.com/i-am-jyotirmaya",
    isIcon: true,
    hasIcon: true,
  },
];

export const title =
  "Software Development Engineer Specializing in Modernization and Performance Optimization";

export const cover =
  "**Senior Software Engineer** with over 4 years of experience in backend development and a strong" +
  "foundation in C# and Java. Proven expertise in the full software development lifecycle, " +
  "including design, implementation, testing, and deployment of scalable solutions. Adept at " +
  "collaborating with cross-functional teams to drive impactful communication solutions that " +
  "enhance user experiences on a global scale. Recognized for mentoring junior developers and " +
  "fostering a collaborative work environment. Passionate about leveraging agile methodologies " +
  "to deliver high-quality software and contribute to innovative projects that empower users and " +
  "organizations worldwide.";

export type SignificantAchievement = {
  title: string;
  description: string;
};

export const significantAchievements: SignificantAchievement[] = [
  {
    title: "Achieved 80% Performance Improvement",
    description: "Successfully migrated a legacy tool to a modern architecture at Wipro.",
  },
  {
    title: "Mentored Junior Talent",
    description:
      "Facilitated rapid onboarding and quality deliverables for interns and new joiners.",
  },
  {
    title: "Enhanced Security Standards",
    description:
      "Solved critical upgrade challenges at Amazon, ensuring system stability and security.",
  },
  {
    title: "Awarded 'Hulk of CIO'",
    description:
      "Recognized at Wipro for outstanding project leadership and operational advancements.",
  },
];

export const keySkills: string[] = [
  "Agile Methodologies",
  "Software Development",
  "Back-End Web Development",
  "Strategic Planning",
  "Team Management",
  "Process Improvement",
];

export type TechnicalSkill = {
  name: string;
  proficiency: "Proficient" | "Intermediate" | "Beginner";
  group: string;
};

export const technicalSkills: TechnicalSkill[] = [
  {
    name: "Java",
    proficiency: "Intermediate",
    group: "Languages",
  },
  {
    name: "C#",
    proficiency: "Proficient",
    group: "Languages",
  },
  {
    name: "JavaScript",
    proficiency: "Proficient",
    group: "Languages",
  },
  {
    name: "TypeScript",
    proficiency: "Intermediate",
    group: "Languages",
  },
  {
    name: "React.js",
    proficiency: "Proficient",
    group: "Frameworks",
  },
  {
    name: ".NET",
    proficiency: "Proficient",
    group: "Frameworks",
  },
  {
    name: "AWS",
    proficiency: "Intermediate",
    group: "Tools & Platforms",
  },
  {
    name: "DynamoDB",
    proficiency: "Intermediate",
    group: "Tools & Platforms",
  },
  {
    name: "Git",
    proficiency: "Proficient",
    group: "Tools & Platforms",
  },
  {
    name: "Azure DevOps",
    proficiency: "Beginner",
    group: "Tools & Platforms",
  },
  {
    name: "Jira",
    proficiency: "Proficient",
    group: "Tools & Platforms",
  },
  {
    name: "Large-scale distributed systems",
    proficiency: "Intermediate",
    group: "Systems",
  },
  {
    name: "Microservices architecture",
    proficiency: "Intermediate",
    group: "Systems",
  },
  {
    name: "Agile",
    proficiency: "Proficient",
    group: "Methodologies",
  },
  {
    name: "SCRUM",
    proficiency: "Proficient",
    group: "Methodologies",
  },
];

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "Amazon",
    position: "Software Development Engineer",
    startDate: "Sep 2022",
    endDate: "Present",
    achievements: [
      "Spearheaded service enhancements, resulting in an 80% cost improvement through DynamoDB optimizations and increased scalability.",
      "Led a critical security enhancement of inter-service communications within a microservices architecture.",
      "Mentored junior developers, enhancing their skills and ensuring the quality of deliverables through regular code reviews and knowledge-sharing sessions.",
      "Contributed significantly to the Camera Widget of the first-gen Echo Hub, enhancing functionality and user experience.",
    ],
  },
  {
    company: "Accenture",
    position: "Software Development Analyst",
    startDate: "Sep 2021",
    endDate: "Sep 2022",
    achievements: [
      "Designed and implemented .NET-based APIs, improving search performance by 30% through enhanced sorting and pagination capabilities.",
      "Collaborated within an Agile framework, participating in biweekly sprint planning and retrospectives, leading to improved team efficiency.",
      "Worked on a reporting tool heavily utilized by clients, ensuring alignment with their operational needs.",
    ],
  },
  {
    company: "Wipro",
    position: "Project Engineer",
    startDate: "Apr 2019",
    endDate: "Sep 2021",
    achievements: [
      "Enhanced legacy .NET applications, achieving a 70% performance improvement through comprehensive refactoring and optimization, resulting in faster load times and reduced operational costs.",
      "Conducted training sessions on Angular, fostering a culture of learning and innovation among team members, which led to an increase in team productivity on frontend development tasks.",
      "Collaborated with product and QA teams to streamline the development process, reducing the deployment cycle time and improving overall project delivery efficiency.",
    ],
  },
];

export type Education = {
  degree: string;
  major: string;
  institution: string;
  location: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Mechanical Engineering",
    institution: "C. V. Raman College of Engineering",
    location: "India",
    year: "2019",
  },
];

export type DetailedExperience = Experience & {
  detailedDescription: string;
  projects: {
    name: string;
    description: string;
    technologies: string[];
    keyLearnings: string[];
  }[];
  technologies: string[];
  responsibilities: string[];
};

export const detailedExperiences: DetailedExperience[] = [
  {
    ...experiences[0], // Amazon experience
    detailedDescription: "Detailed description of role and impact at Amazon...",
    projects: [
      {
        name: "Camera Widget - Echo Hub",
        description: "Led development of camera integration features...",
        technologies: ["AWS", "Java", "DynamoDB"],
        keyLearnings: ["Distributed Systems", "Event-driven Architecture"],
      },
      // Add more projects
    ],
    technologies: ["Java", "AWS", "DynamoDB", "Microservices"],
    responsibilities: [
      "Leading technical design discussions",
      "Mentoring junior developers",
      // Add more responsibilities
    ],
  },
  // Add other experiences
];
