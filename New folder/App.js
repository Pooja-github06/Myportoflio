

import React, { useState } from 'react';
import { motion } from "framer-motion";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Navbar */}
      {/* <header className="bg-blue-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Developer Portfolio</h1>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className={`md:flex md:items-center md:static absolute md:static bg-blue-600 md:bg-transparent w-full left-0 md:w-auto top-16 md:top-auto transition-transform transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} md:translate-y-0`}>
            <ul className="md:flex md:space-x-6 text-center">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="block px-4 py-2 hover:bg-blue-500 md:hover:bg-transparent">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header> */}
      <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">

          {/* Left Section - Logo and Name */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">Pooja Shingate</span>
          </div>

          {/* Middle Section - About and Resume (hidden on mobile) */}
          {/* <div className="hidden md:flex md:items-center md:space-x-2">
            <a href="#about" className="hover:bg-blue-500 px-3 py-2 rounded">About</a>
            <a href="#resume" className="hover:bg-blue-500 px-3 py-2 rounded">Resume</a>
            <a href="#projects" className="hover:bg-blue-500 px-3 py-2 rounded">Projects</a>
            <a href="#skills" className="hover:bg-blue-500 px-3 py-2 rounded">Skills</a>
            <a href="#contact" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</a>
          </div> */}
          <div className="bg-grey-50 hidden md:flex items-center space-x-4 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-lg border border-white/20">
            <a href="#about" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md hover:scale-105">About</a>
            <a href="#resume" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md hover:scale-105">Resume</a>
            <a href="#projects" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md hover:scale-105">Projects</a>
            <a href="#skills" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md hover:scale-105">Skills</a>
            <a href="#contact" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md hover:scale-105">Contact</a>
          </div>


          {/* Right Section - Links and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center ">
              <a href="#projects" className="hover:bg-blue-500 px-3 py-2 rounded">LinkedIn</a>
              <a href="#contact" className="hover:bg-blue-500 px-3 py-2 rounded">Github</a>
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-500 px-6 py-4">
            <a href="#about" className="block py-2 hover:bg-blue-400 rounded" >About</a>
            <a href="#resume" className="block py-2 hover:bg-blue-400 rounded">Resume</a>
            <a href="#projects" className="block py-2 hover:bg-blue-400 rounded">Projects</a>
            <a href="#contact" className="block py-2 hover:bg-blue-400 rounded">Contact</a>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      {/* <section id="home" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Pooja Shingate</h2>
            <p className="mt-4 text-xl md:text-2xl">A Full-Stack Developer passionate about building web applications.</p>
            <a href="#projects" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded">
              View My Work
            </a>
          </div>
        </div>
      </section> */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center px-10 md:px-20"
        style={{ backgroundImage: "url(https://source.unsplash.com/1600x900/?technology)" }}
      >
        <div className="flex items-center justify-between w-full bg-black bg-opacity-50 p-10 rounded-lg">
          {/* Left Side: Self Intro */}
          <motion.div
            className="text-white max-w-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Hi, I'm Pooja Shingate
            </motion.h2>
            <motion.p
              className="mt-4 text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              A Full-Stack Developer passionate about building web applications.
            </motion.p>
            <motion.a
              href="#projects"
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img
              src="https://via.placeholder.com/150" // Replace with your actual image URL
              alt="Pooja Shingate"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}

      <section id="about" className="h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I'm a developer skilled in React, Node.js, Tailwind CSS, and more. I create efficient, scalable, and user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {["JavaScript", "React", "Node.js", "Tailwind CSS", "HTML", "CSS", "Express", "MongoDB"].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}


      {/*powerallydigital link- https://uatpowerally.shriramfinance.me:8082/UATDigital_pbi/downloadApkFile?filename=Powerally%20Digital.apk */}
      <section id="projects" className="py-24 min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"].map((project, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold">{project}</h3>
                <p className="mt-2 text-gray-700">
                  A brief description of the project with tech used and the outcome.
                </p>
                <a href="#" className="text-blue-600 mt-4 inline-block">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">My Resume</h2>

          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
            {/* Embedded Resume (Google Drive) */}
            <iframe
              src="https://drive.google.com/file/d/1b7MPuxaXNzW5SHuJ1gHjtiPuQHz82cHB/preview"
              className="w-full h-[70vh] border-0 rounded-lg shadow-md"
              allow="autoplay"
            ></iframe>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1b7MPuxaXNzW5SHuJ1gHjtiPuQHz82cHB"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="px-2 text-3xl md:text-4xl font-bold">Contact Me</h2>
          <form className="mt-8 space-y-6 max-w-md mx-auto">
            <input className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" type="text" placeholder="Your Name" />
            <input className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" type="email" placeholder="Your Email" />
            <textarea className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" rows="4" placeholder="Your Message"></textarea>
            <button className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </section>







      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2025 Pooja Shingate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;


// /referemce portfolio site

// https://master-portfolio-one.vercel.app/masterPortfolio/home