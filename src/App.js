import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from './components/animatedRoutes.jsx'
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </React.StrictMode>
  );

}

export default App;
