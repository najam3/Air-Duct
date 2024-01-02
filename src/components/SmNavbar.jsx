import React, { useEffect, useRef, useState } from 'react'
import SideNav from './SideNav';
import { Link } from 'react-router-dom';


const SmNavbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState("");
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    function closeOnOutsideClick() {
        setIsOpen(false);
    }

    function openSideNav() {
        setIsOpen(!isOpen)
    }


    useEffect(() => {
        // window.addEventListener('click', handleOutSideClick)
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('click', handleOutSideClick);
        };
    }, [scrollPosition]);


  return (
    <header className='relative'>
        <nav style={{pointerEvents: isOpen ? 'none' : 'auto'}}>
            <div className='w-full px-4'>
                <div className='w-[100%] flex items-end justify-between'>
                  <button type="button" className='button-icon mb-[1.5em]' onClick={(e) => {
                        openSideNav()
                        setState(e.currentTarget);
                  }}>
                  </button>
                  <Link to={'/'} className='m-auto block'>
                        <img src="/assets/duct-logo.png" alt="brand" className='w-52 py-4' />  
                  </Link>
                </div>
            </div>
            <div className={`${scrollPosition > 200 ? 'fixed shadow-2xl top-0 w-full z-50' : ''} flex items-center flex-col sm:flex-row gap-2 justify-center bg-neutral100 shadow-2xl py-4 pb-8 lg:pb-4 lg:pt-4`}>
                <button className='bg-secondary px-12 py-4 sm:text-xl text-white font-semibold w-1/2 sm:w-[260px]'>CALL US</button>
                <button className='bg-primary px-12 py-4 sm:text-xl text-white font-semibold w-1/2 sm:w-[260px]'>SCEDHULE NOW</button>
                <div className={`bg-primary w-full h-4 absolute bottom-0 left-0`}></div>
            </div>
        </nav>
        <SideNav isOpen={isOpen} closeOnOutsideClick={closeOnOutsideClick} btnRef={state}/>
    </header>
  )
}

export default SmNavbar