import linkedinImage from "../images/linkedin.png";
import instagramImage from "../images/instagram.png";
import emailImage from "../images/email.png";
import AboutMe from "./AboutMe";
import { useState } from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";

const Home = () => {

    const [activeScreen,setactiveScreen]=useState("about");
    return (
        <div className="home">
        <div className="header"> 
            <div className="name-work">
            <p className="name">Karthick S </p>
            <p className="work"> Full Stack Developer @ Capgemini</p>
            </div>
           <div className="links-nav">
            <button onClick={()=>setactiveScreen("about")}>About Me</button>
           <button onClick={()=>setactiveScreen("experience")}>Experience</button>
           <button onClick={()=>setactiveScreen("skills")}>Skills</button>
           <button onClick={()=>setactiveScreen("projects")}>Projects</button>
           <button onClick={()=>setactiveScreen("education")}>Education</button>
           </div>
       </div><hr/>
      <div>
      {activeScreen==="about"  && <AboutMe/>}
      {activeScreen==="experience"&& <Experience/>}
      {activeScreen==="skills" && <Skills/>}
      {activeScreen==="projects" && <Projects/>}
      {activeScreen==="education" && <Education/>}
      </div>
      <hr/>
      <center><p>Let's Connect</p></center>
       <div className="social-links">

                <a href="https://www.linkedin.com/in/karthicks1508" target="_blank" rel="noopener noreferrer"><img src={linkedinImage} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/smart_karthick_15_/" target="_blank" rel="noopener noreferrer" ><img src={instagramImage} alt="Instagram" /></a>
                <a href="mailto:karthicksasikumar15@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={emailImage} alt="Email" /></a>
           <br/> </div>
        </div>
    );
}

export default Home;
