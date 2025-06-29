import React, { useEffect,useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/animations.css";
import "./styles/Portfolio.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [showMenu,setShowmenu]=useState(false);
  return (
    
  <div className="portfolio-wrapper">
        <div id="sections-container" onMouseEnter={()=>setShowmenu(true)} onMouseLeave={()=>setShowmenu(false)}>
          <button id="section-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ cursor: "pointer" }}
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          {showMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-item"><button className="dropdown-button" style={{color:"white"}} onClick={()=>{document.getElementById("experience")?.scrollIntoView({behavior:"smooth"})}}>Experience</button></div>
              <div className="dropdown-item"><button className="dropdown-button" style={{color:"white"}} onClick={()=>{document.getElementById("resume")?.scrollIntoView({behavior:"smooth"})}}>Certification</button></div>
              <div className="dropdown-item"><button className="dropdown-button" style={{color:"white"}} onClick={()=>{document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}}>Projects</button></div>
              <div className="dropdown-item"><button className="dropdown-button" style={{color:"white"}} onClick={()=>{document.getElementById("resume")?.scrollIntoView({behavior:"smooth"})}}>Resume</button></div>
            </div>
          )}
        </div>
        <header className="portfolio-header">
          <img
            src="/profile.jpg"
            className="profile-image"
          />
          <h1 className="portfolio-title">Vignesh R.</h1>
          <p className="portfolio-subtitle">Full Stack Developer | Open Source Enthusiast</p>
          <div className="portfolio-socials">
            <a href="https://github.com/vignesh3002-cr" target="_blank" rel="noopener noreferrer">
              <Github className="icon github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-r-6589222b1/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="icon linkedin-icon" />
            </a>
            <a href="mailto:vigneshvickey2004@gmail.com">
              <Mail className="icon mail-icon" />
            </a>
          </div>
        </header>

        <section className="portfolio-content">
          <div id="sum" className="portfolio-card" data-aos="fade-up">
            <div className="portfolio-card-body">
              <h2 className="portfolio-section-title">About Me</h2>
              <p className="portfolio-text">
                I am a passionate developer with experience in building web applications using modern tech stacks like React, Node.js, and Express.js. I enjoy problem-solving and contributing to open source projects.Developed skills in collaborative, fast-paced technical environment, focusing on coding, debugging, and project
                management. Demonstrated ability to communicate effectively across teams and adapt to new technologies. Seeking to
                transition into new field where these transferable skills can drive success and innovation.More than 20 projects were did and those were working effeciantly. 
              </p>
            </div>
          </div>

          <div className="portfolio-card" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-card-body">
              <h2 className="portfolio-section-title">Skills</h2>
                <div className="skills-grid">
                  {[
                      { name: "JavaScript", icon: "/JavaScript.png" },
                      { name: "React.js", icon: "/react.png" },
                      { name: "HTML", icon: "/html.png" },
                      { name: "Node.js", icon: "/NodeJS.png" },
                      { name: "Express", icon: "/Express.png"},
                      { name: "Java", icon: "/Java.png" },
                      { name: "PostgreSQL", icon: "/postgre.png" },
                      { name: "Git", icon: "/git.png" },
                      { name: "CSS", icon: "/CSS.png" },
                      { name: "Postman", icon: "/postman.png" },
                      { name: "API", icon: "/API.png" },
                      { name: "BootStrap", icon: "/bootstrap.png" },
                    ].map((skill) => (
                  <div className="skill-item" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                   </div>
                  ))}
                  </div>

            </div>
          </div>

        <div id="projects" className="portfolio-card full-width" data-aos="fade-up" data-aos-delay="200">
          <h2 className="portfolio-section-title proj">Projects</h2>
          <img src="/Right.png" className="logo"></img>

          <div className="Project_cards">
            <div className="project">
              <h3>Note Maker :</h3>
              <img src="/NoteMaker.png" className="project_img"></img>
              <a className="portfolio-button project_view" href="https://note-maker-app-liart.vercel.app/">Click To View</a>
            </div>
            <div className="project">
              <h3>Simon Game :</h3>
              <img src="/SimonGame.png" className="project_img"></img>
              <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/Simon-game/">Click To View</a>
            </div>
            <div className="project">
              <h3>Drum Kits(KeyEvents) :</h3>
              <img src="/DrumKit.png" className="project_img"></img>
              <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/Drum-kit/">Click To View</a>
            </div>
            <div className="project">
              <h3>Math Calculator :</h3>
              <img src="/MathCal.png" className="project_img"></img>
              <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/simplecalculater/">Click To View</a>
            </div>
            <div className="project">
              <h3>Landing Page :</h3>
              <img src="/LandingPage.png" className="project_img"></img>
              <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/SGlandingpage/">Click To View</a>
            </div>
            <div className="project">
              <h3>Turf Booking :</h3>
              <img src="/TurfBooking.png" className="project_img"></img>
              <a className="portfolio-button project_view" href="https://github.com/vignesh3002-cr/AADUKALAM.git">Click To View</a>
            </div>
          </div>
          
        </div>
        <section id="experience" className="portfolio-card" data-aos="fade-up">
          <div className="portfolio-card-body exp">
            <h2 className="portfolio-section-title">Experience</h2>
            <img
              src="/CodSoft.png"
              className="codsoft-image"
            />
            <h3 id="exp-T2">Front-End Development Intern</h3>
            <p id="exp-P1">(UI, UX Designing, Aug 2024 - Sep 2024)</p>
            <p className="portfolio-text exp-text">
             * Made a valuable contribution to Codsoft by developing and deploying interactive projects such as a math calcultor, landing page, and portfolio site.<br></br> 
             * With the group of members as a team we enhanced user interfaceusing React, CSS,  and JavaScript, improving overall user experience.<br></br>
             * Presected findings at weekly research meetings. 
            </p>
          </div>
        </section>


        <div id="resume" className="portfolio-card" data-aos="fade-up" data-aos-delay="250">
          <div className="portfolio-card-body">
            <h2 className="portfolio-section-title">Resume/Certifications</h2>
            <p className="portfolio-text">Download my latest resume in PDF format.</p>
            <a
              href="/Org vig.pdf"
              download
              className="portfolio-button resume-button"
            >
              Download Resume
            </a>
          </div>
          <div className="portfolio-card-body">
            <img src="webdev.png" className="codsoft-image"/>
            <p className="portfolio-text course_txt">Full Stack Web Development.</p>
            <a
              href="/web development certificate.pdf"
              viewBox
              className="portfolio-button  course_button"
            >
              Click To View
            </a>
          </div>
          <div className="portfolio-card-body">
            <img src="CodSoft.png" className="codsoft-image"/>
            <p className="portfolio-text course_txt">Front-End Development Intern</p>
            <a
              href="/codsoft_crt.pdf"
              viewBox
              className="portfolio-button  course_button"
            >
              Click To View
            </a>
          </div>

  
        </div>

        <div id="contact" className="portfolio-card contact full-width" data-aos="fade-up" data-aos-delay="300">
          <div className="portfolio-card-body text-center">
            <h2 className="portfolio-section-title">Contact Me</h2>
            <p className="portfolio-text">
              Want to collaborate or have any questions? Feel free to reach out.
            </p>
            <a
              href="mailto:vigneshvickey2004@email.com"
              className="portfolio-button contact-button"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>
  </div>
  
  );

}

