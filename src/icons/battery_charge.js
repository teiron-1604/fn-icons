import React from 'react';
import PropTypes from 'prop-types';

const BatteryCharge = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.514 6.143a1 1 0 01.344 1.372L9.765 11H12a1 1 0 01.857 1.515l-3 5a1 1 0 11-1.714-1.03L10.233 13H8a1 1 0 01-.857-1.514l3-5a1 1 0 011.371-.343zm-9.635.736A3 3 0 014 6h2a1 1 0 010 2H4a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 110 2H4a3 3 0 01-3-3V9a3 3 0 01.879-2.121zM14 7a1 1 0 011-1h1a3 3 0 013 3v6a3 3 0 01-3 3h-2a1 1 0 010-2h2a1 1 0 001-1V9a1 1 0 00-1-1h-1a1 1 0 01-1-1zm8 3a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

BatteryCharge.propTypes = {
  color: PropTypes.string
};

export default BatteryCharge;
