import React from 'react';

function Skill({num, name, img, lvlEnglish, lvlFrench}) {
    return (
        <div className={`containerRow row${num}`}>
            <img alt={name} src={img} className='containerImg' />
            <div className="txt english containerTxt">{lvlEnglish}</div>
            <div className="txt french containerTxt">{lvlFrench}</div>
        </div>
);
}

export default Skill;