import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCodi } from "@fortawesome/free-brands-svg-icons"; // for LinkedIn
import Papa from "papaparse";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import myImage from '../src/Images/IMG_20220212_162739_625.jpg';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SplashScreen from './SplashScreen.js'
const Portfolio = () => {
  const form = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [skillsData, setSkillsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: "Project 1",
      shortDesc: "A brief description of the project.",
      longDesc: "This project is built using React, Node.js, and Tailwind CSS. It handles user authentication and API integration.",
      github: "https://github.com/yourname/project1",
      live: "https://yourproject1.com"
    },
    {
      title: "Project 2",
      shortDesc: "Another awesome project.",
      longDesc: "Full-stack web application using MongoDB, Express, and React.",
      github: "",
      live: ""
    },
    {
      title: "Project 3",
      shortDesc: "A mobile-first project.",
      longDesc: "Developed with React Native and Firebase for real-time updates.",
      github: "https://github.com/yourname/project3",
      live: ""
    }
  ];



  // useEffect(() => {
  //   const aboutURL =
  //     "https://api.sheetbest.com/sheets/43535dab-1b87-4f87-97b4-5b4b383d3194/tabs/Sheet1";
  //   const skillsURL =
  //     "https://api.sheetbest.com/sheets/43535dab-1b87-4f87-97b4-5b4b383d3194/tabs/Sheet2";
  //   const projectsURL =
  //     "https://api.sheetbest.com/sheets/43535dab-1b87-4f87-97b4-5b4b383d3194/tabs/Sheet3";

  //   async function fetchData() {
  //     try {
  //       const [aboutRes, skillsRes, projectsRes] = await Promise.all([
  //         fetch(aboutURL).then((res) => res.json()),
  //         fetch(skillsURL).then((res) => res.json()),
  //         fetch(projectsURL).then((res) => res.json()),
  //       ]);

  //       setAboutData(aboutRes[0]); // first row for About
  //       const result = skillsRes.map((item) => {
  //         return item.skills

  //       })
  //       setSkillsData(result);

  //       // console.log(result)
  //       // console.log(skillsRes, 'dskills')
  //       setProjectsData(projectsRes);
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);/
  useEffect(() => {
    // Each tab (sheet) has its own gid
    const aboutURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcer3SOgmllK3tptS2WNasXrhusht7GnLj4Fj7aGzGWowkPPANz5QRFqeBLeJk4N_cbYFOASxgmh8i/pub?output=csv&gid=0"; // Sheet1
    const skillsURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcer3SOgmllK3tptS2WNasXrhusht7GnLj4Fj7aGzGWowkPPANz5QRFqeBLeJk4N_cbYFOASxgmh8i/pub?output=csv&gid=932420665"; // replace with Sheet2 gid
    const projectsURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcer3SOgmllK3tptS2WNasXrhusht7GnLj4Fj7aGzGWowkPPANz5QRFqeBLeJk4N_cbYFOASxgmh8i/pub?output=csv&gid=1339665445"; // replace with Sheet3 gid

    async function fetchData() {
      try {
        const [aboutRes, skillsRes, projectsRes] = await Promise.all([
          fetch(aboutURL).then((res) => res.text()),
          fetch(skillsURL).then((res) => res.text()),
          fetch(projectsURL).then((res) => res.text()),
        ]);

        // Parse CSV to JSON
        const aboutParsed = Papa.parse(aboutRes, { header: true }).data;
        const skillsParsed = Papa.parse(skillsRes, { header: true }).data;
        const projectsParsed = Papa.parse(projectsRes, { header: true }).data;

        // Example: About (first row only)
        setAboutData(aboutParsed[0]);

        // Example: Skills (map a specific column)
        const skills = skillsParsed.map((item) => item.skills);
        setSkillsData(skills);

        // Example: Projects (all rows)
        setProjectsData(projectsParsed);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div><SplashScreen /></div>;
  }

  if (!aboutData) {
    return <div>No About data found</div>;
  }

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4">{project.longDesc}</p>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // alert('ss')

    emailjs
      .sendForm(
        'service_8pqmkwj',   // Replace with your actual EmailJS service ID
        'template_632v95n',  // Replace with your actual template ID
        form.current,
        'mxd55rSj9aQLsCC6M'    // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent!');
          form.current.reset(); // reset the form
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message failed to send.');
        }
      );
  };
  return (

    <div>

      <nav className="bg-navbar-font text-white p-2 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">

          {/* Left Section - Logo and Name */}
          <div className="flex items-center space-x-2">
            {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
            <FontAwesomeIcon icon={faCode} className="h-8 w-8" />

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
            <a href="#about" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-navbar-font hover:shadow-md hover:scale-105">About</a>
            <a href="#resume" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-navbar-font hover:shadow-md hover:scale-105">Resume</a>
            <a href="#projects" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-navbar-font hover:shadow-md hover:scale-105">Projects</a>
            <a href="#skills" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-navbar-font hover:shadow-md hover:scale-105">Skills</a>
            <a href="#contact" className="px-4 py-2 rounded-lg text-white font-medium transition duration-300 ease-in-out hover:bg-navbar-font hover:shadow-md hover:scale-105">Contact</a>
          </div>


          {/* Right Section - Links and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center ">
              <a href="https://www.linkedin.com/in/pooja-shingate-137025212/" target="_blank"
                rel="noopener noreferrer" className="hover:bg-navbar-font px-3 py-2 rounded">LinkedIn</a>
              <a href="https://github.com/Pooja-github06" target="_blank"
                rel="noopener noreferrer" className="hover:bg-navbar-font px-3 py-2 rounded">Github</a>
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
        {/* {isOpen && (
          <div className="md:hidden bg-blue-500 px-6 py-4">
            <a href="#about" className="block py-2 hover:bg-blue-400 rounded" >About</a>
            <a href="#resume" className="block py-2 hover:bg-blue-400 rounded">Resume</a>
            <a href="#projects" className="block py-2 hover:bg-blue-400 rounded">Projects</a>
            <a href="#contact" className="block py-2 hover:bg-blue-400 rounded">Contact</a>
            <a href="https://www.linkedin.com/in/pooja-shingate-137025212/" target="_blank"
              rel="noopener noreferrer" className="hover:bg-navbar-font px-3 py-2 rounded">LinkedIn</a>
            <a href="https://github.com/Pooja-github06" target="_blank"
              rel="noopener noreferrer" className="hover:bg-navbar-font px-3 py-2 rounded">Github</a>
          </div>
        )} */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-600 to-blue-400 px-6 py-4 transition-all duration-300 ease-in-out">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-blue-300 rounded text-white"
            >
              About
            </a>
            <a
              href="#resume"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-blue-300 rounded text-white"
            >
              Resume
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-blue-300 rounded text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-blue-300 rounded text-white"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-shingate-137025212/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-blue-300 rounded text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Pooja-github06"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-blue-300 rounded text-white"
            >
              Github
            </a>
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


      {/* About Section */}

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#38124A] py-20"
      >
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-white text-1xl md:text-5xl font-extrabold font-sans tracking-wide mb-5">About Me</h2>

          <div
            className="bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-12 rounded-lg bg-black bg-opacity-50"
            style={{ backgroundImage: "url(https://source.unsplash.com/1600x900/?technology)" }}
          >
            {/* Left: Intro */}
            <motion.div
              className="text-white max-w-lg text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm {aboutData.name} </h2>
              <p className="mt-4 text-xl md:text-2xl">
                {aboutData.description}.
              </p>
              <a
                href="#projects"
                className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-all"
              >
                View My Work
              </a>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg mt-10 md:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={myImage}
                alt="Pooja Shingate"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#38124A]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold font-sans tracking-wide">
            Skills
          </h2>

          <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-white/20 text-white transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />


      {/*powerallydigital link- https://uatpowerally.shriramfinance.me:8082/UATDigital_pbi/downloadApkFile?filename=Powerally%20Digital.apk */}
      <section
        id="projects"
        className="py-16 bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#38124A]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold font-sans tracking-wide text-center">
            Projects
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">{project.shortDesc}</p>
                <span className="text-blue-600 mt-4 inline-block">View Project</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Resume Section */}
      <section id="resume" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#FFFFFF] px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-4xl font-extrabold font-sans tracking-wide">My Resume</h2>

          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
            {/* Embedded Resume (Google Drive) */}
            <iframe
              src="https://drive.google.com/file/d/1AGUvksuYOXCgP2os5iQgW9n7ETHWuAIl/preview"
              className="w-full h-[70vh] border-0 rounded-lg shadow-md"
              allow="autoplay"
            ></iframe>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1AGUvksuYOXCgP2os5iQgW9n7ETHWuAIl"
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
      {/* <section id="contact" className="h-screen flex items-center justify-center  bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#38124A]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white text-4xl md:text-4xl font-extrabold font-sans tracking-wide">Contact Me</h2>

          <form className="mt-8 space-y-6 max-w-md mx-auto">
            <input className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" type="text" placeholder="Your Name" />
            <input className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" type="email" placeholder="Your Email" />
            <textarea className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none" rows="4" placeholder="Your Message"></textarea>
            <button className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600">
              Send Message</button>
          </form>
        </div>
      </section>
 */}
      {/* <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#38124A] py-16 px-4"
      > */}
      <section
        id="contact"
        className="scroll-mt-24 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#EC4186] via-[#38124A] to-[#38124A] py-16 px-4"
      >
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center">
          Contact Us
        </h2>

        {/* Transparent Card */}
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/20">
          {/* <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              ref={form}
              onClick={(e) => sendEmail(e)}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form> */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>






      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2025 Pooja Shingate. All rights reserved.</p>
      </footer>
    </div >
  );
};

export default Portfolio;


// /referemce portfolio site

// https://master-portfolio-one.vercel.app/masterPortfolio/home