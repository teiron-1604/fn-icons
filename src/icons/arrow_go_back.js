import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoBack = props => {
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
      <g clipPath="url(#clip0_18_12622)">
        <path d="M4.5 7H13a6.5 6.5 0 016.5 6.5v0A6.5 6.5 0 0113 20H4.5"></path>
        <path d="M7 3.365L3.5 7.173 7 10.98"></path>
        <path d="M6.337 2.618a1 1 0 011.465 1.345l-.066.08L5.938 6H13a7.5 7.5 0 010 15H4.5a1 1 0 010-2H13a5.5 5.5 0 000-11H5.62l2.116 2.304a1 1 0 01-1.472 1.354l-3.5-3.808a1 1 0 010-1.354l3.5-3.807.073-.071z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12622">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoBack.propTypes = {
  color: PropTypes.string
};

export default ArrowGoBack;
