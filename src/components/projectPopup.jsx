import { React, forwardRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const ProjectPopup = forwardRef(({ title, englishDescription, frenchDescription, video, imgs, projectId }, projectRef) => {
    const imgElements = [];
    for (let i = 0; i < imgs.length; i++) {
        imgElements.push(<img alt="popupImg" className='popupImg' src={imgs[i]} />);
    }

    return (
        <div ref={projectRef} id={'project' + projectId} className="hideFast popupContent">
            <h2>{title}</h2>
            <p className='english txt'>
                {englishDescription}
            </p>
            <p className='french txt'>
                {frenchDescription}
            </p>
            <video controls className='projectVid'>
                <source src={video} type="video/mp4" />

                Download the
                <a href={video}>MP4</a>
                video.
            </video>

            {imgElements}

        </div>
    );
})

export default ProjectPopup;