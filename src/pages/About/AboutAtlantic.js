import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import Bar from "../../components/Bar";
import BarAppointment from "../../components/BarAppointment";
import CheckList from "../../components/CheckList";
import OurClients from "../../components/OurClients";

const AboutAtlantic = () => {
  return (
    <>
      <SecondaryBanner
        title={"ABOUT DUCT CLEANING"}
        subtitle={"NADCA Certified Company"}
        sb={"mb-12"}
        content={`<a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">Atlantic Duct Cleaning</a> has been proudly serving Virginia and Maryland area homes and businesses with indoor air quality services for over two decades. We take pride in knowing that each and every one of our customers is completely satisfied, and every job is done completely and correctly, the first time around.`}
        paraB={"mb-4"}
        secondContent={`As a NADCA (<a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer">National Air Duct Cleaners Association</a>) Certified Company, Atlantic Duct Cleaning has earned the reputation as an industry leader. With unsurpassed leadership and extraordinary customer service in the air duct, dryer ventilation, and kitchen hood cleaning industry, our highly trained technicians deliver reliable and consistent results with every job.`}
        img={"/assets/v2-cleaning-ducts-in-home.jpg"}
      />

      <Bar title={"Indoor Air Quality Satisfaction Guarantee"} />

      <BarAppointment
        content={
          "Our skilled technicians are the best in performance, customer service, and workmanship. They will care for your home or business and complete each job promptly, and get the job done right the first time. We’re not satisfied until you are! Our technicians will never leave a mess behind when the job is complete—your property will be left precisely as they found it, but with improved air quality!"
        }
        content2={
          "Reliable excellence, accountability, integrity, professional commitment, and passion to do better every day, are the deep rooted concepts and standards that have grown Atlantic Duct Cleaning into an organization that consistently meets, and exceeds, our customers’ needs and expectations."
        }
        margin={"mb-4"}
        padding={"py-[45px]"}
      />

      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">
          Benefits of Hiring Atlantic Duct Cleaning’s Professionals
        </h1>
        <article>
          <div className="flex flex-col md:gap-6 lg:gap-0 md:flex-row md:items-start">
            <div className="w-full md:w-1/2">
              <p>
                Atlantic Duct Cleaning is a recognized service provider in the
                Northern Virginia & Maryland area. We are proud of the fact that
                our company has been selected to work in some of the nation’s
                landmark institutions, such as the Pentagon, Mount Vernon,
                National Cathedral, and National Gallery of Art. Atlantic Duct
                Cleaning surpasses all competitors because of the following
                reasons:
              </p>
            </div>
            <div className="w-full mt-6 md:mt-0 md:w-1/2">
                <img src="/assets/TeamPicture.jpg" alt="team" className="h-full object-contain w-full"/>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-12">
            <ul className="w-full md:w-1/2">
                <CheckList item={`We have been <a href="/pageNotFound" class="underline text-[#81a7ce] hover:text-secondary cursor-pointer">NADCA Certified</a> since 1995.`} margin={'mb-6'} />
                <CheckList item={'Our technicians have extensive HVAC system and air conveyance knowledge.'} margin={'mb-6'} />
                <CheckList item={'Our consistent services exceed expectations.'} margin={'mb-6'} />
                <CheckList item={'We demonstrate industry leadership.'} margin={'mb-6'} />
                <CheckList item={'Our company utilizes the <a href="/pageNotFound" class="underline text-[#81a7ce] hover:text-secondary cursor-pointer">finest equipment and abatement technology</a> available.'} />
            </ul>
            <ul className="w-full md:w-1/2">
            <CheckList item={'We promote team member growth and happiness.'} margin={'mb-6'} />
            <CheckList item={'We provide safe and responsible work environments.'} margin={'mb-6'} />
            <CheckList item={'Our team uses LEED commissioning solutions.'} margin={'mb-6'} />
            <CheckList item={'Our company practices responsible Earth Stewardship.'} margin={'mb-6'} />
            </ul>
          </div>
        </article>
      </section>

        <OurClients background={'bg-neutral200'}/>

        <BarAppointment  
        title={'Why Call Atlantic Duct Cleaning?'}
        content={`Whether you’re in the market for <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">air duct cleaning for your residential</a> or <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">commercial property</a> , <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">dryer vent cleaning</a> services, <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">Aeroseal duct sealing</a>, or <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">kitchen exhaust cleaning</a>—Atlantic Duct Cleaning is the company to call! We’ve been a trusted industry leader since 1995, providing professional indoor environmental solutions to improve air quality in your Northern Virginia & Maryland area residence or commercial property. With Atlantic Duct Cleaning, you receive superior indoor air quality service from a company that cares about your needs and gets the job done right the first time, every time.`}
        content2={`<a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">Schedule an appointment online</a> or call us at <a class="underline text-[#81a7ce] hover:text-secondary cursor-pointer" href="/pageNotFound">(703) 435-4485</a> to learn more about the indoor air quality services we provide in Northern Virginia & Maryland!`}
        margin={'mb-4'}
        background={'bg-white'}
        />
    </>
  );
};

export default AboutAtlantic;
