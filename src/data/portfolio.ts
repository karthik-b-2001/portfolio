interface Education {
  school: string;
  degree: string;
  location: string;
  duration: string;
  details?: string[];
  cgpa?: string;
  accomplishments?: string[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
  techStack?: string[];
}

interface Project {
  title: string;
  duration: string;
  description: string;
}

interface Certification {
  name: string;
  date: string;
  link: string;
}

interface ExtraCurricular {
  organization: string;
  role: string;
  points: string[];
}

export const personalInfo = {
  name: "Karthik Bharadwaj",
  linkedin: "https://www.linkedin.com/in/karth1kb/",
  email: "karthikbharadwajds@gmail.com",
  areasOfInterest: [
    "Software Development",
    "System Architecture",
    "Cloud Computing",
  ],
  organizations: ["Ashwa Mobility", "Center of CCTV Research", "NSS Volunteer"],
};

export const education: Education[] = [
  {
    school:"Northeastern University",
    degree: "Master of Science in Computer Science",
    location: "Boston, MA, US",
    duration: "2025 to 2027",
    details: ["Programming Design Paradigm, Database Management Systems"],
    cgpa: "4/4",
  },
  {
    school: "RV College of Engineering",
    degree: "Computer Science and Engineering",
    location: "Bangalore, KA, IN",
    duration: "2019 to 2023",
    cgpa: "8.04/10",
  },
  {
    school: "KLE PU College",
    degree: "Pre-University (12th Grade)",
    location: "Bangalore, KA, IN",
    duration: "2019",
  },
  {
    school: "V. V. S. Sardar Patel High School",
    degree: "High School",
    location: "Bangalore, KA, IN",
    duration: "2017",
    accomplishments: ["Finished with 94.24% in the matriculation exams"],
  },
];

export const workExperience: Experience[] = [
  {
    "title": "Digital Associate",
    "company": "Digitide Solutions Ltd",
    "location": "Bangalore, KA, IN",
    "duration": "September 2024 - Present",
    "points": [
        "Collaborated with the delivery team at AB-InBev to develop a utility module for their proprietary SAAS application.",
        "Designed and implemented a portal with multiple features, including report generation, an admin control panel, and planogram extraction.",
        "Added functionality for template selection and account filtering from a global data pool, enabling users to generate custom reports from simulations based on selected parameters.",
        "Developed backend features for a portal allowing bulk updates and deletions of values in a planogram file.",
        "Worked closely with the delivery team to refine the user interface of the module, enhancing overall user experience."
    ],
    "techStack": [
        "Python",
        "Angular",
        "Docker",
        "Azure Container Registry",
        "Azure Blob Storage",
        "MySQL"
    ]
},
  {
    title: "Software Engineer - Full Stack",
    company: "zevvo",
    location: "Bangalore, KA, IN",
    duration: "January 2024 to July 2024",
    points: [
      "Played a central role in designing and implementing core systems (bookings, subscriptions, billing, inventory, and catalogs, among others), including HLD, LLD, and schema design",
      "Built APIs for the following systems, addressing different scenarios and edge cases for robust functionality",
      "Created an admin portal with many features for controlling systems, including discounts and taxes",
      "Developed and deployed a robust user authentication and authorization system utilizing JSON Web Tokens (JWT) and cookies",
      "Implemented deployment workflows that utilize AWS ECS with github actions and auto-scaling",
    ],
    techStack: [
      "ReactJS",
      "Node.js",
      "AWS S3",
      "Lambda",
      "Batch",
      "Cloudformation",
      "ECR",
      "ECS",
      "ELK stack",
      "Docker",
      "MongoDB",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Crestron Electronics",
    location: "Bangalore, KA, IN",
    duration: "March 2023 to July 2023",
    points: [
      "Built REST APIs and UI components using .NET Core as the backend, achieving 28% improvement in response time",
      "Wrote test cases in Jest, resulting in 10% increase in overall unit test coverage",
      "Utilized Google Tag Manager to analyze user behavioral patterns",
      "Worked in an 8-member team, reducing bugs by 20%",
    ],
    techStack: ["ReactJS", "MSSQL", "AngularJS", ".NET Core", "Google Cloud"],
  },
];

export const internships: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "XAG Labs",
    location: "Remote",
    duration: "October 2022 to December 2022",
    points: [
      "Led a team of two, creating a document management application using Firebase",
      "Used NextJS with server-side rendering for fast page loads",
      "Developed applications for web and mobile platforms using React Native",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Center of CCTV Research",
    location: "Hybrid",
    duration: "June 2022 to December 2022",
    points: [
      "Headed a team of three to construct a web application for CCTV research projects",
      "Migrated legacy web application to modern standards using Svelte Kit",
      "Created CI/CD pipelines for regular content updates",
    ],
  },
  {
    title: "Team Member",
    company: "Ashwa Mobility Open Source Vehicle",
    duration: "August 2019 to July 2022",
    location: "Hybrid",
    points: [
      "Part of 12-member team developing autonomous electric vehicle",
      "Trained YOLO model achieving 88% accuracy",
      "Developed safety sign recognition framework",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Analysis of Deep Learning Models Using SAR Images",
    duration: "August 2021 to October 2021",
    description:
      "Used SAR images to train deep learning models like Resnet, EffeicientNet, MobileNet, and Inception for identifying geophysical phenomena",
  },
  {
    title: "NFT Marketplace",
    duration: "December 2020 to February 2021",
    description:
      "Created an online store for NFTs using blockchain and ReactJS, integrated with Ethereum wallets for secure transactions",
  },
  {
    title: "Smart Driver Assist",
    duration: "August 2020 to October 2020",
    description:
      "Developed a prototype using Arduino Nano and ESP8266 for emergency alerts with real-time location tracking",
  },
];

export const certifications: Certification[] = [
  {
    name: "Python Data Structures",
    date: "December 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/HZ5GH5R3TWP5",
  },
  {
    name: "Data Structures",
    date: "December 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/UVMHR6W2ZVW6",
  },
  {
    name: "Joy of Computing Using Python",
    date: "October 2021",
    link: "https://drive.google.com/file/d/1IgY8RTZCatSO42tKLREjUGKcp57lAzMN/view?usp=sharing",
  },
];

export const extraCurricular: ExtraCurricular[] = [
  {
    organization: "NATIONAL SERVICE SCHEME (NSS)",
    role: "Leader",
    points: [
      "Led initiatives and campaigns within NSS RVCE",
      "Organized community projects including school renovations and awareness campaigns",
      "Visited rural schools for innovative campaigns",
    ],
  },
  {
    organization: "YOUTH FOR SEVA",
    role: "Team Member",
    points: [
      "Part of four-member team teaching at rural school",
      "Created engaging experiences for physics and chemistry concepts",
      "Organized exhibition for practical concept application",
    ],
  },
];
