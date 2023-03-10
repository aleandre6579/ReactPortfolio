import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/about.css';
import '../css/projects.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

class About extends Component {
    componentDidMount() {
        document.documentElement.style.overflow = "auto";
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

        const navItem = {
            hidden: {
                opacity: 0,
                y: -50,
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
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
                    duration: 1,
                    ease: "easeIn"
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 1,
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
            console.log(projectId);
            if(activePopupId !== 0) return;
            activePopupId = projectId;
            var popup = document.getElementById('projectPopup');
            popup.classList.remove("hideFast");
            popup.classList.remove("behind");
            
            var project = document.getElementById(projectId);
            project.classList.remove("hideFast");
        }
        function hideProjectPopup() {
            var popup = document.getElementById('projectPopup');
            popup.classList.add("hideFast");
            popup.classList.add("behind");

            var project = document.getElementById(activePopupId);
            project.classList.add("hideFast");
            activePopupId = 0;
        }
        
        return (
            <m.div>
                <div className="navbar">
                    <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navItem}>
                        <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                    </m.div>
                    <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar">
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/about'><div>About</div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/skills'><div>Skills</div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/projects'><div>Projects</div></Link></m.div>
                    </m.div>
                </div>

                <div className="projectsContent">
                    <div onClick={() => showProjectPopup('project1')} className="project">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project2')} className="project">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project3')} className="project">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project4')} className="project">
                        <div className="hoverIcon">View Project</div>
                    </div>
                    <div onClick={() => showProjectPopup('project5')} className="project">
                        <div className="hoverIcon">View Project</div>
                    </div>
                </div>

                <div id='projectPopup' className="projectPopup hideFast behind">
                    <div onClick={hideProjectPopup} className="closeBtn">x</div>
                    <div id='project1' className="project1 hideFast">1</div>
                    <div id='project2' className="project2 hideFast">2</div>
                    <div id='project3' className="project3 hideFast">3</div>
                </div>


            </m.div>
        );
    }
}
 
export default About;