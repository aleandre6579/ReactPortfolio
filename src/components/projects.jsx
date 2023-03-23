import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/about.css';
import '../css/projects.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

// Freebot imgs
import freebotMenu from '../imgs/projects/freebot/freebotMenu.png';
import freebotEnemy from '../imgs/projects/freebot/freebotEnemy.PNG';
import freebotKill from '../imgs/projects/freebot/freebotKill.PNG';
import freebotOpen from '../imgs/projects/freebot/freebotOpen.PNG';
import freebotPuzzle from '../imgs/projects/freebot/freebotPuzzle.PNG';
import freebotShoot from '../imgs/projects/freebot/freebotShoot.PNG';
import freebotSolved from '../imgs/projects/freebot/freebotSolved.PNG';

// Fantasia imgs
import fantasiaMenu from '../imgs/projects/fantasia/fantasiaMenu.png';
import fantasiaStart from '../imgs/projects/fantasia/fantasiaStart.png';
import fantasiaDead from '../imgs/projects/fantasia/fantasiaDead.png';

// Plight imgs
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

// swarmbots imgs
import swarmMenu from '../imgs/projects/swarmbots/swarmMenu.png';
import swarmStart from '../imgs/projects/swarmbots/swarmStart.png';
import swarmDying from '../imgs/projects/swarmbots/swarmDying.png';
import swarmRanged from '../imgs/projects/swarmbots/swarmRanged.png';
import swarmBoss from '../imgs/projects/swarmbots/swarmBoss.png';
import swarmLost from '../imgs/projects/swarmbots/swarmLost.png';

// warboats imgs
import warboatsMenu from '../imgs/projects/warboats/warboatsMenu.png';

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
                opacity: 0,
                y: -150,
                transition: {
                    duration: 0.4,
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

        let activePopupId = 0;

        function changeArrowToBlack() {
            document.getElementById('backArrow').src = backArrowBlack;
        }
        function changeArrowToWhite() {
            document.getElementById('backArrow').src = backArrowWhite;
        }

        function showProjectPopup(projectId) {
            if(activePopupId !== 0) return;
            activePopupId = projectId;

            var popup = document.getElementById('projectPopup');
            popup.classList.remove("projectPopupClose");
            popup.classList.remove("hideFast");
            popup.style.opacity = 1;

            // Reset popup open animation
            popup.classList.remove("projectPopup");
            void popup.offsetWidth;
            popup.classList.add("projectPopup");
                
            var project = document.getElementById(projectId);
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
            var project = document.getElementById(activePopupId);
            project.classList.add("hideFast");
            activePopupId = 0;
    
            // Remove back panel
            var backPanel = document.getElementById('backPanel');
            backPanel.classList.remove('backPanel');
    
        }
        // if popup is opened and user clicked outside the popup; hide the popup
        document.addEventListener('click', function handleClickOutsidePopup(event) {          
            const popup = document.getElementById('projectPopup');
          
            if (!popup.contains(event.target) && !(activePopupId === 0) && window.getComputedStyle(popup).width.split("px")[0] > 200) {
                console.log(activePopupId);
                hideProjectPopup();
            }
        });
        
        function realPageDisappear() {
            var realPage = document.getElementById("realPage");
            realPage.classList.remove("realPage");
            realPage.classList.add("realPageDisappear");
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
                        <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow}initial="hidden" animate="show" exit="exit">
                            <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                        </m.div>
                        <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar">
                            <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/about'><div>About</div></Link></m.div>
                            <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/skills'><div>Skills</div></Link></m.div>
                            <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{"textDecoration": "none"}} to='/projects'><div>Projects</div></Link></m.div>
                        </m.div>
                    </div>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="projectsContent">
                        <div id="project" onClick={() => showProjectPopup('project1')} className="project project1">
                            <img alt="projectImg" src={freebotMenu} className='projectImg'></img>
                            <div className="hoverIcon">View Project</div>
                        </div>
                        <div id="project" onClick={() => showProjectPopup('project2')} className="project project2">
                            <img alt="popupImg" className='projectImg' src={plightMissile}/>
                            <div className="hoverIcon">View Project</div>
                        </div>
                        <div onClick={() => showProjectPopup('project3')} className="project project3">
                            <img alt="popupImg" className='projectImg' src={warboatsMenu}/>
                            <div className="hoverIcon">View Project</div>
                        </div>
                        <div onClick={() => showProjectPopup('project4')} className="project project4">
                            <img alt="popupImg" className='projectImg' src={swarmDying}/>
                            <div className="hoverIcon">View Project</div>
                        </div>
                        <div onClick={() => showProjectPopup('project5')} className="project project5">
                            <img alt="popupImg" className='projectImg' src={fantasiaDead}/>
                            <div className="hoverIcon">View Project</div>
                        </div>
                    </m.div>

                    <m.div id="backPanel"></m.div>
                    <m.div id='projectPopup' style={{opacity: 0}} className="projectPopup hideFast">
                        <div className="scrollbar">
                            <div onClick={hideProjectPopup} className="closeBtn">x</div>
                            <div id='project1' className="popup1 hideFast popupContent">
                                <h2>Freebot: Escape the Factory!</h2>
                                <p>A 2D platformer game I made as a university project which taught me about WebGL and how to upload games online.</p>
                                <img alt="popupImg" className='popupImg' src={freebotMenu}/>
                                <img alt="popupImg" className='popupImg' src={freebotOpen}/>
                                <img alt="popupImg" className='popupImg' src={freebotShoot}/>
                                <img alt="popupImg" className='popupImg' src={freebotEnemy}/>
                                <img alt="popupImg" className='popupImg' src={freebotKill}/>
                                <img alt="popupImg" className='popupImg' src={freebotPuzzle}/>
                                <img alt="popupImg" className='popupImg' src={freebotSolved}/>
                            </div>
                            <div id='project2' className="popup2 hideFast popupContent">
                                <h2>PlightFlight</h2>
                                <p>A.</p>
                                <img alt="popupImg" className='popupImg' src={plightMenu}/>
                                <img alt="popupImg" className='popupImg' src={plightStart}/>
                                <img alt="popupImg" className='popupImg' src={plightAim}/>
                                <img alt="popupImg" className='popupImg' src={plightSonar}/>
                                <img alt="popupImg" className='popupImg' src={plightMissile}/>
                                <img alt="popupImg" className='popupImg' src={plightBoss}/>
                                <img alt="popupImg" className='popupImg' src={plightBoss2}/>
                                <img alt="popupImg" className='popupImg' src={plightDestroyed}/>
                                <img alt="popupImg" className='popupImg' src={plightDestroyed2}/>
                                <img alt="popupImg" className='popupImg' src={plightQuests}/>
                                <img alt="popupImg" className='popupImg' src={plightPuzzle}/>
                            </div>
                            <div id='project3' className="popup3 hideFast popupContent">
                                <h2>Warboats</h2>
                                <p>.</p>
                                <img alt="popupImg" className='popupImg' src={warboatsMenu}/>
                            </div>
                            <div id='project4' className="popup4 hideFast popupContent">
                                <h2>Swarmboats</h2>
                                <p>.</p>
                                <img alt="popupImg" className='popupImg' src={swarmMenu}/>
                                <img alt="popupImg" className='popupImg' src={swarmStart}/>
                                <img alt="popupImg" className='popupImg' src={swarmDying}/>
                                <img alt="popupImg" className='popupImg' src={swarmRanged}/>
                                <img alt="popupImg" className='popupImg' src={swarmBoss}/>
                                <img alt="popupImg" className='popupImg' src={swarmLost}/>
                            </div>
                            <div id='project5' className="popup5 hideFast popupContent">
                                <h2>Fantasia</h2>
                                <p>.</p>
                                <img alt="popupImg" className='popupImg' src={fantasiaMenu}/>
                                <img alt="popupImg" className='popupImg' src={fantasiaStart}/>
                                <img alt="popupImg" className='popupImg' src={fantasiaDead}/>
                            </div>
                        </div>
                    </m.div>


                </m.div>
            </div>
        );
    }
}
 
export default About;