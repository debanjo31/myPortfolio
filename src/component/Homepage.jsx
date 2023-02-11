import React from 'react'
import HomePage from './images/homepage.jpg'
import { TypeAnimation } from 'react-type-animation';

function Homepage() {
  return (
    <div className='mt-10 md:flex w-5/6 mx-auto justify-between'>
        <div className="text mb-8 md:w-1/2">
        <TypeAnimation 
      sequence={[
        `Hi I'm Adebanjo Israel, A Front-end Engineer`, // Types 'One'
        1000, // Waits 1s
        `Hi I'm Adebanjo Israel, A Technical Writer`, // Types 'One'
        1000,
        `Hi I'm Adebanjo Israel, A Content Creator`, // Types 'One'
        1000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="p"
      repeat={Infinity}
      speed={1}
      cursor={true}
      className=' '
    />            
            <p></p>
            <h1 className='mt-2 text-6xl lg:text-7xl xl:text-8xl xl:leading-[8rem] lg:leading-[7rem] leading-relaxed '>I Build Clean and Scalable Softwares</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!
            </p>
            <div className="btn flex gap-4 mt-4 md:mt-20">
                    <button className="bg-[#ee5e2d] font-bold px-2 py-2 rounded-xl">CONTACT ME</button>
                    <button className='font-bold px-2 py-2 border-b-4 border-white'>ABOUT ME</button>
            </div>
        </div>
        <div className="pics mb-20 md-2/4 mt-20 relative hidden lg:block">
            <div className='w-80 h-96 bg-[#505054] absolute inset-0 rounded-3xl rotate-[10deg] left-0'></div>
            <img src={HomePage} alt="" className=" w-80 m-auto h-96 rounded-3xl  rotate-[-15deg] " />
        </div>
    </div>
  )
}

export default Homepage