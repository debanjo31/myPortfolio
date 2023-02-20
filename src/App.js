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
    <div className="App  mx-auto bg-[#2a2b2f] text-white ">
      <div className='xl:w-5/6 mx-auto'>
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
