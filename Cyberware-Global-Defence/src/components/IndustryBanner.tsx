import React from "react";

const IndustryBanner: React.FC = () => {
  return (
    <div className="container-fluid hero-banner-industry py-5 text-center text-white">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="display-4">
          Industries We <span className="primary-color">Protect</span>
        </h1>
        <p className="fw-bold w-100 w-md-75">
          We continuously enhance our services to adapt to the ever-changing
          cyber landscape. Our commitment is to provide top-tier solutions to
          protect your data and operations, regardless of your industry.
        </p>
      </div>
    </div>
  );
};

export default IndustryBanner;
