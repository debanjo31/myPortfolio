import React from 'react'
import SocialIcons from './SocialIcons';


function Sidebar({setOpenBar}) {
  return (
    <div className='min-h-100 sidebar z-60 overflow-hidden	snap-none  bg-[#141414] absolute text-white inset-0'>
        <div className='flex justify-between mx-4 my-4 '>
            <img src="" className="block" alt='' />
            <p onClick={()=> setOpenBar(false)} className='block font-bold cursor-pointer text-2xl mt-3 mr-5'>X</p>
        </div>
        <div style={{height : "80vh", justifyContent : "space-evenly"}} className='min-h-80 font-bold text-xl gap-12 flex-col items-center flex  justify-items-col-evenly space-around'>
            <p>Home</p>
            <p>About Me</p>
            <p>My Skills</p>
            <p> <a href="#works">My Works</a></p>
            <p>Contact</p>
            <div className='text-3xl'>
                <SocialIcons /> 
            </div>
        </div>
    </div>
  )
}

export default Sidebar
