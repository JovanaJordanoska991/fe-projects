import React from 'react';
import ItemList from './ItemList';
import TeamCard from './TeamCard';

const SecurityAwarenessAdvisors: React.FC = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center my-5 fw-bold primary-color">Security Awareness Advisors</h2>
        
        <ItemList
          endpoint="/db.json"
          dataKey="team-members"
          renderItem={TeamCard}
          title=""
          customClasses=""
          limit={3}
          filterByCategory="Advisors"
        />
      </div>
    </div>
  );
};

export default SecurityAwarenessAdvisors;
