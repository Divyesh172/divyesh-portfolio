import { FaPython, FaJava, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiMongodb, SiPostman, SiExpress, SiTailwindcss, SiGremlin } from "react-icons/si";

export const HERO_CONTENT = {
    title: "Building Resilient Systems & Scalable Backends",
    subtitle: "Bridging the gap between Full Stack Development and Site Reliability Engineering (SRE). Specialized in Python, Java, and Chaos Engineering.",
    buttonText: "View My Work",
};

export const ABOUT_CONTENT = {
    title: "From Teacher to Chaos Engineer",
    text: `My journey into tech started in the classroom. As a Programming Instructor for over 2 years, I didn't just teach code—I taught debugging.
  
  Seeing hundreds of unique student errors gave me a deep understanding of how and why software breaks. I realized that writing code is easy, but keeping it running under pressure is the real challenge.
  
  Now, as a Certified Chaos Engineering Practitioner, I apply that same curiosity to enterprise systems—breaking them on purpose to build them back stronger. I combine strong backend development skills (Python/Java) with SRE principles to ensure reliability.`,
};

export const SKILLS_DATA = [
    {
        category: "DevOps & Reliability",
        skills: [
            { name: "Python", icon: <FaPython className="text-yellow-400" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
            { name: "Chaos Engineering", icon: <SiGremlin className="text-green-500" /> }, // Placeholder for Gremlin
            { name: "Linux / Bash", icon: <FaLinux className="text-gray-200" /> },
        ],
    },
    {
        category: "Backend Development",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
            { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500" /> },
        ],
    },
];

export const PROJECTS_DATA = [
    {
        title: "Smart Proctor Exam System",
        description: "An AI-powered automated proctoring solution designed for high availability. Stress-tested using Chaos Engineering principles to ensure stability under heavy concurrent load. Features fault-tolerant backend logic.",
        techStack: ["Python", "AI/ML", "Chaos Engineering", "SRE"],
        link: "https://github.com/Divyesh172", // Update with actual link if available
        type: "SRE & AI Prototype"
    },
    {
        title: "OmniShop E-Commerce",
        description: "A scalable multi-vendor marketplace featuring Stripe payments, real-time order tracking, and a custom admin dashboard. Built with modular architecture for maintainability.",
        techStack: ["MERN Stack", "Redux", "Stripe API"],
        link: "https://github.com/Divyesh172",
        type: "Full Stack"
    },
    {
        title: "TaskFlow SaaS",
        description: "Real-time project management tool with drag-and-drop Kanban boards. Uses Socket.io for instant team collaboration and updates.",
        techStack: ["React", "Socket.io", "Node.js"],
        link: "https://github.com/Divyesh172",
        type: "Full Stack"
    },
];