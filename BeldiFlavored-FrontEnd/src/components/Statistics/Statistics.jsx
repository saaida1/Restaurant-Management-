import React, { useEffect, useRef } from "react";
import "./Statistics.css"; // Import CSS file for styling

const Statistics = () => {
  const statisticRefs = useRef([]);

  // Define the statistics
  const statistics = [
    { name: "Satisfied Customers", value: "+500" },
    { name: "Qualified Chefs", value: "+25" },
    { name: "Years of Experience", value: "+40" },
    { name: "Dishes", value: "+60" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInAnimation");
          }
        });
      },
      { threshold: 0.5 }
    );

    statisticRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="statistics-container">
        {statistics.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statisticRefs.current[index] = el)}
            className="statistic-frame"
          >
            <div className="statistic">
              <p>{stat.name}</p>
              <br />
              <h2>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
