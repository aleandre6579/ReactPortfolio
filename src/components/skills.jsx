import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import selectedLanguage from './selectedLanguage.js'
import '../css/about.css';
import '../css/skills.css';
import '../css/w3.css';

import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';
import englishFlag from '../imgs/englishFlag.png';
import frenchFlag from '../imgs/frenchFlag.png';

/* Container images */
import c from '../imgs/skills/c.png';
import cSharp from '../imgs/skills/cSharp.png';
import css from '../imgs/skills/css.png';
import html from '../imgs/skills/html.png';
import java from '../imgs/skills/javaLogo.png';
import js from '../imgs/skills/js.png';
import python from '../imgs/skills/pythonLogo.png';
import scala from '../imgs/skills/scalaLogo.png';

import react from '../imgs/skills/reactLogo.png';
import unity from '../imgs/skills/unityLogo.png';
import gitfork from '../imgs/skills/gitfork.png';
import jupyter from '../imgs/skills/jupyter.png';
import notion from '../imgs/skills/notionLogo.png';
import vscode from '../imgs/skills/vscode.png';

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

        var allText = document.getElementsByClassName('txt');
        for(let i = 0; i < allText.length; i++) {
            if(!allText[i].classList.contains(selectedLanguage.selectedLanguage)) {
                allText[i].classList.add('hideTxt');
            }
        }

    }

    render() { 
        const navbar = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: .4,
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
                x: -100,
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1,
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
                y: -100,
                cursor: 'pointer',
            },
            show: {
                opacity: 1,
                transform: 'translate(0, 0px)',
                cursor: 'pointer',
                transition: {
                    duration: .7,
                },
            },
            exit: {
                opacity: 0,
                transform: 'translate(0, -50px)',
                cursor: 'context-menu',
                fontSize: "clamp(0rem, calc(1rem + 3vw), 5rem)",
                transition: {
                    fontSize: {
                        duration: 0,
                    },
                    duration: 0.2,
                },
            },
        };

        const link = {
            hidden: {
                cursor: 'pointer',
            },
            show: {
                cursor: 'pointer',
            },
            exit: {
                cursor: 'context-menu',
            }
        }

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

        const flagsMotion = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: .25,
                    delay: 1.5,
                },
            },
            exit: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
        }
        const flagMotion = {
            hidden: {
                opacity: 0,
                y: -150,
                cursor: 'pointer',
            },
            show: {
                opacity: 1,
                y: 0,
                cursor: 'pointer',
                transition: {
                    duration: 2.5,
                },
            },
            exit: {
                opacity: 0,
                y: -150,
                cursor: 'context-menu',
                transition: {
                    duration: 0.4,
                },
            },
        }

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

        function realPageDisappear() {
            var navbar_btns = document.getElementsByClassName('navbar-btn');
            let i = 0;
            while(navbar_btns.length > 3) {
                if(navbar_btns[i].parentElement.classList.contains('hideTxt')) {
                    i++;
                    continue;
                }
                navbar_btns[i].classList.add('navbar-btn-clicked');
                navbar_btns[i].classList.remove('navbar-btn');
            }
            
            var realPage = document.getElementById("realPage");
            realPage.classList.remove("realPage");
            realPage.classList.add("realPageDisappear");
        }

        function change_language(language_name) {
            selectedLanguage.selectedLanguage = language_name;
            var allText = document.getElementsByClassName('txt');
            for(let i = 0; i < allText.length; i++) {
                if(allText[i].classList.contains('hideTxt') && allText[i].classList.contains(language_name)) {
                    allText[i].classList.remove('hideTxt');
                }
                else if (!allText[i].classList.contains('hideTxt') && !allText[i].classList.contains(language_name)) {
                    allText[i].classList.add('hideTxt');
                }
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
            
                <m.div id="realPage" className='realPage'>
                    <div className="navbar">
                        <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit">
                            <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                        </m.div>
                        <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar english txt">
                            <m.div  onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link  className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>About</m.div></Link></m.div>
                            <m.div className='navbar-btn' variants={navItem} ><Link  className='link' to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Skills</m.div></Link></m.div>
                            <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link  className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projects</m.div></Link></m.div>
                        </m.div>    
                        <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar french txt">
                            <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link  className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>A propos</m.div></Link></m.div>
                            <m.div className='navbar-btn' variants={navItem} ><Link  className='link' to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Compétences</m.div></Link></m.div>
                            <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link  className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projets</m.div></Link></m.div>
                        </m.div>
                        <m.div className='flags' variants={flagsMotion} initial="hidden" animate="show" exit="exit" >
                            <m.div variants={flagMotion} to='/'><img onClick={() => change_language('french')} id='frenchFlag' className='flag' src={frenchFlag} alt=''></img></m.div>
                            <m.div variants={flagMotion} to='/'><img onClick={() => change_language('english')} id='englishFlag' className='flag' src={englishFlag} alt=''></img></m.div>
                        </m.div>
                    </div>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="containersRow" >
                        <div className="containerSpace">
                            <div className="txt english containerTitle">Languages</div>
                            <div className="txt french containerTitle">Langages</div>
                            <div id='container1' onClick={() => openContainer('container1')} className="container container1">
                                <div className="containerRow row11">
                                    <img alt='C' src={c} className='containerImg'/>
                                    <div className="txt english containerTxt">Very proficient</div>
                                    <div className="txt french containerTxt">Expert</div>
                                </div>
                                <div className="containerRow row17">
                                    <img alt='python' src={python} className='containerImg'/>
                                    <div className="txt english containerTxt">Very proficient</div>
                                    <div className="txt french containerTxt">Expert</div>
                                </div>
                                <div className="containerRow row15">
                                    <img alt='java' src={java} className='containerImg'/>
                                    <div className="txt english containerTxt">Proficient</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row12">
                                    <img alt='cSharp' src={cSharp} className='containerImg'/>
                                    <div className="txt english containerTxt">Proficient</div>  
                                    <div className="txt french containerTxt">Avancé</div>
                                </div>
                                <div className="containerRow row14">
                                    <img alt='html' src={html} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row13">
                                    <img alt='css' src={css} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row16">
                                    <img alt='js' src={js} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row18">
                                    <img alt='scala' src={scala} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                            </div>
                        </div>

                        <div className="containerSpace">
                        <div className="txt english containerTitle">Software & Frameworks</div>
                        <div className="txt french containerTitle">Applications & Outils</div>
                            <div id='container2' onClick={() => openContainer('container2')} className="container container2">
                                <div className="containerRow row22">  
                                    <img alt='unity' src={unity} className='containerImg'/>
                                    <div className="txt english containerTxt">Very proficient</div>
                                    <div className="txt french containerTxt">Expert</div>
                                </div>
                                <div className="containerRow row21">  
                                    <img alt='react' src={react} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row23">  
                                    <img alt='jupyter' src={jupyter} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row24">  
                                    <img alt='gitfork' src={gitfork} style={{width: '80px'}} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                                <div className="containerRow row25">  
                                    <img alt='notion' src={notion} className='containerImg'/>
                                    <div className="txt english containerTxt">Competent</div>
                                    <div className="txt french containerTxt">Intermédiaire</div>
                                </div>
                            </div>
                        </div>
                    </m.div>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="containersRow">
                        <div className="containerSpace">
                        <div className="txt english containerTitle">Social Skills</div>
                        <div className="txt french containerTitle">Compétences Sociales</div>
                            <div id='container3' onClick={() => openContainer('container3')} className="container container3">
                                <div className="containerRow row31">
                                    <img alt='team' style={{width:'80px'}} src={team} className='containerImg'/>
                                    <div className="txt english containerTxt">Good Teamwork</div>
                                    <div className="txt french containerTxt">Bon travail d'équipe</div>
                                </div>
                                <div className="containerRow row32">
                                    <img alt='listener' style={{width:'80px'}} src={listener} className='containerImg'/>
                                    <div className="txt english containerTxt">Good Listener</div>
                                    <div className="txt french containerTxt">Très à l'écoute</div>
                                </div>
                                <div className="containerRow row33">
                                    <img alt='communication' style={{width:'70px'}} src={communication} className='containerImg'/>
                                    <div className="txt english containerTxt">Good Communicator</div>
                                    <div className="txt french containerTxt">Bon communicateur</div>
                                </div>
                            </div>
                        </div>

                        <div className="containerSpace">
                            <div className="txt english containerTitle">Personal Skills</div>
                            <div className="txt french containerTitle">Compétences Personnelles</div>
                            <div id='container4' onClick={() => openContainer('container4')} className="container container4">
                                <div className="containerRow row41">
                                    <img alt='ambitious' style={{width:'70px'}} src={ambitious} className='containerImg'/>
                                    <div className="txt english containerTxt">Ambitious</div>
                                    <div className="txt french containerTxt">Ambitieux</div>
                                </div>
                                <div className="containerRow row42">
                                    <img alt='creative' style={{width:'70px'}} src={creative} className='containerImg'/>
                                    <div className="txt english containerTxt">Creative</div>
                                    <div className="txt french containerTxt">créatif</div>
                                </div>
                                <div className="containerRow row43">
                                    <img alt='determined' src={determined} className='containerImg'/>
                                    <div className="txt english containerTxt">Determined</div>
                                    <div className="txt french containerTxt">Déterminé</div>
                                </div>
                                <div className="containerRow row44">
                                    <img alt='solver' style={{width:'70px'}} src={solver} className='containerImg'/>
                                    <div className="txt english containerTxt">Problem-solver</div>
                                    <div className="txt french containerTxt">Résolveur de problèmes</div>
                                </div>
                                <div className="containerRow row45">
                                    <img alt='worker' style={{width:'80px'}} src={worker} className='containerImg'/>
                                    <div className="txt english containerTxt">Hardworking</div>
                                    <div className="txt french containerTxt">Travailleur</div>
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