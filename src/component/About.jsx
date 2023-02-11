import React from 'react'
import aboutImage from './images/aboutImage.jpg'
import myImage from './images/myimage.jpg'

function About() {
  return (
    <div id="about" className='mt-16 md:flex md:flex-row-reverse md:justify-betwee bg-white pt-8 text-[#2a2b2f]'>
      <div className='w-5/6 mx-auto'>
        <div className=" relative lg:w-1/2 ml-[-15] " >
            <img src={aboutImage} alt='About' className=" w-72 m-auto h-88 rounded-3xl  rotate-[-5deg] border-4 border-black "/>
            <img src={myImage} alt="My personal" className="border-4 border-black w-36 m-auto h-88 rounded-full  rotate-[-5deg] absolute top-72 left-16 " />
            <p className='bg-gray-900 bg-opacity-50 inline-block px-4 py-4 rounded-full border-2 border-black text-4xl rotate-[-25deg] absolute top-80 left-40'> &lt;/&gt; </p>
        </div> 
        <div className='pb-12 md:w-1/2 mt-24 '>
            <p className='text-[#2a2b2f] lg:text-md'>ABOUT ME</p>
            <h3 className='text-5xl my-5 lg:text-6xl  '>Hello! I'm Adebanjo Israel</h3>
            <p className='text-[#2a2b2f] lg:leading-[2.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!</p>
        </div>
        </div>
    </div>
  )
}

export default About
