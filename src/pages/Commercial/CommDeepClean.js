import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import Bar from "../../components/Bar";
import { companyInfo } from "../../companyInfo";
import { FaCheckCircle } from "react-icons/fa";
import CheckList from "../../components/CheckList";
import FaqDropdown from "../../components/FaqDropdown";

let benefits = [
  "Increase energy savings",
  "Improve air quality",
  "Maximize comfort AND tenant productivity",
  "Minimize musty odors and excessive dust",
];


let faqs = [
    {
        title: "How does Deep Duct Cleaning differ from traditional duct sealing methods?",
        content: "Unlike traditional methods that may require manual sealing of visible leaks, Aeroseal is a non-invasive process that can effectively seal hidden and hard-to-reach leaks in the ductwork, resulting in a more comprehensive sealing solution."
    },
    {
        title: "Is Deep Duct Cleaning safe for my HVAC system and indoor environment?",
        content: "Yes, Deep Duct Cleaning is safe for both your HVAC system and indoor environment. The sealant used in the process is non-toxic, non-flammable, and does not release any harmful chemicals into the air."
    },
    {
        title: "How long does the Deep Duct Cleaning process typically take?",
        content: "The duration of the Deep Duct Cleaning process depends on the size of your duct system and the extent of leaks. However, most residential projects are completed within a few hours, while larger commercial projects may take longer."
    },
    {
        title: "Will Deep Duct Cleaning help reduce my energy bills?",
        content: "Yes, by sealing the leaks in your ductwork, Aeroseal improves the efficiency of your HVAC system, reducing energy waste and ultimately leading to lower energy bills.        "
    },
    {
        title: "How do I know if my air ducts need sealing?",
        content: "If you experience inconsistent room temperatures, high energy bills, excessive dust, or poor indoor air quality, it may be a sign that your air ducts have leaks and could benefit from Deep Duct Cleaning."
    },
    {
        title: "Is Deep Duct Cleaning a long-lasting solution?",
        content: "Yes, Deep Duct Cleaning provides a long-lasting solution to duct leaks. The sealant used in the process is durable and designed to remain effective for many years."
    },
    {
        title: "Can I still access my ducts after the Aeroseal process is completed?",
        content: "Yes, the Aeroseal sealant remains flexible and does not block access to the ductwork, so you can still access your ducts for maintenance and inspections as needed."
    },
];


const CommDeepClean = () => {
 
  return (
    <>
      <SecondaryBanner
        title={"COMMERCIAL Deep Duct Cleaning IN ALL OVER AMERICA"}
        subtitle={"Reduce Your Building’s Energy Usage"}
        padding={"py-16"}
        content={`Duct leakage in commercial buildings is a common occurrence. In fact, the U.S. Department of Energy (DOE) says that leaky ductwork is one of the biggest contributors to energy waste in U.S. buildings today!
                <br/> <br/>
        Leaky ductwork can cause 20% to 30% of conditioned air to be lost, straining a building’s systems, wasting energy, and costing thousands of dollars per month.`}
        secondContent={`There is a simple solution to this costly problem. Atlantic Duct Cleaning can seal this leaky ductwork with Deep Duct Cleaning! It’s more effective and convenient than conventional methods of repairing leaky ductwork, requires less time and seals a larger portion of a leakage area—a win-win! In fact, the DOE now ranks duct sealing as one of the most effective strategies for reducing energy costs.
                        <br/> <br/>
        Deep Duct Cleaning will make your building more comfortable for you and your tenants! Call us today to schedule a free in-person estimate to learn more about this critical energy-saving process: (571) 462-2016!`}
      />

      <Bar
        title={`Why schedule an appointment with Atlantic Duct Cleaning? Deep Duct Cleaning will make your building more comfortable for you and your tenants! text us today at ${companyInfo.phoneNum}!`}
        fontSize={"text-xl"}
        background={"bg-primary"}
        fontColor={"text-white"}
        pad={"py-12"}
        weight={"font-light"}
      />

      <section className="px-4 pt-12 pb-4">
        <div>
          <p className="mb-16 text-start">
            Commercial air duct leaks can cause all sorts of uncomfortable and
            expensive problems that are easily avoidable with proper air duct
            maintenance! Without proper duct maintenance, you’re putting your
            Northern Virginia building’s tenants at risk for the following
            issues:
          </p>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">High utility bills</span>&nbsp; – If
              your ductwork is leaking, you are allowing the conditioned air to
              leak out AND allowing unconditioned are to come in. This forces
              your heating or cooling system to exert unnecessary energy to
              constantly bring your commercial property back to a comfortable
              temperature.
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Excess energy use</span>&nbsp; – Leaky
              ductwork forces your commercial HVAC system to work harder and
              wear out sooner—costing you unnecessary money! Reduce future
              costly repairs by properly sealing your air ducts today!
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Uneven heating</span>
              &nbsp; – When conditioned air is lost through holes in your
              ductwork, it makes it much more difficult for a room to reach and
              even stay at your ideal temperature.
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Increased humidity and moisture</span>
              &nbsp; – When an air duct leaks in your building’s attic or crawl
              space, it pulls in humid, dirty air. This air promotes mold
              growth, which causes problems with allergies and asthma for the
              tenants in your building!
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Inadequate air flow</span>
              &nbsp; – If your ductwork is leaking the air that is passing
              through, it’s not surprising that some of the zones are not
              getting enough air! This often affects the rooms at the end of the
              system, which end up being substantially colder than the rest of
              the building.
            </p>
          </div>

          <p className="mb-4">
            Leaky air ducts are sometimes a simple fix, but if you’re unable to
            repair your building’s ductwork yourself, Atlantic Duct Cleaning is
            just a phone call away at {companyInfo.phoneNum}! Don’t forget to
            check out our FAQ!
          </p>
        </div>
        {/* Add Video Here... */}
      </section>
      
      <Bar title={"Benefits of Commercial Deep Duct Cleaning"} />

      <section className="py-16 bg-neutral200 px-4 lg:px-0">
        <p className="text-center mb-12 px-6">
          Commercial buildings throughout Northern Virginia often have unclean
          air and contaminants from the crawl space, attic, and other places can
          actually be pulled in to the air you and your tenants breathe! If your
          building’s occupants are suffering from allergies caused by poor air
          quality or the temperature is constantly uncomfortable, Aeroseal duct
          sealing will:
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 w-full  lg:w-[50%] lg:mx-auto">
          {benefits.map((item, index) => (
            <CheckList item={item} key={index} margin={"mb-4"} />
          ))}
        </ul>
        <p className="px-6 mt-6">
          Atlantic Duct Cleaning has been sealing leaky ductwork throughout the
          Maryland and Virginia area for more than two decades. If your
          commercial property could benefit from duct sealing, give us a call
          today!
        </p>
      </section>

      <section>
        {/* img */}
        <div className="flex">
            <div className="improve-air-quality flex-1"></div>
        


            <div className="px-12 flex items-center flex-1">
                <div className="">
                <h1 className="mb-8 text-4xl text-secondary font-semibold">
                    Fix Leaky Ductwork & Improve Air Quality in Northern Virginia &
                    Maryland
                </h1>
                <p>
                    Atlantic Duct Cleaning offers high-quality air purification and duct
                    sealing throughout Northern Virginia & Maryland. By utilizing
                    high-quality equipment and promoting the highest levels of training
                    and quality standards, we have delivered over 160,000 successful
                    projects! You and your building’s tenants deserve to work in a
                    comfortable and safe environment, and Atlantic Duct Cleaning can
                    make that happen!
                </p>
                </div>
            </div>

        </div>
      </section>

      <section className="pt-20 pb-10 px-4">
      <h1 className="text-4xl font-semibold text-secondary mb-10">
                Frequently Asked Questions
        </h1>
            {
                faqs.map((item, index) => (
                    <FaqDropdown title={item.title} content={item.content} key={index} />
                ))
            }
      </section>
    </>
  );
};

export default CommDeepClean;
