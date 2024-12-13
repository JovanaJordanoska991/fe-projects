import React, { useState, useEffect } from 'react';

interface ItemListProps {
  endpoint: string;
  dataKey: string;
  renderItem: React.FC<any>;
  title: string;
  customClasses: string;
  limit?: number;
  filterByCategory?: string; 
}

const ItemList: React.FC<ItemListProps> = ({
  endpoint,
  dataKey,
  renderItem,
  title,
  customClasses,
  limit,
  filterByCategory,
}) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        let filteredItems = data[dataKey] || [];

        // Filter by category if specified
        if (filterByCategory) {
          filteredItems = filteredItems.filter(
            (item: any) => item.category === filterByCategory
          );
        }

        // If limit is provided, slice the data accordingly
        const limitedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

        // Set the items to state
        setItems(limitedItems);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [endpoint, dataKey, limit, filterByCategory]);

  return (
    <div className={`item-list ${customClasses}`}>
      <div className="container mx-auto">
        {title && <h2 className="primary-color text-center my-5 fw-bold">{title}</h2>}
        <div className="row">
          {items.length > 0 ? (
            items.map((item: any) => (
              <div key={item.id} className="col-md-4 mb-4">
                {/* Dynamically render item */}
                {React.createElement(renderItem, { ...item })}
              </div>
            ))
          ) : (
            <p className="text-center">No items available to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;




