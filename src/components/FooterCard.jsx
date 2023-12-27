import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

const FooterCard = ({boom, img, logo, border, color}) => {
  return (
    <div>
   
     <div className={`p-5 hover:-translate-y-[10px] hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-none border-t-4 ${border || border} bg-white shadow-xl mt-6 mx-auto w-full sm:w-[100%] flex-shrink relative`}>
        <div className='flex gap-6 items-center'>
            <img src={logo} alt='client' className='self-start w-12' />
            <div>
                <h2 className='text-[#5d6f80] mb-6 text-xl font-bold'>Atlantic Duct Cleaning</h2>
                <div className='flex items-center'>
                <IoStarSharp size={20} color={color} />
                <IoStarSharp size={20} color={color} />
                <IoStarSharp size={20} color={color} />
                <IoStarSharp size={20} color={color} />
                <IoStarSharp size={20} color={color} />
                </div>
            </div>
        </div>
        <div>
            <p className='text-[#5d6f80] text-[23px] leading-[1.5em] mt-2'>
             {boom}
            </p>  
        </div>   
        {/* <img src='/assets/small-map.png' alt='map' className='w-[20px] absolute top-0 right-0 mt-5 me-5'/>              */}
        </div>
</div>
  )
}

export default FooterCard