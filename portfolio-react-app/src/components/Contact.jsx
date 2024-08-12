import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/bolgqxza" className='flex flex-col max-w-[600px]'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#51c9c7] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 mb-4' type="text" placeholder='Name' name='name'/>
        <input className='p-2 bg-[#ccd6f6] mb-4' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2 mb-4' name="message" rows="10" placeholder='Message'></textarea>
        <button type='submit' className='text-white border-2 hover:bg-[#51c9c7] hover:border-[#51c9c7] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
