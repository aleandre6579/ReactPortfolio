import React, { Component } from 'react';
import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        console.log(document.querySelectorAll(".magic"));
        function circleBtnClicked(btnNum) {
            console.log(btnNum);
        }

        const handleOnMouseMove = e => {
            console.log("A");
            const { currentTarget: target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", '${x}px');
            target.style.setProperty("--mouse-y", '${y}px');
        }

        for(const magic of document.querySelectorAll(".magic")) {
            console.log("B");
            magic.onmousemove = e => handleOnMouseMove(e);
        }

        return (
            <div className="w3-display-container w3-center white-section">
                    <div className="title w3-container w3-padding-32 w3-hide-small">
                        <div className="name">Alexandre Simon</div>
                        <div className="software-dev">Software Developer</div>
                    </div>

                    <div className="btns">
                        <div onClick={() => circleBtnClicked(0)} className="magic btn-container about-btn">
                            <div className="circle-btn-txt">About</div>
                        </div>
                        <div onClick={() => circleBtnClicked(1)} className="magic btn-container skills-btn">
                            <div className="circle-btn-txt">Skills</div>
                        </div>
                        <div onClick={() => circleBtnClicked(2)} className="magic btn-container projects-btn">
                            <div className="circle-btn-txt">Projects</div>
                        </div>
                    </div>
            </div>
        
        );
    }
}
 
export default Intro;