
import React from 'react';
import TeamSection from './TeamSection';

const OurLeadershipTeam: React.FC = () => {
  return (
    
<div className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center my-5 fw-bold primary-color">Our Cybersecurity Specialists</h2>
         <TeamSection
          title="Our Leadership Team"
          endpoint="/db.json"
          dataKey="team-members"
          limit={3}
          filterByCategory="Leadership"
          />
      </div>
    </div>
  );
};

export default OurLeadershipTeam;



