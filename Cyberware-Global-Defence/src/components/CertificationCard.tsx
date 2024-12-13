import React from "react";

export interface CertificationItemInterface {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const CertificationCard: React.FC<CertificationItemInterface> = (props) => {
  const { title, subtitle, description, image } = props;

  return (
    <div className="card custom-card h-100 p-3 mb-4">
      <div className="card-body d-flex align-items-center flex-column justify-content-center">
        <img src={image} alt={`${title} icon`} className="icon mb-4 img-width-50" />
        <div className="text-center text-light mb-3">
          <h5 className="card-title fw-bold mb-1">{title}</h5>
          <h6 className="card-subtitle mb-2">{subtitle}</h6>
          <p className="card-text muted-color">{description}</p>
        </div>
        <a href="#" className="btn custom-btn">See More</a>
      </div>
    </div>
  );
};

export default CertificationCard;

