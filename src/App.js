import React from 'react';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import About from './component/About';
import Skills from './component/Skills';
import Works from './component/Works';
import Footer from './Footer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App text-white ">
      <div className='w-5/6 mx-auto bg-[#2a2b2f] xl:w-3/4'>
          <Navbar />
          <Homepage />
          <About />
          <Skills />
          <Works />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
