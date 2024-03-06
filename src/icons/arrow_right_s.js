import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightS = props => {
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
      <path d="M12.95 12.364L8 7.414 9.414 6l6.364 6.364-6.364 6.364L8 17.314l4.95-4.95z"></path>
    </svg>
  );
};

ArrowRightS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightS;
