import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftUpFill = props => {
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
      <g clipPath="url(#clip0_18_12449)">
        <path d="M4.136 5.61a1 1 0 01.972-.973l13.082-.353a1 1 0 01.734 1.706l-3.536 3.535 5.657 5.657a1 1 0 010 1.414l-4.95 4.95-.076.07a1 1 0 01-1.338-.07L9.024 15.89 5.49 19.425l-.116.099a1 1 0 01-1.59-.833l.353-13.082z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12449">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowLeftUpFill.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftUpFill;
