import React, { useState, useEffect } from "react";
import CertificationCard from "./CertificationCard";

const OurSertifications: React.FC = () => {
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    // Replace with the correct path to your db.json file
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setCertifications(data["our-certifications"] || []);
      })
      .catch((error) => console.error("Error fetching certifications:", error));
  }, []);

  return (
    <div className="container-fluid py-5 bg-color">
      <div className="container">
        <h3 className="text-center mb-4 text-light fw-bold h2">Our Certification</h3>
      <div className="row">
        {certifications.length > 0 ? (
          certifications.map((cert) => (
            <div key={cert.id} className="col-md-6 col-lg-4 mb-4">
              <CertificationCard {...cert} />
            </div>
          ))
        ) : (
          <p className="text-center">No certifications available at the moment.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default OurSertifications;
