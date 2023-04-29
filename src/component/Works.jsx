import React from 'react';
import Work1 from './images/work1.jpeg';
import Work2 from './images/work2.jpeg';
import Work3 from './images/work3.jpeg';
import Work4 from './images/work4.jpeg';
import cpga from './images/cpga.jpg'
//import { AnimationOnScroll } from 'react-animation-on-scroll';


function Works() {
  const Work = (props) => {
    return (
      <div>
        <img
          src={props.portfolio.img}
          className="w-72 rounded-xl"
          alt="Project 1"
        />
        <a href={props.portfolio.url}>
          <p className="text-xl mt-4 font-bold cursor-pointer">
            {props.portfolio.title}
          </p>
          <p className="text-gray-300">{props.portfolio.language}</p>
        </a>
      </div>
    );
  };

  return (
    <div id="works" className=' -mt-80 px-4 py-6 md:px-8 md:py-12 lg:px-12 lg:py-12 rounded-2xl lg:w-5/6 lg:mx-auto relative z-20'>
        <p className='text-gray-300 text-sm lg:text-md '>ABOUT ME</p>
        <h2 className='font-bold text-3xl mt-2 lg:text-4xl lg:mb-8 lg:mt-4'>Latest Works</h2>
        <div className='flex flex-wrap items-center justify-center mt-12 gap-8' >            
            <Work portfolio={{title:"Africana Landing Page", url:"https://africanna.netlify.app/", img: `${Work1}`, language : "React x Tailwind Css x Framer Motion"}} />
            <Work portfolio={{title:"CPGA Calculator", url:"https://cpga-calculator.netlify.app/", img: `${cpga}`, language : "React"}} /> 
            <Work portfolio={{title:"Laundry Lab", url:"https://laundryservice.netlify.app/", img: `${Work3}`, language : "Html x CSS"}} />   
            <Work portfolio={{title:"QR Code Generator", url:"https://qrbarcode-generator.netlify.app/", img: `${Work2}`, language : "Html x TailwindCSS x Javascript "}} />
            <Work portfolio={{title:"Quiz App", url:"https://dee-quiz.netlify.app/", img: `${Work4}`, language : "JavaScript x Html x CSS"}} /> 
        </div>       
    </div>
  )
}

export default Works;
