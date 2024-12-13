import React from 'react';

export interface ServiceItemInterface {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string; 
}

const ServiceCard: React.FC<ServiceItemInterface> = ({ title, description, icon, link }) => {
  return (
    <div className="card custom-card h-100">
      <img src={icon} className="icon-width m-4" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn custom-btn">See More</a>
      </div>
    </div>
  );
};

export default ServiceCard;




