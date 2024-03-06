import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoBackFill = props => {
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
      <g clipPath="url(#clip0_18_12626)">
        <path d="M8 7v4L2 6l6-5v4h5a8 8 0 010 16H4v-2h9a6 6 0 100-12H8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12626">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoBackFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowGoBackFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowGoBackFill;
