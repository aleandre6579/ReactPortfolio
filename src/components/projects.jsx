import React, { Component, useEffect, useRef } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import $ from "jquery";
import selectedLanguage from './selectedLanguage.js'

import '../css/about.css';
import '../css/projects.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';
import englishFlag from '../imgs/englishFlag.png';
import frenchFlag from '../imgs/frenchFlag.png';

// Tool Icons
import unity from '../imgs/skills/unity.png';
import scala from '../imgs/skills/scala.png';

// Escape media
import escapeVid from '../vids/escapeVid.mp4';
import escapeCoco from '../imgs/projects/escape/escapeCoco.png';
import escapeCrab from '../imgs/projects/escape/escapeCrab.png';
import escapeCraft from '../imgs/projects/escape/escapeCraft.png';
import escapeMenu from '../imgs/projects/escape/escapeMenu.png';
import escapeMissions from '../imgs/projects/escape/escapeMissions.png';
import escapeOrb from '../imgs/projects/escape/escapeOrb.png';

// Freebot media
import freebotVid from '../vids/freebotVid.mp4';
import freebotMenu from '../imgs/projects/freebot/freebotMenu.png';
import freebotEnemy from '../imgs/projects/freebot/freebotEnemy.PNG';
import freebotKill from '../imgs/projects/freebot/freebotKill.PNG';
import freebotOpen from '../imgs/projects/freebot/freebotOpen.PNG';
import freebotPuzzle from '../imgs/projects/freebot/freebotPuzzle.PNG';
import freebotShoot from '../imgs/projects/freebot/freebotShoot.PNG';
import freebotSolved from '../imgs/projects/freebot/freebotSolved.PNG';

// Fantasia media
import fantasiaMenu from '../imgs/projects/fantasia/fantasiaMenu.png';
import fantasiaStart from '../imgs/projects/fantasia/fantasiaStart.png';
import fantasiaDead from '../imgs/projects/fantasia/fantasiaDead.png';
import fantasiaDialogue from '../imgs/projects/fantasia/fantasiaDialogue.png';
import fantasiaQuestion from '../imgs/projects/fantasia/fantasiaQuestion.png';

// Plight media
import plightVid from '../vids/plightVid.mp4';
import plightMenu from '../imgs/projects/plightflight/plightMenu.png';
import plightStart from '../imgs/projects/plightflight/plightStart.png';
import plightAim from '../imgs/projects/plightflight/plightAim.png';
import plightSonar from '../imgs/projects/plightflight/plightSonar.png';
import plightMissile from '../imgs/projects/plightflight/plightMissile.png';
import plightBoss from '../imgs/projects/plightflight/plightBoss.png';
import plightBoss2 from '../imgs/projects/plightflight/plightBoss2.png';
import plightDestroyed from '../imgs/projects/plightflight/plightDestroyed.png';
import plightDestroyed2 from '../imgs/projects/plightflight/plightDestroyed2.png';
import plightQuests from '../imgs/projects/plightflight/plightQuests.png';
import plightPuzzle from '../imgs/projects/plightflight/plightPuzzle.png';

// swarmbots media
import swarmVid from '../vids/swarmVid.mp4';
import swarmMenu from '../imgs/projects/swarmbots/swarmMenu.png';
import swarmStart from '../imgs/projects/swarmbots/swarmStart.png';
import swarmDying from '../imgs/projects/swarmbots/swarmDying.png';
import swarmRanged from '../imgs/projects/swarmbots/swarmRanged.png';
import swarmBoss from '../imgs/projects/swarmbots/swarmBoss.png';
import swarmLost from '../imgs/projects/swarmbots/swarmLost.png';

// warboats media
import warboatsMenu from '../imgs/projects/warboats/warboatsMenu.png';

// sorting media
import quickSort from '../imgs/projects/sorting/quickSort.png';
import sampleSort from '../imgs/projects/sorting/sampleSort.png';
import insertionSort from '../imgs/projects/sorting/insertionSort.png';
import ProjectWidget from './projectWidget.jsx';
import ProjectPopup from './projectPopup.jsx';

function Project() {

    document.body.style.overflow = 'visible';
    window.scrollTo(0, 0);

    var allText = document.getElementsByClassName('txt');
    for (let i = 0; i < allText.length; i++) {
        if (!allText[i].classList.contains(selectedLanguage.selectedLanguage)) {
            allText[i].classList.add('hideTxt');
        }
    }

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

    let activePopupId = 0;
    const projectRef = useRef(null)

    useEffect(() => {
        console.log("Effect: " + projectRef.current)
    }, [projectRef])

    function changeArrowToBlack() {
        document.getElementById('backArrow').src = backArrowBlack;
    }
    function changeArrowToWhite() {
        document.getElementById('backArrow').src = backArrowWhite;
    }

    function showProjectPopup(projectId) {
        if (activePopupId !== 0) return;
        activePopupId = projectId;

        console.log(projectRef.current);

        var popup = document.getElementById('projectPopup');
        popup.classList.remove("projectPopupClose");
        popup.classList.remove("hideFast");
        popup.style.opacity = 1;

        // Reset popup open animation
        popup.classList.remove("projectPopup");
        void popup.offsetWidth;
        popup.classList.add("projectPopup");

        var project = document.getElementById('project' + projectId);
        project.classList.remove("hideFast");

        // Show back panel
        var backPanel = document.getElementById('backPanel');
        backPanel.classList.add('backPanel');
    }

    function hideProjectPopup() {
        // Close popup
        var popup = document.getElementById('projectPopup');
        popup.classList.add("projectPopupClose");

        // Hide the active popup content
        var project = document.getElementById('project' + activePopupId);
        project.classList.add("hideFast");
        activePopupId = 0;

        // Remove back panel
        var backPanel = document.getElementById('backPanel');
        backPanel.classList.remove('backPanel');

    }
    // if popup is opened and user clicked outside the popup; hide the popup
    document.addEventListener('click', function handleClickOutsidePopup(event) {
        const popup = document.getElementById('projectPopup');
        if (popup == null) return;

        if (!popup.contains(event.target) && !(activePopupId === 0) && window.getComputedStyle(popup).width.split("px")[0] > 200) {
            console.log(activePopupId);
            hideProjectPopup();
        }
    });

    function realPageDisappear() {
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
        <div>
            <m.div className="page"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ backgroundPosition: '0% 60%' }}
                transition={{ duration: 1 }}
                exit={{ backgroundPosition: '0% 0%' }}
            />
            <m.div id="realPage" className='realPage scrollbar'>
                <div className="navbar">
                    <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit">
                        <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                    </m.div>
                    <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar english txt">
                        <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>About</m.div></Link></m.div>
                        <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Skills</m.div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projects</m.div></Link></m.div>
                    </m.div>
                    <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar french txt">
                        <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>A propos</m.div></Link></m.div>
                        <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Compétences</m.div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projets</m.div></Link></m.div>
                    </m.div>
                    <m.div className='flags' variants={flagsMotion} initial="hidden" animate="show" exit="exit" >
                        <m.div variants={flagMotion} to='/'><img onClick={() => change_language('french')} id='frenchFlag' className='flag' src={frenchFlag} alt=''></img></m.div>
                        <m.div variants={flagMotion} to='/'><img onClick={() => change_language('english')} id='englishFlag' className='flag' src={englishFlag} alt=''></img></m.div>
                    </m.div>
                </div>

                <m.div variants={content} initial="hidden" animate="show" exit="exit" className="projectsContent">
                    <ProjectWidget iconImg={unity} img={escapeOrb} showPopupFunction={showProjectPopup} projectId={1} projectRef={projectRef} />
                    <ProjectWidget iconImg={unity} img={freebotMenu} showPopupFunction={showProjectPopup} projectId={2} projectRef={projectRef} />
                    <ProjectWidget iconImg={unity} img={plightMissile} showPopupFunction={showProjectPopup} projectId={3} projectRef={projectRef} />
                    <ProjectWidget iconImg={unity} img={warboatsMenu} showPopupFunction={showProjectPopup} projectId={4} projectRef={projectRef} />
                    <ProjectWidget iconImg={unity} img={swarmDying} showPopupFunction={showProjectPopup} projectId={5} projectRef={projectRef} />
                    <ProjectWidget iconImg={unity} img={fantasiaDead} showPopupFunction={showProjectPopup} projectId={6} projectRef={projectRef} />
                    <ProjectWidget iconImg={scala} img={quickSort} showPopupFunction={showProjectPopup} projectId={7} projectRef={projectRef} />
                </m.div>


                <m.div id="backPanel"></m.div>
                <m.div id='projectPopup' style={{ opacity: 0 }} className="projectPopup projectPopupClose hideFast">
                    <div className="projectScrollbar">
                        <div onClick={hideProjectPopup} className="closeBtn">x</div>
                        <ProjectPopup
                            title="Escape From The Island"
                            englishDescription="A 3D survival story game I made as a university project using Unity."
                            frenchDescription="Un jeu de survie 3D que j'ai créé avec Unity dans le cadre d'un projet universitaire."
                            video={escapeVid}
                            imgs={[escapeMenu, escapeCoco, escapeMissions, escapeCraft, escapeCrab, escapeOrb]}
                            projectId={1}
                        />

                    </div>
                </m.div>


            </m.div>
        </div>
    );
}

export default Project;