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
      <Main />
      <About />
      <Competitive />
      <Project/>
    </div>
  );
}

export default App;
