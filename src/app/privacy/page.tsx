import Footer from "@/components/Landing/Footer";
import Nav from "@/components/Landing/Nav";
import React from "react";

function Privacy() {
  return (
    <>
      <Nav />
      <section className="pt-14 bg-white text-black">
        <div className="container px-4 py-20 mx-auto">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-5">Privacy Notice</h1>

            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="mb-3">
              Tadamun (&apos;We&apos;, &quot;Us&quot;, &quot;Our&quot;) values
              and respects the privacy of its users (&quot;User&quot;,
              &quot;You&quot;, &quot;Your&quot;). This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website.
            </p>

            <h2 className="text-2xl font-bold mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect personal identification information such as names,
              email addresses, and telephone numbers when users fill out a form
              on our site.
            </p>

            <h2 className="text-2xl font-bold mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect to provide, maintain, and
              improve our services, as well as to communicate with you about
              opportunities that may be of interest.
            </p>

            <h2 className="text-2xl font-bold mb-3">
              4. How We Share Your Information
            </h2>
            <p className="mb-3">
              We do not sell or rent personal identification information to
              others. We may share generic aggregated demographic information
              not linked to any personal identification information regarding
              visitors and users with our business partners and trusted
              affiliates for the purposes outlined above.
            </p>

            <h2 className="text-2xl font-bold mb-3">
              5. How We Protect Your Information
            </h2>
            <p className="mb-3">
              We adopt appropriate data collection, storage, and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure or destruction of your personal
              information.
            </p>

            <h2 className="text-2xl font-bold mb-3">6. Your Rights</h2>
            <p className="mb-3">
              You have the right to access, correct, or delete your personal
              data. You can exercise these rights by contacting us at [privacy
              at tadamun.eu].
            </p>

            <h2 className="text-2xl font-bold mb-3">
              7. Changes To This Privacy Policy
            </h2>
            <p className="mb-3">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>

            <h2 className="text-2xl font-bold mb-3">8. Analytics</h2>
            <p className="mb-3">
              We use Vercel for analytics to help us understand how our users
              interact with the site. This data is used to improve the
              functionality and user experience of the site. Vercel may collect
              information about your device and browsing behavior such as
              browser type, operating system, referral URLs, device information,
              pages visited, links clicked, user interactions, and date and time
              of activities. For more information, please review Vercels privacy
              policy.
            </p>

            <h2 className="text-2xl font-bold mb-3">9. Contacting Us</h2>
            <p className="mb-3">
              If you have any questions about this Privacy Policy, please
              contact us at [privacy at tadamun.eu].
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Privacy;
