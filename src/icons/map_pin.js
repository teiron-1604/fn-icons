import React from 'react';
import PropTypes from 'prop-types';

const MapPin = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15.721 2.158c.222.096.423.233.594.404l5.015 5.02a1.915 1.915 0 01-.58 3.104l-1.776.787-3.334 3.338-.264 3.671a1.915 1.915 0 01-3.265 1.216l-3.237-3.24L3.357 22 2 20.649l5.52-5.546-3.35-3.351a1.914 1.914 0 011.213-3.263l3.776-.283 3.275-3.278.769-1.774a1.915 1.915 0 012.518-.996zm-.761 1.757l-.914 2.108-4.034 4.04-4.487.335 7.94 7.947.316-4.383 4.09-4.095 2.105-.932-5.016-5.02z"></path>
    </svg>
  );
};

MapPin.propTypes = {
  color: PropTypes.string
};

export default MapPin;
