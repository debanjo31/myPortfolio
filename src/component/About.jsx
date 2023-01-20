import React from 'react'
import aboutImage from './images/aboutImage.jpg'
import myImage from './images/myimage.jpg'

function About() {
  return (
    <div id="about" className='sm:mt-10 md:flex md:flex-row-reverse md:justify-between'>
        <div className='mb-12 md:w-1/2 '>
            <p className='text-gray-300 lg:text-md'>ABOUT ME</p>
            <h3 className='text-5xl my-5 lg:text-6xl  '>Hello! I'm Adebanjo Israel</h3>
            <p className='text-gray-300 lg:leading-[2.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque dignissimos saepe iure fuga at voluptates pariatur quas minus consectetur!</p>
        </div>
        <div className="mt-5 relative lg:w-1/2 ml-[-15]" >
            <img src={aboutImage} alt='About' className=" w-72 m-auto h-88 rounded-3xl  rotate-[-5deg] "/>
            <img src={myImage} alt="My personal" className=" w-36 m-auto h-88 rounded-full  rotate-[-5deg] absolute top-72 left-16 " />
            <p className='bg-gray-900 bg-opacity-50 inline-block px-4 py-4 rounded-full text-4xl rotate-[-25deg] absolute top-80 left-40'> &lt;/&gt; </p>
        </div> 
    </div>
  )
}

export default About
