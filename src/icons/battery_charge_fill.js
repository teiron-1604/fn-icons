import React from 'react';
import PropTypes from 'prop-types';

const BatteryChargeFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M12 11V5l-5 8h3v6l5-8h-3zM3 5h16a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm18 4h2v6h-2V9z"></path>
    </svg>
  );
};

BatteryChargeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryChargeFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryChargeFill;
