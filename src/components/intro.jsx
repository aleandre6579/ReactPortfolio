import React, { Component, useEffect } from 'react';
import { backInOut, easeInOut, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { App } from "../App.js"
import selectedLanguage from './selectedLanguage.js'
import '../css/intro.css'
import '../css/w3.css'

import englishFlag from '../imgs/englishFlag.png';
import frenchFlag from '../imgs/frenchFlag.png';

import gitLogo from '../imgs/gitLogo.png';
import gmailLogo from '../imgs/gmailLogo.png';
import linkedinLogo from '../imgs/linkedinLogo.png';

class Intro extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        let btnsAnimating = document.getElementsByClassName('btnAnimating');
        btnsAnimating[0].addEventListener("animationend", () => {
            while(btnsAnimating.length > 0) {
                btnsAnimating[0].classList.add("btn");
                btnsAnimating[0].classList.remove("btnAnimating");
                btnsAnimating = document.getElementsByClassName('btnAnimating');
            }
        });       

        var allText = document.getElementsByClassName('txt');
        for(let i = 0; i < allText.length; i++) {
            if(!allText[i].classList.contains(selectedLanguage.selectedLanguage)) {
                allText[i].classList.add('hideTxt');
            }
        }
    }

    render() { 

        const pathAppear = {
            hidden: { 
                pathLength: 0,
                opacity: 0,
                fill: 'rgba(255, 255, 255, 0)',
            },
            show: { 
                opacity: 1,
                fill: 'rgba(255, 255, 255, 1)',
                pathLength: 1,
                transition: {
                    delay: 1,
                    duration: 2,
                    fill: {delay: 3, duration: 2}
                },
                transitionEnd: {
                    opacity: 0,
                } 
            },
        }

        const contactBar = {
            hidden: { left: '-20px', width: '0%' },
            visible: {
              left: '0px',
              width: '100%',
              transition: {
                delay: 3.5,
                ease: 'easeInOut',
                duration: 2,
                delayChildren: 5.25,
                staggerChildren: 0.3
              }
            }
          }
            
          const contactBtn = {
            hidden: { y: 150, opacity: 0, rotate: 180 },
            visible: {
              y: 0,
              opacity: 1,
              rotate: 360,
              transition: {
                duration: 1,
                ease: 'backInOut',
              }
            }     
        }
        const contactTxt = {
            hidden: { y: 150, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'backInOut',
              }
            }
        }

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

        function circleBtnClicked(btnName) {
            document.body.style.overflow = 'hidden';
            var btn_panel = document.getElementById(btnName);
            btn_panel.classList.add("click-anim");

            for (let i = 1; i < 4; i++) {
                if('btn' + i !== btnName) {
                    document.getElementById('btn' + i).classList.add("hide");
                }
                else {
                    document.getElementById('btn' + i).classList.remove("intro-btn");
                }
            }
        }

        function handleOnMouseMove(e) {
            
            const { currentTarget: target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            
            target.style.setProperty("--mouse-x", x + 'px');
            target.style.setProperty("--mouse-y", y + 'px');
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

        function startContactTxtAnimation() {
            document.getElementsByClassName('contactTxt')[0].classList.add('contactTxtAnim');
            document.getElementsByClassName('contactTxt')[1].classList.add('contactTxtAnim');
        }


        return (
            <m.div id='root2'
                initial={{opacity: 1}}
                animate={{opacity:1}}
                transition={{duration: 2}}
                exit={{opacity:1}}
          >
                <div className="title-section">
                    <div className='title-container'>

                        <m.div className='flags' variants={flagsMotion} initial="hidden" animate="show" exit="exit" >
                            <m.div variants={flagMotion} to='/'><img onClick={() => change_language('french')} id='frenchFlag' className='flag' src={frenchFlag} alt=''></img></m.div>
                            <m.div variants={flagMotion} to='/'><img onClick={() => change_language('english')} id='englishFlag' className='flag' src={englishFlag} alt=''></img></m.div>
                        </m.div>


                        <div>
                            <div className="title title-pos">
                                <div className="name english txt">Alexander Simon</div>
                                <div className="name french txt">Alexandre Simon</div>
                            </div>
                            <div className="subtitle subtitle-pos">
                                <div className="software-dev english txt">Software Developer</div>
                                <div className="software-dev french txt">Développeur de logiciels</div>
                            </div>
                        </div>    

                        <m.div className='btns'>
                            <m.div id='btn1' onClick={() => circleBtnClicked('btn1')} className='btnAnimating about-btn intro-btn' >
                                <Link className='intro-link' to='/about'>
                                    <div className="btn-txt english txt">About</div>
                                    <div className="btn-txt french txt">A propos</div>
                                </Link>
                                <m.svg className='svg'>
                                    <m.rect
                                        variants={pathAppear} initial="hidden" animate="show"
                                        x="6"
                                        y="6"
                                        rx='.75em' ry='.75em' width='6em' height='1.45em'>                                           
                                    </m.rect>
                                </m.svg>
                            </m.div>
                            <m.div id='btn2' onClick={() => circleBtnClicked('btn2')} className='btnAnimating skills-btn intro-btn'>
                                <Link className='intro-link' to='/skills'>
                                    <div className="btn-txt english txt">Skills</div>
                                    <div className="btn-txt french txt">Compétences</div>
                                </Link>
                                <m.svg className='svg'>
                                    <m.rect
                                        variants={pathAppear} initial="hidden" animate="show"
                                        x="6"
                                        y="6"
                                        rx='.75em' ry='.75em' width='6em' height='1.45em'>    
                                    </m.rect>
                                </m.svg>
                            </m.div>
                            <m.div id='btn3' onClick={() => circleBtnClicked('btn3')} className='btnAnimating projects-btn intro-btn'>
                                <Link className='intro-link' to='/projects'>
                                    <div className="btn-txt english txt">Projects</div>
                                    <div className="btn-txt french txt">Projets</div>
                                </Link>
                                <m.svg className='svg'>
                                    <m.rect
                                        variants={pathAppear} initial="hidden" animate="show"
                                        x="6"
                                        y="6"
                                        rx='.75em' ry='.75em' width='6em' height='1.45em'>                                            
                                    </m.rect>
                                </m.svg>
                            </m.div>
                        </m.div>

                    </div>
                </div>

                <m.div className='contactBar'
                    variants={contactBar}
                    initial="hidden" animate="visible"
                >
                    <m.div variants={contactTxt} onAnimationComplete={startContactTxtAnimation} className="contactTxt english txt">Contact me here</m.div>
                    <m.div variants={contactTxt} className="contactTxt french txt">Contactez-moi ici</m.div>

                    <a href='https://github.com/aleandre6579?tab=repositories' target="_blank"><m.img id='gitBtn' variants={contactBtn} className='contactBtn' src={gitLogo}/></a>
                    <a href='https://linkedin.com/in/alexandre-simon-dev' target="_blank"><m.img id='gitBtn' variants={contactBtn} className='contactBtn ' src={linkedinLogo}/></a>
                    <m.div variants={contactTxt} className="contactInfoTxt">alexsimon.code@gmail.com</m.div>
                    <m.div variants={contactTxt} className="contactInfoTxt">+66 626060299</m.div>
                </m.div>

            </m.div>
        );
    }
}

export default Intro;