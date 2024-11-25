import React from 'react';

const Button = ({ name, isBeam = false, containerClass, icon }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3 mr-2">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {icon && <img src={icon} alt={`${name} icon`} className="inline-block h-5 w-5 mr-2" />}
      {name}
    </button>
  );
};

export default Button;
