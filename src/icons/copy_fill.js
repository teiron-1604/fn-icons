import React from 'react';
import PropTypes from 'prop-types';

const CopyFill = props => {
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
      <path d="M7 7V3a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 012 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3z"></path>
    </svg>
  );
};

CopyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CopyFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CopyFill;
