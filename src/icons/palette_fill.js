import React from 'react';
import PropTypes from 'prop-types';

const PaletteFill = props => {
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
      <g clipPath="url(#clip0_1496_166)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12C1 5.948 5.948 1 12 1c5.9 0 10.961 4.352 10.992 9.834v.006c0 3.604-2.952 6.554-6.555 6.554h-2.013a.64.64 0 00-.651.65v.018c0 .234.06.334.144.417l.042.045c.398.448.689 1.076.689 1.788C14.648 21.781 13.503 23 12 23 5.948 23 1 18.052 1 12zm11-5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-5 1a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm9 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-11 2a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1496_166">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PaletteFill.propTypes = {
  color: PropTypes.string
};

export default PaletteFill;
