import React from 'react';
import PropTypes from 'prop-types';

const Percentage = props => {
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
      <g clipPath="url(#clip0_255_42)">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <rect x="7" y="9" width="1.8" height="6" rx=".9"></rect>
        <rect x="15.199" y="9" width="1.8" height="6" rx=".9"></rect>
        <rect x="11" y="9.5" width="2" height="2" rx="1"></rect>
        <rect x="11" y="12.55" width="2" height="2" rx="1"></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H5zm2 5.9a.9.9 0 111.8 0v4.2a.9.9 0 11-1.8 0V9.9zm9.1-.9a.9.9 0 00-.9.9v4.2a.9.9 0 101.8 0V9.9a.9.9 0 00-.9-.9zM11 10.5a1 1 0 112 0 1 1 0 01-2 0zm1 2.05a1 1 0 100 2 1 1 0 000-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_255_42">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Percentage.propTypes = {
  color: PropTypes.string
};

export default Percentage;
