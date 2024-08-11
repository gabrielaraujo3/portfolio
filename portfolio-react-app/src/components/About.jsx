import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
      <Element name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[950px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#51c9c7]'>
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[950px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Gabriel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am currently a computer science student with a strong interest 
                in the IT field. Actively seeking my first opportunity in the industry, 
                I don’t have any specific language, frameworks, or technologies that 
                I’m attached to (except for my Linux 😉); I find all of them intriguing.</p>
            </div>
          </div>
        </div>
      </Element>
  )
}

export default About