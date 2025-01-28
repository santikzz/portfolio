import { useEffect, useRef } from 'react';
import { Calendar, FileText, Mail, Menu } from "lucide-react";

export default function Header({ setAsideOpen }) {

    const headerRef = useRef(null);
    const navLinksRef = useRef(null);
    const contactLinksRef = useRef(null);

    useEffect(() => {

        document.addEventListener('scroll', () => {
            if (headerRef.current) {
                if (window.scrollY > 300) {
                    headerRef.current.classList.remove('py-6');
                    headerRef.current.classList.add('py-2');
                    navLinksRef.current.classList.remove('text-lg');
                    navLinksRef.current.classList.add('text-base');

                    contactLinksRef.current.classList.remove('h-8');
                    contactLinksRef.current.classList.add('h-6');


                } else {
                    headerRef.current.classList.add('py-6');
                    headerRef.current.classList.remove('py-2');
                    navLinksRef.current.classList.add('text-lg');
                    navLinksRef.current.classList.remove('text-base');
                    contactLinksRef.current.classList.add('h-8');
                    contactLinksRef.current.classList.remove('h-6');
                }
            }
        });

    }, []);

    return (
        <header className="fixed z-50 border-b left-0 w-full py-6 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-200" ref={headerRef}>
            <div className="w-full md:w-[1280px] mx-auto flex-row justify-between flex px-6 md:px-0">
                <button className="flex md:hidden" onClick={() => setAsideOpen(true)}>
                    <Menu className="text-white" />
                </button>
                <div className="flex-row gap-12 hidden md:flex text-lg items-center" ref={navLinksRef}>
                    <a href="#me" className="text-white font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Me</a>
                    <a href="#stack" className="text-white font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Stack</a>
                    <a href="#experience" className="text-white font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Experience</a>
                    <a href="#projects" className="text-white font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Projects</a>
                    <a href="https://dev.to/santikzz" className="text-white font-geist-mono hover:brightness-75 transition-all ease-linear duration-150 hover:underline">Blog</a>
                </div>
                <div className="flex flex-row gap-8 h-8" ref={contactLinksRef}>
                    <a href="https://github.com/santikzz" className="hover:brightness-75 transition-all ease-linear duration-150 hidden md:flex">
                        <svg className="text-white h-full" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/santiago-bugn%C3%B3n-a71a54217/" target="_blank" className="hover:brightness-75 transition-all duration-150 ease-linear hidden md:flex">
                        <svg className="text-white h-full" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="mailto:santiago_bugnon@hotmail.com" target="_blank" className="hover:brightness-75 transition-all duration-150 ease-linear hidden md:flex">
                        <Mail className='size-[100%]' strokeWidth={1.3} color="#fff" />
                    </a>
                    <a href="/cv_santiago_bugnon.pdf" target="_blank" className="font-geist-mono rounded-md px-2 border flex items-center justify-center font-satoshi-medium text-base gap-1 bg-white text-black hover:text-white hover:bg-transparent transition-all duration-150 ease-linear">
                        <FileText size={16} /> Resume
                    </a>
                </div>
            </div>
        </header>
    );
}