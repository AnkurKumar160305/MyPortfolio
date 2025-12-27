"use client";

import './App.css';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Navmenu from './components/Navmenu.jsx';
import About from './components/About.jsx';
import Antigravity from './components/Antigravity.jsx';
import Competitive from './components/Competitive.jsx';
import ScrollTracker from './components/ScrollTracker';
import Project from './components/Project';
import Card from './components/Projectcard.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <ScrollTracker />
      <div className="antigravity">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={'#FF9FFC'}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>

      <Navbar />
          
      {/* <Project/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <About />
                <Competitive />
                <Card/>
                <Education/>
                <Contact/>
                <Footer/>
              </>
          }/>
          {/* <Route path="/projects" element={<Card />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
