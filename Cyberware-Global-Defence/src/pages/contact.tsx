import { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage: NextPage = () => {
  useEffect(() => {
    document.body.classList.add("bg-color");

    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <p className="text-center text-light fw-medium fs-3 my-5">
            Your Cybersecurity Experts - Securing the Future Today
          </p>
          <div className="d-flex">
            <div className="col">
              <h1 className="primary-color fw-bolder">Contact Us.</h1>
              <p className="text-light fw-bold fs-3 my-3">
                We are here to help you secure your future
              </p>
              <div className="my-5 text-light">
                <p>Email: info@cyberg.com</p>
                <p>Phone: +49 123 456 789</p>
                <p>Address: Street, Berlin, Germany</p>
              </div>
              <h3 className="text-light fw-bold my-5">What happens next?</h3>
              <div className="d-flex flex-column gap-4 position-relative">
                <div className="d-flex">
                  <div className="step-circle bg-orange text-light d-flex align-items-center justify-content-center">
                    1
                  </div>
                  <p className="ms-3 text-light">
                    We’ll review your cybersecurity needs.
                  </p>
                </div>
                <div className="d-flex">
                  <div className="step-circle bg-orange text-light d-flex align-items-center justify-content-center">
                    2
                  </div>
                  <p className="ms-3 text-light">
                    You’ll receive a customized security proposal.
                  </p>
                </div>
                <div className="d-flex align-items-start position-relative">
                  <div className="step-circle bg-orange text-light d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <p className="ms-3 text-light">
                    Once approved, we’ll implement the solutions and support
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <form className="needs-validation" method="post">
                <div className="row g-3">

                    <div className="col-12 my-3">
                    <label htmlFor="fullname" className="form-label primary-color">Full Name</label>
                    <input type="text" className="form-control input-custom-contact text-white border-0" id="email" placeholder="Your email address"
                    />
                    <div className="invalid-feedback">Your email address</div>
                  </div>
                  
                  <div className="col-12 my-3">
                    <label htmlFor="email" className="form-label primary-color">Email</label>
                    <input type="email" className="form-control input-custom-contact text-white border-0" id="email" placeholder="Your email address"
                    />
                    <div className="invalid-feedback">Your email address</div>
                  </div>

                  <div className="col-12 my-3">
                    <label htmlFor="telephone" className="form-label primary-color">Telephone number</label>
                    <input type="tel" className="form-control input-custom-contact text-white border-0" id="address" placeholder="Your phone number" required />
                    <div className="invalid-feedback"> Please enter your address. </div>
                  </div>

                    <div className="col-12 my-3">
                        <label htmlFor="state" className="form-label primary-color">Select your country
                        </label>
                        <select className="form-select text-white Select your country dropdown-toggle input-custom-contact border-0" required>
                        <option>Your Country</option>
                        <option>North Macedonia</option>
                        <option>Germany</option>
                        <option>England</option>
                        </select>
                        <div className="invalid-feedback">
                        Please provide a valid state.
                        </div>
                  </div>

                  <div className="col-12 my-3">
                    <label htmlFor="send-us-a-message" className="form-label primary-color">
                        Send us a Message
                    </label>
                    <textarea 
                        className="form-control input-custom-contact border-0" 
                        id="send-us-a-message" 
                        rows="10"
                    ></textarea>
                </div>
                </div>
                <button
                  className="w-100 btn custom-btn btn-lg my-5"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
