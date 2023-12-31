import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import LinkWithUnderLine from "../../components/LinkWithUnderLine";
import Bar from "../../components/Bar";
import CheckList from "../../components/CheckList";
import OurClients from "../../components/OurClients";
import FAQ from "../../components/FAQ";

let benefitsOfDuctCleaning = [
  "Better employee and customer health",
  "Improved productivity in the workplace",
  "Relief from symptoms related to poor air quality (allergies, coughing, and sneezing)",
  "Reduced health costs and sick leave",
  "Increased efficiency in your cooling and heating system",
];

let faqs = [
   {
    title: 'Why is commercial duct cleaning important?',
    content: 'Commercial duct cleaning is important for several reasons. It helps to improve indoor air quality by removing dust, allergens, pollutants, and other contaminants that accumulate in the ductwork. Clean ducts contribute to a healthier and more comfortable environment for employees, customers, and visitors. Additionally, regular duct cleaning can enhance HVAC system efficiency, reduce energy consumption, and extend the lifespan of the equipment.    '
   },
   {
    title: 'How often should commercial ducts be cleaned?',
    content: 'The frequency of commercial duct cleaning depends on various factors, including the type of facility, the level of activity, and the presence of specific contaminants. As a general guideline, it is recommended to have commercial ducts cleaned every 3 to 5 years. However, facilities with special requirements, such as healthcare facilities or buildings with high pollutant levels, may require more frequent cleaning.'
   },
   {
    title: 'How is commercial duct cleaning performed?',
    content: 'Commercial duct cleaning involves a systematic and thorough process. Our professional technicians use specialized equipment such as high-powered vacuums, brushes, and air whips to dislodge and remove debris from the ductwork. They may also employ technologies like negative air pressure or agitation devices to ensure a comprehensive cleaning. The exact methods used will depend on the specific needs and condition of the duct system.'
   },
   {
    title: 'Will duct cleaning cause disruption to my business operations?',
    content: 'Efficient commercial duct cleaning is designed to minimize disruption to your business operations. Our professional technicians are trained to work quickly and efficiently, aiming to complete the cleaning with minimal interference. They will coordinate with you to schedule the cleaning at a time that is convenient for your business, such as during off-peak hours or weekends, to minimize any potential disruptions.'
   },
   {
    title: 'Are there any health benefits associated with commercial duct cleaning?',
    content: 'Yes, commercial duct cleaning can provide several health benefits. By removing dust, allergens, and other contaminants from the ductwork, it helps to improve indoor air quality. This can lead to a reduction in respiratory issues, allergies, and other health concerns related to poor air quality. Cleaner air in the workplace can contribute to a healthier and more productive environment for employees and visitors.'
   }
]

const CommAirduct = () => {
  return (
    <>
      <SecondaryBanner
        title={"COMMERCIAL AIR DUCT CLEANING All Over America"}
        subtitle={"Breathe Easier with Clean Air Ducts"}
        content={
          "The American Lung Association found that the majority of people spend almost 90 percent of their time indoors—so Atlantic Duct Cleaning’s mission is to improve the air quality indoors throughout Northern Virginia & Maryland! We will clean your air ducts so you, your employees, and your customers can breathe easier."
        }
        flex={"block"}
        height={"lg:min-h-0 min-h-[100vh]"}
        padding={"pt-12 lg:py-20"}
        img={"/assets/pipeline-2.png"}
      />
      <section className="bg-primary px-4 py-12">
        <div className="text-center">
          <p className="text-white">
            If you’re ready to eliminate the contaminated air in your building,
            contact the experts at Atlantic Duct Cleaning to schedule an{" "}
            <LinkWithUnderLine
              route={"/pageNotFound"}
              text={"appointment online"}
            />
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <h1 className="text-4xl font-semibold text-secondary mb-10">
          Commercial Air Duct Maintenance
        </h1>
        <p>
          According to{" "}
          <LinkWithUnderLine
            text={"National Air Duct Cleaners Association"}
            route={"/pageNotFound"}
          />{" "}
          , “Indoor air quality is one concern that building managers and
          building inhabitants have when they decide to investigate an HVAC
          system. Through normal occupation in a building, we generate a great
          deal of contaminants and air pollutants, such as dander, dust, and
          chemicals. These contaminants are pulled into the HVAC system and
          re-circulated 5 to 7 times per day, on average. Over time, this
          re-circulation causes a build-up of contaminants in the ductwork.”
          <br /> <br />
          Constantly circulating dust, mold, and pollen can lead to reduced
          employee productivity and increased risk of illness, and even turn
          customers and clients away from your business—don’t risk the health of
          others AND your business. In fact, indoor air can be up to 70 percent
          more polluted than outdoor air—which is why scheduling routine
          commercial air duct cleaning for your commercial property is
          important!
          <br /> <br />
          Take control of your indoor air quality and prioritize the health and
          success of your business. Schedule routine commercial air duct
          maintenance with Atlantic Duct Cleaning today! Contact us now to
          ensure a cleaner, healthier environment for your commercial property
          and everyone inside.
        </p>
      </section>
      <Bar title={"Benefits of Commercial Ductwork Cleaning"} />
      <section className="pt-12 pb-4 px-4 bg-neutral200">
        <p className="mb-8 text-center">
          Whether you are looking to improve your facility’s indoor air quality,
          save money on energy, or provide a cleaner, healthier work environment
          for your employees, commercial duct cleaning can make a difference.
          Service from the experts at Atlantic Duct Cleaning will provide you
          with:
        </p>
        {benefitsOfDuctCleaning.map((item, index) => (
          <CheckList item={item} margin={"mb-4"} key={index} />
        ))}
        <p className="mt-10 text-center">
          Choose Atlantic Duct Cleaning today to unlock these remarkable
          benefits for your facility. Contact us to get an estimate online for
          your commercial ductwork cleaning in Northern Virginia and Maryland.
        </p>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="commercial-bg w-[100%]"></div>
          <div className="py-20 px-8 lg:px-16 w-full lg:w-[90%]">
            <h1 className="text-4xl font-semibold text-secondary mb-10">
              Is Air Duct Cleaning Necessary?
            </h1>
            <p>
              Cleaning your commercial ductwork removes accumulated dust and
              debris, such as cobwebs, and rodent droppings, which eases airflow
              and increases the efficiency of the system. Keep an eye out for
              these signs that suggest it’s time to call a professional:
            </p>
            <ul className="ms-8 mt-8">
              <li className="list-disc text-2xl">
                Dust, cobwebs, and other debris blowing out of the air vents
              </li>
              <li className="list-disc text-2xl">
                Visible mold on the inside surfaces of ducts
              </li>
              <li className="list-disc text-2xl">
                Rodent droppings and dead insects inside ductwork
              </li>
            </ul>
            <p className="mt-16">
              If you’ve noticed any of these signs in your Northern Virginia
              facility, or it’s been a while since your last duct cleaning,
              schedule service online with Atlantic Duct Cleaning today.
            </p>
          </div>
        </div>
      </section>
      <Bar background={"bg-primary"} pad={"py-12"} />
      <Bar title={"Types of Facilities We Serve"} />

      <section className="py-12 px-4 bg-neutral200">
        <p className="text-center">
          At Atlantic Duct Cleaning, we provide unparalleled commercial duct
          cleaning services to a variety of facilities in Northern Virginia and
          Maryland, including:
        </p>
        <ul className="ms-8 mt-8 text-center">
          <li className="list-disc text-2xl mb-2">Hospitals</li>
          <li className="list-disc text-2xl mb-2">Schools & universities</li>
          <li className="list-disc text-2xl mb-2">Office buildings</li>
          <li className="list-disc text-2xl mb-2">Condominiums</li>
          <li className="list-disc text-2xl mb-2">Fitness centers</li>
          <li className="list-disc text-2xl mb-2">And more!</li>
        </ul>
        <p className="text-center mt-12">
          Discover the exceptional commercial duct cleaning services tailored to
          your facility's unique needs. Atlantic Duct Cleaning proudly serves a
          wide range of facilities in Northern Virginia and Maryland. No matter
          the size or type of your facility, our team is ready to deliver
          exceptional service and expertise. Take the first step towards cleaner
          and healthier air for your establishment. Contact us today to schedule
          your commercial duct cleaning.
        </p>
      </section>
      <OurClients />
      <section className="px-4 text-center py-16 bg-neutral200">
        <h2
          dangerouslySetInnerHTML={{
            __html:
              "Contact Northern Virginia’s Air Duct Cleaning Professionals",
          }}
          className={`text-center font-semibold text-3xl sm:text-4xl mb-10 text-primary`}
        />
        <p className="mb-4">
          Atlantic Duct Cleaning has been a trusted industry leader since 1995,
          providing professional indoor environmental solutions. Utilizing the
          finest equipment available and promoting the highest levels of
          training and quality standards, Atlantic Duct Cleaning has delivered
          over 160,000 successful projects with predictable responsibility and
          100% customer satisfaction.
        </p>
        <p className="mb-4">
          From offering specific appointment times, using a safe (HEPA) and
          certified (NADCA) cleaning process, and offering a 100% guarantee, to
          giving you the peace of mind in working with a trustworthy company
          that is licensed and bonded, Atlantic Duct Cleaning is delivering on
          our promise of excellence.
        </p>
        <p className="mb-4">
          For additional questions about commercial air duct cleaning in the
          Northern Virginia and Maryland area, check out our FAQs or contact one
          of the professionals at Atlantic Duct Cleaning at (571) 462-2016 to
          schedule an appointment.
        </p>
        <p>
          In addition to commercial air duct cleaning, our other commercial
          services include dryer vent cleaning, kitchen exhaust cleaning, and
          Aeroseal duct sealing.
        </p>
      </section>
      <section className="px-4 py-12">
      <h1 className="text-4xl font-semibold text-secondary mb-10">
            Frequently Asked Questions

            </h1>
          {
            faqs.map((item, index) => (
              <FAQ title={item.title} content={item.content} key={index} />
            ))
          }
      </section>
    </>
  );
};

export default CommAirduct;
