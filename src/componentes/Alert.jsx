import React from 'react';

const Alert = ({ mensaje}) => {
  if (!mensaje); 

  return (
    <div className={`alert `}>
      {mensaje}
    </div>
  );
};

export default Alert;