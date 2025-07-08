import React from 'react';
import PropTypes from 'prop-types';

const Sensor = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V2h2v6H6zm7-6v6h-2V2h2z"></path>
    </svg>
  );
};

Sensor.propTypes = {
  color: PropTypes.string
};

export default Sensor;
