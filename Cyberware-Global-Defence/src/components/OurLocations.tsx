import React from "react";

const locations = [
  {
    country: "Germany",
    addressLines: ["Hohenzollernring No. 72", "Köln", "50672"],
  },
  {
    country: "North Macedonia",
    addressLines: ["11th October No. 25", "Skopje", "1000"],
  },
  {
    country: "Albania",
    addressLines: ["Ruga Myslym Shyri No. 37", "Tirana", "1001"],
  },
  {
    country: "Turkey",
    addressLines: ["Istiklal Caddesi No. 45", "Istanbul", "34430"],
  },
];

const OurLocations: React.FC = () => {
  return (
    <div className="container-fluid px-3 py-4 our-locations-bg">
      {/* Move the heading outside of the container */}
      <h3 className=" text-white fw-bold text-start h2 mb-4 me-2 mx-custom">
       <span className="primary-color">Our</span> Locations
      </h3>
      <div className="container mx-custom d-flex gap-3 flex-wrap justify-content-center">
        {locations.map((location, index) => (
          <div className="col" key={index}>
            <div className="d-flex p-3 justify-content-start flex-column align-items-start bb-1-primary">
              <h4 className="text-light fw-bold mb-4">{location.country}</h4>
              <img
                className="mb-3"
                src="/assets/our locations/pin-drop.svg"
                alt="pin drop icon"
              />
              {location.addressLines.map((line, idx) => (
                <p className="text-light m-0" key={idx}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocations;

