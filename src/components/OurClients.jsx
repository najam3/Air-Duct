import React from 'react'
import LinkWithUnderLine from '../components/LinkWithUnderLine';
import { IoStarSharp } from "react-icons/io5";
import LareBtn from './LareBtn';

const OurClients = () => {
  return (
    <section className='our-clients-best px-4 py-12'>
    <h2 className='text-primary font-semibold text-3xl md:text-3xl lg:text-4xl text-center mb-16 lg:mb-24'>Our Clients Say It Best</h2>

    <article className='flex flex-wrap gap-6 mb-14'>
        <div className='p-5 rounded-md client-card md:w-[48%] xl:w-[32%] flex-shrink relative'>
              <div className='flex gap-2 items-center'>
                  <img src='/assets/2.png' alt='client' className='w-16' />
                  <div>
                    <h2 className='text-[#5d6f80] text-base font-bold'>Chris Hemmings</h2>
                    <div className='flex items-center'>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    </div>
                  </div>
              </div>
              <div>
                <p className='text-[#5d6f80] text-base leading-[1.5em] mt-2'>
                This is the third time we are using Atlantic Duct Cleaning for dryer vent cleaning and I am...
                {/* <br/> */}
                <LinkWithUnderLine text='Read more' route={'/'}/>
                </p>  
              </div>   
              <img src='/assets/small-map.png' alt='map' className='w-[20px] absolute top-0 right-0 mt-5 me-5'/>             
        </div>
        <div className='p-5 rounded-md client-card md:w-[48%] xl:w-[32%] relative'>
              <div className='flex gap-2 items-center'>
                  <img src='/assets/1.png' alt='client' className='w-16' />
                  <div>
                    <h2 className='text-[#5d6f80] text-base font-bold'>Nicole Schwab</h2>
                    <div className='flex items-center'>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    </div>
                  </div>
              </div>
              <div>
                <p className='text-[#5d6f80] text-base leading-[1.5em] mt-2'>
                Rigoberto and Jose did an excellent job at cleaning our dryer vent. Our vent had not been cleaned...
                {/* <br/> */}
                <LinkWithUnderLine text='Read more' route={'/'}/>
                </p>  
              </div>   
              <img src='/assets/small-map.png' alt='map' className='w-[20px] absolute top-0 right-0 mt-5 me-5'/>             
        </div>
        <div className='p-5 rounded-md client-card md:w-[48%] xl:w-[32%] relative'>
              <div className='flex gap-2 items-center'>
                  <img src='/assets/3.png' alt='client' className='w-16' />
                  <div>
                    <h2 className='text-[#5d6f80] text-base font-bold'>Kimberly Carter</h2>
                    <div className='flex items-center'>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    </div>
                  </div>
              </div>
              <div>
                <p className='text-[#5d6f80] text-base leading-[1.5em] mt-2'>
                Oswaldo and Carlos were so polite, knowledgeable and efficient! They explained the whole cleaning... 
                {/* <br/> */}
                <LinkWithUnderLine text='Read more' route={'/'}/>
                </p>  
              </div>   
              <img src='/assets/small-map.png' alt='map' className='w-[20px] absolute top-0 right-0 mt-5 me-5'/>             
        </div>
        <div className='p-5 rounded-md client-card md:w-[48%] xl:w-[32%] relative'>
              <div className='flex gap-2 items-center'>
                  <img src='/assets/4.png' alt='client' className='w-16' />
                  <div>
                    <h2 className='text-[#5d6f80] text-base font-bold'>Shari Bice</h2>
                    <div className='flex items-center'>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    <IoStarSharp size={20} color='#ff6900'/>
                    </div>
                  </div>
              </div>
              <div>
                <p className='text-[#5d6f80] text-base leading-[1.5em] mt-2'>
                I had my air ducts and my dyer duct cleaned yesterday. Rene and Roberto did an excellent job...
                                          {/* <br/> */}
                <LinkWithUnderLine text='Read more' route={'/'}/>
                </p>  
              </div>   
              <img src='/assets/small-map.png' alt='map' className='w-[20px] absolute top-0 right-0 mt-5 me-5'/>             
        </div>
        
    </article>
    <div className='flex items-center justify-center'>
        <LareBtn text={'READ MORE'} color={"primary"} fontColor={"white"}/>
    </div>
</section>
  )
}

export default OurClients