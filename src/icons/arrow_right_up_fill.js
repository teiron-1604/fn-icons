import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightUpFill = props => {
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
      <g clipPath="url(#clip0_18_12499)">
        <path d="M17.893 4.637a1 1 0 01.972.973l.354 13.081a1 1 0 01-1.707.734l-3.535-3.535-5.657 5.657a1 1 0 01-1.414 0l-4.95-4.95-.069-.076a1 1 0 01.07-1.338l5.656-5.657L4.077 5.99l-.098-.115a1 1 0 01.832-1.591l13.082.353z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12499">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowRightUpFill.propTypes = {
  color: PropTypes.string
};

export default ArrowRightUpFill;
