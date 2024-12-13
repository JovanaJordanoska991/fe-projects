import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard";
import { AboutItemInterface } from "./AboutCard";

const AboutHeroBanner: React.FC = () => {
  const [aboutItems, setAboutItems] = useState<AboutItemInterface[]>([]);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setAboutItems(data["about-us"]);
      } catch (error) {
        console.error("Error fetching About Us data:", error);
      }
    };

    fetchAboutUs();
  }, []);

  return (
    <>
      <div className="hero-banner">
        <div className="text-center text-white py-5">
          <h1 className="display-4">
            <span className="primary-color">Protecting</span> the digital future through innovative cybersecurity
            <span className="primary-color"> solutions</span>
          </h1>
        </div>
      </div>

      <div className="container cards-container">
        <div className="row justify-content-center">
          {aboutItems.map((item) => (
            <div className="col-lg-5 col-md-6 mb-4" key={item.id}>
              <AboutCard 
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutHeroBanner;


