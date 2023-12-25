import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import CheckList from "./CheckList";
import Bar from "./Bar";

const DropDownWithCheckList = ({arr1, arr2, arr3, padding, title, subtitle, open}) => {
   

  return (
      <div>     
        <div className={`dropdown ${open ? 'block' : 'hidden'} mb-8 px-6`}>
            <div className="mb-12">
                <Bar fontSize={'md:text-3xl'} weight={'font-medium'} align={'text-start'} title={subtitle} background={'bg-primary'} fontColor={'text-white'} />
            </div>
          <div className="flex flex-col md:flex-row justify-between">
            <ul className="w-full md:w-[30%]">
              {arr1?.map(items => (
                <CheckList item={items.title} margin={'mb-6'}/>
              ))}
            </ul>
            <ul className="w-full md:w-[30%]">
             {arr2?.map(items => (
                <CheckList item={items.title} margin={'mb-6'}/>
             ))}
            </ul>
            <ul className="w-full md:w-[30%]">
             {arr3?.map(items => (
                <CheckList item={items.title} margin={'mb-6'}/>
             ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default DropDownWithCheckList;
