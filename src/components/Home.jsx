import React from "react";
import "./comp.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { AiFillGithub } from "react-icons/ai";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
   const [vantaEffect, setVantaEffect] = useState(0);
   const vantaRef = useRef(null);
   useEffect(() => {
      if (!vantaEffect) {
         setVantaEffect(
            NET({
               el: vantaRef.current,
               THREE,
               color: 0x14b679,
               backgroundColor: 0x15173c,
               maxDistance: 3.0,
            })
         );
      }
      return () => {
         if (vantaEffect) vantaEffect.destory();
      };
   }, [vantaEffect]);

   return (
      <div className="allcon" ref={vantaRef}>
         <AnimatedCursor />
         <div className="navbar">
            <p className="icon">azeezcodes</p>
            {/* <div className="side">
               <p>Skills</p>
               <p>Projects</p>
               <p>Contact</p>
            </div> */}
         </div>

         <div className="describe">
            <p>
               <span style={{ fontWeight: "900" }} className="ss">
                  Hi, my name is <span className="jj">Abdulazeez Onadipe.</span>
               </span>
               <span className="ss" style={{ fontSize: "19px" }}>
                  I am a software engineer from Lagos Nigeria, with solid years
                  of experience in building exceptional digital experience
               </span>
            </p>
         </div>

         <div className="resume">
            {/* ........ */}

            <a
               href="https://drive.google.com/file/d/1UCdEdF_DnmuChbFIOo3_lU3VdBfVGWL8/view"
               target="_blank"
               rel="noreferrer"
            >
               <button className="button-92">Resume</button>
            </a>

            {/* ........ */}
         </div>

         <div>
            <p className="aa">Super-Skills</p>
         </div>

         <div className="ddd">
            <div className="logo">
               {" "}
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/html.png"
                  alt=""
               />
               <p>HTML5</p>
            </div>
            {/* .... */}
            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/css3.png"
                  alt=""
               />
               <p>CSS3</p>
            </div>
            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/java-script.png"
                  alt=""
               />
               <p>Javascript</p>
            </div>
            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/typescript.png"
                  alt=""
               />
               <p>Typescript</p>
            </div>
            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/react.png"
                  alt=""
               />
               <p>ReactJs/NextJs</p>
            </div>
            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/redux.png"
                  alt=""
               />
               <p>Redux</p>
            </div>
             <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/angular-logo.png"
                  alt=""
               />
               <p>Angular</p>
            </div>

            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/jest.png"
                  alt=""
               />
               <p>Jest</p>
            </div>
            <div className="logo">
               <img
                  style={{ width: "50px", height: "50px" }}
                  src="/assets/images/java-script.png"
                  alt=""
               />
               <p>NodeJs/ExpressJs</p>
            </div>
         </div>
         {/* ........... */}

         <div>
            <p className="aa">Projects</p>
         </div>

         <div className="projects">
            <div className="onepg">
               <img src="/assets/images/onep.jpeg" alt="" className="im" />
               <div>
                  <div className="fl">
                     <p>BestCombo Food App</p>
                     <div>
                        <a href="https://github.com/azeezcodes/Tailwind_React_Responsive">
                           <AiFillGithub />
                        </a>
                     </div>
                  </div>
                  <div>
                     <p style={{ marginLeft: "1rem" }}>Tailwind, Reactjs</p>
                  </div>
               </div>
            </div>

            {/* ....?2 */}
            <div className="onepg">
               <img src="/assets/images/twop.jpeg" alt="" className="im" />
               <div>
                  <div className="fl">
                     <p>Fintech Dashboard</p>
                     <div>
                        <a href="https://github.com/azeezcodes/Fintech_dashborad">
                           <AiFillGithub />
                        </a>
                     </div>
                  </div>
                  <div>
                     <p style={{ marginLeft: "1rem" }}>
                        Reactjs, Typescript, Sass, Redux
                     </p>
                  </div>
               </div>
            </div>

            {/* ......3 */}
            <div className="onepg">
               <img src="/assets/images/threep.jpeg" alt="" className="im" />
               <div>
                  <div className="fl">
                     <p>Analyst Chart</p>
                     <div>
                        <a href="https://github.com/azeezcodes/Drill_dashboard">
                           <AiFillGithub />
                        </a>
                     </div>
                  </div>
                  <div>
                     <p style={{ marginLeft: "1rem" }}>Reactjs, CSS3, Redux</p>
                  </div>
               </div>
            </div>
            {/* ......4 */}
            <div className="onepg">
               <img src="/assets/images/fourp.jpeg" alt="" className="im" />
               <div>
                  <div className="fl">
                     <p>ScoreCard</p>
                     <div>
                        <AiFillGithub />
                     </div>
                  </div>
                  <div>
                     <p style={{ marginLeft: "1rem" }}>Reactjs, CSS,</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer">
            <p>Designed & Built by Abdulazeez Onadipe</p>
         </div>

         <div className="contact">
            <a
               href="https://github.com/azeezcodes"
               target="_blank"
               rel="noreferrer"
            >
               {" "}
               <FiGithub />
            </a>
            <a
               href="https://www.linkedin.com/in/abdulazeez-onadipe/"
               target="_blank"
               rel="noreferrer"
            >
               {" "}
               <FaLinkedinIn />
            </a>
            <a
               href="https://twitter.com/az_omoade"
               target="_blank"
               rel="noreferrer"
            >
               <FiTwitter />
            </a>
            <a
               href="onadipeabdulazeez@gmail.com"
               target="_blank"
               rel="noreferrer"
            >
               {" "}
               <HiOutlineMail />
            </a>
         </div>
      </div>
   );
};

export default Home;
