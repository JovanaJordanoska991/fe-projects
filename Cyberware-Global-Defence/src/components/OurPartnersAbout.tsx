import React from 'react';
import TeamSection from './TeamSection';

const OurPartnersAbout: React.FC = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="container bg-white">
        <h2 className="text-center my-4 fw-bold primary-color">Our Partners</h2>
        <p className="text-center fw-bold">Here’s a glimpse into the expertise driving CGD’s security solutions:</p>
          <TeamSection
        title=""
        endpoint="/db.json"
        dataKey="team-members"
        limit={2}
        filterByCategory="Leadership"
      />
      </div>
    </div>
  );
};

export default OurPartnersAbout;
