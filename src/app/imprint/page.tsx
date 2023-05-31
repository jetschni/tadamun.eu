import Footer from "@/components/Landing/Footer";
import Nav from "@/components/Landing/Nav";
import React from "react";

function Legal() {
  return (
    <>
      <Nav />
      <section className="pt-14 bg-white text-black">
        <div className="container px-4 py-20 mx-auto">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-5">Imprint</h1>

            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="mb-3">
              Tadamun (&apos;We&apos;, &quot;Us&quot;, &quot;Our&quot;) values
              and respects the privacy of its users (&quot;User&quot;,
              &quot;You&quot;, &quot;Your&quot;). This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Legal;
