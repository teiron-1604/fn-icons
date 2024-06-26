import React from 'react';
import PropTypes from 'prop-types';

const CheckboxMultipleFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M7 7V3a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 012 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm-.497 11l5.656-5.657-1.414-1.414-4.242 4.243L6.38 13.05l-1.414 1.414L8.503 18z"></path>
    </svg>
  );
};

CheckboxMultipleFill.propTypes = {
  color: PropTypes.string
};

CheckboxMultipleFill.defaultProps = {
  color: 'currentColor'
};

export default CheckboxMultipleFill;
