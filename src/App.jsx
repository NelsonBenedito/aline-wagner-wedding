import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Details from './components/Details';
import Registry from './components/Registry';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Story />
      <Details />
      <Registry />
      <Footer />
    </div>
  );
}

export default App;
