import React from 'react';
import PropTypes from 'prop-types';

const Image2 = props => {
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
      <g clipPath="url(#clip0_18_15824)">
        <path d="M19 17.414l-1.003-1.003a1.411 1.411 0 00-.857-.406l-.14-.007a1.41 1.41 0 00-.894.32l-.103.093L11.414 21H18a1 1 0 001-1v-2.586zM11 12a1 1 0 10-2 0 1 1 0 002 0zm10 8a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h9l.099.005a1 1 0 01.608.288l5 5A1 1 0 0121 7v13zm-8-8a3 3 0 11-6 0 3 3 0 016 0zm2-6a1 1 0 001 1h2.586L15 3.414V6zM5 20a1 1 0 001 1h2.586l6.003-6.003.123-.117A3.41 3.41 0 0117 13.998l.169.005a3.41 3.41 0 011.831.643V9h-3a3 3 0 01-3-3V3H6a1 1 0 00-1 1v16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15824">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Image2.propTypes = {
  color: PropTypes.string
};

export default Image2;
