import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftUp = props => {
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
      <g clipPath="url(#clip0_18_12443)">
        <path d="M9.414 8l8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2H9.414z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12443">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftUp;
