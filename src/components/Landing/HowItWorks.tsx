import React from "react";

function HowItWorks() {
  return (
    <section className="py-20 md:py-40 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center px-5 py-2 bg-white rounded-full mb-8">
            <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
            <span className="uppercase text-sm font-medium tracking-tight">
              HOW IT WORKS
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-heading font-semibold text-white mb-14">
            How does it work?
          </h1>
          <p className="text-2xl text-gray-300 mb-18">
            We will help you to lower your costs and grow your team in a matter
            of days, not weeks
          </p>
        </div>
        <div className="max-w-xs mx-auto md:max-w-none">
          <div className="flex flex-wrap justify-between items-center -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
              <div className="max-w-sm 2xl:max-w-none mx-auto pt-6 pb-14 px-8 xs:px-14 mb-10 bg-gray-900 rounded-4xl border border-gray-600">
                <span className="block mb-6 text-5xl font-heading text-gray-400">
                  01
                </span>
                <h4 className="max-w-xs text-3xl font-heading font-semibold text-white">
                  Share your requirements with us
                </h4>
              </div>
              <div className="max-w-sm 2xl:max-w-none mx-auto pt-6 pb-14 px-8 xs:px-14 bg-gray-900 rounded-4xl border border-gray-600">
                <span className="block mb-6 text-5xl font-heading text-gray-400">
                  02
                </span>
                <h4 className="max-w-xs text-3xl font-heading font-semibold text-white">
                  We source and vet candidates
                </h4>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
              <img
                className="px-6 2xl:px-0 mx-auto"
                src="assets/suncealand-assets/images/avatar-circle-woman-dark-bg.png"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="max-w-sm 2xl:max-w-none mx-auto pt-6 pb-14 px-8 xs:px-14 mb-10 bg-gray-900 rounded-4xl border border-gray-600">
                <span className="block mb-6 text-5xl font-heading text-gray-400">
                  03
                </span>
                <h4 className="max-w-xs text-3xl font-heading font-semibold text-white">
                  We shortlist 2-3 candidates for you
                </h4>
              </div>
              <div className="max-w-sm 2xl:max-w-none mx-auto pt-6 pb-14 px-8 xs:px-14 bg-gray-900 rounded-4xl border border-gray-600">
                <span className="block mb-6 text-5xl font-heading text-gray-400">
                  04
                </span>
                <h4 className="max-w-xs text-3xl font-heading font-semibold text-white">
                  We facilitate a seamless onboarding process
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
