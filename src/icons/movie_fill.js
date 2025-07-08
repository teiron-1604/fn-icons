import React from 'react';
import PropTypes from 'prop-types';

const MovieFill = props => {
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
      <g clipPath="url(#clip0_18_15274)">
        <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zM9.277 7.584a.5.5 0 00-.772.348L8.5 8v8a.5.5 0 00.777.416l6-4a.5.5 0 000-.832l-6-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15274">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MovieFill.propTypes = {
  color: PropTypes.string
};

export default MovieFill;
