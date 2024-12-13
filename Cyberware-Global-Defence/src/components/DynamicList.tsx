import React, { useEffect, useState } from "react";

interface DynamicListProps {
  endpoint: string; 
  dataKey: string; 
  renderItem: React.FC<any>; 
}

const DynamicList: React.FC<DynamicListProps> = ({ endpoint, dataKey, renderItem }) => {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        setItems(data[dataKey] || []); // Extract and set the data array
      } catch (err) {
        setError("Error fetching data.");
      }
    };

    fetchData();
  }, [endpoint, dataKey]);

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (items.length === 0) {
    return <div>No items available to display.</div>;
  }

  return (
    <div className="dynamic-list">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4">
            {React.createElement(renderItem, { ...item })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicList;



