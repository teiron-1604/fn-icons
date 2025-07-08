import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDown2 = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <g clipPath="url(#clip0_756_90)">
        <path d="M16.5 13.5a1 1 0 01.822 1.57l-4.5 6.5a1 1 0 01-1.644 0l-4.5-6.5A1 1 0 017.5 13.5h9zM12 2a1 1 0 01.822.43l4.5 6.5a1 1 0 01-.822 1.57h-9a1 1 0 01-.822-1.57l4.5-6.5.075-.095A1 1 0 0112 2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_756_90">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowUpDown2.propTypes = {
  color: PropTypes.string
};

export default ArrowUpDown2;
