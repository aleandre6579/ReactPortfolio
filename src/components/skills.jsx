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
                        <div id='container1' onClick={() => openContainer('container1')} className="container container1">
                            <div className="containerRow row11">
                                <img src={c} className='containerImg'/>
                                <div className="containerTxt">Very proficient</div>
                            </div>
                            <div className="containerRow row17">
                                <img src={python} className='containerImg'/>
                                <div className="containerTxt">Very proficient</div>
                            </div>
                            <div className="containerRow row15">
                                <img src={java} className='containerImg'/>
                                <div className="containerTxt">Proficient</div>
                            </div>
                            <div className="containerRow row12">
                                <img src={cSharp} className='containerImg'/>
                                <div className="containerTxt">Proficient</div>                       
                            </div>
                            <div className="containerRow row14">
                                <img src={html} className='containerImg'/>
                                <div className="containerTxt">Competent</div>
                            </div>
                            <div className="containerRow row13">
                                <img src={css} className='containerImg'/>
                                <div className="containerTxt">Competent</div>
                            </div>
                            <div className="containerRow row16">
                                <img src={js} className='containerImg'/>
                                <div className="containerTxt">Competent</div>
                            </div>
                        </div>
                    </div>

                    <div className="containerSpace">
                        <div className="containerTitle">Frameworks</div>
                        <div id='container2' onClick={() => openContainer('container2')} className="container container2">
                            <div className="containerRow row22">  
                                <img src={unity} className='containerImg'/>
                                <div className="containerTxt">Very proficient</div>
                            </div>
                            <div className="containerRow row21">  
                                <img src={react} className='containerImg'/>
                                <div className="containerTxt">Competent</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containersRow">
                    <div className="containerSpace">
                        <div className="containerTitle">Social</div>
                        <div id='container3' onClick={() => openContainer('container3')} className="container container3">
                            <div className="containerRow row31">
                                <img style={{width:'80px'}} src={team} className='containerImg'/>
                                <div className="containerTxt">Good Teamwork</div>
                            </div>
                            <div className="containerRow row32">
                                <img style={{width:'80px'}} src={listener} className='containerImg'/>
                                <div className="containerTxt">Good Listener</div>
                            </div>
                            <div className="containerRow row33">
                                <img style={{width:'70px'}} src={communication} className='containerImg'/>
                                <div className="containerTxt">Good Communicator</div>
                            </div>
                        </div>
                    </div>

                    <div className="containerSpace">
                        <div className="containerTitle">Personal</div>
                        <div id='container4' onClick={() => openContainer('container4')} className="container container4">
                            <div className="containerRow row41">
                                <img style={{width:'70px'}} src={ambitious} className='containerImg'/>
                                <div className="containerTxt">Ambitious</div>
                            </div>
                            <div className="containerRow row42">
                                <img style={{width:'70px'}} src={creative} className='containerImg'/>
                                <div className="containerTxt">Creative</div>
                            </div>
                            <div className="containerRow row43">
                                <img src={determined} className='containerImg'/>
                                <div className="containerTxt">Determined</div>
                            </div>
                            <div className="containerRow row44">
                                <img style={{width:'70px'}} src={solver} className='containerImg'/>
                                <div className="containerTxt">Problem-solver</div>
                            </div>
                            <div className="containerRow row45">
                                <img style={{width:'80px'}} src={worker} className='containerImg'/>
                                <div className="containerTxt">Hardworking</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height: '70px'}}/>
            </m.div>
        );
    }
}
 
export default About;