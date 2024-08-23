import React, { useState, useRef, useEffect } from 'react';
import WorkImg from '../assets/workImg.jpg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(null);
  const cardRefs = useRef([]);

  // Handle mouse enter to show card content
  const handleMouseEnter = (index) => {
    setVisibleCardIndex(index);
  };

  // Handle mouse leave to hide card content
  const handleMouseLeave = () => {
    setVisibleCardIndex(null);
  };

  // Handle click inside a card to show card content
  const handleClickInside = (index) => {
    setVisibleCardIndex(index);
  };

  // Handle click outside any card to hide card content
  const handleClickOutside = (event) => {
    if (!cardRefs.current.some(ref => ref && ref.contains(event.target))) {
      setVisibleCardIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const cards = [
    { id: 1, image: WorkImg, title: 'React JS Application', demoLink: '/', codeLink: '/' },
    { id: 2, image: realEstate, title: 'Real Estate App', demoLink: '/', codeLink: '/' },
    { id: 3, image: WorkImg, title: 'Another Project', demoLink: '/', codeLink: '/' },
    { id: 4, image: realEstate, title: 'Another Project', demoLink: '/', codeLink: '/' },
    { id: 5, image: WorkImg, title: 'React JS Application', demoLink: '/', codeLink: '/' },
    { id: 6, image: realEstate, title: 'Real Estate App', demoLink: '/', codeLink: '/' },
    // Add more cards as needed
  ];

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#51c9c7]'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
      
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
          {cards.map((card, index) => (
            <div
              key={card.id}
              style={{
                backgroundImage: visibleCardIndex === index ? 'none' : `url(${card.image})`
              }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative '
              ref={(el) => cardRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClickInside(index)}
            >
              {/* Hover effects */}
              <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 ${visibleCardIndex === index ? 'block' : 'hidden'} rounded-md bg-gradient-to-r from-indigo-400 to-indigo-600` }>
                <span className='text-2xl font-bold text-white tracking-wider whitespace-nowrap'>
                  {card.title}
                </span>
                <div className='pt-8 text-center'>
                  <a href={card.demoLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href={card.codeLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
