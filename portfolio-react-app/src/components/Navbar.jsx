import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed-w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a href='http://localhost:3000'>
          <img src={Logo} alt='Logo' style={{width:'50px'}}/>
        </a>
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500} >
            Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} >
            About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500} >
            Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500} >
            Work
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} >
            Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >
            Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >
            About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500} >
            Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contact
            </Link>
          </li>
        </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href='https://www.linkedin.com/in/gabriel-araujo-63153425b' className='flex justify-between items-center w-full text-gray-300'>
            Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='https://github.com/gabrielaraujo3' className='flex justify-between items-center w-full text-gray-300'>
            Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3e7569]'>
            <a href='mailto:gabriel.araujoprofessional+portfolio@gmail.com?subject=Professional Opportunity&body=Hello, I visited your portfolio and would like to discuss an opportunity with you. Are you interested?' className='flex justify-between items-center w-full text-gray-300'>
            Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#25D366]'>
            <a href='https://wa.me/+5511951862903?text=Hello,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%20Are%20you%20interested?' className='flex justify-between items-center w-full text-gray-300'>
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar
