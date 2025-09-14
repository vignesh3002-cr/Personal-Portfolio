import React, { useEffect,useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/animations.css";
import "./styles/Portfolio.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(drawStars);
}

drawStars();

  }, []);
  const [showMenu,setShowmenu]=useState(false);

  return (
    <>
    <canvas id="starfield"></canvas>
      <div className="top-menu" onMouseLeave={()=>setShowmenu(false)}>
        {showMenu?(  
      <div className="dropdown-menu">
            <svg className="tabler_menu_cancel" onClick={()=>setShowmenu(false)} width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 24L16 16L24 24M24 8L15.9985 16L8 8" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              <div className="dropdown-item">
                
                <button className="dropdown-button" style={{marginTop:40}} onClick={()=>{document.getElementById("experience")?.scrollIntoView({behavior:"smooth"})}}><svg className="dropdown-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
  <path d="M16 3v4H8V3"/>
</svg>
Experience</button></div>
              <div className="dropdown-item"><button className="dropdown-button"  onClick={()=>{document.getElementById("resume")?.scrollIntoView({behavior:"smooth"})}}> <svg className="dropdown-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="7"/>
  <path d="M8 21l4-4 4 4"/>
</svg>
Certification</button></div>
              <div className="dropdown-item"><button className="dropdown-button"  onClick={()=>{document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}}><svg className="dropdown-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 16V8a2 2 0 0 0-2-2h-4V2H9v4H5a2 2 0 0 0-2 2v8"/>
  <rect x="7" y="14" width="10" height="8" rx="2"/>
</svg>
 Projects</button></div>
              <div className="dropdown-item"><button className="dropdown-button"  onClick={()=>{document.getElementById("resume")?.scrollIntoView({behavior:"smooth"})}}><svg className="dropdown-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <path d="M14 2v6h6"/>
  <line x1="16" y1="13" x2="8" y2="13"/>
  <line x1="16" y1="17" x2="8" y2="17"/>
  <line x1="10" y1="9" x2="8" y2="9"/>
</svg>
Resume</button></div>
            </div>):(        
      <div id="sections-container" onClick={()=>setShowmenu(true)} >
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
        </div>)
          }

          </div>
  <div className="portfolio-wrapper" onClick={()=>setShowmenu(false)}>

        
        <header className="portfolio-header">
          <img
            src="/profile.jpg"
            className="profile-image"
          />
          <h1 className="portfolio-title gradient-text">Vignesh R.</h1>
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
          <div id="sum" className="portfolio-card box" data-aos="fade-up">
            <div className="portfolio-card-body">
              <h2 className="portfolio-section-title">About Me</h2>
              <p className="portfolio-text">
                I am a passionate developer with experience in building web applications using modern tech stacks like React, Node.js, and Express.js. I enjoy problem-solving and contributing to open source projects.Developed skills in collaborative, fast-paced technical environment, focusing on coding, debugging, and project
                management. Demonstrated ability to communicate effectively across teams and adapt to new technologies. Seeking to
                transition into new field where these transferable skills can drive success and innovation.More than 20 projects were did and those were working effeciantly. 
              </p>
            </div>
          </div>

          <div className="portfolio-card box glow-box" data-aos="fade-up" data-aos-delay="100">
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

        <div id="projects" className="portfolio-card full-width box glow-box" data-aos="fade-up" data-aos-delay="200">
          <div className="portfolio-card-body">
          <h2 className="portfolio-section-title proj" style={{margin:10}}>Projects</h2>
          <img src="/Right.png" className="logo"></img>
          
          <div className="Project_cards">
                       
            <div className="project">
              <div className="card-front">
                <h3>Customer-Feedbacks(Form):</h3>
                <img src="/CustomerFeedback.png" className="project_img"></img>
                
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>
              </div>

              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>Customers can easily share their feedback about the company’s services based on their personal experiences and opinions.</li>
                  <li>In this project the technologies and languages i used are HTML, CSS, JavaScript, React.js, Node.js, Express.js, API's and Mongo DB(Data Management).</li>
                </ul>

                <a className="project_view" href="https://customer-feedback-frontend-git-main-vignesh3002-crs-projects.vercel.app/">
                <h2>Click To View</h2><img src="/github.png"></img></a>

              </div>    
            </div>
                       
            <div className="project">
              <div className="card-front">
                <h3>Pixillium(Services Page) :</h3>
                <img src="/PixilliumServices.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

              </div>

              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>Pixillium offers a range of services including Digital Marketing, Responsive Website Development, App Development, and Graphic Design — empowering customers to choose what best suits their needs.</li>
                  <li>In this project the technologies and languages where used are HTML, CSS, Figma, JavaScript and React.js.</li>
                  <li> Project is hosted in vercel.</li>
                </ul>
                <a className="portfolio-button project_view" href="https://pixillium-ten.vercel.app/"><h2>Click To View</h2><img src="/github.png"></img></a>

              </div>    
            </div>
            <div className="project">
              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>Inthisproject, users can create notes with a title and description and after creation they can also modify
 and delete when no longer needed.</li>
                  <li> PostgreSQL for managing user authentications purpose(Signup & Login) with the security feature of
 JWT.</li>
                  <li> It is built using HTML, CSS, React, Node, Express, API and PostgreSQL.</li>
                </ul>
                <a className="portfolio-button project_view" href="https://note-maker-app-liart.vercel.app/"><h2>Click To View</h2><img src="/github.png"></img></a>
              </div>             
              <div className="card-front">
                <h3>Note Maker :</h3>
                <img src="/NoteMaker.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

              </div>
            </div>
            <div className="project">
                    
              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>Simon is a memory-based game where players must recall and repeat sequences of colored squares. It’s a fun and effective way to enhance memory skills.</li>

                  <li>For to build this project the technologies and languages i used are Html, CSS and JavaScript.This would be more responsive as well</li>
                  <li>This project is in live to use in github.</li>
                </ul>
                <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/Simon-game/"><h2>Click To View</h2><img src="/github.png"></img></a>

              </div>    
             <div className="card-front"> 
                <h3>Simon Game :</h3>
                <img src="/SimonGame.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

             </div>
          
            </div>

            <div className="project">
              <div className="card-front">
                <h3>Drum Kits(KeyEvents) :</h3>
                <img src="/DrumKit.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

              </div>

              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>This interactive project is perfect for music enthusiasts. Users can play musical sounds using their keyboard or cursor, simulating the experience of real musical instruments.</li>
                     
                  <li>For to build this project the technologies and languages i used are Html, CSS and JavaScript.This would be more responsive as well</li>
                  <li>This project is in live to use in github.</li>
                </ul>
                <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/Drum-kit/"><h2>Click To View</h2><img src="/github.png"></img></a>
              </div>    
            </div>
            <div className="project">
              <div className="card-front">
                <h3>Math Calculator :</h3>
                <img src="/MathCal.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

              </div>
              
              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>This project functions as a basic yet powerful calculator, allowing users to perform mathematical operations efficiently and accurately—just like a real calculator.</li>
                      
                  <li>For to build this project the technologies and languages i used are Html, CSS and JavaScript.This would be more responsive as well</li>
                  <li>This project is in live to use in github.</li>
                </ul>
                <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/simplecalculater/"><h2>Click To View</h2><img src="/github.png"></img></a>

              </div>       
            </div>
            <div className="project">
              <div className="card-front" >
                <h3>Landing Page :</h3>
                <img src="/LandingPage.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

              </div>
              
              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>This landing page is designed to resemble a professional gym website, complete with user signup and signin functionality for both new and returning members.</li>         
                  <li>For to build this project the technologies and languages i used are Html, CSS and JavaScript.This would be more responsive as well</li>
                  <li>This project is in live to use in github.</li>
                </ul>
                <a className="portfolio-button project_view" href="https://vignesh3002-cr.github.io/SGlandingpage/"><h2>Click To View</h2><img src="/github.png"></img></a>
              </div> 
            </div>
            <div className="project">
              <div className="card-front">
                <h3>Turf Booking :</h3>
                <img src="/TurfBooking.png" className="project_img"></img>
                 
                <div className="view-details">Click To Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
  <line x1="5" y1="12" x2="19" y2="12" />
  <polyline points="12 5 19 12 12 19" />
</svg>
</div>

              </div>

              <div className="card-back">
                <h4>Discription:</h4>
                <ul>
                  <li>This project includes user-friendly features like a location API to find nearby turfs and search other
 areas as well.</li>
                  <li>Users can Signup & Login with a CRUD-based system.</li>
                  <li>OurteamusedHTML,CSS,JavaScript, Node, Express, PostgreSQL, RESTful API, and Postman</li>
                </ul>
                <a className="portfolio-button project_view" href="https://github.com/vignesh3002-cr/AADUKALAM.git"><h2>Click To View</h2><img src="/github.png"></img></a>

              </div>    
            </div>
          </div>
          </div>
          
        </div>
        <section id="experience" className="portfolio-card box" data-aos="fade-up">
          
          <div className="exp-container portfolio-card-body">
          <div className="exp1">
            <h2 className="portfolio-section-title" style={{margin:10}}>Experience</h2>
            <img
              src="/CodSoft.png"
              className="codsoft-image"
            />
          </div>
            <div className="exp2">
              <h3 id="exp-T2">Front-End Development Intern</h3>
              <p id="exp-P1">(UI, UX Designing, Aug 2024 - Sep 2024)</p>
              <p className="portfolio-text exp-text">
              * Made a valuable contribution to Codsoft by developing and deploying interactive projects such as a math calcultor, landing page, and portfolio site.<br></br> 
              * With the group of members as a team we enhanced user interfaceusing React, CSS,  and JavaScript, improving overall user experience.<br></br>
              * Presected findings at weekly research meetings. 
              </p>
            </div>
            
            </div>
               
          <div className="exp-container portfolio-card-body">
          <div className="exp1">
            <img style={{marginLeft:32}}
              src="/pixellium.jpeg"
              className="codsoft-image"
            />
          </div>
            <div className="exp2" style={{marginLeft:36,marginTop:8}}>
              <h3 id="exp-T2">Full-stack Developer</h3>
              <p id="exp-P1">(React, Node, Jul 2025 - Aug 2025)</p>
              <p className="portfolio-text exp-text">
              * Made a valuable contribution to Pixellium by developing and deploying interactive projects such as a Company landing page and portfolio site.<br></br> 
              * With the group of members as a team we enhanced user interfaceusing React, CSS,  and JavaScript, improving overall user experience.<br></br>
              * Presected findings at weekly research meetings. 
              </p>
            </div>
            </div>
          
        </section>


        <div id="resume" className="portfolio-card box" data-aos="fade-up" data-aos-delay="250">
          <div className="portfolio-card-body">
            <h2 className="portfolio-section-title">Resume/Certifications</h2>
            <p className="portfolio-text">Download my latest resume in PDF format.</p>
            <a
              href="/Vignesh R T.dev.pdf"
              download
              className="portfolio-button resume-button"
            >
              Download Resume
            </a>
          </div>
          <div className="portfolio-card-body" style={{marginTop:32}}>
            <div className="certification-container">
              <div className="certification-container1">
                <img src="webdev.png" className="codsoft-image"/>
              </div>
              <div className="certification-container2">
                  <p className="portfolio-text course_txt">Full Stack Web Development.</p>
                  <a
                    href="/web development certificate.pdf"
                    viewBox
                    className="portfolio-button  course_button"
                  >
                    Click To View
                  </a>
                </div>
                </div>
          </div>
          <div className="portfolio-card-body" style={{marginTop:20}}>
           <div className="certification-container">
           <div> 
              <img src="CodSoft.png" className="codsoft-image"/>
            </div>
            <div>
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
          </div>

  
        </div>

        <div id="contact" className="portfolio-card contact full-width box" data-aos="fade-up" data-aos-delay="300">
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
  
  </>
  );

}

