import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/about.css';
import '../css/projects.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

// Project imgs
import freebotMenu from '../imgs/projects/freebotMenu.png';

class About extends Component {
    componentDidMount() {
        document.documentElement.style.overflow = "hidden";
        window.scrollTo(0,0);
}

    render() { 
        const navbar = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
            exit: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
        };

        const navArrow = {
            hidden: {
                opacity: 0,
                x: -50,
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.2,
                },
            },
            exit: {
                opacity: 1,
                x: -150,
                transition: {
                    duration: 0.2,
                },
            },
        };

        const navItem = {
            hidden: {
                opacity: 0,
                y: -50,
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                },
            },
            exit: {
                opacity: 1,
                y: -150,
                transition: {
                    duration: 0.2,
                },
            },
        };

        const content = {
            hidden: {
                opacity: 0,
            },
            show: {
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.75,
                    ease: "easeIn"
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                },
            },
        };


        let activePopupId = 0;

        function changeArrowToBlack() {
            document.getElementById('backArrow').src = backArrowBlack;
        }
        function changeArrowToWhite() {
            document.getElementById('backArrow').src = backArrowWhite;
        }

        function showProjectPopup(projectId) {
            if(activePopupId !== 0) return;
            activePopupId = projectId;

            var popup = document.getElementById('projectPopup');
            popup.classList.remove("projectPopupClose");
            popup.classList.remove("behind");
            popup.style.opacity = 1;

            // Reset popup open animation
            popup.classList.remove("projectPopup");
            void popup.offsetWidth;
            popup.classList.add("projectPopup");
                
            var project = document.getElementById(projectId);
            project.classList.remove("hideFast");
        }

        function hideProjectPopup() {
            // Close popup
            var popup = document.getElementById('projectPopup');
            popup.classList.add("projectPopupClose");
 
            // Hide the active popup content
            var project = document.getElementById(activePopupId);
            project.classList.add("hideFast");
            activePopupId = 0;
        }
        
        return (
            <m.div>
                <m.div className="page"
                    initial={{backgroundPosition: '0% 0%'}}
                    animate={{backgroundPosition: '0% 60%'}}
                    transition={{duration: 1}}
                    exit={{backgroundPosition: '0% 0%'}}
                />
                <div className="navbar">
                    <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow}initial="hidden" animate="show" exit="exit">
                        <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                    </m.div>
                    <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar">
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/about'><div>About</div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/skills'><div>Skills</div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/projects'><div>Projects</div></Link></m.div>
                    </m.div>
                </div>

                <m.div variants={content} initial="hidden" animate="show" exit="exit" className="projectsContent">
                    <div onClick={() => showProjectPopup('project1')} className="project project1">
                        <img src={freebotMenu} className='projectImg'></img>
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project2')} className="project project2">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project3')} className="project project3">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project4')} className="project project4">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project5')} className="project project5">
                        <div className="hoverIcon">View Project</div>
                    </div>
                </m.div>

                <m.div id='projectPopup' style={{opacity: 0}} className="projectPopup behind"
                
                >
                    <div onClick={hideProjectPopup} className="closeBtn">x</div>
                    <div id='project1' className="popup1 hideFast popupContent">
                        <img className='popupImg' src={freebotMenu}/>
                        <h2>Freebot: Escape the Factory!</h2>
                        <p>A 2D platformer game I made as a university project which taught me about WebGL and how to upload games online.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        asd
                        </p>
                    </div>
                    <div id='project2' className="popup2 hideFast popupContent">
                    
                    </div>
                    <div id='project3' className="popup3 hideFast popupContent">
                    
                    </div>
                    <div id='project4' className="popup4 hideFast popupContent">
                    
                    </div>
                    <div id='project5' className="popup5 hideFast popupContent">
                    
                    </div>
                </m.div>


            </m.div>
        );
    }
}
 
export default About;