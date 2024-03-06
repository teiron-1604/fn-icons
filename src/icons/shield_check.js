import React from 'react';
import PropTypes from 'prop-types';

const ShieldCheck = props => {
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
      <path d="M12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A5.998 5.998 0 013 13.79V3.802a1 1 0 01.783-.976L12 1zm0 2.049L5 4.604v9.185a4 4 0 001.781 3.328L12 20.597l5.219-3.48A3.998 3.998 0 0019 13.79V4.604L12 3.05v-.001zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95v.001z"></path>
    </svg>
  );
};

ShieldCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCheck;
