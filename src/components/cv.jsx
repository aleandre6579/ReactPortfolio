import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/cv.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';
import englishFlag from '../imgs/englishFlag.png';
import frenchFlag from '../imgs/frenchFlag.png';

import englishCV from '../CV_English_PDF.pdf';
import frenchCV from '../CV_French_PDF.pdf';

class CV extends Component {
    
    componentDidMount() {
        window.scrollTo(0,0);

        let default_language = 'french';
        var allText = document.getElementsByClassName('txt');
        for(let i = 0; i < allText.length; i++) {
            if(!allText[i].classList.contains(default_language)) {
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
                    duration: 1,
                },
            },
            exit: {
                opacity: 0,
                transform: 'translate(0, -50px)',
                cursor: 'context-menu',
                transition: {
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
                transitionEnd: {
                    display: "none"
                }
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

        function realPageDisappear() {
            var navbar_btns = document.getElementsByClassName('navbar-btn');
            for(let i = 0; i < navbar_btns.length; i++) {
                if(!navbar_btns[navbar_btns.length-1].classList.contains('hideTxt')) {
                    navbar_btns[navbar_btns.length-1].classList.add('navbar-btn-clicked');
                    navbar_btns[navbar_btns.length-1].classList.remove('navbar-btn');
                    console.log(navbar_btns[navbar_btns.length-1].classList.toString())
                }
            }
            
            var realPage = document.getElementById("realPage");
            realPage.classList.remove("realPage");
            realPage.classList.add("realPageDisappear");
        }

        function change_language(language_name) {
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
                <m.div variants={content} initial="hidden" animate="show" exit="exit" id="realPage" className='realPage'>
                        <div className="navbar">
                            <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit" >
                                <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                            </m.div>
                            <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar english txt">
                                <m.div className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>About</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Skills</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projects</m.div></Link></m.div>
                            </m.div>    
                            <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar french txt">
                                <m.div className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>A propos</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Compétences</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projets</m.div></Link></m.div>
                            </m.div>
                            <m.div className='flags' variants={flagsMotion} initial="hidden" animate="show" exit="exit" >
                                <m.div variants={flagMotion} to='/'><img onClick={() => change_language('french')} id='frenchFlag' className='flag' src={frenchFlag} alt=''></img></m.div>
                                <m.div variants={flagMotion} to='/'><img onClick={() => change_language('english')} id='englishFlag' className='flag' src={englishFlag} alt=''></img></m.div>
                            </m.div>
                        </div>


                        <div className='cv_img_parent'>
                            <object className='cv_img english txt'data={englishCV} type="application/pdf">
                                <p>Unable to display PDF file. <a href={englishCV}>Download</a> instead.</p>
                            </object>

                            <object className='cv_img french txt' data={frenchCV} type="application/pdf">
                                <p>Unable to display PDF file. <a href={frenchCV}>Download</a> instead.</p>
                            </object>

                    </div>
                </m.div>
            </div>


            );
    }
}
 
export default CV;