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
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.overflowX = "hidden";

        const btnsAnimating = document.getElementsByClassName('btnAnimating');
        btnsAnimating[0].addEventListener("animationend", () => {
            for (let i = 0; i < btnsAnimating.length; i++) {
                console.log(i);
                btnsAnimating[i].classList.add("btn");
                btnsAnimating[i].classList.remove("btnAnimating");
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
            hidden: { y: 50, opacity: 0, fontSize: '0rem' },
            visible: {
              y: 0,
              opacity: 1,
              fontSize: '1.5rem',
              transition: {
                duration: 1,
                ease: 'backInOut',
              }
            }     
        }

        function circleBtnClicked(btnName) {
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
                    
                    <div className="title title-pos">
                        <div className="name">Alexandre Simon</div>
                    </div>
                    <div className="subtitle subtitle-pos">
                        <div className="software-dev">Software Developer</div>
                    </div>

                    <m.div className='btns'>
                        <div id='btn1' onClick={() => circleBtnClicked('btn1')} className='btnAnimating about-btn' ><Link style={{"textDecoration": "none"}} to='/about'><div className="btn-txt">About</div></Link>
                            <m.svg className='svg'>
                                <m.rect
                                    variants={pathAppear} initial="hidden" animate="show"
                                    x="5"
                                    y="6"
                                    rx='50' ry='50' width='5em' height='1.48em'
                                ></m.rect>
                            </m.svg>
                        </div>
                        <m.div id='btn2' onClick={() => circleBtnClicked('btn2')} className='btnAnimating skills-btn'><Link style={{"textDecoration": "none"}} to='/skills'><div className="btn-txt">Skills</div></Link>
                            <m.svg className='svg'>
                                <m.rect
                                    variants={pathAppear} initial="hidden" animate="show"
                                    x="5"
                                    y="6"
                                    rx='50' ry='50' width='5em' height='1.47em'
                                ></m.rect>
                            </m.svg>
                        </m.div>
                        <m.div id='btn3' onClick={() => circleBtnClicked('btn3')} className='btnAnimating projects-btn'><Link style={{"textDecoration": "none"}} to='/projects'><div className="btn-txt">Projects</div></Link>
                            <m.svg className='svg'>
                                <m.rect
                                    variants={pathAppear} initial="hidden" animate="show"
                                    x="5"
                                    y="6"
                                    rx='50' ry='50' width='5em' height='1.47em'
                                ></m.rect>
                            </m.svg>
                        </m.div>
                    </m.div>

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

                </div>
            </m.div>
        );
    }
}

export default Intro;