import React from 'react'
import { FaGithub, FaLinkedin, FaReact, FaWhatsapp } from 'react-icons/fa'
import { RiTailwindCssFill, RiCopyrightLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='w-full h-full bg-[#0a192f] justify-center items-center p-4'>
      <div name='contact' className='flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bolgqxza" className='flex flex-col max-w-[600px]'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#51c9c7] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or contact me through social media</p>
          </div>
          <input className='bg-[#ccd6f6] p-2 mb-4' type="text" placeholder='Name' name='name' />
          <input className='p-2 bg-[#ccd6f6] mb-4' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2 mb-4' name="message" rows="10" placeholder='Message'></textarea>
          <button type='submit' className='text-white border-2 hover:bg-[#51c9c7] hover:border-[#51c9c7] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>

      <div name='footer'>
        <div className='flex mb-2 justify-center items-center text-[#0a192f]'>
          <ul className='flex'>
            <li className='py-3 text-4xl mx-2 rounded-[25%] bg-gray-300 hover:bg-[#51c9c7] hover:text-gray-300 transition duration-500'>
              <a href='https://www.linkedin.com/in/gabriel-araujo-63153425b'>
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className='py-3 text-4xl mx-2 rounded-[25%] bg-gray-300 hover:bg-[#51c9c7] hover:text-gray-300 transition duration-500'>
              <a href='https://github.com/gabrielaraujo3'>
                <FaGithub size={25} />
              </a>
            </li>
            <li className='py-3 text-4xl mx-2 rounded-[25%] bg-gray-300 hover:bg-[#51c9c7] hover:text-gray-300 transition duration-500'>
              <a href='mailto:gabriel.araujoprofessional+portfolio@gmail.com?subject=Professional Opportunity&body=Hello, I visited your portfolio and would like to discuss an opportunity with you. Are you interested?'>
                <HiOutlineMail size={25} />
              </a>
            </li>
            <li className='py-3 text-4xl mx-2 rounded-[25%] bg-gray-300 hover:bg-[#51c9c7] hover:text-gray-300 transition duration-500'>
              <a href='https://wa.me/+5511951862903?text=Hello,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%20Are%20you%20interested?'>
                <FaWhatsapp size={25} />
              </a>
            </li>
          </ul>
        </div>

        <div className='flex justify-center text-gray-300'>
          <ul>
            <li className='flex justify-center items-center space-x-2'>
              <p>Made with</p>
              <FaReact /> <RiTailwindCssFill />
            </li>
            <li className='flex justify-center items-center space-x-2'>
              <p>Copyright</p>
              <RiCopyrightLine />
              <a href='https://github.com/gabrielaraujo3'>2024 Gabriel Araujo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
