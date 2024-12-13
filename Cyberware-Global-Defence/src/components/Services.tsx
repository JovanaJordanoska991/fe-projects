import React from 'react';
import ItemList from './ItemList';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <ItemList
      endpoint="/db.json"
      dataKey="services"
      renderItem={ServiceCard}
      title="Our Services"
      customClasses="bg-color by-8"
    />
  );
};

export default Services;



