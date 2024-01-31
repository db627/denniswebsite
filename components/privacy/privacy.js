import Head from "next/head";
import Bodynav from "../bodynav/bodynav";



export default function Privacybody() {
  const ids = [
    "Collected Information",
    "How We Use Information",
    "Google Analytics",
    "Data Retention",
    "Your Rights",
    "Changes",
  ];
  return (
    <>
      <Head>
        <script async src={``} className=""/>

      </Head>
      <div className="p-10 bg-zinc-800 " id="privacypage">
        <h1
          className="font-bold border-b text-white pt-20 text-6xl ml-10 "
          id="title"
        >
          Privacy Policy
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:">
          <nav
            className="w-full md:w-1/4 lg:w-1/4 sticky top-0 pt- rounded"
            id="toc_menu"
          >
            <div className="ml-10 mr-10 sticky top-0 text-white">
              <h3 className="justify-left mr-10 mt-5 font-bold">Navigation</h3>
              <Bodynav ids={ids} className="text-white"/>
            </div>
          </nav>

          <main className=" ml-10 text-white">
            <div className=" mb-3 mt-5 text-white">
              By{" "}
              <a href="#" className="text-white">
                Dennis Boguslavskiy
              </a>
              <span className="text-gray-500 ml-3">
                {" "}
                Last Updated: June 5, 2023
              </span>{" "}
              <span className="text-gray-500" id="readingTime">
                0
              </span>
            </div>
            <h1 className="text-5xl">Privacy Policy</h1>
            <section className="">
              <p>
                Dennis Boguslavskiy is committed to protecting your privacy.
                This Privacy Policy explains what information we collect from
                you when you visit our website, how we use it, and how we
                protect it. By using our website, you agree to the terms of this
                Privacy Policy.
              </p>
              <section id="Collected Information">
                <h2>Information we collect</h2>
                <p>
                  We may collect the following information from you when you
                  visit our website:
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    Personal information such as your name and email address, if
                    you choose to provide it to us.
                  </li>
                  <li>
                    Information about your use of the website, such as pages
                    visited, time spent on the site, and links clicked.
                  </li>
                  <li>
                    Information about your device, such as your IP address,
                    browser type, and operating system.
                  </li>
                </ul>
              </section>
              <section id="How We Use Information">
                <h2>How we use your information</h2>
                <p>
                  We use the information we collect from you for the following
                  purposes:
                </p>
                <ul className="list-disc ml-5">
                  <li>To improve our website and the user experience.</li>
                  <li>
                    To analyze user behavior and measure the effectiveness of
                    our content and marketing efforts.
                  </li>
                  <li>
                    To communicate with you about our products and services, if
                    you have provided us with your contact information.
                  </li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </section>
              <section id="Google Analytics">
                <h2>Google Analytics</h2>
                <p>
                  We use Google Analytics to collect information about your use
                  of our website. Google Analytics collects information such as
                  how often users visit the site, what pages they visit when
                  they do so, and what other sites they used prior to coming to
                  our website. We use the information we get from Google
                  Analytics to improve our website and the user experience.
                  Google Analytics collects only the IP address assigned to you
                  on the date you visit our website, rather than your name or
                  other identifying information. We do not combine the
                  information collected through the use of Google Analytics with
                  personally identifiable information. Google Analytics plants a
                  permanent cookie on your web browser to identify you as a
                  unique user the next time you visit our website. This cookie
                  cannot be used by anyone other than Google. Google’s ability
                  to use and share information collected by Google Analytics
                  about your visits to our website is restricted by the Google
                  Analytics Terms of Use and the Google Privacy Policy.
                </p>
              </section>
              <section id="Data Retention">
                <h2>Data retention and security</h2>
                <p>
                  We retain the information we collect for as long as necessary
                  to fulfill the purposes for which it was collected, unless a
                  longer retention period is required by law. We take reasonable
                  measures to protect the information we collect from loss,
                  theft, misuse, and unauthorized access, disclosure,
                  alteration, and destruction.
                </p>
              </section>
              <section id="Your Rights">
                <h2>Your rights</h2>
                <p>
                  You have the right to access, correct, and delete your
                  personal information. You also have the right to object to the
                  processing of your personal information and to withdraw your
                  consent to the processing of your personal information. To
                  exercise these rights, please contact us at [contact email
                  address].
                </p>
              </section>
              <section id="Changes">
                <h2>Changes to this Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page. We recommend that you review this Privacy Policy
                  periodically for any changes.
                </p>
                <h2>Contact us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at our <a href="/#contact" className="font-bold" >Contact Form!</a>
                </p>
              </section>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
