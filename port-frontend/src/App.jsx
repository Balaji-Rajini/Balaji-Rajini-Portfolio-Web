import PROFILE from "./assets/profile.jpeg"

import JS from "./assets/js.png"
import CS from "./assets/css-3.png"
import HTML from "./assets/html.png"
import NODE from "./assets/node-js.png"
import DBS from "./assets/data-server.png"
import { FaUserTie } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdConnectWithoutContact, MdOutlinePerson } from "react-icons/md";
import { FaConfluence, FaGraduationCap, FaRebel, FaSchool } from "react-icons/fa";
import {  FaServer, FaUserShield ,FaUserAstronaut} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub, FaLinkedin , FaEnvelope,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaKey,
FaMedal,
  FaCookieBite
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiFirebase,
  SiMarko,
  SiMaas
} from "react-icons/si";
import React, { useState } from "react"
import axios from "axios";
function App() {


const [formData , setFormdata] = useState({
  name:"",
  email:"",
  enquiry:""
})

const handleChange=(e)=>{
setFormdata({
  ...formData,
  [e.target.name]:e.target.value,
})
}

const handleSubmit= async(e)=>{
e.preventDefault();

try{
 await fetch(
 "https://balaji-rajini-portfolio-web-1.onrender.com/api/contact",
  // await fetch(
  // "http://localhost:5000/api/contact",   
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);



alert("Enquiry Submitted Successfully")
setFormdata({
  name:"",
  email:"",
  enquiry:"",
})
}catch(err){
  console.log(err)
  alert("failed to submit enquiry...")
}


}

  return (
  
<>

{/* Navbar for the PORTFOLIO */}

<nav className="bg-zinc-900 flex justify-between items-center max-w-screen px-4 py-5 rounded-xl mx-12 mt-8 shadow-lg  shadow-teal-400 z-10 
backdrop-blur-lg  top-0 sticky min-w">
  <h1 className="text-teal-200  px-4  text-2xl font-extrabold font-['Playfair_Display'] italic ">
    BR
  </h1>

  <div className="flex gap-8 text-zinc-200 px-4">
    <a href="#about" className="hover:text-teal-400 cursor-pointer font-['Outfit'] text-lg ">About</a>
    <a href="#education" className="hover:text-teal-400 cursor-pointer font-['Outfit'] text-lg">Education</a>
    <a  href="#skills" className="hover:text-teal-400 cursor-pointer font-['Outfit'] text-lg">Skills</a>
        <a href="#contact" className="hover:text-teal-400 cursor-pointer font-['Outfit'] text-lg">Contact</a>

  </div>
</nav>












{/* FRONT VIEW OF THE PORTFOLIO */}
<div className="text-zinc-100 pt-12 md:pt-24 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12">
  <img src={PROFILE} alt="img here"   className="transition-all duration-1000 translate-x-0  overflow-visible shadow-lg  saturate-200 
sm:justify-center 
 shadow-teal-400 w-52 md:w-64 lg:w-80  animate-slideInLeft
  hover:scale-110"  />
<div className="font-sans text-zinc-400 pt-8 md:pt-24 text-center">
  <h1 className=" pb-8  text-4xl font-extrabold    hover:text-teal-400     text-center  block animate-slideInTop transition-transform duration-300
  hover:scale-102 text-whit font-['Sora']"> Balaji Rajini</h1>
<p className="text-2xl font-semibold text-center  hover:text-teal-300 animate-slideInRight transition-transform duration-300 
  hover:scale-102 text-white font-['Sora']">
Full Stack MERN Developer</p>



<div className="flex flex-wrap justify-center gap-6 p-8 animate-slideInRight">

  <a
    href="https://github.com/Balaji-Rajini"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl  text-white font-medium
    border border-teal-400 backdrop-blur-sm
    transition-all duration-300
    hover:bg-teal-500 hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/balaji-r-b59219365"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-xl  text-white font-medium
    border border-teal-400
    transition-all duration-300
    hover:bg-teal-500 hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
  >
    LinkedIn
  </a>

  <a
    href="#contact"
    className="px-6 py-3 rounded-xl bg-transparent text-teal-200 font-medium
    border 
    transition-all duration-300
    hover:bg-teal-500 hover:text-white hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
  >
    Contact Me
  </a>

</div>

<div className="flex flex-wrap justify-center gap-6 md:gap-12 p-4 md:p-12">
    <img src={HTML} alt="html-image" className=" transition-transform duration-300
  hover:scale-125 shadow-2xl shadow-red-500 animate-slideInBottom w-12 h-12 " />
    <img src={CS} alt="css image" className=" transition-transform duration-300
  hover:scale-125 shadow-lg shadow-sky-300 animate-slideInBottom w-12 h-12"/>
  <img src={JS} alt="javascript-image" className=" transition-transform duration-300
  hover:scale-125 shadow-lg shadow-amber-300 animate-slideInBottom w-12 h-12"/>
<img src={NODE} alt="node-image" className=" transition-transform duration-300
  hover:scale-125 shadow-lg shadow-teal-300 animate-slideInBottom w-12 h-12" />
  <img src={DBS} alt="batabase-image" className=" transition-transform duration-200
  hover:scale-125 shadow-lg shadow-sky-300 animate-slideInBottom w-12 h-12" />
</div>
</div>
</div>



<br /><br /><br /><br />
<hr className="h-px border-0 bg-linear-to-r from-transparent via-teal-500 to-transparent my-16" />




 {/* About Container */}

 <div>
  <div className="flex gap-4 justify-center pt-36 "> 
  <FaUserAstronaut className="text-4xl  text-teal-400" />
  <h2 id="about" className="text-teal-400 text-4xl font-extrabold font-['Outfit] text-center  ">About</h2>

</div>
<p className="text-lg text-zinc-400 leading-relaxed p-12 text-center">
  I am currently pursuing a B.Tech degree in Information Technology and have a strong passion for web development. As an aspiring MERN Stack Developer, I specialize in building modern, responsive, and user-friendly web applications using <span className="text-lg font-semibold  text-teal-400 mb-4 inline "> MongoDB, Express.js, React, and Node.js.</span> I am continuously learning industry-standard technologies and best practices to develop scalable solutions and contribute effectively to real-world projects.
</p>
</div>

<br /><br /><br />
<hr className="h-px border-0 bg-linear-to-r from-transparent via-teal-500 to-transparent my-16" />




{/* Education Container */}
<div className="flex gap-4 justify-center pt-36 ">
<FaGraduationCap className="text-4xl text-teal-400" /> 
 <h2 id="education" className="text-teal-400 text-4xl font-extrabold font-['Outfit] text-center  pb-8 ">Education </h2>
</div>
 <div className="min-h-fill pt-12  flex items-center justify-center">
<div className="w-full md:w-3/4 px-4">    <div className="flex flex-col md:flex-row gap-8 justify-center items-center ">


<div className="bg-zinc-900 border border-teal-700 rounded-2xl
                shadow-lg
                w-full md:w-1/2
                p-6 md:p-11
                hover:shadow-teal-500/20 hover:-translate-y-2
                transition-all duration-300">      
    <FaSchool className="text-teal-400 text-3xl  " />

 <h3 className="text-xl font-bold text-teal-400 mb-4">
          Higher Secondary Education
        </h3>
        
        <p className="text-zinc-400 leading-relaxed">

Completed Higher Secondary Education with a focus on academic excellence, strengthening critical thinking, communication, and quantitative reasoning skills.
        </p>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-500 font-semibold rounded-full lg:w-fit  flex gap-2 items-center"><FaMedal/>Score : 507/600</span>

      </div>



<div className="bg-zinc-900 border border-teal-700 rounded-2xl
                shadow-lg
                w-full md:w-1/2
                p-6 md:p-11 h-full lg:h-64
                hover:shadow-teal-500/20 hover:-translate-y-2
                transition-all duration-300">
                                     <FaGraduationCap className="text-teal-400 text-3xl" />
<h3 className="text-xl font-bold text-teal-400 mb-4">
          Bachelor's Degree
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Pursuing a Bachelor of Technology in Information Technology at
          Mookambigai College of Engineering.
        </p>

      </div>



    </div>
  </div>
</div> 




<br /><br /><br />
<br /><br /><br />
<hr className="h-px border-0 bg-linear-to-r from-transparent via-teal-500 to-transparent   " />
 




{/* Technical Skills */}


<br /><br /><br /><br /><br /><br />

<div className="flex gap-3 justify-center pt-24 ">
<FaLaptopCode className="text-4xl text-teal-400" />
    <h2 id="skills" className="text-teal-400 text-4xl font-extrabold font-['Outfit] text-center  " >Technical Skills</h2>
</div>
<div className=" mx-auto py-16   ">


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 place-items-center    "> 

    {/* Frontend */}

    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12">
  
    <div className="bg-zinc-900 border w-70 border-teal-500 rounded-2xl p-8 h-68 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
      <h3 className="text-2xl font-bold text-teal-400 mb-4">
        <FaConfluence/> Frontend
      </h3>

      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaHtml5 />HTML</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaCss3Alt />CSS</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaJs />JavaScript</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaReact  /> React</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiTailwindcss />Tailwind CSS</span>
      </div>
    </div>
</div>
</div>
    {/* Backend */}
    <div className="flex justify-center ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12  ">
 
    <div className="bg-zinc-900 border w-70 border-teal-500 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
      <h3 className="text-2xl font-bold text-teal-400 mb-4">
       <FaServer className="text-2xl font-bold text-teal-400 mb-4"/> Backend
      </h3>

      <div className="flex flex-wrap gap-3 ">
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaNodeJs />Node.js</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiExpress />Express.js</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaKey />REST API</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaRebel />Render</span>

      </div>
    </div>
 </div>
</div>
    {/* Database */}
    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12">
    
    <div className="bg-zinc-900 border w-70  border-teal-500  rounded-2xl p-6 h-68  hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
      <h3 className="text-2xl font-bold text-teal-400 mb-4">
       <FaDatabase className="text-2xl font-bold text-teal-400 mb-4" /> Database
      </h3>

      <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiMongoose />My SQL</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiMongodb />MongoDB</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiMongoose />Mongo-Atlas</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiMongoose />Mongo-Compass</span>

      </div>
    </div>
  </div>
</div>
    {/* Authentication */}
    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12">  
    <div className="bg-zinc-900 border w-70  border-teal-500 h-68 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
              <FaUserShield className="text-4xl text-teal-400" />
<h3 className="text-2xl font-bold text-teal-400 mb-4">
        Authentication
      </h3>

      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiJsonwebtokens />JWT</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><SiFirebase />Firebase Auth</span>
        <span className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full flex gap-2 items-center"><FaCookieBite />Cookies</span>
      </div>
    </div>
    </div>
</div>

  </div>
</div>


<hr className="h-px border-0 bg-linear-to-r from-transparent via-teal-500 to-transparent my-12" />



{/* CONTACT */}
<br />
<div className=" flex justify-center gap-3 pt-24">
<MdConnectWithoutContact className="text-4xl text-teal-400" />

  <h1  className="text-teal-400 text-4xl font-extrabold  text-center font-['Outfit] ">Contact </h1>
</div>
<div className="overflow-x-hidden">

<section
      id="contact"
      className="w-11/12 mx-auto  py-20 text-center"
    >
     

<div className="flex justify-center">
  <p className="max-w-2xl    text-zinc-300 px-4 pl-36  ">
    I'm currently open to internships, freelance projects, and
    full-stack development opportunities. Feel free to reach out!
  </p>
</div>


<section
  id="contact"
  className="w-full flex justify-center px-4 md:px-12 py-12"
>
<div className="w-full max-w-xl bg-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg   lg:-ml-28 ">
            <h2 className="text-4xl text-center text-teal-400 font-bold mb-8 ">
          Get In Touch 
        </h2>
<br />
        <form className="flex flex-col gap-6 " onSubmit={handleSubmit} >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-teal-300 border   p-4 rounded-lg bg-zinc-700 text-white outline-none"
          />

          <input
            type="email"  
            name="email"
            placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
            required
            className="w-full p-4   border-teal-300 border rounded-lg bg-zinc-700 text-white outline-none"
          />

          <textarea
            name="enquiry"
            placeholder="Your Enquiry"
            rows="5"
            value={formData.enquiry}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg  border-teal-300 border bg-zinc-700 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>

      
    </section>







<div className="flex flex-wrap justify-center gap-4 md:gap-6 pb-12 px-4">
        <a
          href="mailto:balajitheprogrammer@gmail.com?Subject=Portfolio Inquiry"
          className="flex items-center gap-3 px-6 py-3 
          bg-teal-600 text-white rounded-xl
          transition-all duration-300
          hover:bg-teal-500 hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
        >
          <FaEnvelope />
          Email Me
        </a>

        <a
          href="https://github.com/Balaji-Rajini"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3
          bg-zinc-900 text-white border border-teal-500
          rounded-xl transition-all duration-300
          hover:bg-teal-600 hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/balaji-r-b59219365"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3
          bg-zinc-900 text-white border border-teal-500
          rounded-xl transition-all duration-300
          hover:bg-teal-600 hover:-translate-y-1
          hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>

<div className="mt-16 border-t border-teal-800 pt-6 text-center px-4">
          <p className="text-zinc-400">
          © 2026 Balaji R. Built with React & Express.js
        </p>
      </div>
    </section>
  </div>  



    

</>





)
}

export default App