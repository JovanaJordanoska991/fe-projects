import React from "react";
import DynamicList from "./DynamicList";
import CustomerCard from "./CustomerCard";

const SuccessStory: React.FC = () => {
  return (
    <DynamicList
      endpoint="/db.json"
      dataKey="successStories"
      renderItem={CustomerCard}
      title="Success Stories"
      customClasses="bg-success"
    />
  );
};

export default SuccessStory;
