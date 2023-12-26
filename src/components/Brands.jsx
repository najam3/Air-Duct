import React from "react";

export const note = ["/assets/nadca-nbg.webp", "/assets/BBB-logo.webp", "/assets/BBB-logo.webp", "/assets/edit-home-advisor-logo-screened-and-approved-homeadvisor-logo.webp", "/assets/Aeroseal-Logo-color.png", "/assets/iaqa-logo.jpg"]


const Brands = ({src1, src2, src3, src4, src5}) => {
  return (
    <section className="px-4 py-16 bg-neutral50">
        <h1 className="text-primary text-4xl font-semibold text-center">Affiliations</h1>
<<<<<<< HEAD
      <div className="flex-container flex-col lg:flex-row justify-center flex-wrap mt-10 gap-[5em] flex w-[95%] mx-auto items-center">
        <img src={src1} className="w-[220px] sm:w-[40%] md:w-[30%] xl:w-[10%]" alt="" />
        <img src={src2} className="w-[120px] sm:w-[30%] md:w-[20%] xl:w-[10%]" alt="" />
        <img src={src3} className="w-[220px] sm:w-[40%] md:w-[30%] xl:w-[10%]" alt="" />
        <img src={src4} className="w-[220px] sm:w-[40%] md:w-[30%] xl:w-[10%]" alt="" />
        <img src={src5} className="w-[120px] sm:w-[30%] md:w-[20%] xl:w-[10%]" alt="" />
=======
      <div className="flex-container flex-col lg:flex-row justify-around flex-wrap mt-10 gap-12 flex w-[95%] mx-auto items-center">
        <img src={src1} className="w-1/2 md:w-[20%] xl:w-[20%]" alt="" />
        <img src={src2} className="w-1/2 md:w-[15%] xl:w-[15%]" alt="" />
        <img src={src3} className="w-1/2 md:w-[20%] xl:w-[20%]" alt="" />
        <img src={src4} className="w-1/2 md:w-[20%] xl:w-[20%]" alt="" />
        <img src={src5} className="w-1/2 md:w-[20%] xl:w-[20%]" alt="" />
>>>>>>> 7a7ede2995d3b726cca7c6b5f01b01bf09b0010b
      </div>
    </section>
  );
};

export default Brands;
