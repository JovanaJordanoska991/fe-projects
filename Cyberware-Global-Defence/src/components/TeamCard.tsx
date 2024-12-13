import React from 'react';
import ItemInterface from './ServiceCard';

const TeamCard: React.FC<ItemInterface> = ({ title, description, image, "job-title": jobTitle }) => {
  return (
    <div className="card custom-card bg-transparent team-card h-100 position-relative">
      <img src={image} className="img-fluid" alt={title} />
      <div className="card-body slanted-edge text-light">
        <h5 className="card-title fw-bold">{title}</h5>
        {jobTitle && <p className="card-subtitle mb-3 muted-color">{jobTitle}</p>}
        <p className="card-text my-3">{description}</p>
      </div>
      <a href="#" className="flotating-small-btn z-3">
        <img src="/assets/team members/arrow_forward.svg" alt="arrow icon" />
      </a>
    </div>
  );
};

export default TeamCard;




