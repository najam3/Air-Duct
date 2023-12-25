import React from "react";
import SecondaryBanner from "../../components/SecondaryBanner";
import { Link } from "react-router-dom";
import VideoSection from "../../components/VideoSection";
import Bar from "../../components/Bar";
import OurClients from "../../components/OurClients";
import FAQ from "../../components/FAQ";


let FAQs = [
    {
      title: "How does Aeroseal duct sealing differ from traditional duct sealing methods?",
      content: "Unlike traditional duct sealing methods that often require extensive manual labor or access to hard-to-reach areas, Aeroseal duct sealing is a convenient and non-invasive alternative. It utilizes aerosol particles that are carried by the airflow and distributed throughout the ductwork, sealing leaks from within. This method saves time, covers gaps more effectively, and ensures optimal sealing results."
    },
    {
      title: "How long does the Aeroseal duct sealing process take?", 
      content: "The duration of the Aeroseal duct sealing process can vary depending on the size and complexity of the duct system. However, in most cases, it can be completed within a few hours. The process typically includes preparation, cleaning, sealing, monitoring, verification, and a final inspection to ensure all leaks are properly sealed."
    },
    {
      title: "Is Aeroseal duct sealing safe for my home and family?",
      content: "Yes, Aeroseal duct sealing is safe for your home and family. The sealant used in the process is non-toxic and has been tested and verified to comply with safety standards. The particles are carried by the airflow within the ductwork and do not pose any health risks when properly applied by trained technicians."
    }, 
    {
      title: "What are the benefits of Aeroseal duct sealing?",
      content: "Aeroseal duct sealing offers numerous benefits, including increased energy savings by reducing air leakage, improved indoor air quality by preventing the entry of contaminants and allergens, enhanced comfort with more consistent room temperatures, minimized musty odors and excessive dust, and prolonged HVAC system lifespan by reducing strain and wear. It is a cost-efficient solution that helps you save money on energy bills while enjoying a healthier and more comfortable living environment."
    }
]

const Aeroseal = () => {
  return (
    <>
      <SecondaryBanner
        title={"RRESIDENTIAL AEROSEAL DUCT SEALING IN NORTHERN VIRGINIA"}
        subtitle={"Indoor Air Quality Solutions"}
        content={
          "Although your home’s air duct system isn’t apparent to the naked eye, it shouldn’t be one of those things that is out of sight, out of mind. If your home’s ducts are poorly sealed or not sealed at all, they are allowing conditioned air to leave your home and are bringing in outside air, wasting your energy and money! Insulating and sealing the ducts in your attic, basement, and crawl space is a cost-efficient, effective way to keep more money in your pocket instead of losing it to your energy bills."
        }
        secondContent={`Founded in 1995, <a class="text-[#81a7ce] hover:text-secondary">Atlantic Duct Cleaning</a> is a trusted industry leader in providing professional indoor air quality solutions for homes throughout the Northern Virginia area. Our trained technicians can improve your leaky air ducts with Aeroseal duct sealing! Its more effective than traditional air duct sealing because it saves time and covers the gaps more effectively!`}
        flex={"block"}
        height={"lg:min-h-0 min-h-[100vh]"}
        padding={"pt-12 lg:py-20"}
        img={"/assets/aeroseal-two.jpg"}
      />
      <section className="bg-primary px-4 py-12">
        <div className="text-center">
          <p className="text-white">
            Tired of paying high energy bills? Schedule service online with
            Atlantic Duct Cleaning! Our NADCA-certified technicians will help
            you decide if Aeroseal duct sealing is the right choice for your
            Northern Virginia home!
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <h1 className="text-4xl font-semibold text-secondary mb-12">
          Problems with Leaky Ductwork
        </h1>

        <p className="mb-4">
          Leaky ductwork can account for up to{" "}
          <Link
            to={"/pageNotFound"}
            className="hover:text-secondary text-[#81a7ce]"
          >
            40 percent of total heating and cooling costs
          </Link>
          . For an average home, leaky ducts can waste hundreds of dollars each
          year. Without proper air duct maintenance, you’re putting your family
          and your Northern Virginia home at risk for the following issues:
        </p>
        <ul className="text-2xl  text-black font-medium ms-12">
          <li className="list-disc mb-2">
            <span className="font-bold">Uneven heating</span>.&nbsp;When
            conditioned air is lost through holes in your ductwork, it makes it
            much more difficult for a room to reach and even stay at your ideal
            temperature.
          </li>
          <li className="list-disc mb-2">
            <span className="font-bold">Increased costs</span>.&nbsp;If your
            ductwork is leaking, you are allowing the conditioned air to leak
            out AND allowing unconditioned air to come in. This forces your
            heating or cooling system to exert unnecessary energy to constantly
            bring your home back to a comfortable temperature.
          </li>
          <li className="list-disc mb-2">
            <span className="font-bold">Increased humidity</span>.&nbsp;When an
            air duct leaks in your home’s attic or crawl space, it pulls in
            humid, dirty air. This promotes mold growth, which causes problems
            with allergies and asthma for you and your family!
          </li>
          <li className="list-disc mb-6 font-medium">
            <span className="font-bold">Excess energy use</span>.&nbsp;Leaky
            ductwork forces your HVAC system to work harder and wear out
            sooner—costing you yet more money! Reduce future costly repairs by
            properly sealing your home’s ducts today!
          </li>
        </ul>
        <p>
          Sometimes leaky air ducts are a simple fix, but if you’re unable to
          fix it yourself,{" "}
          <Link className="hover:text-secondary text-[#81a7ce]">
            get an estimate online
          </Link>{" "}
          from Atlantic Duct Cleaning, give us a call at{" "}
          <Link className="hover:text-secondary text-[#81a7ce]">
            (571) 462-2016
          </Link>
          , or check out our{" "}
          <Link className="hover:text-secondary text-[#81a7ce]">FAQ!</Link>
        </p>
      </section>

      <section className="py-8 px-4">
        <h1 className="text-center text-4xl font-semibold mb-12 text-secondary">
          The Aeroseal Process
        </h1>
        <iframe
          width="100%"
          height="715"
          src="https://www.youtube.com/embed/HrMa3QHCOBg"
          title="HVAC Duct Sealing Process Animation | Overview of Air Sealing Ductwork | Aeroseal"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </section>

      <Bar title={"Benefits of Residential Aeroseal Duct Sealing"} />

      <section className="py-16 px-4 bg-neutral200">
        <p className="mb-4">
          In homes throughout the Northern Virginia area, we often find that
          unclean air and contaminants from the crawl space, attic, and other
          places can actually be pulled into the air you and your family
          breathe! If your family is suffering from allergies caused by poor air
          quality or your home’s temperature is constantly uncomfortable,
          Aeroseal duct sealing will help:
        </p>
        <ul className="text-2xl  text-black font-medium ms-12">
          <li className="list-disc mb-2">
            <Link className="hover:text-secondary text-[#81a7ce] underline">
              Increase energy savings
            </Link>
          </li>
          <li className="list-disc mb-2">Improve air quality</li>
          <li className="list-disc mb-2">
            Minimize musty odors and excessive dust
          </li>
          <li className="list-disc mb-6 font-medium">
            Limit air contamination
          </li>
        </ul>
        <p className="mb-10">
          There are{" "}
          <Link className="hover:text-secondary text-[#81a7ce]">
            many advantages
          </Link>{" "}
          to hiring a professional to seal the ductwork in your home. If you’re
          ready to improve your home’s comfort and air quality,{" "}
          <Link className="hover:text-secondary text-[#81a7ce]">
            schedule service online
          </Link>{" "}
          today!
        </p>
        {/* Same Sec again */}
        <h1 className="text-4xl font-semibold text-secondary mb-6">
          The Aeroseal Duct Sealing Process
        </h1>

        <p className="mb-6">
          Aeroseal Duct Sealing is a highly effective method for sealing leaks
          in air duct systems, improving energy efficiency, and enhancing indoor
          air quality. It offers a convenient and non-invasive alternative to
          traditional duct sealing methods that require extensive manual labor
          or access to hard-to-reach areas. Here's how it is typically
          performed:
        </p>
        <ul className="text-2xl  text-black font-medium ms-12">
          <li className="list-disc mb-2">
            <span className="font-bold">Preparation</span>:&nbsp;Before the
            sealing process begins, the HVAC system is thoroughly inspected to
            identify any leaks or gaps in the ductwork. This may involve
            accessing the ducts through access points or registers.
          </li>
          <li className="list-disc mb-2">
            <span className="font-bold">Increased costs</span>.&nbsp;If your
            ductwork is leaking, you are allowing the conditioned air to leak
            out AND allowing unconditioned air to come in. This forces your
            heating or cooling system to exert unnecessary energy to constantly
            bring your home back to a comfortable temperature.
          </li>
          <li className="list-disc mb-2">
            <span className="font-bold">Cleaning</span>:&nbsp;To ensure optimal
            adhesion and sealing, the ducts are cleaned to remove any dust,
            debris, or contaminants that may interfere with the process. This
            step helps to improve the longevity and effectiveness of the seal.
          </li>
          <li className="list-disc mb-6 font-medium">
            <span className="font-bold">Sealing Process</span>:&nbsp;A licensed
            technician introduces small aerosol particles made up of adhesive
            polymers and sealant material into the duct system. These particles
            are released from a device that is connected to the ductwork. The
            aerosol particles are carried by the airflow and adhere to the edges
            of the leaks and gaps in the ducts.
          </li>
          <li className="list-disc mb-6 font-medium">
            <span className="font-bold">Sealant Distribution</span>:&nbsp;As the
            aerosol particles flow through the ductwork, the pressure within the
            ducts causes them to accumulate and build up around the edges of the
            leaks. This process continues until the leaks are effectively
            sealed.
          </li>
          <li className="list-disc mb-6 font-medium">
            <span className="font-bold">Monitoring and Verification</span>
            :&nbsp;During the sealing process, specialized equipment, such as
            pressure sensors and computer software, is used to monitor the
            progress and effectiveness of the seal. This helps ensure that the
            desired level of sealing is achieved.
          </li>
          <li className="list-disc mb-6 font-medium">
            <span className="font-bold">Post-Sealing Inspection</span>
            :&nbsp; Once the sealing process is completed, a final inspection is
            conducted to ensure that all leaks have been properly sealed. This
            may involve using diagnostic tools, such as thermal imaging cameras
            or airflow meters, to detect any remaining leaks.
          </li>
        </ul>
      </section>

      <Bar background={"bg-primary"} pad={"py-12"} />

      <OurClients />

      <section className="py-16 bg-neutral200 px-4">
        <h1 className="text-4xl text-center font-semibold text-primary mb-12">
          Improve Air Quality and Reduce Costs
        </h1>
        <article className="flex flex-col lg:flex-row gap-8">
          <div className="text-center w-full lg:w-[70%]">
            <p className="mb-4">
              Atlantic Duct Cleaning offers high-quality air purification and
              duct sealing throughout Northern Virginia & Maryland. By utilizing
              high-quality equipment and promoting the highest levels of
              training and quality standards, we have completed over 160,000
              successful projects! Your family deserves to relax in a
              comfortable home, and Atlantic Duct Cleaning can make that happen!
            </p>
            <p className="text-center">
              If you’re in the{" "}
              <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">
                Northern Virginia
              </Link>
             {" "} and {" "}
              <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">
                Maryland {"  "}
              </Link>
              area and are interested in residential Aeroseal duct sealing,{" "}
              <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">
                schedule service online
              </Link>{" "}
              or give us a call at{" "}
              <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">
                (571) 462-2016
              </Link>
              ! In addition to Aeroseal duct sealing, our other{" "}
              <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">
                residential services
              </Link>{" "}
              include{" "}
              <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">
                air duct cleaning
              </Link>{" "}
              and <Link to={'/pageNotFound'} className="hover:text-secondary text-[#81a7ce]">dryer vent cleaning</Link>.
            </p>
          </div>
          <div className="w-full lg:w-[30%]">
            <img
              alt="#"
              className="h-full object-cover"
              src="/assets/aeroseal.jpg"
            />
          </div>
        </article>
      </section>

      <section className="py-10 px-4">
      <div>
        <h1 className="text-4xl font-bold text-secondary mb-12">
          Frequently Asked Questions
        </h1>
       {
                    FAQs.map((faq, index) => (
                        <FAQ content={faq.content} key={index} title={faq.title} />
                    ))
       }
        </div>
    </section>
    </>
  );
};

export default Aeroseal;
