import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftUp = props => {
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
      <g clipPath="url(#clip0_18_12443)">
        <path d="M14.122 4.636a1 1 0 010 2H8.05l11.021 11.021.07.076a1 1 0 01-1.408 1.407l-.076-.069-11.02-11.02v6.07l-.006.103a1 1 0 01-1.99 0l-.005-.103V5.636a1 1 0 011-1h8.486z"></path>
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
  color: PropTypes.string
};

export default ArrowLeftUp;
