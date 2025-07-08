import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftRight2 = props => {
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
      <g clipPath="url(#clip0_2281_814)">
        <path d="M10.5 16.5a1 1 0 01-1.57.822l-6.5-4.5a1 1 0 010-1.644l6.5-4.5a1 1 0 011.57.822v9zM22 12a1 1 0 01-.43.822l-6.5 4.5a1 1 0 01-1.57-.822v-9a1 1 0 011.57-.822l6.5 4.5.095.075A1 1 0 0122 12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2281_814">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftRight2.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftRight2;
