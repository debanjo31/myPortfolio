import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { TypeAnimation } from 'react-type-animation';



function Navbar() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <nav className="bg-[#2a2b2f]  text-white flex items-center justify-between py-3 w-5/6 mx-auto ">
      <div >
      <TypeAnimation 
      sequence={[
        '<Adebanjo Israel />', // Types 'One'
        1000, // Waits 1s
       
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      speed={1}
      cursor={false}
      className='text-xl text-[#ffffff] font-bold lg:text-2xl '
    />
        
      </div>
      <div className='md:hidden'>
                <FaBars onClick={() => setOpenBar(true)} className='text-xl cursor-pointer  mr-5'/>
            </div>  
      <div className="hidden md:block">
        <ul className="flex text-lg gap-2 lg:text-lg lg:gap-4 ">
          <li className=" py-2 rounded-md  font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 text-[#ee5e2d]">Home</li>
          <li className=" py-2 rounded-md md:hidden lg:block font-medium leading-5 text-white  cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#about">About Me</Link></li>
          <li className=" py-2 rounded-md  font-medium leading-5 text-white  cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#skills">My Skills</Link></li>
          <li className=" py-2 rounded-md  font-medium leading-5 text-white  cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#works">My Works</Link></li>
          <li className=" py-2 rounded-md md:mr-5 lg:mr-0 font-medium leading-5 text-white  cursor-pointer focus:outline-none hover:text-[#ee5e2d]"><Link to="#contact">Contact</Link></li>
          <SocialIcons />     
        </ul>
      </div>
      {openBar&& <Sidebar setOpenBar={setOpenBar} />}
    </nav>
    );
}

export default Navbar;