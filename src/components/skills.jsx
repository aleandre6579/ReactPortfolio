import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/about.css';
import '../css/skills.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

/* Container images */
import c from '../imgs/c.png';
import cSharp from '../imgs/cSharp.png';
import css from '../imgs/css.png';
import html from '../imgs/html.png';
import java from '../imgs/java.png';
import js from '../imgs/js.png';
import python from '../imgs/python.png';

import react from '../imgs/react.png';
import unity from '../imgs/unity.png';

import ambitious from '../imgs/ambitious.png';
import creative from '../imgs/creative.png';
import determined from '../imgs/determined.png';
import solver from '../imgs/solver.png';
import worker from '../imgs/worker.png';

import team from '../imgs/team.png';
import listener from '../imgs/listener.png';
import communication from '../imgs/communication.png';

class About extends Component {
    componentDidMount() {
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

        function changeArrowToBlack() {
            document.getElementById('backArrow').src = backArrowBlack;
        }
        function changeArrowToWhite() {
            document.getElementById('backArrow').src = backArrowWhite;
        }

        function hasClass(element, className) {
            return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
        }     

        function openContainer(containerNum) {
            var container = document.getElementById(containerNum);
            if(hasClass(container, 'openContainer')) {
                container.classList.add("container");
                container.classList.remove("openContainer");
            }
            else {
                container.classList.add("openContainer");
                container.classList.remove("container");
            }

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

                <div className="containersRow">
                    <div className="containerSpace">
                        <div className="containerTitle">Languages</div>
                        <div id='container1' onClick={() => openContainer('container1')} className="container box1">
                            <img style={{top: '30px', left: '80px'}} src={c} className='containerImg'/>
                            <img style={{top: '80px', left: '200px'}} src={cSharp} className='containerImg'/>
                            <img style={{top: '175px', left: '80px'}} src={css} className='containerImg'/>
                            <img style={{top: '170px', left: '190px'}} src={html} className='containerImg'/>
                            <img style={{top: '40px', left: '170px'}} src={java} className='containerImg'/>
                            <img style={{top: '100px', left: '20px'}} src={js} className='containerImg'/>
                            <img style={{top: '110px', left: '130px'}} src={python} className='containerImg'/>
                        </div>
                    </div>
                    <div className="containerSpace">
                        <div className="containerTitle">Frameworks</div>
                        <div id='container2' onClick={() => openContainer('container2')} className="container box2">
                            <img style={{top: '70px', left: '70px'}} src={react} className='containerImg'/>
                            <img style={{top: '140px', left: '160px'}} src={unity} className='containerImg'/>
                        </div>
                    </div>
                </div>
                <div className="containersRow">
                <div className="containerSpace">
                        <div className="containerTitle">Social</div>
                        <div id='container3' onClick={() => openContainer('container3')} className="container box3">
                            <img style={{top: '50px', left: '80px'}} src={team} className='containerImg'/>
                            <img style={{top: '90px', left: '190px'}} src={listener} className='containerImg'/>
                            <img style={{top: '160px', left: '100px'}} src={communication} className='containerImg'/>
                        </div>
                    </div>
                    <div className="containerSpace">
                        <div className="containerTitle">Personal</div>
                        <div id='container4' onClick={() => openContainer('container4')} className="container box4">
                            <img style={{top: '40px', left: '80px'}} src={ambitious} className='containerImg'/>
                            <img style={{top: '60px', left: '180px'}} src={creative} className='containerImg'/>
                            <img style={{top: '130px', left: '40px'}} src={determined} className='containerImg'/>
                            <img style={{top: '190px', left: '110px'}} src={solver} className='containerImg'/>
                            <img style={{top: '150px', left: '200px'}} src={worker} className='containerImg'/>
                        </div>
                    </div>
                </div>

            </m.div>
        );
    }
}
 
export default About;