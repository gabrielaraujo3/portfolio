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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aut minima quisquam fugit ea necessitatibus minus atque quod a,
                vero dolore maxime consequuntur at nisi ipsa cum dignissimos
                reiciendis optio, illum corrupti? Est neque dolorum nemo,
                repudiandae eaque debitis, temporibus magni doloremque
                cupiditate ab sed consectetur deserunt vel sequi nam iste!</p>
            </div>
          </div>
        </div>
      </Element>
  )
}

export default About