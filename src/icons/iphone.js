import React from 'react';
import PropTypes from 'prop-types';

const Iphone = props => {
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
      <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm6 15a1 1 0 110 2 1 1 0 010-2z"></path>
    </svg>
  );
};

Iphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Iphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Iphone;
