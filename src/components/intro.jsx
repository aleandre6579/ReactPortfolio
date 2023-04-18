import React, { Component, useEffect } from 'react';
import { backInOut, easeInOut, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { App } from "../App.js"

import '../css/intro.css'
import '../css/w3.css'

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
            hidden: { y: 50, opacity: 0, rotate: 180 },
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
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'backInOut',
              }
            }
        }

        function circleBtnClicked(btnName) {
            document.body.style.overflow = 'hidden';
            var btn_panel = document.getElementById(btnName);
            btn_panel.classList.add("click-anim");

            for (let i = 1; i < 4; i++) {
                if('btn' + i !== btnName)
                    document.getElementById('btn' + i).classList.add("hide");
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

        return (
            <m.div id='root2'
                initial={{opacity: 1}}
                animate={{opacity:1}}
                transition={{duration: 2}}
                exit={{opacity:1}}
          >
                <div className="title-section">
                    <div className='title-container'>

                        <div>
                            <div className="title title-pos">
                                <div className="name">Alexandre Simon</div>
                            </div>
                            <div className="subtitle subtitle-pos">
                                <div className="software-dev">Software Developer</div>
                            </div>
                        </div>    

                        <m.div className='btns'>
                            <m.div id='btn1' onClick={() => circleBtnClicked('btn1')} className='btnAnimating about-btn intro-btn' ><Link className='intro-link' to='/about'><div className="btn-txt">About</div></Link>
                                <m.svg className='svg'>
                                    <m.rect
                                        variants={pathAppear} initial="hidden" animate="show"
                                        x="6"
                                        y="6"
                                        rx='.75em' ry='.75em' width='4.9em' height='1.45em'>                                           
                                    </m.rect>
                                </m.svg>
                            </m.div>
                            <m.div id='btn2' onClick={() => circleBtnClicked('btn2')} className='btnAnimating skills-btn intro-btn'><Link className='intro-link' to='/skills'><div className="btn-txt">Skills</div></Link>
                                <m.svg className='svg'>
                                    <m.rect
                                        variants={pathAppear} initial="hidden" animate="show"
                                        x="6"
                                        y="6"
                                        rx='.75em' ry='.75em' width='4.9em' height='1.45em'>    
                                    </m.rect>
                                </m.svg>
                            </m.div>
                            <m.div id='btn3' onClick={() => circleBtnClicked('btn3')} className='btnAnimating projects-btn intro-btn'><Link className='intro-link' to='/projects'><div className="btn-txt">Projects</div></Link>
                                <m.svg className='svg'>
                                    <m.rect
                                        variants={pathAppear} initial="hidden" animate="show"
                                        x="6"
                                        y="6"
                                        rx='.75em' ry='.75em' width='4.9em' height='1.45em'>                                            
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
                    <m.div variants={contactTxt} className="contactTxt">Contact me here</m.div>
                    <a href='https://github.com/aleandre6579?tab=repositories' target="_blank"><m.img id='gitBtn' variants={contactBtn} className='contactBtn' src={gitLogo}/></a>
                    <a href='https://linkedin.com/in/alexandre-simon-dev' target="_blank"><m.img id='gitBtn' variants={contactBtn} className='contactBtn ' src={linkedinLogo}/></a>
                    <m.div variants={contactTxt} className="contactInfoTxt">aleandre6579.simon@gmail.com</m.div>
                    <m.div variants={contactTxt} className="contactInfoTxt">+66 626060299</m.div>
                </m.div>

            </m.div>
        );
    }
}

export default Intro;