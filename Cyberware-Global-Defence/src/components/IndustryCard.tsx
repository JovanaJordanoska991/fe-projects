import React from "react";

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, image }) => {
  return (
    <div className="card h-100 d-flex flex-column align-items-center ms-center p-3 text-center bg-color text-light rounded-0">
      <img src={image} className="card-img-top img-width-50" alt={title} />
      <div className="card-body">
        <h5 className="card-title h3 fw-bold pb-3">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
