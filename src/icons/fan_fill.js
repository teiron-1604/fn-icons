import React from 'react';
import PropTypes from 'prop-types';

const FanFill = props => {
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
      <g clipPath="url(#clip0_2439_721)">
        <path d="M13.927 14.905a1.001 1.001 0 011.388.284l3.03 4.602a1 1 0 01-.281 1.384A10.934 10.934 0 0112 23c-2.24 0-4.325-.672-6.063-1.825a1 1 0 01-.283-1.384l3.03-4.602.06-.08a1.002 1.002 0 011.33-.204 3.47 3.47 0 001.926.58 3.47 3.47 0 001.927-.58zM7.169 2.067a1.001 1.001 0 011.253.487l2.46 4.934a1 1 0 01-.447 1.34 3.515 3.515 0 00-1.93 3.355 1 1 0 01-.937 1.057l-5.49.33a1.002 1.002 0 01-1.058-.939A11.032 11.032 0 017.079 2.107l.09-.04zm8.988-.016c.252-.084.527-.064.765.056A11.032 11.032 0 0122.98 12.63a1.002 1.002 0 01-1.058.94l-5.49-.33a1 1 0 01-.938-1.058 3.515 3.515 0 00-1.93-3.355 1 1 0 01-.446-1.34l2.46-4.934.049-.086a1 1 0 01.53-.417zM12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2439_721">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FanFill.propTypes = {
  color: PropTypes.string
};

export default FanFill;
