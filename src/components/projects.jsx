import React, { Component } from 'react';
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
            if(popup == null) return;
            
            if (!popup.contains(event.target) && !(activePopupId === 0) && window.getComputedStyle(popup).width.split("px")[0] > 200) {
                console.log(activePopupId);
                hideProjectPopup();
            }
        });
        
        function realPageDisappear(btn_num) {
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
                <m.div id="realPage" className='realPage scrollbar'>
                    <div className="navbar">
                        <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow}initial="hidden" animate="show" exit="exit">
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
                        <div id="project" onClick={() => showProjectPopup('project7')} className="project project7">
                            <img alt="projectImg" src={escapeOrb} className='projectImg'></img>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="unityIcon" src={unity}></img></div>
                        </div>
                        <div id="project" onClick={() => showProjectPopup('project1')} className="project project1">
                            <img alt="projectImg" src={freebotMenu} className='projectImg'></img>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="unityIcon" src={unity}></img></div>
                        </div>
                        <div id="project" onClick={() => showProjectPopup('project2')} className="project project2">
                            <img alt="popupImg" className='projectImg' src={plightMissile}/>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="unityIcon" src={unity}></img></div>
                        </div>
                        <div onClick={() => showProjectPopup('project3')} className="project project3">
                            <img alt="popupImg" className='projectImg' src={warboatsMenu}/>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="unityIcon" src={unity}></img></div>
                        </div>
                        <div onClick={() => showProjectPopup('project4')} className="project project4">
                            <img alt="popupImg" className='projectImg' src={swarmDying}/>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="unityIcon" src={unity}></img></div>
                        </div>
                        <div onClick={() => showProjectPopup('project5')} className="project project5">
                            <img alt="popupImg" className='projectImg' src={fantasiaDead}/>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="unityIcon" src={unity}></img></div>
                        </div>
                        <div onClick={() => showProjectPopup('project6')} className="project project6">
                            <img alt="popupImg" className='projectImg' src={quickSort}/>
                            <div className="txt english hoverIcon">View Project</div>
                            <div className='projectIcon'><img className='projectIconImg' alt="cIcon" src={scala}></img></div>
                        </div>

                        <div className="newProjects">
                        <div className='newProjectsTxt english txt'>New projects cooking up !</div>
                        <div className='newProjectsTxt french txt'>De nouveaux projets en préparation !</div>
                        </div>
                    </m.div>


                    <m.div id="backPanel"></m.div>
                    <m.div id='projectPopup' style={{opacity: 0}} className="projectPopup projectPopupClose hideFast">
                        <div className="projectScrollbar">
                            <div onClick={hideProjectPopup} className="closeBtn">x</div>
                            <div id='project1' className="popup1 hideFast popupContent">
                                <h2>Freebot: Escape the Factory!</h2>
                                <p className='english txt'>
                                    A 2D platformer game I made as a university project using Unity which taught me about WebGL and
                                    how to upload games online.
                                </p>
                                <p className='french txt'>
                                    Un jeu de plateforme 2D que j'ai créé avec Unity dans le cadre d'un projet universitaire qui m'a appris WebGL et
                                    comment télécharger des jeux en ligne.
                                </p>
                                <video controls className='projectVid'>
                                    <source src={freebotVid} type="video/mp4"/>

                                    Download the
                                    <a href={freebotVid}>MP4</a>
                                    video.
                                </video>

                                <img alt="popupImg" className='popupImg' src={freebotMenu}/>
                                <img alt="popupImg" className='popupImg' src={freebotOpen}/>
                                <img alt="popupImg" className='popupImg' src={freebotShoot}/>
                                <img alt="popupImg" className='popupImg' src={freebotEnemy}/>
                                <img alt="popupImg" className='popupImg' src={freebotKill}/>
                                <img alt="popupImg" className='popupImg' src={freebotPuzzle}/>
                                <img alt="popupImg" className='popupImg' src={freebotSolved}/>
                            </div>
                            <div id='project2' className="popup2 hideFast popupContent">
                                <h2>Plight Flight</h2>
                                <p className='english txt'>
                                    A game I made using Unity which taught me a lot about coding enemy AI and the merits
                                    of raycasting.<br/><br/>
                                    I also learned more about shaders, how to deal with rotations and quaternions, the
                                    intricacies of Unity's particle system and how to set up and design difficulty levels.  
                                </p>
                                <p className='french txt'>
                                    Un jeu que j'ai créé avec Unity qui m'a beaucoup appris sur le codage d'intelligence artificielle 
                                    et les mérites de la technique de raycasting.<br/><br/>
                                    J'ai également appris davantage sur les shaders, sur comment gérer les rotations et les quaternions,
                                    sur les subtilités du système de particules d'Unity et comment configurer et concevoir des niveaux de difficulté.
                                </p>
                                <video controls className='projectVid'>
                                    <source src={plightVid} type="video/mp4"/>

                                    Download the
                                    <a href={plightVid}>MP4</a>
                                    video.
                                </video>

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
                                <p className='english txt'>
                                    A game I made using Unity for my family to play on Christmas.<br/>
                                    This game taught me a lot about getting assets online, about Unity's audio system, and
                                    gave me a better understanding of how to work in a 3D environment in Unity.<br/> 
                                    I also got to work with Unity's shadering and lighting systems for the first time.
                                </p>
                                <p className='french txt'>
                                    Un jeu que j'ai créé avec Unity pour ma famille à Noël.<br/><br/>
                                    Ce jeu m'a beaucoup appris sur l'utilisation de ressources en ligne, sur le système audio d'Unity et
                                    m'a permis de mieux comprendre comment travailler dans un environnement 3D sur Unity.<br/><br/>
                                    J'ai également pu travailler avec des shaders et le system de luminosité de Unity plus en détails.                                </p>
                                <img alt="popupImg" className='popupImg' src={warboatsMenu}/>
                            </div>
                            <div id='project4' className="popup4 hideFast popupContent">
                                <h2>Swarmbot</h2>
                                <p className='english txt'>
                                    A top-down shooter game I made using Unity by following a Udemy course by the acclaimed 
                                    youtuber Blackthornprod.<br/>
                                    This game, being the second game I every made in Unity, taught me practically all the 
                                    basics of making a 2D game in Unity. Although the art is quite simple, I take pride in the
                                    fact that all the sprites and assets were made on my own using Photoshop.
                                </p>
                                <p className='french txt'>
                                    Un jeu de tir avec vue de haut que j'ai créé avec Unity en suivant un cours sur Udemy enseigné par le célèbre
                                    youtubeur anglophone Blackthornprod.<br/><br/>
                                    Ce jeu, étant le deuxième que j'ai créé avec Unity, m'a appris pratiquement toutes les
                                    bases de la création d'un jeu 2D. Bien que les dessins soient assez simples et enfantins,
                                    je suis content d'avoir pu créer tous les "sprites" et "assets" moi-même à l'aide de Photoshop.                     
                                </p>
                                <video controls className='projectVid'>
                                    <source src={swarmVid} type="video/mp4"/>

                                    Download the
                                    <a href={swarmVid}>MP4</a>
                                    video.
                                </video>

                                <img alt="popupImg" className='popupImg' src={swarmMenu}/>
                                <img alt="popupImg" className='popupImg' src={swarmStart}/>
                                <img alt="popupImg" className='popupImg' src={swarmDying}/>
                                <img alt="popupImg" className='popupImg' src={swarmRanged}/>
                                <img alt="popupImg" className='popupImg' src={swarmBoss}/>
                                <img alt="popupImg" className='popupImg' src={swarmLost}/>
                            </div>
                            <div id='project5' className="popup5 hideFast popupContent">
                                <h2>Fantasia</h2>
                                <p className='english txt'>
                                    A Trivia game I made for my family to play on Christmas, which is also my first ever
                                    game made in Unity.<br/><br/>
                                    I drew the sprites for the characters using Photoshop, and the design and animations
                                    of the characters are inspired by my family members.
                                </p>
                                <p className='french txt'>
                                    Un jeu de questions réponses que j'ai créé pour ma famille à Noël, qui est aussi mon tout premier
                                    jeu utilisant Unity.<br/><br/>
                                    J'ai dessiné moi-même les "sprites" des personnages avec Photoshop, logiciel que je venais tout juste de prendre en main.
                                    Le design et les animations des personnages sont inspirés par les membres de ma famille.                                
                                </p>
                                <img alt="popupImg" className='popupImg' src={fantasiaMenu}/>
                                <img alt="popupImg" className='popupImg' src={fantasiaStart}/>
                                <img alt="popupImg" className='popupImg' src={fantasiaDialogue}/>
                                <img alt="popupImg" className='popupImg' src={fantasiaQuestion}/>
                                <img alt="popupImg" className='popupImg' src={fantasiaDead}/>
                            </div>
                            <div id='project6' className="popup6 hideFast popupContent">
                                <h2 className='english txt'>Parallel Sorting Algorithms</h2>
                                <h2 className='french txt'>Algorithmes de tri en parallèle</h2>
                                <p className='english txt'>
                                    For a university project I wanted to try improving 5 commonly used sorting algorithms by
                                    implementing them with some parallelization technique.<br/><br/>
                                    However, for some of the algorithms, the parallelization did not manage to make them faster.
                                </p>
                                <p className='french txt'>
                                    Pour un projet universitaire, je voulais essayer d'améliorer 5 algorithmes de tri couramment utilisés en
                                    introduisant de la parallélisation au sein des algorithmes.<br/><br/>
                                    Cependant, j'ai appris que certains algorithmes fonctionnent de manière séquentielle et ne bénéficient donc pas de la parallélisation.
                                </p>
                                <img alt="popupImg" className='popupImg' src={quickSort}/>
                                <img alt="popupImg" className='popupImg' src={sampleSort}/>
                                <img alt="popupImg" className='popupImg' src={insertionSort}/>
                            </div>
                            <div id='project7' className="popup7 hideFast popupContent">
                                <h2>Escape From The Island</h2>
                                <p className='english txt'>
                                    A 3D survival story game I made as a university project using Unity.
                                </p>
                                <p className='french txt'>
                                    Un jeu de survie 3D que j'ai créé avec Unity dans le cadre d'un projet universitaire.
                                </p>
                                <video controls className='projectVid'>
                                    <source src={escapeVid} type="video/mp4"/>

                                    Download the
                                    <a href={escapeVid}>MP4</a>
                                    video.
                                </video>

                                <img alt="popupImg" className='popupImg' src={escapeMenu}/>
                                <img alt="popupImg" className='popupImg' src={escapeCoco}/>
                                <img alt="popupImg" className='popupImg' src={escapeMissions}/>
                                <img alt="popupImg" className='popupImg' src={escapeCraft}/>
                                <img alt="popupImg" className='popupImg' src={escapeCrab}/>
                                <img alt="popupImg" className='popupImg' src={escapeOrb}/>
                            </div>
                            <div style={{height: '10px'}}/>
                        </div>
                    </m.div>


                </m.div>
            </div>
        );
    }
}
 
export default About;