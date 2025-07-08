import React from 'react';
import PropTypes from 'prop-types';

const Box = props => {
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
      <g clipPath="url(#clip0_18_11595)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.502 1.403a3 3 0 012.996 0h.002l7 4A3 3 0 0122 8V16a3 3 0 01-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 01-2.996 0l-.002-.001-6.996-3.998-.004-.002A3 3 0 012 16V7.999a3 3 0 011.5-2.595l.004-.002 6.998-4zM13 20.578v-8l7-4.022v7.443a1 1 0 01-.498.864H19.5L13 20.579zm5.977-13.741L12.5 3.136a1 1 0 00-1 0l-.004.002-6.473 3.699L12 10.847l6.977-4.01zM11 12.579v8l-6.5-3.715-.002-.001A1 1 0 014 15.999V8.556l7 4.023z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_11595">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Box.propTypes = {
  color: PropTypes.string
};

export default Box;
