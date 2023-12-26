<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
import { RiArrowDownSFill } from "react-icons/ri";
import CheckList from "./CheckList";
import Bar from "./Bar";

const DropDownWithCheckList = ({arr1, arr2, arr3, padding,gap, title, subtitle, open, px, countyWidth}) => {
<<<<<<< HEAD
   const myRef = useRef()
useEffect(() => {
  const height = myRef.current.scrollHeight;

  myRef.current.style.maxHeight = open ? `${height}px` : '0px';
  
}, [open])

  return (
      <div className={`w-full ${gap || ''} h-full`}>     
        <div ref={myRef} className={`dropdown duration-500 pointer-events-none overflow-hidden transition-all mb-8 ${px || 'px-6'}`}>
=======
   

  return (
      <div className={`w-full ${gap || ''} h-full`}>     
        <div className={`dropdown ${open ? 'block' : 'hidden'}  mb-8 ${px || 'px-6'}`}>
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
            <div className="mb-6">
                <Bar fontSize={'md:text-3xl'} weight={'font-medium'} align={'text-start'} title={subtitle} background={'bg-primary'} fontColor={'text-white'} />
            </div>
          <div className={`flex flex-col md:flex-row justify-between`}>
            <ul className={`w-full ${countyWidth || 'md:w-[30%]'}`}>
              {arr1?.map(items => (
                <CheckList item={items.title} margin={'mb-6'}/>
              ))}
            </ul>
            {
              arr2 ? 
            <ul className={`w-full ${countyWidth || 'md:w-[30%]'}`}>
             {arr2?.map(items => (
                <CheckList item={items.title} margin={'mb-6'}/>
             ))}
            </ul> : ''
            }

            {
              arr3 ? 
            <ul className={`w-full ${countyWidth || 'md:w-[30%]'}`}> 
             {arr3?.map(items => (
                <CheckList item={items.title} margin={'mb-6'}/>
             ))}
            </ul> : ''
            }
          </div>
        </div>
      </div>
  );
};

export default DropDownWithCheckList;
