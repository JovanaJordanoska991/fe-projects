import React from "react";

const JoinOurTeam : React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <section className="text-center my-5">
                    <h1 className="fw-bold">
                    <span className="primary-color">Join Our Team</span> of Cybersecurity Innovators. 
                    </h1>
                    <p className="fw-bolder mx-auto mb-5">
                    Protecting the Digital World, One Threat at a Time
                    </p>
                    <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
                    <li className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle fw-bold custom-btn-j"
                        type="button"
                        id="jobHuntingDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Job Hunting
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="jobHuntingDropdown">
                        <li><a className="dropdown-item" href="#">Full-Time</a></li>
                        <li><a className="dropdown-item" href="#">On-Site</a></li>
                        <li><a className="dropdown-item" href="#">Hybrid</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle fw-bold custom-btn-j"
                        type="button"
                        id="salaryRangeDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Salary Range
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="salaryRangeDropdown">
                        <li><a className="dropdown-item" href="#">$30,000 - $50,000</a></li>
                        <li><a className="dropdown-item" href="#">$50,000 - $70,000</a></li>
                        <li><a className="dropdown-item" href="#">$70,000+</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle fw-bold custom-btn-j"
                        type="button"
                        id="postedDateDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Posted Date
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="postedDateDropdown">
                        <li><a className="dropdown-item" href="#">Last 24 Hours</a></li>
                        <li><a className="dropdown-item" href="#">Last 7 Days</a></li>
                        <li><a className="dropdown-item" href="#">Last 30 Days</a></li>
                      </ul>
                    </li>
                  </ul>
              </section>
            </div>
        </div>
    );
};  

export default JoinOurTeam;