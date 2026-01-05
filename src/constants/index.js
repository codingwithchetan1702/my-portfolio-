import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a highly motivated Software Developer and MERN Stack specialist with a unique background in AI Data Annotation. I possess strong expertise in building full-stack web applications using React, Node.js, Express, and MongoDB, complemented by professional experience in high-quality pixel-level data labeling for machine learning models. With a solid foundation in modern JavaScript, API development, and UI design, I strive to deliver clean, scalable code while utilizing tools like CVAT and Label Studio to support computer vision projects across sports, retail, and industrial domains. Passionate about continuous learning and open-source contributions, I aim to create impactful digital solutions that bridge the gap between robust web architecture and advanced AI data processing.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
  year: "Jun 2025 - Present",
  role: "AI Data Annotation Specialist",
  company: "Pixel Annotation",
  description: `Performed high-quality pixel-level image and data annotation for AI and machine learning models. Followed strict accuracy, consistency, and quality guidelines to meet project standards. Collaborated with remote teams to deliver annotation tasks within defined timelines.`,
  technologies: ["Image Annotation", "Pixel Annotation", "CVAT", "Label Studio", "Computer Vision", "Quality Assurance"],
 },
  {
    year: "2025 - Present",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    description: `Worked on multiple freelance projects involving full-stack development. Built responsive web applications, integrated REST APIs, and delivered scalable solutions for clients. Specialized in React, Node.js, Django, and cloud integration.`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Django", "Tailwind CSS", "AWS", "OpenAI API"],
  },
];

export const EDUCATIONS = [
  {
    year: "2023 - 2025",
    degree: "Master of Computer Applications",
    college: "GLS University, Ahmedabad",
    description: "Focusing on advanced concepts in computer science, software development, and research in emerging technologies.",
  },
  {
    year: "2019 - 2022",
    degree: "Bachelor of Computer Applications",
    college: "GLS University, Ahmedabad",
    description: "Learned fundamental concepts of programming, databases, and web development, along with practical applications in projects.",
  },
]

export const PROJECTS = [
  {
    title: "Product Delivery Application",
    image: project1,
    description:
      "A full-stack application for managing product deliveries, including shipment creation, payment processing, and feedback collection. Built using MERN stack with secure authentication and admin panel.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  },
  {
    title: "Typing Speed Game",
    image: project2,
    description:
      "A fun and interactive typing speed test that tracks real-time typing speed and accuracy. Built using React for responsive state management and Tailwind CSS for modern styling.",
    technologies: ["React", "Tailwind CSS"],
    repo: "https://github.com/your-username/typing-speed-game",
  },
  {
    title: "Medicine Recommendation System",
    image: project3,
    description:
      "A system that recommends medicines based on user input and preferences, leveraging KNN and TF-IDF for accurate results.",
    technologies: ["Python", "Django", "Pandas", "Scikit-learn", "CSV"],
  },
  {
    title: "Stock Recommendation System",
    image: project4,
    description:
      "A tool for recommending stocks based on historical data and user-defined criteria, featuring visualizations and ratio analysis.",
    technologies: ["Python", "React", "Django", "Matplotlib", "PostgreSQL"],
  },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
