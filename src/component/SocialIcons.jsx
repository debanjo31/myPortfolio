import React from 'react'
import { FaLinkedin , FaGithub, FaTwitter} from "react-icons/fa";


function SocialIcons() {
  return (
    <div className="icons align-super cursor-pointer inline-block text-xl lg:ml-10 lg:mt-2 md:mt-1.5 flex gap-4">
                 <a href="https://www.linkedin.com/in/adebanjo-israel-425723227" target="_blank" rel="noopener noreferrer"><FaLinkedin  /></a>              
                <a href="https://twitter.com/debanjo_israel"target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://github.com/debanjo31/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div> 
  )
}

export default SocialIcons
