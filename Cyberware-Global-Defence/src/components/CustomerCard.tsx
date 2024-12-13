import React from "react";

interface CustomerCardProps {
  title: string;
  description: string;
  image: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ title, description, image }) => {
  return (
    <div className="card customer-card border-0  d-flex flex-row align-items-center p-2">
      <div className="d-flex justify-content-center align-items-center me-3">
        <img
          src={image}
          alt={title}
          className="rounded-circle"
          style={{
            objectFit: "cover",
            width: "60px",
            height: "60px",
            border: "2px solid #eee",
          }}
        />
      </div>


      <div className="flex-grow-1">
        <h6 className="card-title mb-1">{title}</h6>
        <p className="card-text text-muted mb-2" style={{ fontSize: "0.85rem" }}>
          {description}
        </p>


        <div className="d-flex align-items-center">
          <img
            src="/assets/our customers/five-stars.svg"
            alt="Rating"
            className="img-fluid"
            style={{ maxWidth: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;




