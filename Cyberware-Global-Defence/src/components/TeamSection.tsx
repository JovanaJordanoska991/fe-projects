import React from 'react';
import ItemList from './ItemList';
import TeamCard from './TeamCard';

interface SectionProps {
  title: string;
  endpoint: string;
  dataKey: string;
  limit: number;
  filterByCategory?: string;
  customClasses?: string;
}

const TeamSection: React.FC<SectionProps> = ({
  title,
  endpoint,
  dataKey,
  limit,
  filterByCategory,
  customClasses = '',
}) => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        {title && <h2 className="text-center my-5 fw-bold primary-color">{title}</h2>}
        <ItemList
          endpoint={endpoint}
          dataKey={dataKey}
          renderItem={TeamCard}
          title=""
          customClasses={customClasses}
          limit={limit}
          filterByCategory={filterByCategory}
        />
      </div>
    </div>
  );
};

export default TeamSection;
