import React from 'react';
import PropTypes from 'prop-types';

const Image3Fill = props => {
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
      <g clipPath="url(#clip0_2189_216)">
        <path d="M11.378 4H5a1 1 0 00-1 1v7.94l2.63-2.37a2 2 0 012.77.087l.152.155L6.555 22H5a3 3 0 01-3-3V5a3 3 0 013-3h6.914l-.536 2zM19 2a3 3 0 013 3v14a3 3 0 01-3 3H8.625l2.552-9.523.712.73 2.83-1.758a2 2 0 012.362.186L20 14.15V5a1 1 0 00-1-1h-5.55l.534-2H19zm-2.305 4.144a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2189_216">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Image3Fill.propTypes = {
  color: PropTypes.string
};

export default Image3Fill;
