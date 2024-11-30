import React from 'react';

const Alert = ({ type, message }) => {
  return (
    <div
      className={`bg-${type}-100 border-${type}-400 text-${type}-700 p-4 rounded`}
    >
      {message}
    </div>
  );
};

export default Alert;