import React from 'react';
import PropTypes from 'prop-types';

const PlayCircle = props => {
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
      <g clipPath="url(#clip0_18_15394)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.528-4.882a1 1 0 011.027.05l6 4a1 1 0 010 1.664l-6 4A1 1 0 019 16V8a1 1 0 01.528-.882zM11 9.868v4.264L14.197 12 11 9.869z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15394">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PlayCircle.propTypes = {
  color: PropTypes.string
};

export default PlayCircle;
