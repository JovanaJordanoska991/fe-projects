import React from 'react';

const Subscribe: React.FC = () => {
  return (
<div className="container py-4">
  <div className="d-flex align-items-center justify-content-center">
    <div className="bg-color w-75 mx-auto z-index-2">
      <div className="p-4 text-center w-100 w-md-50 d-flex align-items-center flex-column position-relative z-index-2">
        <h3 className="mb-4 fw-bold text-white pw-60">Reach out to our team at CGD, and we'll help you protect your digital future.</h3>
        <div className="d-flex justify-content-center align-items-center w-100">
          <input type="email" className="form-control input-custom subscribe-input" placeholder="Email address" />
          <button type="submit" className="btn custom-btn ms-0">Submit</button>
        </div>
      </div>
    </div>
    <div className="w-100">
        <hr className="primary-color bb-8 w-100" />
    </div>
  </div>
</div>
  );
};

export default Subscribe;
