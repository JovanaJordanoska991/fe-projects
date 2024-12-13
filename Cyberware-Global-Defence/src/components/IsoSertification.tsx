import React from "react";

const IsoSertification: React.FC = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-center g-5 mx-custom">
        {/* Left Column: Image */}
        <div className="col text-center text-md-start">
          <img
            src="/assets/iso sertification/iso-logo.svg"
            alt="ISO Logo"
            className="img-fluid w-75 w-md-50"
          />
        </div>

        {/* Right Column: Text and future links */}
        <div className="col">
          <h2 className="primary-color my-3 fw-bold text-center text-md-start">
            ISO Certification
          </h2>
          <p className="text-black fw-bold text-center text-md-start">
            At{" "}
            <span className="primary-color fw-bold">
              CYBERWARE Global Defense
            </span>
            , we are proud to be ISO certified, demonstrating our commitment to
            the highest standards of cybersecurity. Our certification reflects
            our dedication to protecting your data and ensuring robust security
            practices across all operations. Trust us to safeguard your digital
            assets with proven excellence.
          </p>
          {/* Future Links */}
          <div className="d-flex flex-column flex-md-row flex-wrap mt-4 align-items-center gap-3">
            <a
              href="#"
              className="custom-border py-3 px-2 d-inline-flex align-items-center fw-bold text-center text-md-start"
            >
              ISO/IEC 27000 — Information security management systems
              <img
                src="/assets/iso sertification/left-arrow.svg"
                alt="left arrow icon"
                className="ms-2"
              />
            </a>
            <a
              href="#"
              className="py-3 px-2 d-inline-flex align-items-center fw-bold text-center text-md-start"
            >
              ISO/IEC 27001 — Information technology – Security Techniques –
              Information security management
              <img
                src="/assets/iso sertification/left-arrow.svg"
                alt="left arrow icon"
                className="ms-2"
              />
            </a>
            <a
              href="#"
              className="custom-border py-3 px-2 d-inline-flex align-items-center fw-bold mb-4 text-center text-md-start"
            >
              ISO/IEC 27002 — Code of practice for information security
              controls
              <img
                src="/assets/iso sertification/left-arrow.svg"
                alt="left arrow icon"
                className="ms-2"
              />
            </a>

            {/* Add a separate container with justify-content-end for alignment */}
            <div className="d-flex justify-content-center justify-content-md-end w-100">
              <a href="#" className="btn custom-btn">
                See All Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsoSertification;
