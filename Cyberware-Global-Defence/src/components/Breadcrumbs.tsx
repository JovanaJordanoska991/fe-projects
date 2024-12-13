import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs: React.FC = () => {
  const router = useRouter();

  const pathSegments = router.pathname.split("/").filter(Boolean);

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, " ");
  };

  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <div className="breadcrumb__option my-5">
                <Link href="/">
                  <div className="d-flex align-items-center">
                    <img src="/assets/breadcrumb/home.svg" alt="house icon" className="home-icon" />
                    <span className="primary-color fw-bolder">Home</span>
                  </div>
                </Link>
                <span className="mx-2 primary-color fw-bolder">/</span>

                <Link href="/">
                  <span className="primary-color fw-bolder">Services</span>
                </Link>
                <span className="mx-2 primary-color fw-bolder">/</span>

                <span className="primary-color fw-bolder">
                  {capitalizeFirstLetter(pathSegments[pathSegments.length - 1])}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;




