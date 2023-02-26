import React, {useState} from 'react'
import SocialIcons from './component/SocialIcons'

function Footer() {
  const [submit,setSubmit] = useState(false);
  const handleClick = () => {
    setSubmit(true);
    window.location='https://www.debanjo.netlify.app/'
  }
  return (
    <div className="bg-black pt-16 py-10">
      <div className='w-4/6 mx-auto ' id='contact'>
        <div className='flex flex-col sm:flex-row mb-4'>
            <div className='mb-4 sm:w-1/2 pr-8'>
                <p>Let's Talk</p>
                <h2 className='text-4xl lg:text-5xl my-3 font-bold'>Contact Me</h2>
                <p className='sm:leading-[2] lg:text-xl'>If you're interested in working with me or have any question, pls don't hesitate to reach out. I'm always open to new opportunities and would love to hear from you.</p>
            </div>
            <div id='contact' className='sm:w-1/2'>
                <form target="hidden_iframe" action="https://docs.google.com/forms/d/e/1FAIpQLScA_7Q0BfuBX9E51eQhAaIUG0hHePlk4lMT7iELINwvHNk9Dw/formResponse">
                        <input type="text" name="entry.2005620554" required className='bg-transparent focus:border-b-2 outline-none pb-1 block w-full border-b-2 border-white text-white' placeholder='NAME'  />
                        <br />
                        <input type="email" name="entry.1045781291" required className='bg-transparent focus:border-b-2 outline-none pb-1 block w-full border-b-2 border-white'  placeholder='EMAIL' />
                        <br />
                        <textarea  name="entry.1065046570" type="text" required className='bg-transparent focus:border-b-2 outline-none pb-8 block w-full border-b-2 border-white' placeholder='MESSAGE'  />
                        <button onClick={handleClick} className="bg-[#ee5e2d] font-bold lg:text-xl lg:px-4 px-2 py-2 mt-4 rounded-xl block sm:ml-auto">Send Message</button>
                </form>
                <iframe name="hidden_iframe" id="hidden_iframe" title='hidden_iframe' onLoad={submit} className='hidden' ></iframe>
                
            </div>
        </div>
        <hr className='mt-16' />
        <div className='flex flex-col mt-4 items-center justify-center sm:flex-row sm:justify-between'>
                <p className='text-2xl font-bold mb-2'>Adebanjo Israel</p>   
                <SocialIcons  />    
        </div>
      </div>
    </div>
  )
}

export default Footer
