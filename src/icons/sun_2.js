import React from 'react';
import PropTypes from 'prop-types';

const Sun2 = props => {
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
      <g clipPath="url(#clip0_2169_210)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 4a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zM5.343 6.343a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zm11.314 0a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zM12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zm-4 0a1 1 0 011-1h.01a1 1 0 110 2H4a1 1 0 01-1-1zm16 0a1 1 0 011-1h.01a1 1 0 110 2H20a1 1 0 01-1-1zM5.343 17.657a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zm11.314 0a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1zM11 20a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2169_210">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Sun2.propTypes = {
  color: PropTypes.string
};

export default Sun2;
