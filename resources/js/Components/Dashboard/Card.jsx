import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Card;