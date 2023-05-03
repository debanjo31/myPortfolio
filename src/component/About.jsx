import React from "react";
import aboutImage from "./images/aboutImage.jpg";
import myImage from "./images/myimage.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function About() {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0.5, x: -100, scale: 0 },
  };
  const squareVariants2 = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      setTimeout(() => {
        controls.start("hidden");
      }, 1000);
    }
  }, [controls, inView]);
  return (
    <div
      id="about"
      className=" bg-white text-[#2a2b2f] lg:bg-[#2a2b2f] lg:text-white lg:mb-36"
    >
      <div className=" lg:flex lg:justify-between w-5/6 mx-auto">
        <motion.div
          className=" relative lg:w-1/2 ml-[-15] pt-12 "
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <img
            src={aboutImage}
            alt="About"
            className=" w-72 m-auto h-88 rounded-3xl  rotate-[-5deg] border-4 border-black "
          />
          <img
            src={myImage}
            alt="My personal"
            className="border-4 border-black  m-auto  rounded-full  rotate-[-5deg] absolute top-80 left-16 h-56 w-56 "
          />
          <p className="bg-gray-900 bg-opacity-50 inline-block px-4 py-4 rounded-full border-2 border-black text-4xl rotate-[-25deg] absolute top-80 left-56">
            {" "}
            &lt;/&gt;{" "}
          </p>
        </motion.div>
        <motion.div
          className="pb-12 lg:w-1/2 mt-36 lg:mt-1 "
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants2}
        >
          <p className=" lg:text-md">ABOUT ME</p>
          <h3 className="text-5xl my-5 lg:text`-6xl  ">
            Hello! I'm Adebanjo Israel
          </h3>
          <p className=" lg:leading-[2.5rem]">
            I am a Front-End Software Engineer highly experienced in designing
            and developing responsive web applications. My dexterity lies in
            utilising React,Javascript,CSS and HTML5 to create elegant,
            intuitive and user-friendly interfaces that improves user
            experiences
          </p>
          <p className="lg:leading-[2.5rem] mt-4">
            With a keen eye for design and passion for clean and maintainable
            code, i'm dedicated to high-quality solutions that meets the needs
            of my clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
