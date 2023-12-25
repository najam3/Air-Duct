import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import CheckList from "./CheckList";
import Bar from "./Bar";

const DropDownWithCheckList = ({arr1, arr2, arr3, padding, title, subtitle}) => {
    const [open, setOpen] = useState(false);

    function toggleDropdown() {
        setOpen(!open);
    }

  return (
    <article className={`${padding || ''}`}>
      <div>
        <button
          className={`flex w-full ${open ? '' : 'border-b'} pb-3 text-3xl gap-4 justify-center text-secondary items-center`}
          type="button"
          aria-haspopup="menu"
          onClick={toggleDropdown}
        >
          <span className="font-bold">{title}{""}</span>
          <RiArrowDownSFill />
        </button>
       
        <div className={`dropdown ${open ? 'block' : 'hidden'}  px-6`}>
            <div className="mb-12">
                <Bar fontSize={'md:text-3xl'} weight={'font-medium'} align={'text-start'} title={subtitle} background={'bg-primary'} fontColor={'text-white'} />
            </div>
          <div className="flex justify-between">
            <ul className="w-[30%]">
              {arr1?.map(items => (
                <CheckList item={items.title} margin={'mb-4'}/>
              ))}
            </ul>
            <ul className="w-[30%]">
             {arr2?.map(items => (
                <CheckList item={items.title} margin={'mb-4'}/>
             ))}
            </ul>
            <ul className="w-[30%]">
             {arr3?.map(items => (
                <CheckList item={items.title} margin={'mb-4'}/>
             ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DropDownWithCheckList;
