import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const FaqDropdown = (props) => {
  const [slide, setSlide] = useState(false);
  const contentRef = useRef(null);
  function dropdown() {
    setSlide(!slide);
  }

  

  useEffect(() => {
    // Get the actual height of the content
    const contentHeight = contentRef.current.scrollHeight;
    
    // Set the max-height to the actual height when the dropdown is open
    contentRef.current.style.maxHeight = slide ? `${contentHeight}px` : '0px';
  }, [slide]);

  return (
    <div className='relative'>
      <div
        onClick={dropdown}
        className={`flex items-center cursor-pointer pb-3 ${
          slide ? '' : 'border-b'
        } justify-between w-full`}
      >
        <span className='ps-0 sm:ps-6 text-[#333] text-xl sm:text-2xl'>
          {props.title}
        </span>
        {slide ? (
          <FaChevronUp className='pe-4' size={30} />
        ) : (
          <FaChevronDown size={30} className='pe-4' />
        )}
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all px-0 sm:px-6 mb-4`}
      >
        <p dangerouslySetInnerHTML={{__html: props.content}} className='mb-4 text-base sm:text-lg' />
      </div>
    </div>
  );
};

export default FaqDropdown;
