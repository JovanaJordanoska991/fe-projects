import React, { useEffect, useState } from "react";
import IndustryCard from "./IndustryCard";

interface IndustryServiceType {
  id: string;
  title: string;
  description: string;
  image: string;
}

const IndustryService: React.FC = () => {
  const [services, setServices] = useState<IndustryServiceType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data["industry-services"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid  px-4 py-5 bb-8">
        <div className="container ">
        <div
        className="d-flex flex-wrap"
        style={{
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        {services.map((service) => (
          <IndustryCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
    </div>
      
  );
};

export default IndustryService;



