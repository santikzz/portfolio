import { ChevronDown, FileText, Layers, Mail } from "lucide-react";



import WordRotate from './components/word-rotate'
import BoxReveal from './components/box-reveal'
import './App.css'
import assets from './assets'

function App() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  return (
    <>
      <div class="GradientRoot BackgroundGradient"></div>
      <div class="LayoutGrid"></div>
      <div class="LayoutNoise"></div>

      <div className="absolute top-0 right-0 p-6">
        <a href="https://portfolio-santibugnon86gmailcoms-projects.vercel.app/" className="text-white opacity-70 underline text-base font-satoshi-regular">Site too slow? Click here</a>
      </div>

      <div className='items-center justify-center w-full h-screen flex flex-col' id='home'>
        <div className='flex flex-col space-y-6 -translate-y-8 w-[50vw]'>

          <div className='flex flex-row space-x-6'>
            <div className='bg-gray-500 rounded-xl w-72 h-72' id="photo_placeholder" >
              <img src={assets.me} className='w-72 h-72 object-cover rounded-xl brightness-90' />
            </div>

            <div className='flex flex-col space-y-6 justify-between'>

              <div className='flex flex-col space-y-2'>

                <BoxReveal boxColor={"#5046e6"} duration={0.5} className="py-2">
                  <h1 className='text-6xl text-white font-satoshi-bold'>I'm <span className="text-purple-500">Santiago Bugnón</span></h1>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h2 className='text-4xl text-gray-300 font-satoshi-medium'>FullStack Developer</h2>
                </BoxReveal>
              </div>

              <div className='flex flex-row items-center space-x-2'>
                <Layers color='#fff' size={32} />
                <WordRotate
                  className="text-4xl font-satoshi-bold text-black dark:text-white"
                  words={["ReactJS, React Native", "Laravel, PHP", "HTML, CSS, JavaScript", "Tailwindcss", "SQL, NoSQL", "Docker"]}
                />
              </div>

              <div className='flex flex-row space-x-6 h-12'>
                <button className='bg-slate-900 text-white space-x-2 flex flex-row items-center justify-center py-3 px-24 rounded-lg hover:brightness-150 transition-all duration-300'>
                  <h2 className='text-base font-satoshi-medium'>Peek at My CV</h2>
                  <FileText size={20} />
                </button>
                <a href="https://www.linkedin.com/in/santiago-bugn%C3%B3n-a71a54217/" target="_blank" className='bg-white rounded-lg h-12 w-12 hover:brightness-75 transition-all duration-300'>
                  <img src={assets.logo_linkedin} />
                </a>
                <a href="https://github.com/santikzz" target="_blank" className='bg-white rounded-lg h-12 w-12 hover:brightness-75 transition-all duration-300 p-1'>
                  <img src={assets.logo_github} />
                </a>
                <a href="mailto:santiago_bugnon@hotmail.com" target="_blank" className='bg-white rounded-lg h-12 w-12 flex items-center hover:brightness-75 transition-all duration-300 justify-center'>
                  <Mail size={32} />
                </a>
              </div>

            </div>
          </div>


          <div className='w-full'>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className='font-satoshi-regular text-xl drop-shadow-lg text-white text-wrap'>I'm a passionate software developer with a background in TUDAI (Technician in Software Application Development) from UNICEN in Tandil, Buenos Aires, Argentina. I enjoy working with technologies like <span className='font-satoshi-bold'>ReactJS</span>, <span className='font-satoshi-bold'>React Native</span>, <span className='font-satoshi-bold'>Laravel PHP</span>, <span className='font-satoshi-bold'>HTML</span>, <span className='font-satoshi-bold'>CSS</span>, <span className='font-satoshi-bold'>JavaScript</span>, <span className='font-satoshi-bold'>MySQL</span>, <span className='font-satoshi-bold'>PostgreSQL</span>, <span className='font-satoshi-bold'>Docker</span>, <span className='font-satoshi-bold'>Linux</span>, and <span className='font-satoshi-bold'>Windows</span>. I’m always excited about building efficient and user-friendly solutions.</p>
            </BoxReveal>
          </div>

        </div>
      </div>


      <div className='absolute left-24 top-0 py-48'>

        <div className='relative h-[400px]'>
          <span className='opacity-25'>
            <div className='absolute bg-white w-[4px] h-full' />
            <div className='absolute bg-white w-[16px] h-[16px] rounded-full -translate-x-[38%] top-0' />
            <div className='absolute bg-white w-[16px] h-[16px] rounded-full -translate-x-[38%] bottom-1/2' />
            <div className='absolute bg-white w-[16px] h-[16px] rounded-full -translate-x-[38%] bottom-0' />
          </span>

          <a href='#home' className='absolute hover:text-purple-300 drop-shadow-lg transition-all duration-150 translate-x-5 -translate-y-1 text-white font-satoshi-medium opacity-1 top-0'>
            Home
          </a>

          <a href='#experience' className='absolute hover:text-purple-300 drop-shadow-lg transition-all duration-150 translate-x-5 translate-y-0.5 text-white font-satoshi-medium opacity-1 bottom-1/2'>
            Experience
          </a>

          <a href='#projects' className='absolute hover:text-purple-300 drop-shadow-lg transition-all duration-150 translate-x-5 translate-y-0.5 text-white font-satoshi-medium opacity-1 bottom-0'>
            Projects
          </a>

        </div>

      </div>


      <div className='absolute bottom-0 left-0 right-0 pb-2'>
        <div className='flex flex-col items-center justify-center text-white text-opacity-25'>
          <label className='text-4xl font-satoshi-medium floating-text'>See more</label>
          <ChevronDown size={64} />
        </div>
      </div>


      <div className='w-full py-12 px-64 space-y-4' id="experience">
        <h1 className='text-5xl font-satoshi-bold text-purple-500'>Experience</h1>
        <div className='pt-4'>
          <label className='font-satoshi-bold text-white text-lg '>2020 - 2021</label>
          <p className='font-satoshi-regular text-white text-lg'>I spent a year working at <a href="https://www.creadoresdesitios.com.ar/" target="_blank" className='text-blue-400 underline'>Creadores de Sitios</a>, a web development company, where I helped create and improve websites for different clients. I worked on both the frontend and backend, using tools like HTML, CSS, JavaScript, PHP and MySQL, and learned a lot about building responsive, user-friendly sites.</p>
        </div>
      </div>


      <div className='w-full py-12 px-64 space-y-4 mt-12' id="projects">
        <h1 className='text-5xl font-satoshi-bold text-purple-500'>Personal Projects</h1>

        <div className='space-y-4 pt-4'>
          <h1 className='text-4xl font-satoshi-medium text-white'>SQUAD</h1>
          <p className='font-satoshi-regular text-gray-300 text-lg'>I led the development of <a href='https://squad.net.ar' target="_blank" className='text-blue-400 underline'>SQUAD</a>, a PWA web app designed to help UNICEN university students create and find study groups. This personal project focused on improving student collaboration by offering a platform for group creation, chat, and resource sharing.</p>
          <p className='font-satoshi-regular text-gray-300 text-lg'>The inspiration for <a href='https://squad.net.ar' target="_blank" className='text-blue-400 underline'>SQUAD</a> came from my desire to create something that could genuinely improve the quality of life for UNICEN students. I wanted to build a tool that made it easier for students to connect, collaborate, and study together, all while being intuitive and user-friendly. With this in mind, I developed SQUAD as a <span className='text-purple-400'>Progressive Web App (PWA)</span> using <span className='text-purple-400'>ReactJS</span>, <span className='text-purple-400'>TailwindCSS</span>, and <span className='text-purple-400'>Shadcn</span> for the frontend, ensuring a smooth and responsive user experience. For the backend, I built a <span className='text-purple-400'>Laravel API</span> to handle data efficiently and securely. The result is a platform that simplifies group creation and communication for students.</p>
          <div className='flex flex-row space-x-6 flex-1'>
            <img src={assets.squad_1} className='w-64 rounded-lg' />
            <img src={assets.squad_2} className='w-64 rounded-lg' />
            <img src={assets.squad_3} className='w-64 rounded-lg' />
          </div>
        </div>

        <div className='space-y-4 pt-24'>
          <h1 className='text-4xl font-satoshi-medium text-white'>Ecobite</h1>
          <p className='font-satoshi-regular text-gray-300 text-lg'>I also led the development of Ecobite, a <span className='text-purple-400'>React Native</span> app designed for restaurants to sell their leftover food at a reduced price instead of discarding it. The app aims to minimize food waste while offering customers affordable meal options. By connecting restaurants with eco-conscious consumers, Ecobite promotes sustainability and helps businesses reduce waste in a simple, efficient way.</p>
          <div className='flex flex-row space-x-6 flex-1'>
            <img src={assets.ecobite_1} className='w-64 rounded-lg' />
            <img src={assets.ecobite_2} className='w-64 rounded-lg' />
            <img src={assets.ecobite_3} className='w-64 rounded-lg' />
            <img src={assets.ecobite_4} className='w-64 rounded-lg' />
            <img src={assets.ecobite_5} className='w-64 rounded-lg' />
          </div>
        </div>

      </div>


    </>
  )
}

export default App
