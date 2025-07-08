import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightUp = props => {
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
      <g clipPath="url(#clip0_18_12495)">
        <path d="M9.878 4.636a1 1 0 100 2h6.072L4.929 17.657l-.07.076a1 1 0 001.408 1.407l.076-.069 11.02-11.02v6.07l.006.103a1 1 0 001.99 0l.005-.103V5.636a1 1 0 00-1-1H9.878z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12495">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightUp.propTypes = {
  color: PropTypes.string
};

export default ArrowRightUp;
