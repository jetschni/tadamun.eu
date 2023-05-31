import React from "react";

function CTA() {
  return (
    <section className="relative py-34 overflow-hidden">
      <img
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="assets/suncealand-assets/background/happy-young-woman-standing-arms.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-xs md:max-w-md lg:max-w-lg">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold mb-10">
            Ready to grow your business?
          </h2>
          <p className="text-2xl mb-14">Contact us for an first conversation</p>
          <a
            className="group relative inline-block h-16 w-full sm:w-48 bg-blueGray-900 rounded"
            href="https://airtable.com/shrqjgLGRmGLwPj2m"
          >
            <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div className="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
                <span className="text-base font-semibold uppercase">
                  START HIRING NOW
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
