import { FaPython, FaJava, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiMongodb, SiPostman, SiExpress, SiTailwindcss } from "react-icons/si";

export const HERO_CONTENT = {
    title: "Building Scalable Solutions for the Future",
    subtitle: "I am a passionate developer focused on creating robust applications and seamless user experiences.",
    buttonText: "My Projects"
};

export const ABOUT_CONTENT = {
    title: "About Me",
    text: "I am a dedicated developer with a strong foundation in backend technologies and DevOps practices. \n\nI love solving complex infrastructure problems and building efficient, scalable web applications."
};

export const SKILLS_DATA = [
    {
        category: "Languages",
        skills: [
            { name: "Python", icon: <FaPython className="text-yellow-400" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "JavaScript", icon: <FaNodeJs className="text-green-500" /> }
        ]
    },
    {
        category: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
            { name: "Linux", icon: <FaLinux className="text-slate-200" /> }
        ]
    },
    {
        category: "Frameworks & Tools",
        skills: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> }
        ]
    }
];

export const PROJECTS_DATA = [
    {
        title: "Divyesh Portfolio",
        description: "A responsive personal portfolio website built with React, Vite, and Tailwind CSS, featuring smooth scrolling and a modern dark UI.",
        techStack: ["React", "TailwindCSS", "Vite", "Vercel"],
        link: "https://github.com/Divyesh172/divyesh-portfolio",
        type: "Frontend"
    }
];