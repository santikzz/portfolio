import { useState } from "react";
import { Calendar, FileText, Mail, Menu } from "lucide-react";

import './App.css'
import assets from './assets'
import Marquee from "./components/marquee";
import Aside from "./components/aside";
import FloatBox from "./components/FloatBox";
import MagnetBox from "./components/MagnetBox";
import Header from "./components/Header";
import { HyperText } from "./components/HyperText";

function App() {

    const [asideOpen, setAsideOpen] = useState(false);

    return (
        <main className="px-12 md:px-0 flex flex-col md:gap-4 gap-32">
            <div className="layout-grid"></div>

            <Header setAsideOpen={setAsideOpen} />

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

                <MagnetBox
                    className="flex flex-col gap-8 md:gap-3 flex-1"
                    force={10}
                >
                    {/* <h2 id="name" className="text-orange-500 font-grotesque-display text-4xl md:text-6xl glow">HI, I'M SANTIAGO<span className="blink">_</span></h2> */}
                    <div className="flex flex-col">
                        <HyperText text="HI, I'M" className="text-orange-500 font-grotesque-display text-4xl md:text-6xl glow" />
                        <div className="flex flex-row">
                            <HyperText text="SANTIAGO" className="text-orange-500 font-grotesque-display text-4xl md:text-6xl glow" />
                            <h2 className="text-orange-500 font-grotesque-display text-4xl md:text-6xl blink glow">_</h2>
                        </div>
                    </div>
                    <p className="text-neutral-400 md:text-xl font-geist-mono">{"->"} I'm a <b className="text-neutral-300">Full Stack Developer</b> passionate about building scalable apps and seamless user experiences. I love tackling challenges and continuously learning to create exceptional digital solutions.</p>
                </MagnetBox>

            </section>

            <div className="flex flex-col gap-48">

                <section className="flex flex-col space-y-2 overflow-x-hidden" id="stack">
                    <div className="flex flex-row">
                        <Marquee />
                        <div className="hidden md:flex">
                            <Marquee />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-6 overflow-hidden pt-6">
                        <FloatBox delay={0}>
                            <h2 className="text-orange-500 text-2xl font-grotesque-display absolute -top-4 bg-black left-4 px-3 glow">BACKEND</h2>
                            <ul className="text-neutral-300 p-4 text-xl md:text-2xl font-geist-mono">
                                <li>Express JS</li>
                                <li>Laravel/PHP</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </FloatBox>
                        <FloatBox delay={200}>
                            <h2 className="text-orange-500 text-2xl font-grotesque-display absolute -top-4 bg-black left-4 px-3 glow">FRONTEND</h2>
                            <ul className="text-neutral-300 p-4 text-xl md:text-2xl font-geist-mono">
                                <li>React JS/Native</li>
                                <li>JavaScript/TypeScript</li>
                                <li>HTML5/CSS</li>
                                <li>TailwindCSS</li>
                                <li>UX/UI</li>
                            </ul>
                        </FloatBox>
                        <FloatBox delay={400}>
                            <h2 className="text-orange-500 text-2xl font-grotesque-display absolute -top-4 bg-black left-4 px-3 glow">DevOps</h2>
                            <ul className="text-neutral-300 p-4 text-xl md:text-2xl font-geist-mono">
                                <li>Docker</li>
                                <li>Git/Github</li>
                                <li>CI/CD</li>
                                <li>Scrum/Agile</li>
                            </ul>
                        </FloatBox>
                    </div>
                </section>

                <section className="flex flex-col space-y-12" id="projects">
                    <div className="flex flex-row items-center gap-4">
                        <h2 className="text-orange-500 text-4xl font-grotesque-display glow">PROJECTS</h2>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row gap-8">
                        <p className="text-xl text-neutral-300 font-geist-mono flex-1">I led the development of <a className='text-orange-500 underline' href="https://squad.net.ar">Squad</a>, a web app designed to help students create and find study groups. This personal project focused on improving student collaboration by offering a platform for group creation, chat, and resource sharing.</p>
                        <div className="rounded-lg overflow-hidden flex-1">
                            <img src={assets.squad_banner} className='hover:scale-110 transition-transform duration-[10s] ease-linear cursor-pointer' />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="rounded-lg overflow-hidden flex-1">
                            <img src={assets.ecobite_banner} className='hover:scale-110 transition-transform duration-[10s] ease-linear cursor-pointer' />
                        </div>
                        <p className='text-xl text-neutral-300 font-geist-mono flex-1'>I also led the development of Ecobite, a <span className='text-orange-500'>React Native</span> app designed for restaurants to sell their leftover food at a reduced price instead of discarding it. The app aims to minimize food waste while offering customers affordable meal options. By connecting restaurants with eco-conscious consumers, Ecobite promotes sustainability and helps businesses reduce waste in a simple, efficient way.</p>
                    </div>

                </section>

                <section className="flex flex-col space-y-8" id="experience">
                    <div className="flex flex-row items-center gap-4">
                        <h2 className="text-orange-500 text-2xl md:text-4xl font-grotesque-display glow">EXPERIENCE & STUDIES</h2>
                    </div>
                    <div className="flex flex-col">
                        <label className="underline text-white text-xl font-geist-mono flex flex-row items-center gap-2"><Calendar size={18} /> 2021 - 2024</label>
                        <p className="text-xl text-neutral-300 font-geist-mono">I've studied TUDAI "University Degree in Computer Applications Development" at <a href="https://www.unicen.edu.ar/" className="underline">UNICEN</a>, where i learned modern concepts and build robust FullStack web applications with technologies like, PHP, PostgreSQL, Springboot, JavaScript, Docker, Microservices, etc..</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="underline text-white text-xl font-geist-mono flex flex-row items-center gap-2"><Calendar size={18} /> 2020 - 2021</label>
                        <p className="text-xl text-neutral-300 font-geist-mono">I spent a year working at Creadores de Sitios, a web development company, where I helped create and improve websites for different clients. I worked on both the frontend and backend, using tools like HTML, CSS, JavaScript, PHP and MySQL, and learned a lot about building responsive, user-friendly sites.</p>
                    </div>
                </section>

            </div>

            <footer className="h-32">

            </footer>

        </main>
    )
}

export default App
