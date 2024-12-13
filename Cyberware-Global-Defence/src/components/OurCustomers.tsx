import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard";

const OurCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCustomers(data["our-customers"] || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching customer data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const scroller = document.querySelector<HTMLDivElement>(".horizontal-scroller");

    const updateScrollProgress = () => {
      if (scroller) {
        const scrollLeft = scroller.scrollLeft;
        const scrollWidth = scroller.scrollWidth - scroller.clientWidth;
        const progress = (scrollLeft / scrollWidth) * 100;
        setScrollProgress(progress);
      }
    };

    const scrollByDistance = (distance: number) => {
      scroller?.scrollBy({ left: distance, behavior: "smooth" });
    };

 
    document.getElementById("prev-btn")?.addEventListener("click", () => {
      scrollByDistance(-300); 
    });

    document.getElementById("next-btn")?.addEventListener("click", () => {
      scrollByDistance(300); 
    });


    scroller?.addEventListener("scroll", updateScrollProgress);


    return () => {
      scroller?.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  if (loading) {
    return <div className="text-center">Loading customers...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <section className="py-5 position-relative">
      <div className="container">
        <h3 className="text-center mb-4 h2 primary-color fw-bolder">Join our happy customers!</h3>
        <div className="horizontal-scroller d-flex gap-4">
          {customers.map((customer: any) => (
            <CustomerCard
              key={customer.id}
              title={customer.title}
              description={customer.description}
              image={customer.image}
            />
          ))}
        </div>
      </div>

      {/* Left-Side Arrows */}
      <div className="navigation-arrows">
        <button className="btn" id="prev-btn">
          &lt;
        </button>
        <button className="btn" id="next-btn">
          &gt;
        </button>
      </div>

      {/* Right-Side Scroll Bar */}
      <div className="carouselLine">
        <div
          className="activeIndicator"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </section>
  );
};

export default OurCustomers;


