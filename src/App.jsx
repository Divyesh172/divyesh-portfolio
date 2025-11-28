import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Layout,
    Server,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    ChevronDown,
    BookOpen,
    Terminal
} from 'lucide-react';

const App = () => {
    // Navigation Links
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    // Updated Skills Data matching your new LinkedIn
    const skills = [
        {
            name: 'Frontend',
            icon: <Layout className="w-6 h-6" />,
            tools: ['React.js', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']
        },
        {
            name: 'Backend',
            icon: <Server className="w-6 h-6" />,
            tools: ['Node.js', 'Express', 'Kotlin', 'REST APIs']
        },
        {
            name: 'Database & Tools',
            icon: <Database className="w-6 h-6" />,
            tools: ['MongoDB', 'Git/GitHub', 'Postman', 'Vercel']
        },
    ];

    // Updated Projects matching your Resume
    const projects = [
        {
            title: 'OmniShop E-Commerce',
            description: 'A scalable multi-vendor marketplace featuring Stripe payments, real-time order tracking, and a custom admin dashboard.',
            tags: ['MERN Stack', 'Redux', 'Stripe API'],
            link: 'https://github.com/Divyesh172/omnishop-ecommerce'
        },
        {
            title: 'TaskFlow SaaS',
            description: 'Real-time project management tool with drag-and-drop Kanban boards. Uses Socket.io for instant team collaboration.',
            tags: ['React', 'Socket.io', 'Node.js'],
            link: 'https://github.com/Divyesh172/taskflow-saas'
        },
        {
            title: 'NotesStore Logic',
            description: 'A robust class-based state management system ensuring data integrity with strict validation logic.',
            tags: ['JavaScript', 'OOP', 'Algorithms'],
            link: 'https://github.com/Divyesh172'
        }
    ];

    return (
        <div className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-teal-500 selection:text-white">

            {/* Navigation Bar */}
            <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
                        Divyesh.dev
                    </h1>
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-teal-400 transition-colors text-sm uppercase tracking-wider font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
                <div className="max-w-4xl mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-teal-400 font-mono mb-4 block text-lg">Hi, I'm Divyesh Trivedi</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                            Full Stack Developer <br />
                            <span className="text-slate-500">& Problem Solver.</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            I build scalable web applications using the <strong>MERN Stack and Kotlin</strong>.
                            Former programming instructor turned freelance developer.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#projects" className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-500/20">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-3 border border-slate-700 hover:border-teal-500 hover:text-teal-400 rounded-lg font-medium transition-all">
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 text-slate-600"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-slate-800/30 border-y border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-all shadow-xl"
                            >
                                <div className="text-teal-400 mb-4 bg-teal-900/20 p-3 rounded-lg w-fit">{skill.icon}</div>
                                <h3 className="text-xl font-bold mb-4 text-white">{skill.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tools.map((tool) => (
                                        <span key={tool} className="text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                      {tool}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center mb-12">
                        <Code className="text-teal-400 mr-3 w-8 h-8" />
                        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500 transition-all hover:shadow-2xl hover:shadow-teal-900/20"
                            >
                                {/* Mockup Placeholder */}
                                <div className="h-48 bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                                    <Terminal size={40} className="text-slate-600 group-hover:text-teal-400 transition-colors z-10"/>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-teal-300 bg-teal-900/30 px-2 py-1 rounded border border-teal-900/50">
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-teal-400 transition-colors">
                                            View Code <ExternalLink size={16} className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center mb-8">
                        <BookOpen className="text-teal-400 mr-3 w-8 h-8" />
                        <h2 className="text-3xl font-bold text-white">The Teacher who Codes</h2>
                    </div>

                    <div className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />

                        <p className="text-lg text-slate-300 leading-relaxed mb-6 relative z-10">
                            I am currently a <strong>Master of Computer Applications (FYMCA)</strong> student at VESIT, Chembur. But my journey into tech started in the classroom.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6 relative z-10">
                            For 2 years, I worked as a <strong>Programming Instructor at CTMC Academy</strong>. I didn't just teach code; I learned how to debug hundreds of unique student errors and explain complex logic in simple, plain English.
                        </p>
                        <div className="p-4 bg-slate-800/50 border-l-4 border-teal-500 rounded-r-lg">
                            <p className="text-slate-200 italic">
                                "My strength isn't just writing code—it's writing code that solves business problems, and communicating that process clearly to you."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 text-center relative">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6 text-white">Ready to start a project?</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        I'm currently available for freelance work. If you have an idea that needs a skilled developer, let's chat.
                    </p>

                    <a
                        href="mailto:divyeshtrivedi0908@gmail.com"
                        className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-bold text-lg transition-all mb-12 shadow-lg hover:shadow-teal-500/25"
                    >
                        <Mail className="mr-2" /> Say Hello
                    </a>

                    <div className="flex justify-center space-x-8 text-slate-500">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/Divyesh172"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 hover:scale-110 transition-all"
                        >
                            <Github size={28} />
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/divyesh-trivedi-mumbai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 hover:scale-110 transition-all"
                        >
                            <Linkedin size={28} />
                        </a>
                    </div>

                    <footer className="mt-24 pt-8 border-t border-slate-800 text-sm text-slate-600">
                        <p>© {new Date().getFullYear()} Designed & Built by Divyesh Trivedi.</p>
                    </footer>
                </div>
            </section>

        </div>
    );
};

export default App;