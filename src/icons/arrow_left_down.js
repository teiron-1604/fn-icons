import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftDown = props => {
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
      <g clipPath="url(#clip0_18_12546)">
        <path d="M14.122 19.364a1 1 0 000-2H8.05L19.071 6.343l.07-.076a1 1 0 00-1.408-1.407l-.076.069-11.02 11.02V9.88l-.006-.103a1 1 0 00-1.99 0l-.005.103v8.485a1 1 0 001 1h8.486z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12546">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftDown.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftDown;
