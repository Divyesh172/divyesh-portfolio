import React from 'react';
import { HERO_CONTENT, ABOUT_CONTENT, SKILLS_DATA, PROJECTS_DATA } from './data.jsx';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const App = () => {
    return (
        <div className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-teal-500 selection:text-white">

            {/* Navbar (Simplified for single file) */}
            <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-teal-500">Divyesh.dev</h1>
                <div className="space-x-6 text-slate-300">
                    <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
                    <a href="#about" className="hover:text-teal-400 transition">About</a>
                    <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
                <p className="text-teal-400 mb-4 tracking-wide">Hi, I'm Divyesh Trivedi</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {HERO_CONTENT.title}
                </h1>
                <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10">
                    {HERO_CONTENT.subtitle}
                </p>
                <div className="flex space-x-4">
                    <a href="#projects" className="px-8 py-3 bg-teal-500 text-slate-900 font-bold rounded-lg hover:bg-teal-400 transition shadow-lg shadow-teal-500/20">
                        {HERO_CONTENT.buttonText}
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-slate-600 rounded-lg hover:border-teal-500 hover:text-teal-500 transition">
                        Contact Me
                    </a>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-slate-800/50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center"><span className="text-teal-500">Technical</span> Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SKILLS_DATA.map((category, index) => (
                            <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition duration-300">
                                <h3 className="text-xl font-semibold mb-6 text-slate-200">{category.category}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center space-x-3 text-slate-400">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-16 text-center">Featured <span className="text-teal-500">Projects</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <div key={index} className="bg-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300 border border-slate-700 hover:border-teal-500/30">
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-2 py-1 bg-teal-500/10 text-teal-500 rounded uppercase tracking-wider">
                    {project.type}
                  </span>
                                    {/* Folder Icon Placeholder */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-xs text-slate-500 font-mono">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-teal-500 hover:underline">
                                    View Source <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-100">{ABOUT_CONTENT.title}</h2>
                    </div>
                    <div className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden">
                        {/* Decorative Element */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>

                        <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                            {ABOUT_CONTENT.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 text-center relative">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6 text-white">Ready to start a project?</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        I'm currently available for freelance SRE and Backend work.
                        If you have an idea that needs a resilient architecture, let's chat.
                    </p>

                    <a href="mailto:divyeshtrivedi0908@gmail.com"
                       className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-bold text-lg transition shadow-lg shadow-teal-500/25">
                        <FaEnvelope className="mr-2" /> Say Hello
                    </a>

                    <div className="mt-12 flex justify-center space-x-8 text-slate-500">
                        <a href="https://github.com/Divyesh172" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 hover:scale-110 transition-all">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/divyesh-trivedi-mumbai/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 hover:scale-110 transition-all">
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </div>
                <div className="mt-20 text-slate-600 text-sm">
                    © 2025 Designed & Built by Divyesh Trivedi.
                </div>
            </section>

        </div>
    );
};

export default App;