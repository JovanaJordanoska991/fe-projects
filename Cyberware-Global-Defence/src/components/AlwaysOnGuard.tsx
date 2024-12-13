import React, { useState, useEffect } from 'react';

const AlwaysOnGuard: React.FC = () => {
 
  return (
<div className="container-fluid px-3 py-4">
  <div className="container mx-custom">
    <div className="row align-items-center justify-content-center text-center text-md-start mt-4 mx-custom">
      <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center">
        <h3 className="primary-color my-3 fw-bold h2 pw-70">
          "Always On Guard: Your 24/7 Online Security Solution for Unmatched Protection"
        </h3>
        <div className="d-flex justify-content-center justify-content-md-start gap-3">
          <a href="#" className="btn custom-btn-secondary">Explore our Services</a>
          <a href="#" className="btn custom-btn">Book a Demo</a>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center mt-3 mt-md-0">
        <img className="h-50 bb-8" style={{ maxHeight: '300px', width: '100%', position: 'relative' }} src="/assets/always on guard/security.gif" alt="security icon" />
      </div>
    </div>
  </div>
</div>


  );
};

export default AlwaysOnGuard;