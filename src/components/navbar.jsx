import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import selectedLanguage from './selectedLanguage.js'
import '../css/about.css';
import '../css/w3.css';

import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';
import englishFlag from '../imgs/englishFlag.png';
import frenchFlag from '../imgs/frenchFlag.png';


class Navbar extends Component {
    state = {  

    } 
    render() { 
        const page = this.props.page;

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
        function realPageDisappear(btnName) {
            if(btnName == page)
                return;

            var navbar_btns = document.getElementsByClassName('navbar-btn');
            let i = 0;
            while (navbar_btns.length > 3) {
                if (navbar_btns[i].parentElement.classList.contains('hideTxt')) {
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
            for (let i = 0; i < allText.length; i++) {
                if (allText[i].classList.contains('hideTxt') && allText[i].classList.contains(language_name)) {
                    allText[i].classList.remove('hideTxt');
                }
                else if (!allText[i].classList.contains('hideTxt') && !allText[i].classList.contains(language_name)) {
                    allText[i].classList.add('hideTxt');
                }
            }
        }



        return (
            <div className="navbar">
                <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} onClick={realPageDisappear} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit" >
                    <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                </m.div>
                <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar english txt">
                    <m.div onClick={() => realPageDisappear("about")} className='navbar-btn' variants={navItem} ><Link className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>About</m.div></Link></m.div>
                    <m.div onClick={() => realPageDisappear("skills")} className='navbar-btn' variants={navItem} ><Link className='link' to='/skills'><m.div className='navtxt' variants={link} initial='hidden' animate='show' exit='exit'>Skills</m.div></Link></m.div>
                    <m.div onClick={() => realPageDisappear("projects")} className='navbar-btn' variants={navItem} ><Link className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projects</m.div></Link></m.div>
                </m.div>
                <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar french txt">
                    <m.div onClick={() => realPageDisappear("about")} className='navbar-btn' variants={navItem} ><Link className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>A propos</m.div></Link></m.div>
                    <m.div onClick={() => realPageDisappear("skills")} className='navbar-btn' variants={navItem} ><Link className='link' to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Compétences</m.div></Link></m.div>
                    <m.div onClick={() => realPageDisappear("projects")} className='navbar-btn' variants={navItem} ><Link className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projets</m.div></Link></m.div>
                </m.div>
                <m.div className='flags' variants={flagsMotion} initial="hidden" animate="show" exit="exit" >
                    <m.div variants={flagMotion} to='/'><img onClick={() => change_language('french')} id='frenchFlag' className='flag' src={frenchFlag} alt=''></img></m.div>
                    <m.div variants={flagMotion} to='/'><img onClick={() => change_language('english')} id='englishFlag' className='flag' src={englishFlag} alt=''></img></m.div>
                </m.div>
            </div>
);
    }
}
 
export default Navbar;