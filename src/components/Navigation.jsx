import React, { useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";
import MenuItems from "./MenuItems";

const Navigation = () => {
const [scrollPosition, setScrollPosition] = useState(0);
const {pathname} = useLocation();
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

  return (
    <header className={`px-4 ${scrollPosition > 300 ? 'fixed animate-down shadow-2xl bg-white w-full z-50' : 'relative'}`}>
      <nav className={`flex justify-between`}>
        <Link to={'/'}>
        <img src="/assets/logo.jpg" className={`${scrollPosition > 300 ? 'w-32' : 'w-52'} object-contain pb-[0.5em]`} alt="brand" />
        </Link>
        <div className="h-full">
          <div className="flex my-10 items-center gap-12">
            <button className="border-4 hover:bg-primary hover:text-white transition-colors duration-500 border-primary  text-primary  px-4 py-2">
              <Link to="/" className="font-semibold bug text-2xl">
                RECEIVE ESTIMATE
              </Link>
            </button>
            <button className="border-4 bug bg-secondary hover:shadow-2xl transition-shadow duration-500 border-secondary text-xl text-white  px-4 py-2">
              <Link to="/" className="font-semibold bug text-2xl">
                SCEDHULE NOW
              </Link>
            </button>
            <Link to="/" className="flex items-center gap-3">
              <FaMobileAlt className="text-secondary" size={45} />
              <span className="text-xl font-semibold text-[#505050]">
                (707) 435-4485
              </span>
            </Link>
          </div>
          <ul className={`text-primary ${scrollPosition > 300 ? 'hidden' : ''} justify-end flex items-center gap-12 font-semibold text-lg`}>
                    {menuItemsData.map((menu, index) => {
                        return <MenuItems 
                         scrollPosition={scrollPosition}
                         items={menu}
                         key={index} />
                    })}
          </ul>
        </div>
      </nav>
      <div className={`bg-primary w-full ${pathname === '/' ? 'block' : ''}  ${scrollPosition > 300 ? 'hidden' : ''} h-4 absolute bottom-0 left-0`}></div>
    </header>
  );
};

export default Navigation;
