import React from 'react';
import PropTypes from 'prop-types';

const AlertFill = props => {
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
      <g clipPath="url(#clip0_18_14770)">
        <path d="M12.187 1.993a3 3 0 012.41 1.51L22.595 17.5l.093.174A3.002 3.002 0 0119.998 22h-16v-.001a2.999 2.999 0 01-2.618-4.495H1.38l8-14a3.002 3.002 0 012.608-1.518l.199.007zM11.998 16a1 1 0 100 2h.01l.102-.005a1 1 0 000-1.99L12.008 16h-.01zm0-8a1 1 0 00-1 1v4a1 1 0 102 0V9a1 1 0 00-1-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14770">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AlertFill.propTypes = {
  color: PropTypes.string
};

export default AlertFill;
