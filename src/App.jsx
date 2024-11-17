import { useState } from "react";
import { Calendar, FileText, Mail, Menu } from "lucide-react";

import './App.css'
import assets from './assets'
import Marquee from "./components/marquee";
import Aside from "./components/aside";

function App() {

    const [asideOpen, setAsideOpen] = useState(false);

    return (
        <main className="px-12 md:px-0 flex flex-col md:gap-4 gap-32">
            <div className="layout-grid"></div>

            <header className="fixed z-30 border-b left-0 w-full py-6 bg-black bg-opacity-50 backdrop-blur-lg">
                <div className="w-full md:w-[1280px] mx-auto flex-row justify-between flex px-6 md:px-0">
                    <button className="flex md:hidden" onClick={() => setAsideOpen(true)}>
                        <Menu className="text-white" />
                    </button>
                    <div className="flex-row gap-12 hidden md:flex">
                        <a href="#me" className="text-white text-lg font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Me</a>
                        <a href="#stack" className="text-white text-lg font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Stack</a>
                        <a href="#experience" className="text-white text-lg font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Experience</a>
                        <a href="#projects" className="text-white text-lg font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Projects</a>
                    </div>
                    <div className="flex flex-row gap-8">
                        <a href="https://github.com/santikzz" className="hover:brightness-75 transition-all ease-linear duration-150 hidden md:flex">
                            <svg className="text-white h-8" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/santiago-bugn%C3%B3n-a71a54217/" target="_blank" className="hover:brightness-75 transition-all duration-150 ease-linear hidden md:flex">
                            <svg className="text-white h-8" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="mailto:santiago_bugnon@hotmail.com" target="_blank" className="hover:brightness-75 transition-all duration-150 ease-linear hidden md:flex">
                            <Mail size={32} strokeWidth={1.3} color="#fff" />
                        </a>
                        <a href="/cv_santiago_bugnon.pdf" target="_blank" className="font-geist-mono rounded-md px-2 border flex items-center justify-center font-satoshi-medium text-base gap-1 bg-white text-black hover:text-white hover:bg-transparent transition-all duration-150 ease-linear">
                            <FileText size={16} /> Resume
                        </a>
                    </div>
                </div>
            </header>

            <Aside isOpen={asideOpen} setIsOpen={setAsideOpen} />

            <section className="md:h-[95vh] flex flex-col md:flex-row justify-between items-center" id="me">
                <model-viewer
                    className="z-20"
                    src="static/old_computer_v2.glb"
                    alt="compaq"
                    auto-rotate
                    camera-controls
                    auto-rotate-delay="0"
                    camera-orbit="-90deg 0 0"
                    interaction-prompt="none"
                    disable-zoom
                    style={{ width: '500px', height: '500px' }}
                >
                </model-viewer>

                <div className="flex flex-col gap-8 md:gap-3 flex-1">
                    <h2 id="name" className="text-orange-500 font-grotesque-display text-4xl md:text-6xl glow">HI, I'M SANTIAGO<span className="blink">_</span></h2>
                    <p className="text-neutral-400 md:text-xl font-geist-mono">{"->"} I'm a <b className="text-neutral-300">Full Stack Developer</b> passionate about building scalable apps and seamless user experiences. I love tackling challenges and continuously learning to create exceptional digital solutions.</p>
                </div>
            </section>

            <div className="flex flex-col gap-48">

                <section className="flex flex-col space-y-8 overflow-x-hidden" id="stack">
                    <div className="flex flex-row">
                        <Marquee />
                        <Marquee />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-6">
                        <div className="flex-1 md:border border-2 relative">
                            <h2 className="text-orange-500 text-2xl font-grotesque-display absolute -top-4 bg-black left-4 px-3 glow">BACKEND</h2>
                            <ul className="text-neutral-300 p-4 text-xl md:text-2xl font-geist-mono">
                                <li>Express JS</li>
                                <li>Laravel/PHP</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="flex-1 md:border border-2 relative">
                            <h2 className="text-orange-500 text-2xl font-grotesque-display absolute -top-4 bg-black left-4 px-3 glow">FRONTEND</h2>
                            <ul className="text-neutral-300 p-4 text-xl md:text-2xl font-geist-mono">
                                <li>React JS/Native</li>
                                <li>JavaScript/TypeScript</li>
                                <li>HTML5/CSS</li>
                                <li>TailwindCSS</li>
                                <li>UX/UI</li>
                            </ul>
                        </div>
                        <div className="flex-1 md:border border-2 relative">
                            <h2 className="text-orange-500 text-2xl font-grotesque-display absolute -top-4 bg-black left-4 px-3 glow">DevOps</h2>
                            <ul className="text-neutral-300 p-4 text-xl md:text-2xl font-geist-mono">
                                <li>Docker</li>
                                <li>Git/Github</li>
                                <li>CI/CD</li>
                                <li>Scrum/Agile</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col space-y-12" id="projects">
                    <div className="flex flex-row items-center gap-4">
                        <div className="h-7 w-7 bg-orange-500 glow rounded"></div>
                        <h2 className="text-orange-500 text-4xl font-grotesque-display glow">PROJECTS</h2>
                    </div>
                    <div className="flex flex-row gap-8">
                        <p className="text-xl text-neutral-300 font-geist-mono">I led the development of <a className='text-orange-500 underline' href="https://squad.net.ar">Squad</a>, a web app designed to help students create and find study groups. This personal project focused on improving student collaboration by offering a platform for group creation, chat, and resource sharing.</p>
                        <img src={assets.squad_banner} className='w-1/2 rounded-lg' />
                    </div>
                    <div className="flex flex-row gap-8">
                        <img src={assets.ecobite_banner} className='w-1/2 rounded-lg' />
                        <p className='text-xl text-neutral-300 font-geist-mono'>I also led the development of Ecobite, a <span className='text-orange-500'>React Native</span> app designed for restaurants to sell their leftover food at a reduced price instead of discarding it. The app aims to minimize food waste while offering customers affordable meal options. By connecting restaurants with eco-conscious consumers, Ecobite promotes sustainability and helps businesses reduce waste in a simple, efficient way.</p>
                    </div>
                </section>

                <section className="flex flex-col space-y-8" id="experience">
                <div className="flex flex-row items-center gap-4">
                        <div className="h-7 w-7 bg-orange-500 glow rounded"></div>
                        <h2 className="text-orange-500 text-4xl font-grotesque-display glow">EXPERIENCE & STUDIES</h2>
                    </div>
                    <div className="flex flex-col">
                        <label className="underline text-white text-xl font-geist-mono flex flex-row items-center gap-2"><Calendar size={18} /> 2020 - 2021</label>
                        <p className="text-xl text-neutral-300 font-geist-mono">I spent a year working at Creadores de Sitios, a web development company, where I helped create and improve websites for different clients. I worked on both the frontend and backend, using tools like HTML, CSS, JavaScript, PHP and MySQL, and learned a lot about building responsive, user-friendly sites.</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="underline text-white text-xl font-geist-mono flex flex-row items-center gap-2"><Calendar size={18} /> 2021 - 2024</label>
                        <p className="text-xl text-neutral-300 font-geist-mono">I've studied TUDAI "University Degree in Computer Applications Development" at <a href="https://www.unicen.edu.ar/" className="underline">UNICEN</a>, where i learned modern concepts and build robust FullStack web applications with technologies like, PHP, PostgreSQL, Springboot, JavaScript, Docker, Microservices, etc..</p>
                    </div>
                </section>

            </div>

            <footer className="h-32">

            </footer>

        </main>
    )
}

export default App
