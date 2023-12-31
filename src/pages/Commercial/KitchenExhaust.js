import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import Bar from "../../components/Bar";
import { FaCheckCircle } from "react-icons/fa";
import LinkWithUnderLine from "../../components/LinkWithUnderLine";
import OurClients from "../../components/OurClients";
import FaqDropdown from "../../components/FaqDropdown";

let faqs = [
    {
        title: 'Why is commercial kitchen hood and exhaust cleaning necessary?',
        content: "Commercial kitchen hood and exhaust cleaning are essential to maintain a safe and hygienic kitchen environment. Over time, grease, oil, and other contaminants accumulate in the exhaust system, posing a fire hazard and reducing the system's efficiency."
    },
    {
        title: 'How often should I schedule commercial kitchen hood and exhaust cleaning?',
        content: "The frequency of cleaning depends on the type of establishment and cooking volume. Typically, commercial kitchens should undergo professional hood and exhaust cleaning every 1 to 6 months to ensure compliance with fire safety regulations."
    },
    {
        title: 'Are there any safety regulations or standards related to kitchen hood cleaning?',
        content: "Yes, specific safety regulations and standards set by local authorities and fire departments require commercial kitchens to maintain clean and grease-free exhaust systems. Regular cleaning ensures compliance with these regulations and reduces the risk of fire accidents."
    },
    {
        title: 'What are the benefits of commercial kitchen hood and exhaust cleaning?',
        content: "Yes, specific safety regulations and standards set by local authorities and fire departments require commercial kitchens to maintain clean and grease-free exhaust systems. Regular cleaning ensures compliance with these regulations and reduces the risk of fire accidents."
    },
    {
        title: 'Can I perform kitchen hood cleaning on my own?',
        content: "Performing commercial kitchen hood and exhaust cleaning without professional expertise and specialized equipment is not recommended. Proper cleaning requires trained technicians to access and clean hard-to-reach areas and effectively remove built-up grease and residue. Hiring a certified cleaning service ensures compliance with safety standards and thorough cleaning of the entire system."
    },
];

const KitchenExhaust = () => {
  return (
    <>
      <SecondaryBanner
        title={"COMMERCIAL KITCHEN HOOD & EXHAUST CLEANING IN UNITED STATES"}
        subtitle={"Grease-Free & Fire-Safe"}
        content={
          "Restaurant fires occur every year and cause millions of dollars in property damage, injure customers, and sometimes result in fatalities. More than half of restaurant fires start in the kitchen, so keeping your kitchen grease-free and fire-safe is essential."
        }
        secondContent={
          "At Atlantic Duct Cleaning, our team provides professional kitchen hood cleaning in accordance with IKECA (International Kitchen Cleaning Association), which is a highly specialized removal process of built-up grease, debris, and contaminants that accumulate in, on, and around the components of a kitchen hood exhaust system."
        }
        paraB={"pb-8"}
        sb={"mb-12"}
      />
      <Bar
        fontSize={"text-xl"}
        fontColor={"text-white"}
        background={"bg-primary"}
        weight={"font-light"}
        pad={"py-12"}
        title={
          "Schedule a kitchen hood cleaning appointment all over America by texting us at (407) 655-4595 or contact us online!"
        }
      />
      <section className="px-4 py-16">
        <h1 className="text-4xl font-semibold text-secondary mb-10">
          Why Schedule Restaurant & Commercial Kitchen Hood Cleaning?
        </h1>
        <p>
          Restaurant fires are often associated with dirty kitchen hoods, which
          is why there are some reasons regular kitchen ventilation cleaning is
          crucial to providing a safe environment. Being proactive with
          restaurant kitchen hood cleaning for the safety of your employees,
          customers, and property is essential.
        </p>

        <div className="flex flex-col mb-8 lg:flex-row gap-4 mt-12">
          <div className="shadow-2xl border w-full lg:w-[35%]">
            <div className="bg-primary px-4 text-center h-[250px] flex items-center justify-center py-12 text-5xl text-white font-semibold">
              <div>
                <FaCheckCircle
                  className="mx-auto mb-2 text-secondary"
                  size={80}
                />
                <h1>Clear Blockage</h1>
              </div>
            </div>
            <div className="px-4">
              <p className="py-6">
                There’s more than smoke escaping into your kitchen hood—grease
                and particulate buildup are commonly found in the exhaust system
                too! Without proper cleaning, your kitchen exhaust system
                encourages mold, mildew, and other types of bacteria
                growth—which shouldn’t be anywhere near food! Cleaning the
                blockage in your kitchen ventilation system helps reduce fire
                hazards and mechanical failures, saving you money in the long
                run.
              </p>
            </div>
          </div>
          <div className="shadow-2xl border w-full lg:w-[35%]">
            <div className="bg-primary px-4 text-center h-[250px] flex items-center justify-center text-5xl text-white font-semibold">
              <div>
                <FaCheckCircle
                  className="mx-auto mb-2 text-secondary"
                  size={70}
                />
                <h1>It's the Law</h1>
              </div>
            </div>
            <div className="px-4">
              <p className="py-6">
                Kitchen exhaust cleaning in every commercial cooking
                establishment in the country is mandatory by law. If your
                restaurant is undergoing an inspection and the entire kitchen is
                thoroughly cleaned, but the exhaust system remains dirty, you
                might not pass!
              </p>
            </div>
          </div>
          <div className="shadow-2xl border w-full lg:w-[35%]">
            <div className="bg-primary px-4 text-center h-[250px] flex items-center justify-center text-5xl text-white font-semibold">
              <div>
                <FaCheckCircle
                  className="mx-auto mb-2 text-secondary"
                  size={70}
                />
                <h1>Minimize Health Hazards</h1>
              </div>
            </div>
            <div className="px-4">
              <p className="py-6">
                Without kitchen hood cleaning, potentially dangerous
                particulates can escape into your restaurant’s air, lowering the
                air quality and potentially posing a health hazard to your
                customers and restaurant staff. Cleaning your kitchen exhaust
                system provides a safe and clean environment for employees and
                customers—allowing for improved health and increased
                productivity!
              </p>
            </div>
          </div>
        </div>
        <p>
          Get your kitchen back up to speed, obey the law, and diminish your
          health risks. Schedule kitchen exhaust cleaning service in VA or MD or
          call (703) 435-4485 today!
        </p>
      </section>
      <Bar
        title={"The Professional Commercial Kitchen Hood Cleaning Process"}
      />
      <section className="px-4 pt-12 pb-4 bg-neutral200">
        <div>
          <p className="mb-16 text-center w-[95%] mx-auto">
            Proper commercial kitchen hood cleaning involves a thorough and
            meticulous process to remove grease, oil, and other contaminants
            from the hood, filters, exhaust ducts, and exhaust fans. It
            typically includes the following steps:
          </p>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Preparing the Area:</span>&nbsp;
              Before starting the cleaning process, our technician will ensure
              that the surrounding area is protected with drop cloths or plastic
              sheets to prevent any splatters or drips from reaching the kitchen
              surfaces.
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Removing Grease Buildup:</span>&nbsp;
              Our technician will begin by scraping off the thick layers of
              grease and grime from the hood, filters, and accessible parts of
              the exhaust system using specialized tools.
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">
                Dismantling and Cleaning Filters
              </span>
              &nbsp; The grease filters will be removed from the hood and
              exhaust system and soaked in a degreaser solution to break down
              the accumulated grease. After soaking, the filters are thoroughly
              cleaned and rinsed to restore their efficiency.
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Cleaning Hood and Ductwork:</span>
              &nbsp; The interior and exterior surfaces of the hood, as well as
              the exhaust ductwork, will be cleaned using a degreaser to remove
              any grease buildup and residue.
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Cleaning Exhaust Fans</span>
              &nbsp; The exhaust fans are dismantled, and their components are
              cleaned and degreased to ensure proper functionality.
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Inspection and Reassembly:</span>
              &nbsp; After the cleaning process, our technician will inspect all
              components, including fans, ductwork, and filters, to ensure they
              are clean and in good working condition. Any damaged or worn-out
              parts may be replaced at this stage.
            </p>
          </div>

          <p className="text-center mb-4">
            The time taken for commercial kitchen hood cleaning can vary
            depending on the size and complexity of the kitchen, the level of
            grease buildup, and the expertise of the cleaning crew. Generally, a
            thorough cleaning of a standard commercial kitchen hood and exhaust
            system may take anywhere from 1 to 4 hours to complete.
          </p>
          <p className="text-center mb-4">
            It's essential to hire a certified and experienced hood cleaning
            company to ensure that the cleaning process is done correctly, meets
            safety regulations, and minimizes fire hazards in the kitchen.
            Regularly scheduled cleaning is crucial to maintain a safe and
            healthy kitchen environment and prolong the lifespan of the exhaust
            system.
          </p>
        </div>
      </section>
      <Bar
        title={"How Frequently Should Your Restaurant Kitchen Hood Be Cleaned?"}
      />

      <section className="px-4 pt-12 pb-4 bg-neutral200">
        <div>
          <p className="mb-16 text-center w-[95%] mx-auto">
            Regular and systematic maintenance in accordance with IKECA and
            NFPA-96 will enhance system efficiency and prolong equipment life
            cycles, as well as minimize operational interruptions and the
            associated lost revenues. The type or volume of cooking frequency is
            a determining factor in how often you should clean your kitchen
            exhaust system. Inspection frequency in the Northern Virginia &
            Maryland area, as described by NFPA (National Fire Protection
            Association) guidelines, must be:
          </p>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Monthly.</span>&nbsp; Any systems
              serving solid fuel cooking operations must be cleaned every month.
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Quarterly.</span>&nbsp; Businesses
              operating on a 24-hour schedule that prepare high volumes of food
              need to have their systems inspected and maintained at least once
              every three months.
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Semi-Annually.</span>
              &nbsp; Restaurants, usually with a sit-down environment, that
              prepare food at moderate levels need to have their systems checked
              twice per year.
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Cleaning Hood and Ductwork:</span>
              &nbsp; The interior and exterior surfaces of the hood, as well as
              the exhaust ductwork, will be cleaned using a degreaser to remove
              any grease buildup and residue.
            </p>
          </div>
          <div className="flex gap-4 mb-6">
            <div>
              <FaCheckCircle size={40} color="#7ab058" />
            </div>
            <p>
              <span className="font-bold">Monthly.</span>
              &nbsp; Organizations that cook small volumes of food or are only
              in operation for a few months of the year, such as churches, day
              camps, seasonal businesses, or senior centers require an
              inspection once a year.
            </p>
          </div>

          <p className="text-center mb-4">
            Annual kitchen exhaust maintenance agreements with quarterly
            cleanings are a savings driven solution available from Atlantic Duct
            Cleaning!
          </p>
        </div>
      </section>

      <Bar
        title={
          "If you’re ready to protect your employees, customers, and property from an unexpected fire contact us today to schedule your professional kitchen exhaust cleaning or text us (407) 655-4595."
        }
        fontSize={"text-xl"}
        fontColor={"text-white"}
        background={"bg-primary"}
        pad={"py-12"}
        weight={"font-light"}
      />

      <OurClients />

      <section className="py-16 bg-neutral200 px-4">
        <h1 className="text-2xl sm:text-4xl text-center font-semibold text-primary mb-12">
          Schedule Commercial Kitchen Hood Cleaning in VA & MD
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 px-5 lg:px-8">
          <p className="w-full text-start">
            The risks of not thoroughly cleaning your kitchen—without the help
            of a professional—are likely to outweigh any money saved. Once
            you’ve had your kitchen hood cleaned by a highly trained expert from
            Atlantic Duct Cleaning, you’ll never make exhaust system cleaning a
            DIY project again! Whether your business could benefit from monthly,
            quarterly, semiannual, or annual kitchen hood cleaning, Atlantic
            Duct Cleaning is the company to call. If you run a restaurant in
            Maryland or Northern Virginia, don’t wait until an unexpected fire
            erupts on your property before you decide you need kitchen hood
            cleaning.
          </p>
          <img
            src="/assets/pipeline-5.png"
            alt="Benefits of Dryer Vent Maintenance"
            className="w-full mt-4 lg:mt-0 lg:w-[30%] mx-auto lg:mx-0"
          />
        </div>
        <p className="mt-6 lg:mt-12 text-center w-[95%] mx-auto">
          Schedule a commercial kitchen hood cleaning and call us today at (703)
          435-4485 or contact us online. In addition to commercial kitchen
          exhaust cleaning, our other commercial services include air duct
          cleaning, dryer vent cleaning, and Aeroseal duct sealing.
        </p>
      </section>


      <section className="pt-20 pb-10 px-4">
      <h1 className="text-4xl font-semibold text-secondary mb-10">
            Why Schedule Restaurant & Commercial Kitchen Hood Cleaning?
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

export default KitchenExhaust;
