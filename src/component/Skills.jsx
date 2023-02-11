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


function Skills() {
  return (
    <div id='skills' className='pt-24 bg-black px-4 py-6  md:px-8 md:py-12 lg:px-12 lg:py-12 pb-96 md:pb-96 lg:pb-96 rounded-2xl'>
      <div className='w-5/6 mx-auto'>
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
    </div>
    </div>
  )
}

export default Skills
