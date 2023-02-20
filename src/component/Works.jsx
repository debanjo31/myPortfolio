import React from 'react'
import Work1 from './images/work1.jpeg'
import Work2 from './images/work2.jpeg'
import Work3 from './images/work3.jpeg'
import Work4 from './images/work4.jpeg'
//import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect} from 'react';


function Works() {
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
  const Work = (props) =>{
    return (
      <div>
          <img src={props.portfolio.img} className="w-72 rounded-xl" alt="Project 1"/>
          <a href={props.portfolio.url}>
          <p className='text-xl mt-4 font-bold cursor-pointer'>{props.portfolio.title}</p>
        <p className='text-gray-300'>{props.portfolio.language}</p>
          </a>
      </div>
    )
  }
  return (
    <div id="works" className=' -mt-80 px-4 py-6 md:px-8 md:py-12 lg:px-12 lg:py-12 rounded-2xl lg:w-5/6 lg:mx-auto relative z-20'>
        <p className='text-gray-300 text-sm lg:text-md '>ABOUT ME</p>
        <h2 className='font-bold text-3xl mt-2 lg:text-4xl lg:mb-8 lg:mt-4'>Latest Works</h2>
        <div className='flex flex-wrap items-center justify-center mt-12 gap-8' >            
        <motion.div ref={ref} animate={controls} initial={{ opacity: 0, scale: 0.5, x:100 }} variants={squareVariants}>
  <Work portfolio={{title:"Africana Landing Page", url:"https://debanjo.netlify.app/", img: `${Work1}`, language : "React x Tailwind Css x Framer Motion"}} />
</motion.div>

<motion.div ref={ref} animate={controls} initial={{ opacity: 0, scale: 0.5, x:100 }} variants={squareVariants}>
  <Work portfolio={{title:"Laundry Lab", url:"https://debanjo.netlify.app/", img: `${Work3}`, language : "Html x CSS"}} />
</motion.div>

<motion.div ref={ref} animate={controls} initial={{ opacity: 0, scale: 0.5, x:100 }} variants={squareVariants}>
  <Work portfolio={{title:"QR Code Generator", url:"https://debanjo.netlify.app/", img: `${Work2}`, language : "Html x TailwindCSS x Javascript "}} />
</motion.div>

<motion.div ref={ref} animate={controls} initial={{ opacity: 0, scale: 0.5, x:100 }} variants={squareVariants}>
  <Work portfolio={{title:"Quiz App", url:"https://debanjo.netlify.app/", img: `${Work4}`, language : "JavaScript x Html x CSS"}} />
</motion.div>

        </div>
       
    </div>
  )
}

export default Works
