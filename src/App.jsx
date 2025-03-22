import React, { useState,useEffect } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {  SiJavascript, SiReact, SiNodedotjs, SiPython, SiPhp, SiHtml5, SiCss3, SiMongodb, SiMysql, SiLaravel, SiGit, SiPostgresql, SiBootstrap, SiTailwindcss, SiNestjs } from "react-icons/si";
import { FaCode, FaDatabase, FaLaptopCode, FaGlobe,FaMobileAlt, FaPalette, FaUserCheck, FaBrush } from "react-icons/fa";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
import { FaExternalLinkAlt } from "react-icons/fa";
import "./App.css";



const projectDetails = [
  {
    title: "Bhavika Pachauri - Portfolio",
    description: "A personal portfolio showcasing my expertise as a Full Stack Developer.",
    features: [
      "✅ Clean and modern UI design.",
      "✅ Sections for resume, services, skills, and portfolio.",
      "✅ Easy navigation with smooth transitions.",
      "✅ Developed using HTML, CSS, JavaScript, and modern frameworks."
    ],
    link: "https://bhavika02portfolio.netlify.app/ ",
    image: "/portfolio.png"
  },
  {
    title: "TrustCar",
    description: "A complete web app designed for seamless car buying and selling.",
    features: [
      "✅ Buy and sell cars seamlessly.",
      "✅ Secure payment gateway for hassle-free transactions.",
      "✅ Verified listings for trusted deals.",
      "✅ Available on Web & Mobile."
    ],
    link: "https://trustcars.in/",
    image: "/trustcar.png"
  },
  {
    title: "CardioCare",
    description: "A comprehensive healthcare system focused on heart health management.",
    features: [
      "✅ Prevention, treatment, and management of heart-related conditions.",
      "✅ Secure patient data management with MySQL.",
      "✅ User-friendly interface built with HTML, CSS, and JavaScript.",
      "✅ Robust backend powered by PHP."
    ],
    link: "https://cardiocare.com/",
    image: "/cardiocare.png"
  },
  {
    title: "Ecommerce PHP",
    description: "A full-fledged eCommerce platform for online shopping.",
    features: [
      "✅ Secure and responsive eCommerce website.",
      "✅ Categories for Men, Women, Kids, and Electronics.",
      "✅ Shopping cart, login/register, and checkout functionality.",
      "✅ Developed using PHP, MySQL, HTML, CSS, and JavaScript."
    ],
    link: "https://ecommercephp.com/",
    image: "/ecommerce.png"
  },
 
  
];
const services = [
 
  {
    icon: <FaLaptopCode />, 
    title: "Web Development", 
    description: "Expert in end-to-end web application development, covering both frontend and backend technologies.", 
    bgColor: "bg-purple-900 hover:bg-purple-700"
  },
 
  {
    icon: <FaUserCheck />, 
    title: "UI/UX Design", 
    description: "Crafting engaging and intuitive interfaces for better user experience and accessibility.", 
    bgColor: "bg-purple-900 hover:bg-purple-700"
  },
  {
    icon: <FaGlobe />, 
    title: "Web Designing", 
    description: "Crafting visually stunning and user-friendly website designs with HTML, CSS, JavaScript, and modern frameworks.", 
    bgColor: "bg-purple-900 hover:bg-purple-700"
  },
  {
    icon: <FaBrush />, 
    title: "Logo Designing", 
    description: "Designing visually appealing logos and brand identities with Adobe Illustrator and Photoshop.", 
    bgColor: "bg-purple-900 hover:bg-purple-700"
  }

];
const skills2 = [
  "🚀 WEB APP", "🟡 JAVASCRIPT", "🟢 NODE.JS",
  "💜 PHP", "🎯 LARAVEL", "🛢️ MYSQL", "🐘 POSTGRESQL",
  "💻 GIT", "🧩 TYPESCRIPT", "⚛️ REACT", "🎨 TAILWIND CSS",
  "📦 EXPRESS.JS", "🌐 NESTJS",  "📱 REST API",
  "📊 REDUX",  "🌿 MONGODB"
];

const skills = [
  { icon: <SiJavascript className="text-yellow-500 text-5xl" />, label: "JavaScript", level: 85 },
  { icon: <SiReact className="text-blue-400 text-5xl" />, label: "React", level: 85 },
  { icon: <SiNodedotjs className="text-green-500 text-5xl" />, label: "Node.js", level: 80 },
  { icon: <SiPhp className="text-purple-400 text-5xl" />, label: "PHP", level: 85 },
  { icon: <SiHtml5 className="text-orange-500 text-5xl" />, label: "HTML5", level: 95 },
  { icon: <SiCss3 className="text-blue-500 text-5xl" />, label: "CSS", level: 90 },
  { icon: <SiMongodb className="text-green-400 text-5xl" />, label: "MongoDB", level: 75 },
  { icon: <SiMysql className="text-blue-700 text-5xl" />, label: "MySQL", level: 90 },
  { icon: <SiPostgresql className="text-indigo-500 text-5xl" />, label: "PostgreSQL", level: 85 },
  { icon: <SiBootstrap className="text-purple-600 text-5xl" />, label: "Bootstrap", level: 90 },
  { icon: <SiTailwindcss className="text-blue-400 text-5xl" />, label: "Tailwind CSS", level: 70 },
  { icon: <SiNestjs className="text-red-500 text-5xl" />, label: "NestJS", level: 50 },
  { icon: <SiLaravel className="text-red-600 text-5xl" />, label: "Laravel", level: 70 },
  { icon: <SiGit className="text-orange-500 text-5xl" />, label: "Git", level: 90 },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate random sparkles
    const generateSparkles = () => {
      let tempSparkles = [];
      for (let i = 0; i < 50; i++) {
        tempSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
        });
      }
      setSparkles(tempSparkles);
    };
    generateSparkles();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimate(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="hero relative  min-h-screen text-white overflow-hidden">
      
    {/* Navbar */}
<nav className="fixed top-0 left-0 w-full flex justify-between items-center p-3 z-50 bg-black text-white shadow-md">
  <h1 className="text-xl font-bold">BHAVIKA PACHAURI</h1>

  {/* Desktop Menu */}
  <ul className="hidden md:flex md:space-x-5 space-x-4">
    {["Home", "Projects", "Services", "About", "Skills", "Contact"].map((item, index) => (
      <li key={index} className="relative cursor-pointer group">
        <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300 text-white" style={{textDecoration:"none"}}>
          {item}
        </a>
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </li>
    ))}
  </ul>

  {/* Social Links */}
  <div className="hidden md:flex md:space-x-4 space-x-3 mx-4 ">
    {[
      { Icon: FaLinkedin, link: "https://www.linkedin.com/in/bhavika-pachauri/" },
      { Icon: FaGithub, link: "https://github.com/BhavikaPachauri/" },
      { Icon: BsWhatsapp, link: "https://wa.me/8449296898" },
      { Icon: CiMail, link: "mailto:bhavikapachauri02@gmail.com" }
    ].map(({ Icon, link }, index) => (
      <a key={index} href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
        <Icon className="cursor-pointer text-xl transition-all duration-300 hover:text-purple-400 hover:scale-110 text-white" />
      </a>
    ))}
  </div>

  {/* Mobile Menu Button */}
  <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-16 left-0 w-full bg-purple-900 p-5 flex flex-col space-y-4 text-center md:hidden transition-all duration-300">
      {["Home", "Projects", "Services", "About", "Skills", "Contact"].map((item, index) => (
        <a 
          key={index} 
          href={`#${item.toLowerCase()}`} 
          className="hover:text-gray-300 text-white" 
          onClick={() => setMenuOpen(false)}
          style={{textDecoration:"none"}}
        >
          {item}
        </a>
      ))}
      <div className="flex justify-center space-x-4 mt-4">
        {[
          { Icon: FaLinkedin, link: "https://www.linkedin.com/in/bhavika-pachauri/" },
          { Icon: FaGithub, link: "https://github.com/BhavikaPachauri/" },
          { Icon: BsWhatsapp, link: "https://wa.me/8449296898" },
          { Icon: CiMail, link: "mailto:bhavikapachauri02@gmail.com" }
        ].map(({ Icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
            <Icon className="cursor-pointer text-xl hover:text-purple-400 hover:scale-110 transition-all duration-300 text-white"  />
          </a>
        ))}
      </div>
    </div>
  )}
</nav>

      
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center h-screen mt-10 space-y-6 md:space-y-0 md:space-x-10 bg-[#0a192f] overflow-hidden">
      {/* Sparkle Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              top: `${sparkle.y}%`,
              left: `${sparkle.x}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Profile Image with Hover & Glow Effect */}
      <motion.div
        className="hero relative top-10 md:top-0 mb-5 w-40 h-40 md:w-48 md:h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.8)",
        }}
        transition={{ duration: 0.3 }}
      >
        <img src="/bg_11.jpg" alt="Profile" className="w-full h-full object-cover" />
      </motion.div>

      {/* Text Content with Animations */}
      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg   "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I am <span className="text-purple-400 ">Bhavika Pachauri</span>
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-4xl text-purple-300 font-semibold mt-2 drop-shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-300 mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I create, develop, and bring ideas to life with passion. I enjoy learning, solving challenges, and
          innovating. Every part of the process excites me. I love what I do.
          <p className="flex flex-wrap gap-4 justify-center mt-4">
  <a 
    href="tel:844926898" 
    style={{textDecoration:"none"}}
    className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold py-2 px-3 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform duration-300 hover:scale-105 no-underline"
  >
    Hire Me
  </a>
  <a 
    href="https://drive.google.com/file/d/1WcLVL6Gtm3427arD57bOT1xsNRcDMqYy/view?usp=drivesdk" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{textDecoration:"none"}}

    className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 font-semibold py-2 px-3 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition-transform transform duration-300 hover:scale-105 no-underline"
  >
    See My Resume
  </a>
</p>


        </motion.p>
      </motion.div>
    </section>

      {/* Skills Banner */}
      <section className="skillBanner mt-5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 py-2 text-center">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-10 text-white  font-semibold tracking-wide"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {skills2.map((skill, index) => (
            <span
              key={index}
              className="hover:text-yellow-300 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
      
    <section id="skills" className="bg-black py-10 px-5 text-center relative overflow-hidden">
      {/* Spark Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="spark"></span>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-purple-400 relative z-10">My Skills</h2>
      <p className="text-gray-400 text-sm relative z-10">WHAT I CAN DO</p>

      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-lg p-5 flex flex-col items-center shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.6)" }}
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
            <p className="text-white text-lg font-semibold mt-2">{skill.label}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 mt-2 rounded-full overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 h-full"
                initial={{ width: 0 }}
                animate={{ width: `${animate ? skill.level : 0}%` }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
              ></motion.div>
            </div>

            <p className="text-gray-400 text-sm mt-2">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CSS for Spark Animation */}
      <style jsx>{`
        .spark {
          position: absolute;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          opacity: 0.7;
          animation: floatSpark 5s infinite ease-in-out;
        }

        .spark:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
        .spark:nth-child(2) { top: 30%; left: 70%; animation-delay: 1s; }
        .spark:nth-child(3) { top: 50%; left: 40%; animation-delay: 2s; }
        .spark:nth-child(4) { top: 80%; left: 10%; animation-delay: 3s; }
        .spark:nth-child(5) { top: 60%; left: 90%; animation-delay: 4s; }
        .spark:nth-child(6) { top: 20%; left: 50%; animation-delay: 2.5s; }
        .spark:nth-child(7) { top: 40%; left: 80%; animation-delay: 1.5s; }
        .spark:nth-child(8) { top: 70%; left: 30%; animation-delay: 3.5s; }
        .spark:nth-child(9) { top: 90%; left: 60%; animation-delay: 4.5s; }
        .spark:nth-child(10) { top: 15%; left: 85%; animation-delay: 0.5s; }
        .spark:nth-child(11) { top: 35%; left: 25%; animation-delay: 1.2s; }
        .spark:nth-child(12) { top: 55%; left: 75%; animation-delay: 2.8s; }
        .spark:nth-child(13) { top: 75%; left: 50%; animation-delay: 3.8s; }
        .spark:nth-child(14) { top: 25%; left: 10%; animation-delay: 2.2s; }
        .spark:nth-child(15) { top: 85%; left: 40%; animation-delay: 4.2s; }

        @keyframes floatSpark {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
      `}</style>
    </section>

    <section
      id="projects"
      className="relative bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20 px-6 text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-500 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 opacity-20 blur-3xl"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="floating-particle"></span>
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center relative z-10">
        <motion.h2
          className="text-5xl font-bold text-purple-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          My Recent Work
        </motion.p>
      </div>

    {/* Project Cards Section */}
{projectDetails.map((project, index) => (
  <motion.div
    key={index}
    className="mt-12 flex flex-col lg:flex-row items-center max-w-6xl mx-auto bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-8 rounded-2xl shadow-2xl border border-purple-500 transform transition hover:scale-105 hover:shadow-purple-500/50"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Text Section */}
    <div className="lg:w-1/2 text-left">
      <h3 className="text-3xl font-bold text-white drop-shadow-lg">{project.title}</h3>
      <p className="text-gray-300 mt-4 text-lg leading-relaxed">{project.description}</p>

      <ul className="text-gray-400 mt-5 space-y-2">
        {project.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      <a
        href={project.link}
        className="mt-6 inline-flex items-center text-purple-300 hover:text-purple-400 transition-all"
      >
        View Live Project <FaExternalLinkAlt className="ml-2" />
      </a>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full max-w-md rounded-xl shadow-lg border-4 border-purple-500 hover:border-purple-300 transition-all"
        whileHover={{ scale: 1.1 }}
      />
    </div>
  </motion.div>
))}
      {/* CSS for Floating Particles */}
      <style jsx>{`
        .floating-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: floatParticles 6s infinite ease-in-out alternate;
        }

        .floating-particle:nth-child(odd) {
          animation-duration: 8s;
        }

        .floating-particle:nth-child(1) { top: 10%; left: 20%; }
        .floating-particle:nth-child(2) { top: 30%; left: 70%; }
        .floating-particle:nth-child(3) { top: 50%; left: 40%; }
        .floating-particle:nth-child(4) { top: 80%; left: 10%; }
        .floating-particle:nth-child(5) { top: 60%; left: 90%; }

        @keyframes floatParticles {
          0% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.6; }
        }
      `}</style>
    </section>

    <section id="about" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 opacity-20 blur-3xl"></div>

      <div className="text-center">
        <h2 className="text-4xl font-bold text-purple-400 relative">
          Knowledge & Experience
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-6">Education</h3>
          <div className="relative border-l-4 border-purple-500 pl-6 space-y-6">
            { [
               {
                year: "2017 - 2019",
                title: "Senior Secondary (X)",
                institution: "Prem Vidhyalay Girl’s Intermediate College, Agra",
                percentage: "93.6%"
              },
              {
                year: "2019 - 2021",
                title: "Higher Secondary (XII) - PCM",
                institution: "Prem Vidhyalay Girl’s Intermediate College, Agra",
                percentage: "93.3%"
              },
  {
    year: "2021 - 2024",
    title: "Bachelor of Science in Computer Science",
    institution: "Dayalbagh Educational Institution, Agra",
    percentage: "86.3%"
  }
 
 
].map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gray-900 p-4 rounded-lg transition-all"
              >
                <FaGraduationCap className="absolute -left-8 top-1 text-3xl text-purple-400 group-hover:text-white transition-all" />
                <p className="text-sm text-purple-400">{edu.year}</p>
                <h4 className="text-lg font-semibold">{edu.title}</h4>
                <p className="text-gray-400 text-sm">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.percentage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-6">Work Experience</h3>
          <div className="relative border-l-4 border-purple-500 pl-6 space-y-6">
            {[
  {
    year: "February 2024 - August 2024",
    title: "Full Stack Developer Intern",
    company: "Technosters Technologies Pvt Ltd (Onsite)",
  },
   {
    year: "July 2024 - October 2024",
    title: "Full Stack Developer Intern",
    company: "Sits Company (Onsite)",
  },
   {
    year: "October 2024 - November 2024",
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC) 2024",
  },
   {
    year: "October 2024 - Current",
    title: "Full Stack Developer ",
    company: "Sits Company (Onsite)",
  },
 

].map((work, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gray-900 p-4 rounded-lg transition-all"
              >
                <FaBriefcase className="absolute -left-8 top-1 text-3xl text-purple-400 group-hover:text-white transition-all" />
                <p className="text-sm text-purple-400">{work.year}</p>
                <h4 className="text-lg font-semibold">{work.title}</h4>
                <p className="text-gray-400 text-sm">{work.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <section id="services" className="py-16 bg-gradient-to-br from-purple-950 to-black text-white relative overflow-hidden">
      {/* Sparkling Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: Math.random() * 5 + 3, ease: "linear" }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <h2 className="text-4xl font-bold text-purple-400">Services</h2>
        <p className="text-gray-400 text-sm">Which I'm Expert At</p>
      </div>

      {/* Service Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-5 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`group relative p-6 rounded-lg transition-all duration-300 shadow-lg ${service.bgColor}`}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-3xl text-purple-300 group-hover:text-white transition-all duration-300"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <section
      id="contact"
      className="py-20 flex flex-col justify-center items-center text-white relative bg-black overflow-hidden"
    >
      {/* Space Background with Stars & Moon */}
      <div className="absolute inset-0 bg-black">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: Math.random() * 5 + 3, ease: "linear" }}
          />
        ))}
        {/* Moon */}
        
      </div>

      {/* Floating Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-56 h-56 rounded-full bg-purple-500 opacity-20 blur-3xl"
        ></motion.div>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 text-center px-5 max-w-lg mx-auto">
        <p className="text-purple-300 text-lg font-medium tracking-wide">Want to start a project?</p>
        <h1 className="text-4xl md:text-4xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Let's have a chat
        </h1>

        {showEmail ? (
          <motion.a
            href="mailto:bhavikapachauri02@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textDecoration: 'none' }}
            className="text-lg text-purple-300 bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg"
          >
            bhavikapachauri02@gmail.com
          </motion.a>
        ) : (
          <motion.button
            onClick={() => setShowEmail(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:bhavikapachauri02@gmail.com"
            className="mt-4 text-lg  text-white flex justify-center items-center gap-3  px-20 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition-all"
          >
            Click to reveal email <FaArrowRight />
          </motion.button>
        )}
      </div>
    </section>
    <section
      className="relative bg-[url(../bg.jpg)] bg-cover bg-center bg-no-repeat py-20 text-white flex items-center justify-center"
      
    >
      {/* Dark Overlay */}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm <span className="text-purple-400">Available</span> for Full Stack Development
        </motion.h2>

        <motion.a
          href="mailto:bhavikapachauri02@gmail.com"
          className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-xl transition-all transform hover:scale-110 focus:ring-4 focus:ring-purple-300 "        
          style={{ textDecoration: 'none' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>
      </div>
    </section>
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* Space Background with Stars & Moon */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: Math.random() * 5 + 3, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-around items-start text-center md:text-left z-10 gap-10">
        {/* About Section */}
        <motion.div
          className="md:w-1/3 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mx-3 text-info">About</h3>
          <p className="text-gray-300 ">
            I am Bhavika Pachauri, a Full Stack Developer with expertise in front-end and back-end technologies.
          </p>
          <div className="flex  justify-center space-x-4 mt-4">
            <a href="mailto:bhavikapachauri02@gmail.com" className="text-white hover:text-purple-300 transition">
              <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/BhavikaPachauri" className="text-white hover:text-purple-300 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhavika-pachauri-66161a243/" className="text-white hover:text-purple-300 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="tel:8449296898" className="text-white hover:text-purple-300 transition">
            <FaPhone size={24} />
            </a>
            <a href="https://wa.me/8449296898" className="text-white hover:text-purple-300 transition">
            < BsWhatsapp size={24} />
            </a>
           
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="w-full md:w-1/3 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl  font-bold   md:mx-0  text-info">Quick Links</h3>
          <ul className="space-y-2 ">
            <li><a href="#" className="hover:text-purple-300 transition  text-white" style={{ textDecoration: 'none' }} >Home</a></li>
            <li><a href="#about-section" className="hover:text-purple-300  transition text-white" style={{ textDecoration: 'none' }}>About </a></li>
            <li><a href="tel:8449296898" className="hover:text-purple-300  transition text-white" style={{ textDecoration: 'none' }}>Contact </a></li>
            <li><a href="#" className="hover:text-purple-300  transition text-white" style={{ textDecoration: 'none' }}>Service </a></li>
            
          </ul>
        </motion.div>

        {/* Contact Section */} 
        <motion.div
          className="w-full md:w-1/3 space-y-4 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl mx-4 text-info   font-bold ">Contact</h3>
          <ul className="space-y-2 mx-5 px-5">
            <li className="flex justify-center items-center space-x-2">
              <FaMapMarkerAlt size={18} className="text-purple-300" />
              <span className="text-white">Fatehabad,Agra</span>
            </li>
            <li className="flex justify-center items-center space-x-2">
              <FaPhone size={18} className="text-purple-300" />
              <a href="tel:8449296898"  className="text-white" style={{ textDecoration: 'none' }}>8449296898</a>
            </li>
            <li className="flex justify-center items-center space-x-2">
              <CiMail size={18} className="text-purple-300" />
              <a href="mailto:bhavikapachauri02@gmail.com"  className="text-white" style={{ textDecoration: 'none' }}>bhavika@gmail.com</a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="relative text-center mt-10 border-t border-gray-800 pt-4 z-10">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved | Made with ❤️ by 
          <span className="text-purple-400"> Bhavika Pachauri</span>
        </p>
      </div>
    </footer>
    </div>

  );
};

export default App;
