import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';



function Navbar() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <nav className="0 text-white flex items-center justify-between  py-3 md:px-6 ">
      <div >
        <p className='text-lg text-[#ee5e2d]'>&lt; Adebanjo Israel /&gt;</p>
      </div>
      <div className='md:hidden'>
                <FaBars onClick={() => setOpenBar(true)} className='text-xl cursor-pointer mt-3 mr-5'/>
            </div>  
      <div className="hidden md:block flex">
        <ul className="flex items- text-sm lg:text-xl">
          <li className="px-3 py-2 rounded-md  font-medium leading-5 text-white focus:outline-none focus:text-white focus:bg-gray-700 text-[#ee5e2d]">Home</li>
          <li className="px-3 py-2 rounded-md  font-medium leading-5 text-white hover:text-white hover:bg-[#505054] cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#about">About Me</Link></li>
          <li className="px-3 py-2 rounded-md  font-medium leading-5 text-white hover:text-white hover:bg-[#505054] cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#skills">My Skills</Link></li>
          <li className="px-3 py-2 rounded-md  font-medium leading-5 text-white hover:text-white hover:bg-[#505054] cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#works">My Works</Link></li>
          <li className="px-3 py-2 rounded-md md:mr-5 font-medium leading-5 text-white hover:text-white hover:bg-[#505054] cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#contact">Contact</Link></li>
          <SocialIcons />     
        </ul>
      </div>
      {openBar&& <Sidebar setOpenBar={setOpenBar} />}
    </nav>
    );
}

export default Navbar;