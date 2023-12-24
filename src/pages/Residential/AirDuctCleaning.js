import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import CheckList from "../../components/CheckList";
import VideoSection from "../../components/VideoSection";
import LinkWithUnderLine from "../../components/LinkWithUnderLine";
import Bar from "../../components/Bar";
import OurClients from "../../components/OurClients";
import BarAppointment from "../../components/BarAppointment";
import FAQ from "../../components/FAQ";

let benefitsOfDuctCleaning = [
  "Cleaner air for you and your family",
  "Less dust in your home and on your furniture",
  "Relief from symptoms related to poor air quality (allergies, coughing, and sneezing)",
  "Increased efficiency in your air conditioning system",
];

let isAirDuctCleaningNessecary = [
  "Dust, cobwebs, and other debris blowing out of the air vents",
  "Rodent droppings and dead insects inside ductwork",
  "Inadequate air flow",
];

let isAirDuctCleaningNessecaryAgain = [
  "Are you the original homeowner?",
  "How often is your AC system maintained?",
  "How often do you change your air filters?",
  "Do you own pets?",
];

let FAQs = [
    {
        title: "Why is air duct cleaning necessary?",
        content: "Air duct cleaning is necessary to remove accumulated dirt, dust, allergens, and other contaminants from the ductwork. Over time, these pollutants can build up and negatively impact indoor air quality, leading to potential health issues, reduced HVAC system efficiency, and increased energy consumption."
    },
    {
        title: "How long does air duct cleaning take?",
        content: "The duration of air duct cleaning can vary depending on factors such as the size of the property, the complexity of the duct system, and the level of contamination. On average, a thorough air duct cleaning process can take anywhere from 2 to 6 hours. However, it's important to prioritize quality over speed to ensure a comprehensive cleaning."
    },
    {
        title: "Can I clean my air ducts myself?",
        content: "While there are DIY air duct cleaning kits available on the market, it is generally recommended to hire a professional for air duct cleaning. Professionals have the expertise, specialized equipment, and knowledge to effectively clean and address specific issues in the ductwork. They can ensure thorough cleaning while minimizing the risk of damage to the system or improper handling of contaminants."
    }
]




const AirDuctCleaning = () => {
  return (
    <>
      <SecondaryBanner
        title={"RESIDENTIAL AIR DUCT CLEANING IN NORTHERN VIRGINIA"}
        subtitle={"Improve Air Quality"}
        content={
          'Do you suffer from allergies? Are there lurking odors in your home from smoking or pets? Have you recently remodeled or renovated? If so, you are breathing in millions of germ-carrying dust and mold particles that have been hiding in your air ducts. That’s why the professionals at <a href="/pageNotFound" class="underline text-[#81a7ce]">Atlantic Duct Cleaning</a> are here to help.'
        }
        secondContent={
          "According to The American Lung Association, most people spend almost 90 percent of their time indoors. So we’ve made it our mission to improve the air quality in Northern Virginia homes! We’ll clean your air ducts so you and your family can breathe easier."
        }
        img={"/assets/r1-cleaning-ducts-in-home.jpg"}
      />
      <section className="bg-primary px-4 py-12">
        <div className="text-center">
          <p className="text-white">
            If you’re tired of breathing contaminated air, schedule service
            online with the experts at Atlantic Duct Cleaning.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <h1 className="text-4xl font-semibold text-secondary mb-12">
          Benefits of Home Air Duct Cleaning
        </h1>

        <p className="mb-4">
          A professional residential duct cleaning from the experts at Atlantic
          Duct Cleaning will provide you with:
        </p>
        {benefitsOfDuctCleaning.map((item, index) => (
          <CheckList item={item} margin={"mb-4"} key={index} />
        ))}
      </section>

      <VideoSection
        poster={"/assets/poster-image-how-we-clean-your-ducts.jpg"}
        minHeight={"h-[80vh]"}
        src={
          "/assets/videos/How-does-Atlantic-Duct-Cleaning-clean-your-air-ducts-update.mp4"
        }
        title={"How Does Atlantic Duct Cleaning Clean Your Air Ducts?"}
      />

      <section className="py-10 text-center px-4">
        <h1 className="text-primary text-4xl font-semibold mb-4">
          Source Removal Process
        </h1>
        <p className="mb-4">
          Source removal air duct cleaning is the only proven method to
          thoroughly clean your duct system. The source removal process has two
          steps:
        </p>
        <ul className="text-2xl text-black font-medium mb-4 list-inside">
          <li className="mb-2 list-disc">Agitation</li>
          <li className="list-disc">Removal of debris</li>
        </ul>
        <p className="mb-4">
          High-pressure air whips and air hoses with directional attachments are
          used to loosen dirt and debris while a powerful{" "}
          <LinkWithUnderLine
            route={"/pageNotFound"}
            text={"Abatement Technologies "}
          />
          HEPA (High-Efficiency Particulate Air) filtered vacuum collects the
          contaminants. HEPA filters are designed to trap particles as small as
          0.3 microns with high efficiency. This means that a significant
          portion of microscopic allergens, dust mites, pet dander, pollen, and
          other airborne pollutants can be effectively captured by the vacuum
          system, preventing them from re-circulating into your home's air.
        </p>
        <p className="mb-4">
          This duct cleaning technology provides a dust-free cleaning process.
          It not only removes visible debris but also targets the hidden
          contaminants that can impact indoor air quality and contribute to
          various health issues.
        </p>
        <p className="mb-4">
          Typical success is regularly demonstrated in providing relief for
          allergies, asthma, and related symptoms such as morning headaches and
          sinus congestion, as well as excessive dust/pet hair and reduced
          airflow to HVAC air duct outlets.
        </p>
        <ul className="text-2xl text-black font-medium list-inside">
          <li className="list-disc">
            By eliminating the buildup of allergens and irritants in the duct
            system, the cleaning process can significantly reduce the triggers
            that lead to respiratory discomfort.
          </li>
          <li className="list-disc">
            By removing the accumulated debris from the ductwork, it minimizes
            the amount of dust and pet dander that would otherwise be
            continuously circulated throughout the living spaces. This leads to
            a cleaner and healthier indoor environment.
          </li>
          <li style={{ fontWeight: 300 }} className="list-disc">
            By removing obstructions and buildup within the ducts, the cleaned
            system can operate more efficiently, allowing for better airflow and
            improved overall performance.
          </li>
        </ul>
      </section>

      <Bar title={"Is Air Duct Cleaning Necessary?"} />

      <section className="py-16 bg-neutral200 px-4">
        <article className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-8">
              Cleaning your residential ductwork removes accumulated dust,
              debris such as cobwebs, and rodent dropping which eases airflow
              and increases efficiency of the system. Keep an eye out for these
              signs that suggest it’s time to call a professional:
            </p>
            <ul className="mb-8">
              {isAirDuctCleaningNessecary.map((items, index) => (
                <CheckList item={items} key={index} margin={"mb-6"} />
              ))}
            </ul>

            <p className="mb-8">
              Cleaning your air ducts isn’t a one and done job. The frequency
              for which your ductwork needs to be cleaned depends on a few
              factors, including:
            </p>

            <ul>
              {isAirDuctCleaningNessecaryAgain.map((items, index) => (
                <CheckList item={items} key={index} margin={"mb-6"} />
              ))}
            </ul>
            <p>
              If you’ve noticed any of these signs in your Northern Virginia
              home, or it’s been awhile since your last duct cleaning, give
              Atlantic Duct Cleaning a call today.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/assets/clean-duct.jpg"
              className="min-h-screen w-full h-full"
              alt="#"
            />
          </div>
        </article>
      </section>

      <OurClients />

      <BarAppointment
       padding={'py-20'}
       title={'Contact Northern Virginia’s Air Duct Cleaning Professionals'}
       content2={'If you’re interested in improving the air quality in your home, call the residential duct cleaning experts at Atlantic Duct Cleaning or <a class="underline text-[#81a7ce]">schedule an appointment</a> online. In addition to home air duct cleaning, our other <a class="hover:bg-secondary underline text-[#81a7ce]">residential services</a> include <a class="hover:bg-secondary underline text-[#81a7ce]">dryer vent cleaning</a> and <a class="underline text-[#81a7ce] hover:bg-secondary">Aeroseal duct sealing</a>.'}
       content={'Since 1995, Atlantic Duct Cleaning has been a trusted industry leader providing professional indoor environmental solutions. Utilizing the finest equipment available and promoting the highest levels of training and quality standards, Atlantic Duct Cleaning has delivered over 160,000 successful projects with predictable responsibility and 100% customer satisfaction.'}
       margin={'mb-4'}
       />
    <section className="py-10 px-4">
      <div>
        <h1 className="text-4xl font-bold text-secondary mb-12">
          Frequently Asked Questions
        </h1>
       {
                    FAQs.map(faq => (
                        <FAQ content={faq.content} title={faq.title} />
                    ))
       }
        </div>
    </section>
    </>
  );
};

export default AirDuctCleaning;
