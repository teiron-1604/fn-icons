import React from 'react';
import PropTypes from 'prop-types';

const EditFill = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_13950)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.668 2.915a3.123 3.123 0 114.416 4.416L8.074 19.34a3 3 0 01-1.282.76l-2.872.838a1.5 1.5 0 01-1.86-1.86l.838-2.872a3 3 0 01.759-1.281l12.01-12.011zM10.999 20a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13950">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

EditFill.propTypes = {
  color: PropTypes.string
};

export default EditFill;
