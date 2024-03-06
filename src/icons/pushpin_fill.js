import React from 'react';
import PropTypes from 'prop-types';

const PushpinFill = props => {
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
      <path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3h12z"></path>
    </svg>
  );
};

PushpinFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PushpinFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PushpinFill;