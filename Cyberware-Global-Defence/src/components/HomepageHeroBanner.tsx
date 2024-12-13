import React from "react";

const HomepageHeroBanner: React.FC = () => {
    return (
        <div className="container-fluid h-hero-banner py-5"> 
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-start my-3">
                    <p className="text-white fw-bold w-25"><span className="primary-color">Your Cybersecurity Experts</span> Securing the Future Today</p>
                    <div className="d-flex align-items-center py-1">
                        <h1 className="text-white fw-bold">Tailored, <span className="primary-color">AI-driven solutions</span> to protect your business</h1>
                        <p className="fs-6 fw-bold text-white w-75 sb-2 px-3">"Protecting the digital future through innovative cybersecurity solutions, we empower businesses to safeguard their assets, ensure compliance, and maintain trust in an increasingly connected world."</p>
                    </div>
                
                    <div className="d-flex justify-content-center gap-4 mt-3">
                        <a href="#" className="btn border border-light border-2 rounded-0 text-white d-inline-flex align-items-center">
                            <img src="./assets/homepage banner/free-consultation.png" className="me-2" alt="avatar image" />
                         Free Consultation
                        </a>
                        <a href="#" className="btn custom-btn">Get Started Today</a>
                    </div>

                </div>
                <ul className="list-unstyled mt-5 text-light d-flex justify-content-between gap-5">
                        <li><a href="#" className="tetriary-btn">Finance</a></li>
                        <li><a href="#" className="tetriary-btn">Healthcare</a></li>
                        <li><a href="#" className="tetriary-btn">Goverment</a></li>
                        <li><a href="#" className="tetriary-btn">Retail</a></li>
                        <li><a href="#" className="tetriary-btn">Game</a></li>
                        <li><a href="#" className="tetriary-btn">Education</a></li>
                    </ul>
            </div>
        </div>
    );
};

export default HomepageHeroBanner;




