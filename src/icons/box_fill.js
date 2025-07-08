import React from 'react';
import PropTypes from 'prop-types';

const BoxFill = props => {
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
      <g clipPath="url(#clip0_308_50)">
        <path d="M5 6.5L12 3l7 3.5-7 4-7-4z"></path>
        <path d="M3 17.5v-8l7 4.5v7.5l-7-4z"></path>
        <path d="M21 17.5v-8L14 14v7.5l7-4z"></path>
        <path d="M2.52 8.622c.322-.175.713-.16 1.021.037l7 4.5A1 1 0 0111 14v7.5a1 1 0 01-1.496.868l-7-4A1 1 0 012 17.5v-8a1 1 0 01.52-.878zm17.939.037A1.001 1.001 0 0122 9.5v8a1 1 0 01-.504.868l-7 4A1 1 0 0113 21.5V14a1 1 0 01.459-.84l7-4.5zm-8.906-6.553a1 1 0 01.894 0l7 3.5a1.001 1.001 0 01.05 1.762l-7 4a1 1 0 01-.993 0l-7-4a1 1 0 01.049-1.762l7-3.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_308_50">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BoxFill.propTypes = {
  color: PropTypes.string
};

export default BoxFill;
