import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-[3rem] sm:py-[3rem] px-4 sm:px-10 md:px-0 bg-primary">
        <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-4xl raleway text-center">
        CONTACT US
        </h1>
      </div>
      <section className="px-4 py-16">
        <form className="px-6 py-10 bg-secondary shadow-lg w-full">
          <div className="mb-6 flex gap-5">
            <div className="w-full">
              <label className="text-2xl font-semibold text-white">
                First Name <span className="text-red-950"> *</span>
              </label>
              <input type="text" className="rounded-sm w-full mt-4 py-3" />
            </div>
            <div className="w-full">
              <div>
                <label className="text-2xl font-semibold text-white">
                  Email<span className="text-red-950"> *</span>
                </label>
                <input type="text" className="rounded-sm w-full mt-4 py-3" />
              </div>
            </div>
          </div>

          <div className="mb-6 flex gap-5">
            <div className="w-full">
              <label className="text-2xl font-semibold text-white">
                Email <span className="text-red-950">*</span>
              </label>
              <input type="text" className="rounded-sm w-full mt-4 py-3" />
            </div>
            <div className="w-full">
              <div>
                <label className="text-2xl font-semibold text-white">
                  Confirm Email<span className="text-red-950">*</span>
                </label>
                <input type="text" className="rounded-sm w-full mt-4 py-3" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="text-2xl font-semibold text-white">
              Phone Number <span className="text-red-950">*</span>
            </label>
            <input type="text" className="rounded-sm w-full mt-4 py-3" />
          </div>
          <div className="mb-6">
            <label className="text-2xl font-semibold text-white">
              Comments & Questions <span className="text-red-950"> *</span>
            </label>
            <textarea cols={10} rows={10} className="w-full mt-4"></textarea>
          </div>

          <button
            className="bg-primary block text-center mx-auto py-3 px-4 text-xl text-white font-semibold w-20%"
            type="button"
          >
            SEND MESSAGE
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
