import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftDownFill = props => {
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
      <g clipPath="url(#clip0_18_12552)">
        <path d="M5.11 19.364a1 1 0 01-.971-.972L3.785 5.31a1 1 0 011.706-.734l3.536 3.536 5.657-5.657a1 1 0 011.414 0l4.95 4.95.069.076a1 1 0 01-.07 1.338l-5.656 5.657 3.535 3.535.1.116a1 1 0 01-.834 1.59l-13.081-.353z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12552">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftDownFill.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftDownFill;
