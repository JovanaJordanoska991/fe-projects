import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <header className="bg-light">
      {/* Top Section */}
      <div className="container-fluid top-bar d-flex py-2 px-5 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link href="/">
            <img
              src="/assets/header/logo.svg"
              alt="Logo"
              className="logo"
              width="120"
            />
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Link
            href="#"
            className={`top-link me-3 ${asPath === "/" ? "active" : ""}`}
          >
            Emergency Response Plan
          </Link>
          <Link
            href="#"
            className={`top-link me-3 ${asPath === "/" ? "active" : ""}`}
          >
            Support
          </Link>
          <div className="dropdown">
            <Link
              className={`top-link dropdown-toggle ${asPath === "#" ? "active" : ""}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/assets/header/language.svg"
                alt="Language Icon"
                className="me-1"
              />
              EN
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="languageDropdown"
            >
              <li>
                <Link
                  href="#"
                  className={`dropdown-item ${asPath === "#" ? "active" : ""}`}
                >
                  EN
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`dropdown-item ${asPath === "#" ? "active" : ""}`}
                >
                  DE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex flex-grow-1">
              {/* Left Side Navigation */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${asPath === "/" ? "active" : ""}`}
                    passHref
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    className={`nav-link ${asPath === "/about" ? "active" : ""}`}
                    passHref
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className={`nav-link dropdown-toggle ${asPath === "#" ? "active" : ""}`}
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/siem-threat-detection-and-responses" ? "active" : ""}`}
                        href="/siem-threat-detection-and-responses"
                      >
                        SIEM Threat Detection & Response
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/penetration-testing" ? "active" : ""}`}
                        href="/penetration-testing"
                      >
                        Penetration Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/incident-response" ? "active" : ""}`}
                        href="/incident-response"
                      >
                        Incident Response
                      </Link>
                    </li>
                    <li>
                       <Link
                        className={`dropdown-item ${asPath === "/network-security" ? "active" : ""}`}
                        href="/network-security"
                      >
                        Network Security
                      </Link>
                    </li>
                    <li>
                       <Link
                        className={`dropdown-item ${asPath === "/security-awareness-training" ? "active" : ""}`}
                        href="/security-awareness-training"
                      >
                        Security Awareness Training
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Industries Dropdown */}
                <li className="nav-item dropdown">
                  <Link
                    href="/industries"
                    className={`nav-link dropdown-toggle ${asPath === "/industries" ? "active" : ""}`}
                    id="industriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Industries
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="industriesDropdown">
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/industries" ? "active" : ""}`}
                        href="/industries"
                      >
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/industries/healthcare" ? "active" : ""}`}
                        href="/industries/healthcare"
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/industries/retail" ? "active" : ""}`}
                        href="/industries/retail"
                      >
                        Retail
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/industries/government" ? "active" : ""}`}
                        href="/industries/government"
                      >
                        Government
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/industries/gaming" ? "active" : ""}`}
                        href="/industries/gaming"
                      >
                        Gaming
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Partnerships Dropdown */}
                <li className="nav-item dropdown">
                  <Link
                    href="/partnerships"
                    className={`nav-link dropdown-toggle ${asPath === "/partnerships" ? "active" : ""}`}
                    id="partnershipsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Partnerships
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="partnershipsDropdown">
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/partnerships" ? "active" : ""}`}
                        href="/partnerships"
                      >
                        Technology Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/partnerships/resellers" ? "active" : ""}`}
                        href="/partnerships/resellers"
                      >
                        Resellers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/partnerships/distributors" ? "active" : ""}`}
                        href="/partnerships/distributors"
                      >
                        Distributors
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${asPath === "/partnerships/service-providers" ? "active" : ""}`}
                        href="/partnerships/service-providers"
                      >
                        Service Providers
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Right Side Navigation */}
            <div className="d-flex">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item nav-item-c ps-3 me-3 text-center">
                  <Link
                    className={`nav-link ${asPath === "/contact" ? "active" : ""}`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${asPath === "/jobs" ? "active" : ""}`}
                    href="/jobs"
                  >
                    Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${asPath === "/newsletter" ? "active" : ""}`}
                    href="/newsletter"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
