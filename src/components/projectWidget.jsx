import React from 'react';
import { AnimatePresence } from 'framer-motion';

function ProjectWidget({iconImg, img, showPopupFunction, projectId}) {
    return (
        <div id="project" onClick={() => showPopupFunction(projectId)} className="project">
            <img alt="projectImg" src={img} className='projectImg'></img>
            <div className="txt english hoverIcon">View Project</div>
            <div className='projectIcon'><img className='projectIconImg' alt={iconImg.name} src={iconImg}></img></div>
        </div>
);
}

export default ProjectWidget;