import React, { useEffect, useRef } from 'react'
import { menuItemsData } from '../menuItemsData'
import MenuItems from './MenuItems'

const SideNav = ({isOpen, closeOnOutsideClick, btnRef}) => {
   const sidenavRef = useRef();

   function handleOutSideClick(e) {
    e.preventDefault();
    const clickedElement = e.target;
    // Check if the button is clicked, and if so, don't close the side nav
    if(clickedElement.toString() === btnRef.toString()) {
        return;
    }

    if (sidenavRef.current && !sidenavRef.current.contains(clickedElement))
      {   
        closeOnOutsideClick();
      }
  }

    useEffect(() => {
        window.addEventListener('click', handleOutSideClick)
        // window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutSideClick);
        };
    }, [isOpen, btnRef])


  return (
       <ul ref={sidenavRef} className={`${isOpen ? '-translate-x-[0%]' : '-translate-x-[100%]'} transition-transform z-50 duration-500 justify-start flex flex-col gap-4 font-semibold w-[240px] text-white bg-primary px-2 pt-6 ps-6  pe-6 fixed left-0 top-0 min-h-screen overflow-hidden text-base`}>
             {menuItemsData.map((menu, index) => {
                  return <MenuItems 
                         items={menu}
                         key={index} />
               })}
       </ul>
  )
}

export default SideNav