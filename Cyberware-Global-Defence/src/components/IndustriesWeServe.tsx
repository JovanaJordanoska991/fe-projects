import React, { useState, useEffect } from 'react';

const IndustriesWeServe: React.FC = () => {
 
  return ( 
<div className="container-fluid px-3 py-4">
  <div className="container mx-custom">
    <div className="row align-items-center justify-content-center text-center text-md-start mt-4 mx-custom">
      <h3 className="primary-color my-3 fw-bold text-center h2">Industries We Serve</h3>
      <p className="fw-bold text-center mb-5">
        Protecting Critical Industries with Cutting-Edge Cybersecurity Solutions
      </p>
      <div className="col-12">
        <div className="industry-link d-flex align-items-center overflow-auto">
          {/* Horizontal Line Before First Item */}
          <div className="line mx-2"></div>

          {/* Industry Item 1 */}
          <a
            href="#"
            className="industry-link-item text-center d-flex flex-column align-items-center"
          >
            <img
              src="/assets/industries we serve/finance.svg"
              className="mb-3 img-width-50"
              alt="finance icon"
            />
            <p className="fw-bold text-center">Finance</p>
          </a>

          {/* Horizontal Line */}
          <div className="line mx-2"></div>

          {/* Industry Item 2 */}
          <a
            href="#"
            className="industry-link-item text-center d-flex flex-column align-items-center"
          >
            <img
              src="/assets/industries we serve/healthcare.svg"
              className="mb-3 img-width-50"
              alt="healthcare icon"
            />
            <p className="fw-bold text-center">Healthcare</p>
          </a>

          {/* Horizontal Line */}
          <div className="line mx-2"></div>

          {/* Industry Item 3 */}
          <a
            href="#"
            className="industry-link-item text-center d-flex flex-column align-items-center"
          >
            <img
              src="/assets/industries we serve/government.svg"
              className="mb-3 img-width-50"
              alt="government icon"
            />
            <p className="fw-bold text-center">Government</p>
          </a>

          {/* Horizontal Line */}
          <div className="line mx-2"></div>

          {/* Industry Item 4 */}
          <a
            href="#"
            className="industry-link-item text-center d-flex flex-column align-items-center"
          >
            <img
              src="/assets/industries we serve/retail.svg"
              className="mb-3 img-width-50"
              alt="retail icon"
            />
            <p className="fw-bold text-center">Retail</p>
          </a>

          {/* Horizontal Line */}
          <div className="line mx-2"></div>

          {/* Industry Item 5 */}
          <a
            href="#"
            className="industry-link-item text-center d-flex flex-column align-items-center"
          >
            <img
              src="/assets/industries we serve/egame.svg"
              className="mb-3 img-width-50"
              alt="egame icon"
            />
            <p className="fw-bold text-center">eGame</p>
          </a>

          {/* Horizontal Line */}
          <div className="line mx-2"></div>

          {/* Industry Item 6 */}
          <a
            href="#"
            className="industry-link-item text-center d-flex flex-column align-items-center"
          >
            <img
              src="/assets/industries we serve/education.svg"
              className="mb-3 img-width-50"
              alt="education icon"
            />
            <p className="fw-bold text-center">Education</p>
          </a>

          {/* Horizontal Line After Last Item */}
          <div className="line mx-2"></div>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="btn custom-btn">See More</a>
      </div>
    </div>
  </div>
</div>

  );
};

export default IndustriesWeServe;