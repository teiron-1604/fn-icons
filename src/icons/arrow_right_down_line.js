import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightDownLine = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_12598)">
        <path d="M19.363 9.879a1 1 0 10-2 0v6.071L6.342 4.93l-.076-.07a1 1 0 00-1.407 1.407l.069.076 11.02 11.021h-6.07l-.103.006a1 1 0 000 1.989l.103.005h8.485a1 1 0 001-1V9.88z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12598">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightDownLine.propTypes = {
  color: PropTypes.string
};

export default ArrowRightDownLine;
