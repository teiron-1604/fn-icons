import React from 'react';
import PropTypes from 'prop-types';

const BluetoothFill = props => {
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
      <path d="M14.341 12.03l4.343 4.343-5.656 5.656h-2v-6.686l-4.364 4.364-1.415-1.414 5.779-5.778v-.97l-5.779-5.78 1.415-1.414 4.364 4.364V2.03h2l5.656 5.657-4.343 4.343v.001zm-1.313 1.514v5.657l2.828-2.828-2.828-2.829zm0-3.03l2.828-2.828-2.828-2.828v5.657zM19.5 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-13 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
    </svg>
  );
};

BluetoothFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BluetoothFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BluetoothFill;
