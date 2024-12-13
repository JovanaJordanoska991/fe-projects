import React, { useState, useEffect } from 'react';

const WhoWeAre: React.FC = () => {
 
  return (
<div className="container-fluid px-3 py-4 bg-color">
  <div className="container text-center">
    <h2 className="primary-color text-center my-3 fw-bold">Who We Are</h2>
    <p className="text-white mx-auto pw-60 fw-bold">
      At Cyberware Global Defense (CGD), we are committed to protecting the digital future through innovative solutions that safeguard businesses from evolving cyber threats. Our expert team combines cutting-edge technology with a proactive approach to cybersecurity, ensuring that your organization remains secure, compliant, and resilient in the face of emerging challenges.
    </p>
    <div className="row mt-4 mx-custom">
      <div className="col-12 col-md-4 mb-3">
        <div className="custom-small-card d-flex align-items-center p-3">
          <img className="ps-3 me-3" src="/assets/who we are/handshake.svg" alt="handshake icon" />
          <div className="small-card-txt text-start">
            <p className="text-white mb-1 fw-bold">Trusted by over</p>
            <p className="primary-color fw-bold mb-0">1000+ Organizations</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <div className="custom-small-card d-flex align-items-center p-3">
          <img className="ps-3 me-3" src="/assets/who we are/public.svg" alt="world icon" />
          <div className="small-card-txt text-start">
            <p className="text-white mb-1 fw-bold">Across</p>
            <p className="primary-color fw-bold mb-0">50+ countries</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <div className="custom-small-card d-flex align-items-center p-3">
          <img className="ps-3 me-3" src="/assets/who we are/memory.svg" alt="memory icon" />
          <div className="small-card-txt text-start">
            <p className="text-white mb-1 fw-bold">Use 100% <span className="primary-color fw-bold">Innovative</span></p>
            <p className="primary-color fw-bold mb-0">Technology</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
  );
};

export default WhoWeAre;