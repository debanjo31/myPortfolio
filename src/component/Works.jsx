import React from 'react'
import Work1 from './images/work1.gif'
import Work2 from './images/work2.jpg'
import Work3 from './images/work3.jpg'
import Work4 from './images/work4.jpg'

function Works() {
  const Work = (props) =>{
    return (
      <div>
          <img src={props.portfolio.img} className="w-72 rounded-xl" alt="Project 1"/>
          <p className='text-xl mt-4 font-bold cursor-pointer'>{props.portfolio.title}</p>
        <p className='text-gray-300'>{props.portfolio.language}</p>
      </div>
    )
  }
  return (
    <div id="works" className=' -mt-80 px-4 py-6 md:px-8 md:py-12 lg:px-12 lg:py-12 rounded-2xl'>
        <p className='text-gray-300 text-sm lg:text-md '>ABOUT ME</p>
        <h2 className='font-bold text-3xl mt-2 lg:text-4xl lg:mb-8 lg:mt-4'>Latest Works</h2>
        <div className='flex flex-wrap items-center justify-center mt-12 gap-8' >
              <Work portfolio={{title:"Africana Landing Page", img: `${Work1}`, language : "React x Tailwind Css x Framer Motion"}} />
              <Work portfolio={{title:"React App", img: `${Work2}`, language : "React x Tailwind CSS"}} />
              <Work portfolio={{title:"Mobile Responsive", img: `${Work3}`, language : "React x Redux"}} />
              <Work portfolio={{title:"Ecommerce Site", img: `${Work4}`, language : "NextJS x Tailwind CSS x Firebase"}} />
        </div>
    </div>
  )
}

export default Works
