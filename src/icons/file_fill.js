import React from 'react';
import PropTypes from 'prop-types';

const FileFill = props => {
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
      <g clipPath="url(#clip0_18_12885)">
        <path d="M13 6a3 3 0 003 3h5v11a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h7v5zm2-5a1 1 0 01.707.293l5 5A1 1 0 0121 7h-5a1 1 0 01-1-1V1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12885">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileFill.propTypes = {
  color: PropTypes.string
};

export default FileFill;
