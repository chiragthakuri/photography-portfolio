import React from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <div>
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default App
