import React from 'react';
import partnersImages from '../data/partnersImages';

const OurPartners: React.FC = () => {
  return (
    <div className="container-fluid px-3 py-4">
      <div className="container mx-custom">
        <div className="row align-items-center justify-content-center text-center text-md-start mt-4 mx-custom">
          <h3 className="primary-color my-3 fw-bold text-center h2">Our Partners</h3>
          <div className="col-12">
            <div className="partners-scroller mt-4">
              <div className="scroll-track">
                {partnersImages.map((image, index) => (
                  <img key={index} src={image} alt={`Partner ${index + 1}`} className="partner-img" />
                ))}
                {/* Duplicate images for seamless scrolling */}
                {partnersImages.map((image, index) => (
                  <img key={`${index}-duplicate`} src={image} alt={`Partner ${index + 1} Duplicate`} className="partner-img" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;






