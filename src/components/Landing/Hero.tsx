import React from "react";

function Hero() {
  return (
    <section className="relative bg-yellowGray-50 overflow-hidden">
      <nav className="relative z-10 bg-white">
        <div className="flex py-6 px-4 md:px-14 items-center">
          <a className="inline-block text-2xl font-bold" href="#">
            Tadamun
          </a>
          <div className="flex items-center ml-auto">
            <a
              className="relative group inline-flex h-12 w-48 items-center justify-center font-semibold rounded-4xl overflow-hidden"
              href="mailto:jobs@tadamun.xyz"
              style={{ ["backgroundColor"]: "rgb(79, 206, 93)" }}
            >
              <span className="relative z-10 flex text-white group-hover:text-white transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  style={{ ["color"]: "#ffffff" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>{" "}
                Chat with us!
              </span>
              <div className="absolute top-0 left-0 h-full w-48 transform -translate-x-full group-hover:-translate-x-0 bg-black transition duration-500 ease-linear"></div>
            </a>
          </div>
        </div>
      </nav>
      <div className="relative pt-24">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center xl:justify-between -mx-4 mb-24">
            <div className="hidden md:block w-autopx-4"></div>
            <div className="w-auto px-4">
              <div className="max-w-2xl xl:max-w-3xl mx-auto text-center">
                <h1 className="text-4xl xs:text-6xl md:text-4xl font-heading mb-10">
                  Are you looking for a remote job in a great German 🇩🇪 or
                  European 🇪🇺 company?
                </h1>
                <p className="max-w-md mx-auto md:text-lg text-md mb-10">
                  We help individuals from Egypt to find part & full-time remote
                  jobs in Germany and Europe.
                </p>
                <a
                  className="group relative inline-block h-16 w-full sm:w-52 bg-blueGray-900 rounded"
                  href="#roles"
                >
                  <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <div className="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
                      <span className="text-base font-semibold uppercase">
                        Join our talent pool
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden md:block w-auto px-4 text-right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
