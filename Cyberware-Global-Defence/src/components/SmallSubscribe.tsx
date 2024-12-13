import React from "react";

const SmallSubscribe: React.FC = () => {
  return (
    <div className="container px-4 py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-center g-5 mx-custom"> 
        <div className="col text-center text-md-start">
          <h2 className="primary-color my-3 fw-bold text-center text-md-start">
            Stay informed with the latest threat insights delivered directly to your inbox through our Newsletter.
          </h2>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input type="email" className="form-control small-input subscribe-input text-start" placeholder="Email address" />
          <button type="submit" className="btn custom-btn ms-0">Join for Free</button>
        </div>
      </div>
    </div>
  );
};

export default SmallSubscribe;