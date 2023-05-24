import React, { Component, useEffect, useRef } from 'react';
import { motion as m } from "framer-motion";
import Navbar from './navbar.jsx'
import selectedLanguage from './selectedLanguage.js'
import ProjectPopup from './projectPopup.jsx';

import '../css/about.css';
import '../css/projects.css';
import '../css/w3.css';

// Tool Icons
import unity from '../imgs/skills/unity.png';
import scala from '../imgs/skills/scala.png';
import react from '../imgs/skills/react.png';

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

// portfolio media
import portMenu from "../imgs/projects/portfolio/portMenu.png";



function Project() {

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
    const projectsRef = [ // A ref for each project popup
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useEffect(() => {
        document.body.style.overflow = 'visible';
        window.scrollTo(0, 0);

        var allText = document.getElementsByClassName('txt');
        for (let i = 0; i < allText.length; i++) {
            console.log(selectedLanguage.selectedLanguage);
            if (!allText[i].classList.contains(selectedLanguage.selectedLanguage)) {
                allText[i].classList.add('hideTxt');
            }
        }
    })

    function showProjectPopup(projectId) {
        if (activePopupId !== 0) return;
        activePopupId = projectId;

        var popup = document.getElementById('projectPopup');
        popup.classList.remove("projectPopupClose");
        popup.classList.remove("hideFast");
        popup.style.opacity = 1;

        // Reset popup open animation
        popup.classList.remove("projectPopup");
        void popup.offsetWidth;
        popup.classList.add("projectPopup");

        var project = projectsRef[projectId].current;
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
        var project = projectsRef[activePopupId].current;
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

    return (
        <div>
            <m.div className="page"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ backgroundPosition: '0% 60%' }}
                transition={{ duration: 1 }}
                exit={{ backgroundPosition: '0% 0%' }}
            />
            <m.div id="realPage" className='realPage scrollbar'>
                <Navbar page="projects"/>

                <m.div variants={content} initial="hidden" animate="show" exit="exit" className="projectsContent">
                    <ProjectWidget iconImg={unity} img={escapeOrb} showPopupFunction={showProjectPopup} projectId={0} projectRef={projectsRef[0]} />
                    <ProjectWidget iconImg={unity} img={freebotMenu} showPopupFunction={showProjectPopup} projectId={1} projectRef={projectsRef[1]} />
                    <ProjectWidget iconImg={unity} img={plightMissile} showPopupFunction={showProjectPopup} projectId={2} projectRef={projectsRef[2]} />
                    <ProjectWidget iconImg={unity} img={warboatsMenu} showPopupFunction={showProjectPopup} projectId={3} projectRef={projectsRef[3]} />
                    <ProjectWidget iconImg={unity} img={swarmDying} showPopupFunction={showProjectPopup} projectId={4} projectRef={projectsRef[4]} />
                    <ProjectWidget iconImg={unity} img={fantasiaDead} showPopupFunction={showProjectPopup} projectId={5} projectRef={projectsRef[5]} />
                    <ProjectWidget iconImg={scala} img={quickSort} showPopupFunction={showProjectPopup} projectId={6} projectRef={projectsRef[6]} />
                    <ProjectWidget iconImg={react} img={portMenu} showPopupFunction={showProjectPopup} projectId={7} projectRef={projectsRef[7]} />
                </m.div>


                <m.div id="backPanel"></m.div>
                <m.div id='projectPopup' style={{ opacity: 0 }} className="projectPopup projectPopupClose hideFast">
                    <div className="projectScrollbar">
                        <div onClick={hideProjectPopup} className="closeBtn">x</div>
                        <ProjectPopup
                            key={1}
                            title="Escape From The Island"
                            englishDescription="A 3D survival story game I made as a university project using Unity."
                            frenchDescription="Un jeu de survie 3D que j'ai créé avec Unity dans le cadre d'un projet universitaire."
                            video={escapeVid}
                            imgs={[escapeMenu, escapeCoco, escapeMissions, escapeCraft, escapeCrab, escapeOrb]}
                            projectId={0}
                            ref={projectsRef[0]}
                        />
                        <ProjectPopup
                            key={2}
                            title="Freebot: Escape the Factory!"
                            englishDescription="A 2D platformer game I made as a university project using Unity which taught me about WebGL and how to upload games online."
                            frenchDescription="Un jeu de plateforme 2D que j'ai créé avec Unity dans le cadre d'un projet universitaire qui m'a appris WebGL et comment télécharger des jeux en ligne."
                            video={freebotVid}
                            imgs={[freebotMenu, freebotOpen, freebotShoot, freebotEnemy, freebotKill, freebotPuzzle, freebotSolved]}
                            projectId={1}
                            ref={projectsRef[1]}
                        />
                        <ProjectPopup
                            key={3}
                            title="Plight Flight"
                            englishDescription="A game I made using Unity which taught me a lot about coding enemy AI and the merits of raycasting.
                                                I also learned more about shaders, how to deal with rotations and quaternions, the intricacies of Unity's particle system and how to set up and design difficulty levels."
                            frenchDescription="Un jeu que j'ai créé avec Unity qui m'a beaucoup appris sur le codage d'intelligence artificielle et les mérites de la technique de raycasting.
                                                J'ai également appris davantage sur les shaders, sur comment gérer les rotations et les quaternions, sur les subtilités du système de particules d'Unity et comment configurer et concevoir des niveaux de difficulté."
                            video={plightVid}
                            imgs={[plightMenu, plightStart, plightAim, plightSonar, plightMissile, plightBoss, plightBoss2, plightDestroyed, plightDestroyed2, plightQuests, plightPuzzle]}
                            projectId={2}
                            ref={projectsRef[2]}
                        />
                        <ProjectPopup
                            key={4}
                            title="Warboats"
                            englishDescription="A game I made using Unity for my family to play on Christmas.
                                                This game taught me a lot about getting assets online, about Unity's audio system, and gave me a better understanding of how to work in a 3D environment in Unity.
                                                I also got to work with Unity's shadering and lighting systems for the first time."
                            frenchDescription="Un jeu que j'ai créé avec Unity pour ma famille à Noël.
                                                Ce jeu m'a beaucoup appris sur l'utilisation de ressources en ligne, sur le système audio d'Unity et m'a permis de mieux comprendre comment travailler dans un environnement 3D sur Unity.
                                                J'ai également pu travailler avec des shaders et le system de luminosité de Unity plus en détails."
                            video={null}
                            imgs={[warboatsMenu]}
                            projectId={3}
                            ref={projectsRef[3]}
                        />
                        <ProjectPopup
                            key={5}
                            title="Swarmbot"
                            englishDescription="A top-down shooter game I made using Unity by following a Udemy course by the acclaimed youtuber Blackthornprod.
                                                This game, being the second game I every made in Unity, taught me practically all the basics of making a 2D game in Unity. Although the art is quite simple, I take pride in the fact that all the sprites and assets were made on my own using Photoshop."
                            frenchDescription="Un jeu de tir avec vue de haut que j'ai créé avec Unity en suivant un cours sur Udemy enseigné par le célèbre youtubeur anglophone Blackthornprod.
                                                Ce jeu, étant le deuxième que j'ai créé avec Unity, m'a appris pratiquement toutes les bases de la création d'un jeu 2D. Bien que les dessins soient assez simples et enfantins, je suis content d'avoir pu créer tous les 'sprites' et 'assets' moi-même à l'aide de Photoshop."
                            video={swarmVid}
                            imgs={[swarmMenu, swarmStart, swarmDying, swarmRanged, swarmBoss, swarmLost]}
                            projectId={4}
                            ref={projectsRef[4]}
                        />
                        <ProjectPopup
                            key={6}
                            title="Fantasia"
                            englishDescription="A Trivia game I made for my family to play on Christmas, which is also my first ever game made in Unity.
                                                I drew the sprites for the characters using Photoshop, and the design and animations of the characters are inspired by my family members."
                            frenchDescription="Un jeu de questions réponses que j'ai créé pour ma famille à Noël, qui est aussi mon tout premier jeu utilisant Unity.
                                                J'ai dessiné moi-même les 'sprites' des personnages avec Photoshop, logiciel que je venais tout juste de prendre en main. Le design et les animations des personnages sont inspirés par les membres de ma famille."
                            video={null}
                            imgs={[fantasiaMenu, fantasiaStart, fantasiaDialogue, fantasiaQuestion, fantasiaDead]}
                            projectId={5}
                            ref={projectsRef[5]}
                        />
                        <ProjectPopup
                            key={7}
                            title="Parallel Sorting Algorithms"
                            englishDescription="For a university project I wanted to try improving 5 commonly used sorting algorithms by implementing them with some parallelization technique.
                                                However, for some of the algorithms, the parallelization did not manage to make them faster."
                            frenchDescription="Pour un projet universitaire, je voulais essayer d'améliorer 5 algorithmes de tri couramment utilisés en introduisant de la parallélisation au sein des algorithmes.
                                                Cependant, j'ai appris que certains algorithmes fonctionnent de manière séquentielle et ne bénéficient donc pas de la parallélisation."
                            video={null}
                            imgs={[quickSort, sampleSort, insertionSort]}
                            projectId={6}
                            ref={projectsRef[6]}
                        />
                        <ProjectPopup
                            key={8}
                            title="My React Portofolio"
                            englishDescription="The website portfolio you are currently on was made by me using React."
                            frenchDescription="Le site Web sur lequel vous vous trouvez a été créé par moi avec l'outil React."
                            video={null}
                            imgs={[portMenu]}
                            projectId={7}
                            ref={projectsRef[7]}
                        />

                    </div>
                </m.div>


            </m.div>
        </div>
    );
}

export default Project;