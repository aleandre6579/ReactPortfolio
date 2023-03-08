import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/about.css';
import '../css/skills.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

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
                        <div id='container1' onClick={() => openContainer('container1')} className="container box1"></div>
                    </div>
                    <div className="containerSpace">
                        <div className="containerTitle">Frameworks</div>
                        <div id='container2' onClick={() => openContainer('container2')} className="container box2"></div>
                    </div>
                </div>
                <div className="containersRow">
                <div className="containerSpace">
                        <div className="containerTitle">Social</div>
                        <div id='container3' onClick={() => openContainer('container3')} className="container box3"></div>
                    </div>
                    <div className="containerSpace">
                        <div className="containerTitle">Personal</div>
                        <div id='container4' onClick={() => openContainer('container4')} className="container box4"></div>
                    </div>
                </div>

            </m.div>
        );
    }
}
 
export default About;