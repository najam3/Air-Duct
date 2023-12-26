import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import FaqDropdown from "../../components/FaqDropdown";
import { list3, lists, lists2 } from "../../FaqList";
import { Link } from "react-router-dom";
import OurClients from "../../components/OurClients";

const FAQs = () => {
  return (
    <>
      <SecondaryBanner
        title={
          "FREQUENTLY ASKED QUESTIONS: AIR DUCTS, DRYER VENTS & KITCHEN HOODS"
        }
        content={
          'Atlantic Duct Cleaning offers residential and commercial indoor air quality services for air ducts, dryer vents, and kitchen exhaust systems. As part of <a class="underline text-[#81a7ce] hover:text-secondary" href="/pageNotFound">our commitment to service excellence</a>, we do our best to share relevant information with our customers.'
        }
        subtitle={"Improve Air Quality"}
        secondContent={
          "Some of the most commonly asked questions and their answers are included below, but we’re always happy to answer any other questions you may have."
        }
        img={"/assets/r1-duct-cleaning.png"}
        height={"min-h-[600px]"}
        bg={"bg-neutral200"}
      />

      <section className="px-4 pt-12">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Air Duct Cleaning in the Northern Virginia Area
          </h1>
          <p>
            Have questions about air duct cleaning? View our common air duct
            cleaning questions below, or{" "}
            <Link
              to={"/pageNotFound"}
              className="text-[#81a7ce] underline cursor-pointer hover:text-secondary"
            >
              contact us
            </Link>{" "}
            for more information!
          </p>
        </div>
        {lists.map((item, index) => (
          <FaqDropdown title={item.title} content={item.content} />
        ))}
        <div className="pt-8">
          <p>
            Have more questions? Call us today at{" "}
            <Link className="text-[#81a7ce] underline cursor-pointer hover:text-secondary">
              (703) 435-4485
            </Link>
            !
          </p>
        </div>
      </section>

      <section className="px-4 pt-12">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Dryer Vent Cleaning in Manassas & the Surrounding Areas
          </h1>
          <p>
            Have questions about dryer vent cleaning? Check out our frequently
            asked questions below or contact us with your questions!
          </p>
        </div>
        {lists2.map((item, index) => (
          <FaqDropdown title={item.title} content={item.content} />
        ))}
        <div className="pt-8">
          <p>
            Have more questions or need to schedule dryer vent cleaning in the
            Manassas, VA area?{" "}
            <Link className="text-[#81a7ce] underline cursor-pointer hover:text-secondary">
              Contact us today
            </Link>
            !
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Kitchen Exhaust Cleaning in Northern Virginia
          </h1>
          <p>
            Kitchen exhaust cleaning is critical to maintaining a safe and
            code-compliant kitchen. Read on for common questions about kitchen
            exhaust cleaning, or call us today at{" "}
            <Link className="text-[#81a7ce] underline cursor-pointer hover:text-secondary">
              (703) 435-4485
            </Link>{" "}
            for more information!
          </p>
        </div>
        {list3.map((item, index) => (
          <FaqDropdown title={item.title} content={item.content} />
        ))}
        <div className="pt-2">
          <p>
            Have more questions about our kitchen exhaust cleaning in the
            Manassas area? Call us at{" "}
            <Link
              className="text-[#81a7ce] underline cursor-pointer hover:text-secondary"
              to={"/pageNotFound"}
            >
              (703) 435-4485
            </Link>{" "}
            or ask your questions{" "}
            <Link className="text-[#81a7ce] underline cursor-pointer hover:text-secondary">
              online
            </Link>
            !
          </p>
        </div>
      </section>
      <OurClients background={'bg-neutral200'}/>

      <section className="pt-12 sm:pt-20 pb-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
          Choose Atlantic Duct Cleaning for Your HVAC Cleaning Services in
          Northern Virginia & Maryland
        </h1>
        <p>
          Atlantic Duct Cleaning has been a trusted industry leader since 1995,
          providing professional indoor environmental solutions that improve air
          quality in your residence or commercial property. Utilizing the finest
          equipment available and promoting the highest levels of training and
          quality standards, Atlantic Duct Cleaning has delivered over 160,000
          successful projects throughout Maryland and Northern Virginia!
          <br />
          <br />
          Have more questions about our air duct, dryer vent, or kitchen exhaust
          cleaning services?{" "}
          <Link
            className="text-[#81a7ce] underline cursor-pointer hover:text-secondary"
            to={"/pageNotFound"}
          >
            Contact our highly trained technicians
          </Link>
          !
          <br />
          <br />
          If you’re in the Northern Virginia and need to schedule services,
          <Link className="text-[#81a7ce] underline cursor-pointer hover:text-secondary">
            schedule an appointment
          </Link>{" "}
          or give us a call at{" "}
          <Link className="text-[#81a7ce] underline cursor-pointer hover:text-secondary">
            (703) 435-4485
          </Link>
          !
        </p>
      </section>
    </>
  );
};

export default FAQs;
