import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-black text-light">
      {/* First Horizontal Section */}
      <div className="container py-5">
        <div className="row">
          {/* First Part */}
          <div className="col-md-3 col-sm-6 d-flex flex-column align-items-center">
            <img src="/assets/footer/logo-dark.svg" alt="Logo" className="mb-3" style={{ maxWidth: "150px" }} />
            <div className="d-flex flex-wrap justify-content-center">
              <img src="/assets/footer/logo1.png" alt="Certification 1" className="m-2" style={{ maxWidth: "80px" }} />
              <img src="/assets/footer/iso-logo.png" alt="Certification 2" className="m-2" style={{ maxWidth: "80px" }} />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <img src="/assets/footer/logo2.png" alt="Partner 1" className="m-2" style={{ maxWidth: "160px" }} />
            </div>
          </div>

          {/* Second Part */}
          <div className="col-md-3 col-sm-6">
            <div className="row">
              <div className="col-6">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <ul className="list-unstyled" style={{ fontSize: "0.75rem" }}>
                  <li><a href="#">SIEM Threat Detection & Response</a></li>
                  <li><a href="#">Incident Response</a></li>
                  <li><a href="#">Penetration Testing</a></li>
                  <li><a href="#">Network Security</a></li>
                  <li><a href="#">Security Awareness Training</a></li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="text-uppercase fw-bold">About Us</h6>
                <ul className="list-unstyled" style={{ fontSize: "0.75rem" }}>
                  <li><a href="#">Mission Statement</a></li>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Our Expertise</a></li>
                  <li><a href="#">Partnerships</a></li>
                  <li><a href="#">Our Values</a></li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="text-uppercase fw-bold">Team</h6>
                <ul className="list-unstyled" style={{ fontSize: "0.75rem" }}>
                  <li><a href="#">Co-Founder & CXX</a></li>
                  <li><a href="#">Cybersecurity Specialists</a></li>
                  <li><a href="#">Security Awareness Advisors</a></li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="text-uppercase fw-bold">Industries We Serve</h6>
                <ul className="list-unstyled" style={{ fontSize: "0.75rem" }}>
                  <li><a href="#">Finance</a></li>
                  <li><a href="#">Healthcare</a></li>
                  <li><a href="#">Government</a></li>
                  <li><a href="#">Retail</a></li>
                  <li><a href="#">eGame</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Part */}
          <div className="col-md-3 col-sm-6 d-flex flex-column align-items-start">
            <h6 className="text-uppercase text-start fw-bold">Contact <span className="primary-color">Us</span></h6>
            <form
              className="small-form"
              style={{
                width: "250px", // Limit the form width
              }}
            >
              <div className="mb-2">
                <input type="text" className="form-control form-control-sm bg-color form-control-custom" placeholder="Name" />
              </div>
              <div className="mb-2">
                <input type="email" className="form-control form-control-sm bg-color form-control-custom" placeholder="Email" />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control form-control-sm bg-color form-control-custom"
                  rows={4}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input bg-black" id="newsletter" />
                <label className="form-check-label" htmlFor="newsletter" style={{ fontSize: "0.75rem" }}>
                  I would like to receive the newsletter
                </label>
              </div>
              <button type="submit" className="btn custom-btn btn-sm w-100">
                Submit
              </button>
            </form>
          </div>

          {/* Fourth Part */}
          <div className="col-md-3 col-sm-6 d-flex flex-column text-start">
            <img src="/assets/footer/Maps.png" alt="Map" className="img-fluid mb-3" />
            <div className="d-flex align-items-center">
              <img src="/assets/footer/location.svg" alt="Location" className="me-2" />
              <p className="mb-0">Berlin, Germany</p>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/footer/phone.svg" alt="Phone" className="me-2" />
              <p className="mb-0">+123-456-7890</p>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/footer/email.svg" alt="Email" className="me-2" />
              <p className="mb-0">info@cybergd.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Horizontal Section */}
      <div className="py-3 bg-white">
        <div className="container d-flex justify-content-between">
          <div>
            <button className="btn  text-black p-0 me-3">Legal Notice</button>
            <button className="btn  text-black p-0 me-3">Data Protection</button>
            <button className="btn  text-black p-0">Terms of Use</button>
          </div>
          <div className="text-black text-end fw-bold">
            © Cyberware Global Defense
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

