import { useState } from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi';
import { animateScroll } from 'react-scroll';

function ScrollPage() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <div className='fixed bottom-2 right-4'> {pageYPosition > 900 &&
      <button onClick={animateScroll.scrollToTop} className='text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center border-[#51c9c7] bg-[#51c9c7] hover:bg-white hover:border-white rounded-lg'>
        <HiArrowNarrowUp />
      </button>
    }
    </div>
  )
}

export default ScrollPage
