import React from 'react';

interface ServicePageBannerProps {
  title: string;
  description: string;
}

const ServicePageBanner: React.FC<ServicePageBannerProps> = ({ title, description }) => {
  return (
    <div className="container-fluid service-page-banner py-5">
      <div className="container">
        <div className="banner-content">
          <h1 className="text-white">{title}</h1>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageBanner;
