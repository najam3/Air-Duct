import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { RiArrowDownSFill } from 'react-icons/ri'

const MenuItems = ({items, scrollPosition}) => {
    const [dropDown, setDropdown] = useState(false);
    const btnRef = useRef();

    function handleOutSideClick(e) {
            e.preventDefault()
            const clickedElement = e.target;
            if(btnRef.current && !btnRef.current.contains(clickedElement)) {
                setDropdown(false);
            }
     
    };

    function watchIt() {
       return scrollPosition > 50 ? setDropdown(false) : ''
    };

    useEffect(() => {
            window.addEventListener('click', handleOutSideClick)
            watchIt();
        return() => {
            window.removeEventListener('click', handleOutSideClick)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollPosition])


  return (
      <li className={`${items.submenu ? 'relative cursor-pointer' : ''} cursor-pointer`}>
            {items.submenu ? (
                <React.Fragment>
                    <button className='flex w-full items-center justify-between' ref={btnRef} aria-expanded={dropDown ? "true" : "false"} onClick={() => setDropdown(prev => !prev)} type='button' aria-haspopup='menu'>
                        <span>
                            {items.title}{''}
                        </span>
                        <RiArrowDownSFill />
                    </button>
                    <Dropdown dropDown={dropDown} submenus={items.submenu} />
                </React.Fragment>
            ) : (
                <Link className='bold' to={items.url}>{items.title}</Link>
            )
        }
      </li>
  )
}

export default MenuItems