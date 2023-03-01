import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        return (
            <m.div 
             initial={{ y: "100%" }} 
             animate={{ y: "0%" }} 
             transition={{ duration: 0.75, ease: "easeOut" }} 
             exit={{ opacity:1 }}
            >
                <Link to="/"><h1 style={{color: "red"}}>ABOUT</h1></Link>
            </m.div>

        );
    }
}
 
export default Intro;