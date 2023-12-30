import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import { Link } from "react-router-dom";
import { companyInfo } from "../../companyInfo";
import LinkWithUnderLine from "../../components/LinkWithUnderLine";
import Bar from "../../components/Bar";
import CheckList from "../../components/CheckList";

let benefitsOfDuctCleaning = [
  "Better employee and customer health",
  "Improved productivity in the workplace",
  "Relief from symptoms related to poor air quality (allergies, coughing, and sneezing)",
  "Reduced health costs and sick leave",
  "Increased efficiency in your cooling and heating system",
];

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
    </>
  );
};

export default CommAirduct;
