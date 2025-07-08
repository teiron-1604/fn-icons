import React from 'react';
import PropTypes from 'prop-types';

const PriceTagFill = props => {
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
      <g clipPath="url(#clip0_18_12699)">
        <path d="M11.469 1.015a3 3 0 011.824.864l8.706 8.706.116.123c.565.628.88 1.444.88 2.292l-.004.169A3.427 3.427 0 0122 15.415l-6.584 6.584a3.427 3.427 0 01-2.246.992l-.169.004A3.427 3.427 0 0110.585 22l-8.706-8.706a3 3 0 01-.864-1.824L1 11.172V4a3 3 0 013-3h7.172l.297.015zM7 5a2 2 0 100 4 2 2 0 000-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12699">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PriceTagFill.propTypes = {
  color: PropTypes.string
};

export default PriceTagFill;
