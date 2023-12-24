import React from 'react';
import SecondaryBanner from '../components/SecondaryBanner';
import Bar from '../components/Bar';
import { FaCheckCircle } from "react-icons/fa";
import LinkWithUnderLine from '../components/LinkWithUnderLine';
import OurClients from '../components/OurClients';
import BarAppointment from '../components/BarAppointment';
import VideoSection from '../components/VideoSection';
const OurProcess = () => {
  return (
    <main>
      <SecondaryBanner 
        title="OUR AIR DUCT CLEANING PROCESS" 
        subtitle="Choose Atlantic Duct Cleaning for Your Indoor Air Quality Needs in MD & VA"
        content={`<a href="/noob"  class="underline text-[#81a7ce]">Residential air duct cleaning</a> is a proven method for making your home’s air cleaner. Whether you’ve just remodeled or are experiencing the side effects of breathing contaminated air, our process guarantees cleaner air for you and your family.`}
        secondContent={`To speak to our Northern Virginia duct cleaning experts, call <a href="/noob" class="underline text-[#81a7ce]">(703) 435-4485</a> or <a href="/noob" class="underline text-[#81a7ce]">schedule an appointment</a> online. You can also receive a <a href="/noob" class="underline text-[#81a7ce]">free estimate</a> for your next project.`}
        img="/assets/Commercial-Truck-Pic.jpg"       
      />
      
      <VideoSection 
      poster='/assets/r2-video-cover-one.png' 
      src='/assets/videos/clean-air-ducts.mp4' 
      title='How Does Atlantic Duct Cleaning Clean Your Air Ducts?' />

      <section className='px-4 py-12'>
          <h2 className='text-3xl md:text-3xl lg:text-4xl text-secondary font-semibold text-center mb-12'>Air Duct Cleaning Process Steps</h2>
          {/* Card */}
          <div className='card mb-16'>
            <div className='py-3 bg-secondary'>
                 <h1 className='text-center text-xl sm:text-3xl lg:text-4xl font-semibold text-white'>Step 1: Protecting Your Home</h1>
            </div>
            <div className='card-body p-[1.25rem]'>
              <p className='text-neutral400 text-[20px] text-center font-[400] leading-primary'>Our skilled technicians will treat your home with respect. We do require access to your unit, as well as all vents and registers when cleaning air ducts (with a minimum of two feet in clearance space). To ensure no mess is made, our technicians:</p>

                <ul className='mt-8'>
                    <li className='flex gap-2 items-start  mb-4'>
                      <FaCheckCircle className='text-[#7ab058] flex-2' size={'30px'}/>
                      <span className='text-neutral400 text-[20px] font-[400] flex-1 leading-primary'>Lay down heavy tarps to protect your home’s carpet or flooring.</span>
                    </li>
                    <li className='flex gap-2 items-start mb-4'>
                      <FaCheckCircle className='text-[#7ab058] flex-2' size={'30px'}/>
                      <span className='text-neutral400 text-[20px] flex-1 font-[400]  leading-primary'>Wear protective shoe linings over boots to avoid spreading dirt or debris.</span>
                    </li>
                    <li className='flex gap-2 items-start mb-8'>
                      <FaCheckCircle className='text-[#7ab058] flex-2' size={'30px'}/>
                      <span className='text-neutral400 text-[20px] font-[400] flex-1 leading-primary'>Adhere to industry standards to promote a safe and responsible work environment.</span>
                    </li>
                </ul>
                <p className='text-neutral400 text-[20px] text-center font-[400] leading-primary'>By taking these measures, we can guarantee your home will stay clean, and your air will get cleaner.</p>
            </div>
          </div>
          {/* Card */}
          <div className='card mb-16'>
            <div className='py-3 bg-secondary'>
                 <h1 className='text-center text-xl sm:text-3xl lg:text-4xl font-semibold text-white'>Step 2: Connecting Our Equipment</h1>
            </div>
            <div className='card-body p-[1.25rem]'>
              <p className='text-neutral400 text-[20px] text-center font-[400]  leading-primary'>
              Atlantic Duct Cleaning uses a powerful, portable HyperVac system to effectively clean your air ducts. We also ensure that all debris is collected by using an Abatement Technologies HEPA filter. These terms basically translate to one thing: we use the best equipment to get the best results.
              </p>
            </div>
          </div>
          {/* Card */}
          <div className='card mb-12'>
            <div className='py-3 bg-secondary'>
                 <h1 className='text-center text-xl sm:text-3xl lg:text-4xl font-semibold text-white'>Step 3: Source Removal</h1>
            </div>
            <div className='card-body p-[1.25rem]'>
              <p className='text-neutral400 text-[20px] text-center font-[400]  leading-primary'>
              Source removal involves using negative and positive air pressure to effectively clean your air ducts.
              </p>

                <ul className='mt-8'>
                    <li className='flex gap-2 items-start mb-4'>
                      <FaCheckCircle className='text-[#7ab058] flex-2' size={'30px'}/>
                      <span className='text-neutral400 text-[20px] font-[400] flex-1 leading-primary'>We attach our equipment to the main trunk line of your air ducts, creating negative air pressure throughout the entire system.</span>
                    </li>
                    <li className='flex gap-2 items-start mb-4'>
                      <FaCheckCircle className='text-[#7ab058] flex-2' size={'30px'}/>
                      <span className='text-neutral400 text-[20px] font-[400] flex-1 leading-primary'>The air whips and hoses will be inserted in to your duct work through the vent covers or registers. Added air pressure will agitate or loosen up dirt, dust, cobwebs, and more.</span>
                    </li>
                    <li className='flex gap-2 items-start mb-8'>
                      <FaCheckCircle className='text-[#7ab058] flex-2' size={'30px'}/>
                      <span className='text-neutral400 text-[20px] font-[400] flex-1 leading-primary'>Positive air pressure will then push all particles into our vacuum and HEPA filter. Our highly trained technicians combined with the industry’s best equipment guarantee complete debris removal.</span>
                    </li>
                </ul>
                {/* <p className='text-neutral400 text-[20px] text-center font-[400] leading-primary'>By taking these measures, we can guarantee your home will stay clean, and your air will get cleaner.</p> */}
            </div>
          </div>
          <p className='text-neutral400 text-[20px] text-center font-[400]  leading-primary'>After this has been completed on the supply duct side, the cleaning process begins again on the return side. After all components of your air ducts have been thoroughly cleaned, our team reviews their work and begins cleanup. As mentioned before, our attention to detail and dedication to customer satisfaction means we treat your home like our home.</p>
      </section>


      <Bar title="Why Choose Atlantic Duct Cleaning in Northern Virginia & Maryland?" />

        <section className='py-12 px-4 bg-neutral200 flex gap-6 flex-col lg:flex-row'>
            <div className='flex-1'>
              <p>
              All of our work is performed in accordance with the <LinkWithUnderLine text='National Air Duct Cleaners Association’s (NADCA)' route='/' />  guidelines and procedures. Atlantic Duct Cleaning guarantees excellent customer service, passionate work, and a clean end product.
              </p>
               <br />
              <p>
                You’ve put a lot of time, money, and effort in making your house a home. With Atlantic Duct Cleaning, you’re not only protecting your family, you’re protecting your investment. For further peace of mind, be sure to consider <LinkWithUnderLine text='Aeroseal duct sealing' route='/' /> to make it harder for anything but clean air to cycle through your home.
              </p>
            </div>
            <div className='flex-1'>
              <img src='/assets/clean-ad.png'  alt=''/>
            </div>
        </section>

      <OurClients />
      <BarAppointment title={'Contact Northern Virginia’s Air Duct Cleaning Experts'} content={`Now that you’ve read about our process, please call <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer">(703) 435-4485</a> to speak to our duct cleaning experts, or <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer">schedule an appointment</a> for duct cleaning in Northern Virginia!
`}/>
    
    </main>
  );
};

export default OurProcess;
