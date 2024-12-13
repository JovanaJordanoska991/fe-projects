import React from 'react';

export interface AboutItemInterface {
  id: string;
  title: string;
  description: string;
  image: string;
}

const AboutCard: React.FC<AboutItemInterface> = ({ title, description, image }) => {
  const splitTitle = title.split(' ');
  return (
    <div className="card custom-card h-100">
      <img src={image} className="icon-width m-4" alt={title} />
      <div className="card-body">
        <h4 className="card-title fw-bolder">
          {splitTitle.map((word, index) => (
            <React.Fragment key={index}>
              <span className={index === 0 ? 'primary-color' : ''}>{word}</span>{' '}
            </React.Fragment>
          ))}
        </h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;

