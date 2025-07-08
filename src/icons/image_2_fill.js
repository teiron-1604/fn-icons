import React from 'react';
import PropTypes from 'prop-types';

const Image2Fill = props => {
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
      <g clipPath="url(#clip0_18_15823)">
        <path d="M13 6a3 3 0 003 3h5v11a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h7v5zm4 9.998a1.41 1.41 0 00-.894.32l-.103.093L11.414 21H18a1 1 0 001-1v-2.586l-1.003-1.003a1.411 1.411 0 00-.857-.406l-.14-.007zM8 10a2 2 0 100 4 2 2 0 000-4zm7-9a1 1 0 01.707.293l5 5A1 1 0 0121 7h-5a1 1 0 01-1-1V1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15823">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Image2Fill.propTypes = {
  color: PropTypes.string
};

export default Image2Fill;
