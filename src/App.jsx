import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div className="App bg-[#EADFFF] ">

      <Header />
      <About />
      <Technologies />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;

