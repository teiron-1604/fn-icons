import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightDownFill = props => {
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
      <g clipPath="url(#clip0_18_12604)">
        <path d="M19.868 18.745a1 1 0 01-.972.972l-13.082.353a1 1 0 01-.734-1.706l3.536-3.535-5.657-5.657a1 1 0 010-1.415l4.95-4.95.075-.068a1 1 0 011.339.069l5.657 5.657 3.535-3.536.116-.099a1 1 0 011.59.833l-.353 13.082z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12604">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightDownFill.propTypes = {
  color: PropTypes.string
};

export default ArrowRightDownFill;
