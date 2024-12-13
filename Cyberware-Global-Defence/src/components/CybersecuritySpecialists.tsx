import React from 'react';
import ItemList from './ItemList';
import TeamCard from './TeamCard';

const CybersecuritySpecialists: React.FC = () => {
  return (
    <div className="container-fluid py-5 bg-color">
      <div className="container">
        <h2 className="text-center my-5 fw-bold primary-color">Our Cybersecurity Specialists</h2>
        
        <ItemList
          endpoint="/db.json"
          dataKey="team-members"
          renderItem={TeamCard}
          title=""
          customClasses=""
          limit={3}
          filterByCategory="Cybersecurity"  // Filters by "Cybersecurity" category
        />
      </div>
    </div>
  );
};

export default CybersecuritySpecialists;


