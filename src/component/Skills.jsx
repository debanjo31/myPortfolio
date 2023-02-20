import React from 'react'
import Git from  './images/git.png'
import JavaScript from  './images/javascript-48.png'
import ReactImg from  './images/react.png'
import PythonImg from  './images/python.png'
import CImg from  './images/c-programming.png'
import CssImg from  './images/css3.png'
import TypescriptImg from  './images/typescript.png'
import TailwindImg from  './images/tailwind_css.png'
import HtmlImg from  './images/html.png'
import BootstrapImg from  './images/bootstrap.png'
import SassImg from  './images/sass.png'
import FirebaseImg from  './images/firebase.png'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect} from 'react';



function Skills() {
  const squareVariants = {
    visible: { opacity: 1, scale: 1,x : 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0.5,x: -100, scale: 0, }
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else{
      setTimeout(() => {
        controls.start("hidden"); 
      }, 1000);
      
    }
  }, [controls, inView]);
  return (
    <div id='skills' className='pt-24 bg-black px-4 py-6 relative md:px-8 md:py-12 lg:px-12 lg:py-12 pb-96 md:pb-96 lg:pb-96 rounded-2xl '>
      <motion.div className='w-5/6 mx-auto' ref={ref} animate={controls} initial={{ opacity: 0, scale: 0.5, x:100 }} variants={squareVariants} >
      <p className='text-gray-300 text-sm lg:text-md '>ABOUT ME</p>
      <h2 className='font-bold text-3xl mt-2 lg:text-4xl lg:mb-8 lg:mt-4'>My Skills</h2>
      <div className='flex flex-wrap justify-between mb-2 px-2 py-2 gap-6'>
          <img className='block w-24 lg:w-32' alt='Git' src={Git} />
          <img className='block w-24 lg:w-32' alt='Javascript' src={JavaScript} />
          <img className='block w-24 lg:w-32' alt='React' src={ReactImg} />
          <img className='block w-24 lg:w-32' alt='Python' src={PythonImg} />
          <img className='block w-24 lg:w-32' alt='C' src={CImg} />
          <img className='block w-24 lg:w-32' alt='CSS' src={CssImg} />
          <img className='block w-24 lg:w-32' alt='TypeSCript' src={TypescriptImg} />
          <img className='block w-24 lg:w-32' alt='Tailwind' src={TailwindImg} />
          <img className='block w-24 lg:w-32' alt='html5' src={HtmlImg} />
          <img className='block w-24 lg:w-32' alt='Bootstrap' src={BootstrapImg} />
          <img className='block w-24 lg:w-32' alt='SASS' src={SassImg} />
          <img className='block w-24 lg:w-32' alt='Firebase' src={FirebaseImg} />
      </div>  
    </motion.div>
    </div>
  )
}

export default Skills
