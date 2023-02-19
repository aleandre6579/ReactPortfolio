import React, { Component } from 'react';
import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        return (
            <div className="w3-display-container w3-center white-section">
                    <div className="w3-container w3-padding-32 w3-hide-small">
                        <h3><span className='magic'>Alexandre Simon</span></h3>
                        <p><span className='magic'>Software Developer</span></p> 
                    </div>
            </div>
        
        );
    }
}
 
export default Intro;