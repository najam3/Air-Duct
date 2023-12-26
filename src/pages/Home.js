import React, { useEffect, useState } from "react";
import LareBtn from "../components/LareBtn";
import LinkWithUnderLine from "../components/LinkWithUnderLine";
import BarAppointment from "../components/BarAppointment";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import Brands, { note } from "../components/Brands";
import CheckList from "../components/CheckList";
import OurClients from "../components/OurClients";
import Bar from "../components/Bar";
import { Link } from "react-router-dom";
import useWindowResize from "../hooks/useWindowResize";

const Home = () => {
  const [scroll, setScrollPos] = useState(0)
  const [slideStates, setSlideStates] = useState([false, false, false]);
  const {width} = useWindowResize();
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);
};

  function handleMouseEnter(index) {
    setSlideStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  }
  function handleMouseLeave(index) {
    setSlideStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  }

  const data = [
    {
      title: "Residential Services",
      cta: "LEARN MORE",
      image: "assets/house-and-lawn.png",
      overlay: {
        title: "Residential Services",
        description:
          "Atlantic Duct Cleaning provides professional indoor environmental solutions, utilizing the finest equipment available, and promoting the highest levels of training and quality standards.",
        cta: "LEARN MORE",
      },
    },
    {
      title: "Commercial Services",
      cta: "LEARN MORE",
      image: "assets/geometric-building.png",
      overlay: {
        title: "Commercial Services",
        description:
          "At Atlantic Duct Cleaning, we provide unparalleled commercial duct sealing services to a variety of industries including hospitals, schools, offices, and more!            ",
        cta: "LEARN MORE",
      },
    },
    {
      title: "Aeroseal Services",
      cta: "LEARN MORE",
      image: "assets/shiny-hvac.png",
      overlay: {
        title: "Aeroseal Services",
        description:
          "Atlantic Duct Cleaning provides professional indoor environmental solutions, utilizing the finest equipment available, and promoting the highest levels of training and quality standards.",
        cta: "LEARN MORE",
      },
    },
  ];

  const dataTwo = [
    {
      title: "Air Duct Cleaning",
      image: "/assets/r1-duct-cleaning.png",
      overlay: {
        title: "Air Duct Cleaning",
        list: [
          "Cleaner air for you, your family, or your building’s tenants",
          "Less dust in your home, office building, and on your furniture",
          "Relief from symptoms related to poor air quality (allergies, coughing, and sneezing)",
        ],
      },
    },
    {
      title: "Dryer Vent Cleaning",
      image: "/assets/r1-dryer-vent-inside.png",
      overlay: {
        title: "Dryer Vent Cleaning",
        list: [
          "Reduce excess dust and humidity",
          "Help prevent a building fire by eliminating all ventilation build-up",
          "Increase your dryer’s efficiency while using less energy (saving you money!)",
        ],
      },
    },
    {
      title: "Aeroseal Duct Sealing",
      image: "/assets/aeroseal-hp-two.png",
      overlay: {
        title: "Aeroseal Duct Sealing",
        list: [
          "Reduce utility bills",
          "Increase comfort for you and your family",
          "Improve air quality",
          "And more!",
        ],
      },
    },
  ];

  const dataThree = [
    {
      title: "University of Maryland, McKeldin Mall",
      image: "/assets/big-house.png",
    },
    {
      title: "The Pentagon, Washington, D.C.",
      image: "/assets/pentagon.webp",
    },
    {
      title: "Walter Reed Army Medical Center",
      image: "/assets/military-academy.png",
    },
    {
      title: "INOVA Fairfax Hospital",
      image: "/assets/inova-crop.jpg.png",
    },
  ];

  let listItems = [
    "Angie’s List Super Service Award since 2009",
    "Better Business Bureau Accredited Business with A+ Rating ",
    "NADCA’s Safety Award Recipient (eight times), past winner of Outstanding Safety Award",
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scroll]);

  return (
    <>
      <section className={`home py-[7em] px-[1.5em]`}>
<<<<<<< HEAD
        <div className="w-full md:w-[80%] lg:w-[53%] bg-primary08 px-[1rem] md:px-[4rem] ml-auto py-12 lg:py-12 xl:py-20">
=======
        <div className="w-full md:w-[80%] lg:w-[53%] bg-primary08 px-[1rem]  md:px-[4rem] md:ms-auto py-12 lg:py-12 xl:py-20">
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
          <h1 className="font-bold text-white mb-2 md:mb-6 text-3xl sm:text-4xl">
            DELIVERING AIR QUALITY
          </h1>
          <h1 className="font-bold text-white mb-8 text-3xl sm:text-4xl">
            {" "}
            SOLUTIONS SINCE 1995
          </h1>
          <button className="text-white text-2xl font-semibold py-4 mb-6 bg-transparent border-2 border-white w-full">
            RECEIVE ESTIMATE
          </button>
          <button className="bg-secondary text-white text-2xl py-4 font-semibold w-full">
            SCHEDULE NOW
          </button>
        </div>
      </section>

      <section className="px-4 py-6 bg-neutral50">
        <div className="container flex flex-col lg:flex-row items-center justify-between w-full sm:w-[80%] mx-auto text-white">
          <div className="mb-6 lg:mb-0">
            <p className="mb-2 font-light text-2xl sm:text-3xl text-center lg:text-start text-primary">
              The Expert’s Choice in Northern
            </p>
            <p className="font-light text-center text-2xl sm:text-3xl lg:text-start text-primary">
              Virginia & Maryland
            </p>
          </div>
          <button className="font-semibold bg-primary px-16 py-3 lg:py-4 lg:text-xl">
            SEE WHY
          </button>
          {/* <LareBtn text={"SEE WHY"} color={"primary"} /> */}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="flex gap-8 flex-wrap lg:flex-nowrap items-center justify-center">
          {data.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`card w-full sm:w-[100%] md:w-[450px] lg:w-[400px] rounded-2xl relative cursor-pointer`}
            >
              <div>
                <img src={card.image} className="w-full rounded-t-sm" alt="#" />
              </div>
              <div className="bg-white p-6 text-2xl font-semibold text-neutral-500 text-center">
                <h2
                  className={`mb-4 ${
                    slideStates[index] ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {card.title}
                </h2>
                <button
                  className={`bg-primary w-full ${
                    slideStates[index] ? "opacity-0" : "opacity-100"
                  } text-xl py-4 text-white`}
                >
                  {card.cta}
                </button>
              </div>

              <div
                className={`text-left flex justify-between flex-col font-semibold absolute h-[100%] transition-all duration-500 opacity-0 ${
                  slideStates[index]
                    ? "-translate-y-[100%] opacity-100"
                    : "pointer-events-none"
                } py-6 px-4 bg-[#003b60e3] text-white`}
              >
                <div>
                  <h2 className="mb-4 text-xl">{card.overlay.title}</h2>
                  <p className="text-white text-xl font-semibold">
                    {card.overlay.description}
                  </p>
                </div>
                <button
                  className={`w-[100%] py-2 border-2 mx-auto font-semibold border-white`}
                >
                  {card.overlay.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="py-[3rem] sm:py-[3rem] px-4 sm:px-10 md:px-0 bg-primary">
          <h1 className="font-bold w-full lg:w-[70%] mx-auto text-white text-3xl sm:text-2xl md:text-4xl raleway text-center">
            AIR DUCT CLEANING & SEALING IN NORTHERN VIRGINIA & MARYLAND
          </h1>
        </div>
      </section>

      <section>
        <article className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[90%] order-2 lg:order-1 px-4 py-[38px] lg:px-[65px] lg:pt-[80px] lg:pb-[80px]">
            <h1 className="text-secondary text-4xl font-semibold mb-8 lg:mb-14">
              Welcome to Atlantic Duct Cleaning
            </h1>
            <p>
              Atlantic Duct Cleaning provides professional air duct cleaning,
              dryer vent cleaning, and more to residential and commercial
              properties throughout Maryland & Northern Virginia. Being NADCA
              certified since 1995, Atlantic Duct Cleaning delivers top quality
              results, utilizes state-of-the-art Abatement Technologies®
              equipment and HEPA-filtered vacuums, and has the highest standard
              of customer satisfaction in the industry. With more than 27 years
              of experience, our highly trained technicians have the skill and
              experience to tackle any residential and commercial HVAC ductwork
              or ventilation cleaning project in Northern Virginia & Maryland.
            </p>
          </div>
<<<<<<< HEAD
          <div className="r1Vent w-[60%] min-h-[785px] order-1 lg:order-2"></div>
        </article>
        <article className="flex flex-col lg:flex-row">
          <div className="r2Vent w-[60%] min-h-[785px]"></div>
=======
          <div className="r1Vent w-[60%] min-h-screen order-1 lg:order-2"></div>
        </article>
        <article className="flex flex-col lg:flex-row">
          <div className="r2Vent w-[60%] min-h-screen"></div>
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
          <div className="w-full lg:w-[90%] px-4 py-[38px] lg:px-[65px] lg:pt-[80px] lg:pb-[80px]">
            <h1 className="text-secondary text-4xl font-semibold mb-8 lg:mb-14">
              Our Northern Virginia Duct Cleaning Services
            </h1>
            <p>
              The team at Atlantic Duct Cleaning provides residential and
              commercial duct cleaning and dryer vent cleaning as well as
              Aeroseal duct sealing and{" "}
              <LinkWithUnderLine
                text={"commercial kitchen exhaust system cleaning"}
                route={"/notfound"}
              />
              .
            </p>
            <br />
            <p>
              Contact Atlantic Duct Cleaning today to{" "}
              <LinkWithUnderLine
                text={"schedule service online"}
                route={"/notfound"}
              />
              and experience the difference our comprehensive services can make
              in improving the air quality, energy efficiency, and safety of
              your residential or commercial space. Our team is ready to provide
              you with top-notch solutions tailored to your specific needs,
              ensuring a cleaner, healthier, and more comfortable environment
              for you, your family, or your business.
            </p>
          </div>
        </article>
      </section>

      <BarAppointment
        title={"OUR HVAC CLEANING SERVICES"}
        padding={"py-6"}
        content={
          "When it comes to maintaining a clean and efficient HVAC system, Atlantic Duct Cleaning is your go-to source for exceptional services. We offer a comprehensive range of HVAC cleaning services, including air duct cleaning, dryer vent cleaning, and Aeroseal duct sealing. Dont compromise on the cleanliness and efficiency of your HVAC system Contact Atlantic Duct Cleaning today for an estimate or to schedule service Our team is dedicated to providing you with exceptional results and a healthier living or working environment."
        }
      />

      <section className="py-20 px-4 bg-neutral50">
<<<<<<< HEAD
        <div className="flex gap-8 flex-wrap lg:flex-nowrap md:justify-normal lg:justify-center items-center">
=======
        <div className="flex gap-8 flex-wrap lg:flex-nowrap items-center justify-center">
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
          {dataTwo.map((cards, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                backgroundImage: `url(${cards.image})`,
<<<<<<< HEAD
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className="card rounded-md w-full min-h-screen sm:w-[100%] md:w-[450px] lg:w-[30%] 2xl:w-[20%] relative cursor-pointer"
            >
              {/* Remove this */}
              <div className="card-overlay min-h-[30vh] absolute bottom-0 flex items-end justify-center">
=======
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "90vh",
              }}
              className="card rounded-md w-full min-h-screen sm:w-[100%] md:w-[450px] lg:w-[32%] relative cursor-pointer"
            >
              {/* Remove this */}
              <div className="card-overlay min-h-[40vh] absolute bottom-0 flex items-end justify-center">
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
                <h2 className="text-white font-semibold text-2xl text-center pb-6">
                  {cards.title}
                </h2>
              </div>
              <div
                className={`absolute w-full flex justify-between flex-col ${
                  slideStates[index]
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none"
                } transition-all duration-500 opacity-0 text-white px-4 py-8 bg-[#003b60e3] translate-y-[100%] h-[100%]`}
              >
                <ul>
                  <h1 className="text-xl mb-6 font-semibold text-center">
                    {cards.overlay.title}
                  </h1>
                  {cards.overlay.list.map((items) => (
                    <>
                      <li className="flex items-center mb-4 gap-2 text-xl font-semibold">
                        <CiCircleCheck style={{ fontSize: "50px" }} />
                        <span>{items}</span>
                      </li>
                    </>
                  ))}
                </ul>
                <button
                  className={`w-[100%] py-4 border-2 text-xl mx-auto font-semibold border-white`}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BarAppointment
        color={"text-[#205372]"}
        weight={"font-medium"}
        size={"text-2xl"}
        content={
          'For duct and dryer cleaning services in Northern Virginia and Maryland, <a class="underline text-[#81a7ce]" href="/notfound">schedule an appointment</a> or call Atlantic Duct Cleaning at <a class="underline text-[#81a7ce] href="/notfound">(703) 435-4485!</a>'
        }
        background={"bg-[#6197b84d]"}
        padding={"py-4"}
      />
      <section>
        <img src="/assets/map-still-1.webp" className="w-full" alt="map" />
      </section>

      <section className="px-4 py-16">
        <h2 className="text-4xl text-primary font-semibold mb-16 text-center">
          Why Choose Us?
        </h2>
        <article className="flex gap-4 flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[70%]">
            <h1 className="text-3xl lg:text-5xl mb-12 text-primary font-semibold">
              The Atlantic Difference
            </h1>
            <p className="mb-4">
              With Atlantic Duct Cleaning, the cost of your air duct and dryer
              vent cleaning service is determined in advance—there’s no need to
              worry about unexpected add-ons after our technicians arrive at
              your residence or commercial property. We like to maintain an open
              relationship with our customers and will answer any and all of
              your questions about equipment, policies, and procedures so you
              can be confident that you are receiving the highest quality
              service.
            </p>
            <p>
              We employ professionally trained technicians that have helped
              Atlantic Duct Cleaning become an expert in the duct cleaning and
              dryer vent cleaning field. After successfully performing HVAC air
              duct cleaning on more than 160,000 systems in Northern Virginia
              and Maryland, Atlantic Duct Cleaning is:
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:self-end">
            <img src="/assets/pentagon.webp" alt="#" className="w-full" />
          </div>
        </article>
        <ul className="mt-16">
          <li className="flex gap-4 mb-5">
            <span>
              <FaCheckCircle size={30} className="text-secondary" />
            </span>
            <p className="text-xl">
              A proud member of NADCA (National Air Duct Cleaners Association)
              since 1995.
            </p>
          </li>
          <li className="flex gap-4">
            <span>
              <FaCheckCircle size={30} className="text-secondary" />
            </span>
            <p className="text-xl">
              An active member of IAQA (Indoor Air Quality Association).
            </p>
          </li>
        </ul>
      </section>

      <Brands
        src1={"/assets/nadca-nbg.webp"}
        src2={"/assets/BBB-logo.webp"}
        src3={
          "/assets/edit-home-advisor-logo-screened-and-approved-homeadvisor-logo.webp"
        }
        src4={"/assets/Aeroseal-Logo-color.png"}
        src5={"/assets/iaqa-logo.jpg"}
      />

      <section className="py-12 px-4">
        <h1 className="text-secondary text-4xl font-semibold mb-12">
          Work that's Awarded
        </h1>
        <p className="mb-8">
          Our technicians have received recognition for their high-quality work,
          including:
        </p>
        {listItems.map((items) => (
          <CheckList item={items} margin={"mb-4"} />
        ))}
        <p>
          We understand you may have questions when it comes to cleaning your
          ducts. At Atlantic Duct Cleaning, our{" "}
          <LinkWithUnderLine
            text={"residential air duct"}
            route={"/notfound"}
          />{" "}
          <LinkWithUnderLine text={"cleaning process"} route={"/notfound"} />{" "}
          was built with the intent of providing quality work while respecting
          your home.
        </p>
      </section>

      <Brands
        src1={"/assets/AngiesList_SSA_2020_200x165.png"}
        src2={"/assets/al-2019.webp"}
        src3={"/assets/PresidentsClub-wAeroseal.webp"}
        src4={"/assets/Angi-2021-Super-Service-Award.webp"}
      />
      <OurClients />
      <Bar
        title={"PAST PROJECTS"}
        pad={"py-12"}
        background={"bg-primary"}
        fontColor={"text-white"}
      />

      <section className="py-20 px-4 bg-[#e9f1f8]">
        <div className="flex gap-8 flex-wrap lg:flex-nowrap items-center justify-center">
          {dataThree.map((cards, index) => (
<<<<<<< HEAD
            <>
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  backgroundImage: `url(${cards.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: "cover",
                  minHeight: '45vh'
                }}
                className="card w-full object-cover min-h-[28vh] sm:w-[200px] md:min-h-[28vh] lg:w-[265px] lg:min-h-[28vh] relative cursor-pointer"
              >
                {/* Remove this */}
                {/* <div className="card-overlay min-h-[40vh] absolute bottom-0"></div> */}
                <div
                  className={`absolute w-full flex justify-between flex-col ${
                    slideStates[index]
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none"
                  } transition-all duration-500 opacity-0 text-white px-4 py-8 bg-[#003b60e3] translate-y-[100%] h-[100%]`}
                >
                  <ul>
                    <h1 className="text-xl mb-6 font-semibold text-center">
                      {cards.title}
                    </h1>
                  </ul>
                  <button
                    className={`w-[100%] py-4 border-2 text-xl mx-auto font-semibold border-white`}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
              <button className="w-[40%] border-4 text-lg md:hidden text-primary font-semibold border-primary mx-auto py-1" type="button">LEARN MORE</button>
            </>
          ))}
        </div>
        <div className="pt-16 text-center">
          <button className="text-xl w-[40%] py-4 text-white font-semibold bg-primary">VIEW MORE</button>
          {/* <LareBtn color={"primary"} fontColor={"white"} text={"VIEW MORE"} /> */}
=======
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                backgroundImage: `url(${cards.image})`,
                width: "100%",
                backgroundSize: "cover",
              }}
              className="card w-full object-cover min-h-[50vh] sm:w-[200px] md:min-h-[80vh] lg:w-[400px] lg:min-h-[50vh] relative cursor-pointer"
            >
              {/* Remove this */}
              {/* <div className="card-overlay min-h-[40vh] absolute bottom-0"></div> */}
              <div
                className={`absolute w-full flex justify-between flex-col ${
                  slideStates[index]
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none"
                } transition-all duration-500 opacity-0 text-white px-4 py-8 bg-[#003b60e3] translate-y-[100%] h-[100%]`}
              >
                <ul>
                  <h1 className="text-xl mb-6 font-semibold text-center">
                    {cards.title}
                  </h1>
                </ul>
                <button
                  className={`w-[100%] py-4 border-2 text-xl mx-auto font-semibold border-white`}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12 text-center">
          <LareBtn color={"primary"} fontColor={"white"} text={"VIEW MORE"} />
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-primary font-semibold mb-12 text-4xl text-center">
          Choose Atlantic Duct Cleaning for Your Air Duct Cleaning Services in
          Northern Virginia & Maryland
        </h2>
        <p className="mb-12 text-center">
          Atlantic Duct Cleaning offers specific appointment times, uses a safe
          (HEPA) and certified (NADCA) cleaning process, offers a 100%
          guaranteed service, and gives you the peace of mind in working with a
          trustworthy company that is licensed and bonded. With our expertly
          trained technicians and great customer service, Atlantic Duct Cleaning
          delivers on our promise of excellence. If you’re in the Northern
          Virginia and Maryland area,
          <LinkWithUnderLine
            text={"schedule an appointment"}
            route={"/notfound"}
          />{" "}
          or give us a call at{" "}
          <LinkWithUnderLine text={"(703) 435-4485"} route={"/notfound"} />!
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-28 items-center justify-center">
          <button className="border-4 hover:bg-primary hover:text-white transition-colors duration-500 border-primary  text-primary  px-4 py-2">
            <Link to="/" className="font-semibold bug text-2xl">
              RECEIVE ESTIMATE
            </Link>
          </button>
          <button className="border-4 bug bg-secondary hover:shadow-2xl transition-shadow duration-500 border-secondary text-xl text-white  px-4 py-2">
            <Link to="/" className="font-semibold bug text-2xl">
              SCEDHULE NOW
            </Link>
          </button>
        </div>

        <div className="pt-36 mb-6">
          <ul className="mb-6">
            <h1 className="text-primary font-bold text-3xl mb-6">
              Residential Services
            </h1>
            <li className="text-2xl mb-2 list-disc ms-[1.7em]">
              Air Duct Cleaning
            </li>
            <li className="text-2xl mb-2 list-disc ms-[1.7em]">
              Dryer Vent Cleaning
            </li>
            <li className="text-2xl mb-2 list-disc ms-[1.7em]">
              Aeroseal Duct Sealing
            </li>
          </ul>
          <ul>
            <h1 className="text-primary font-bold text-3xl mb-6">
              Commercial Services
            </h1>
            <li className="text-2xl mb-2 list-disc ms-[1.7em]">
              Air Duct Cleaning
            </li>
            <li className="text-2xl mb-2 list-disc ms-[1.7em]">
              Dryer Vent Cleaning
            </li>
            <li className="text-2xl mb-2 list-disc ms-[1.7em]">
              Aeroseal Duct Sealing
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-secondary mb-12">
            The Benefits of NADCA Certification
          </h1>
          <p className="mb-4">
            NADCA (National Air Duct Cleaners Association) certification offers
            numerous benefits for both consumers and professional duct cleaning
            companies. Here are some of the key advantages of NADCA
            certification:
          </p>
          <p className="mb-4">
            <span className="font-bold">Expertise and Knowledge</span>:
            &nbsp;NADCA-certified professionals undergo rigorous training and
            education to gain in-depth knowledge about the latest techniques,
            standards, and best practices in the industry. They are equipped
            with the necessary skills and expertise to provide high-quality duct
            cleaning services.
          </p>
          <p className="mb-4">
            <span className="font-bold">Adherence to Industry Standards</span>:
            &nbsp;NADCA certification ensures that duct cleaning companies
            follow the highest industry standards and guidelines. Certified
            professionals are committed to delivering services that meet or
            exceed NADCA's stringent standards, ensuring a thorough and
            effective cleaning process.
          </p>
          <p className="mb-4">
            <span className="font-bold">Improved Indoor Air Quality</span>:
            &nbsp;NADCA-certified professionals understand the impact of clean
            air ducts on indoor air quality. By adhering to NADCA's guidelines,
            they can effectively remove contaminants such as dust, mold,
            allergens, and other pollutants from the ductwork. This helps to
            improve the overall indoor air quality, creating a healthier and
            more comfortable living or working environment.
          </p>
          <p className="mb-4">
            <span className="font-bold">Enhanced Equipment and Techniques</span>
            : &nbsp;NADCA certification encourages professionals to utilize
            advanced equipment, tools, and cleaning techniques. Certified
            technicians are trained on the proper use of specialized equipment
            to ensure efficient and effective duct cleaning. By staying updated
            on the latest technologies, NADCA-certified companies can provide
            superior cleaning results.
          </p>
          <p className="mb-4">
            <span className="font-bold">Professionalism and Integrity</span>:
            &nbsp;NADCA certification reflects a commitment to professionalism
            and integrity in the duct cleaning industry. Certified companies
            adhere to a strict code of ethics, ensuring transparency, honesty,
            and fair business practices. Customers can trust that they are
            working with a reputable company that prioritizes customer
            satisfaction and operates with integrity.
          </p>
          <p className="mb-4">
            <span className="font-bold">
              Comprehensive Assessment and Cleaning
            </span>
            : &nbsp;NADCA-certified professionals conduct a thorough assessment
            of the entire HVAC system, including the ductwork, registers, coils,
            and other components. This comprehensive approach allows them to
            identify and address any issues or inefficiencies in the system,
            leading to improved performance and energy efficiency.
          </p>
          <p className="mb-4">
            <span className="font-bold">
              Compliance with Insurance and Building Codes
            </span>
            : &nbsp;NADCA certification demonstrates a commitment to compliance
            with insurance requirements and building codes. Certified
            professionals are knowledgeable about industry regulations and
            guidelines, ensuring that their work meets or exceeds these
            standards. This can be particularly important for commercial
            properties that require compliance with specific codes and
            regulations.
          </p>
          <p>
            When you choose a NADCA-certified duct cleaning company, like
            Atlantic Duct Cleaning, you are working with professionals who are
            dedicated to excellence, continuous education, and the highest
            standards in the industry. NADCA certification ensures the best
            possible results for your indoor air quality and overall system
            performance.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
