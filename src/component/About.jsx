import React from 'react'
import aboutImage from './images/aboutImage.jpg'
import myImage from './images/myimage.jpg'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else{
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div id="about" className='mt-16 bg-white pt-8 text-[#2a2b2f] lg:bg-[#2a2b2f] lg:text-white lg:mb-36'>
      <div className=' lg:flex lg:justify-between w-5/6 mx-auto'>
        <motion.div className=" relative lg:w-1/2 ml-[-15]  " ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      >
            <img src={aboutImage} alt='About' className=" w-72 m-auto h-88 rounded-3xl  rotate-[-5deg] border-4 border-black "/>
            <img src={myImage} alt="My personal" className="border-4 border-black w-48 m-auto  rounded-full  rotate-[-5deg] absolute top-72 left-16 " />
            <p className='bg-gray-900 bg-opacity-50 inline-block px-4 py-4 rounded-full border-2 border-black text-4xl rotate-[-25deg] absolute top-80 left-56'> &lt;/&gt; </p>
        </motion.div> 
        <AnimationOnScroll className='pb-12 lg:w-1/2 mt-36 lg:mt-1 ' animateIn="animate__fadeInLeftBig" delay={500} duration={500}>
            <p className=' lg:text-md'>ABOUT ME</p>
            <h3 className='text-5xl my-5 lg:text-6xl  '>Hello! I'm Adebanjo Israel</h3>
            <p className=' lg:leading-[2.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!</p>
        </AnimationOnScroll>
        </div>
    </div>
  )
}

export default About
