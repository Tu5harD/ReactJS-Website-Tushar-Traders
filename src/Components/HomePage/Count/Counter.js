import React, { useState, useEffect } from "react";
import './Counter.css'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Counter() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const counterData = [
    { target: 122, label: "Wholesale Customer" },
    { target: 131, label: "Dairy Farmers" },
    { target: 15, label: "Cattle Feed Product" },
    { target: 5168, label: "Happy customers every year" }

  ];

  const speed = 15;
  
  const CounterItem = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count < target) {
        const timeout = setTimeout(() => {
          setCount(count + Math.floor(target / speed));
        }, 15);
        return () => clearTimeout(timeout);
      }
    }, [count, target]);

    return (
      <div className="counter" data-aos="fade-right">
        <h1 className="count" data-target={target}>
          {count}+
        </h1>
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="counter-wrapper">
      {counterData.map((data, index) => (
        <CounterItem key={index} target={data.target} label={data.label} />
      ))}
    </div>
  );
}
