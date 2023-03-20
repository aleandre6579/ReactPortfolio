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
import c from '../imgs/skills/c.png';
import cSharp from '../imgs/skills/cSharp.png';
import css from '../imgs/skills/css.png';
import html from '../imgs/skills/html.png';
import java from '../imgs/skills/java.png';
import js from '../imgs/skills/js.png';
import python from '../imgs/skills/python.png';

import react from '../imgs/skills/react.png';
import unity from '../imgs/skills/unity.png';

import ambitious from '../imgs/skills/ambitious.png';
import creative from '../imgs/skills/creative.png';
import determined from '../imgs/skills/determined.png';
import solver from '../imgs/skills/solver.png';
import worker from '../imgs/skills/worker.png';

import team from '../imgs/skills/team.png';
import listener from '../imgs/skills/listener.png';
import communication from '../imgs/skills/communication.png';

class About extends Component {
    componentDidMount() {
        document.body.style.overflow = 'visible';
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
            <div>
                <m.div className="page"
                    initial={{backgroundPosition: '0% 0%'}}
                    animate={{backgroundPosition: '0% 60%'}}
                    transition={{duration: 1}}
                    exit={{backgroundPosition: '0% 0%'}}
                />
            
                <m.div className='realPage'>
                    <div className="navbar">
                        <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit">
                            <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                        </m.div>
                        <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar">
                            <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/about'><div>About</div></Link></m.div>
                            <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/skills'><div>Skills</div></Link></m.div>
                            <m.div className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/projects'><div>Projects</div></Link></m.div>
                        </m.div>
                    </div>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="containersRow" >
                        <div className="containerSpace">
                            <div className="containerTitle">Languages</div>
                            <div id='container1' onClick={() => openContainer('container1')} className="container container1">
                                <div className="containerRow row11">
                                    <img alt='C' src={c} className='containerImg'/>
                                    <div className="containerTxt">Very proficient</div>
                                </div>
                                <div className="containerRow row17">
                                    <img alt='python' src={python} className='containerImg'/>
                                    <div className="containerTxt">Very proficient</div>
                                </div>
                                <div className="containerRow row15">
                                    <img alt='java' src={java} className='containerImg'/>
                                    <div className="containerTxt">Proficient</div>
                                </div>
                                <div className="containerRow row12">
                                    <img alt='cSharp' src={cSharp} className='containerImg'/>
                                    <div className="containerTxt">Proficient</div>                       
                                </div>
                                <div className="containerRow row14">
                                    <img alt='html' src={html} className='containerImg'/>
                                    <div className="containerTxt">Competent</div>
                                </div>
                                <div className="containerRow row13">
                                    <img alt='css' src={css} className='containerImg'/>
                                    <div className="containerTxt">Competent</div>
                                </div>
                                <div className="containerRow row16">
                                    <img alt='js' src={js} className='containerImg'/>
                                    <div className="containerTxt">Competent</div>
                                </div>
                            </div>
                        </div>

                        <div className="containerSpace">
                            <div className="containerTitle">Frameworks</div>
                            <div id='container2' onClick={() => openContainer('container2')} className="container container2">
                                <div className="containerRow row22">  
                                    <img alt='unity' src={unity} className='containerImg'/>
                                    <div className="containerTxt">Very proficient</div>
                                </div>
                                <div className="containerRow row21">  
                                    <img alt='react' src={react} className='containerImg'/>
                                    <div className="containerTxt">Competent</div>
                                </div>
                            </div>
                        </div>
                    </m.div>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="containersRow">
                        <div className="containerSpace">
                            <div className="containerTitle">Social</div>
                            <div id='container3' onClick={() => openContainer('container3')} className="container container3">
                                <div className="containerRow row31">
                                    <img alt='team' style={{width:'80px'}} src={team} className='containerImg'/>
                                    <div className="containerTxt">Good Teamwork</div>
                                </div>
                                <div className="containerRow row32">
                                    <img alt='listener' style={{width:'80px'}} src={listener} className='containerImg'/>
                                    <div className="containerTxt">Good Listener</div>
                                </div>
                                <div className="containerRow row33">
                                    <img alt='communication' style={{width:'70px'}} src={communication} className='containerImg'/>
                                    <div className="containerTxt">Good Communicator</div>
                                </div>
                            </div>
                        </div>

                        <div className="containerSpace">
                            <div className="containerTitle">Personal</div>
                            <div id='container4' onClick={() => openContainer('container4')} className="container container4">
                                <div className="containerRow row41">
                                    <img alt='ambitious' style={{width:'70px'}} src={ambitious} className='containerImg'/>
                                    <div className="containerTxt">Ambitious</div>
                                </div>
                                <div className="containerRow row42">
                                    <img alt='creative' style={{width:'70px'}} src={creative} className='containerImg'/>
                                    <div className="containerTxt">Creative</div>
                                </div>
                                <div className="containerRow row43">
                                    <img alt='determined' src={determined} className='containerImg'/>
                                    <div className="containerTxt">Determined</div>
                                </div>
                                <div className="containerRow row44">
                                    <img alt='solver' style={{width:'70px'}} src={solver} className='containerImg'/>
                                    <div className="containerTxt">Problem-solver</div>
                                </div>
                                <div className="containerRow row45">
                                    <img alt='worker' style={{width:'80px'}} src={worker} className='containerImg'/>
                                    <div className="containerTxt">Hardworking</div>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </m.div>
            </div>
        );
    }
}
 
export default About;