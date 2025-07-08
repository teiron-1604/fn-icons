import React from 'react';
import PropTypes from 'prop-types';

const BatteryChargeFill = props => {
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
        d="M10.767 6H4a3 3 0 00-3 3v6a3 3 0 003 3h2.539l3.695-5H8a1 1 0 01-.857-1.514L10.767 6zM8.972 18H16a3 3 0 003-3V9a3 3 0 00-3-3h-2.894a1.003 1.003 0 01-.106.244L9.766 11H12a1 1 0 01.858 1.515L8.972 18zM23 11a1 1 0 10-2 0v2a1 1 0 102 0v-2z"
      ></path>
    </svg>
  );
};

BatteryChargeFill.propTypes = {
  color: PropTypes.string
};

export default BatteryChargeFill;
