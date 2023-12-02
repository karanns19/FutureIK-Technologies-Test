import React from 'react';

const Donut = ({ percentage, text, total, fontSize }) => {
  const radius = 50; // Radius of the donut chart
  const strokeWidth = 15; // Width of the donut chart

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;

  // Calculate the strokeDashoffset to represent the percentage
  const strokeDashoffset = ((total - percentage) / total) * circumference;

  return (
    <svg width="110" height="110" viewBox="0 0 200 200">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke="#D9D9D9"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke="#0B3366"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 100 100)`}
        strokeLinecap="round"
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize={fontSize} fontWeight={400} fill="#909090">
        {text}
      </text>
    </svg>
  );
};

export default Donut;
