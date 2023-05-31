import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section>
      <div className="pb-8 pt-6 bg-yellowGray-500">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <h1 className="text-4xl font-heading font-semibold">
                We are Tadamun. <br />
                In unity together.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-6 bg-white">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-wrap -mx-4 items-center justify-between">
            <div className="w-full sm:w-auto px-4 mb-8 sm:mb-0 text-center">
              <Link
                className="inline-block mr-8 text-xs text-black"
                href="/privacy"
              >
                Privacy Notice
              </Link>
            </div>
            <div className="mt-3 lg:mt-0 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
              <span className="block text-2xs text-gray-100">
                © 2023 Tadamun
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
