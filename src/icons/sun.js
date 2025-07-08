import React from 'react';
import PropTypes from 'prop-types';

const Sun = props => {
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
      <g clipPath="url(#clip0_18_12839)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zM4.223 4.223a1 1 0 011.414 0l1.41 1.41a1 1 0 11-1.414 1.414l-1.41-1.41a1 1 0 010-1.414zm15.554 0a1 1 0 010 1.414l-1.41 1.41a1 1 0 11-1.414-1.414l1.41-1.41a1 1 0 011.414 0zM12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zm-6 0a1 1 0 011-1h2a1 1 0 110 2H2a1 1 0 01-1-1zm18 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM7.047 16.953a1 1 0 010 1.414l-1.41 1.41a1 1 0 01-1.414-1.414l1.41-1.41a1 1 0 011.414 0zm9.906 0a1 1 0 011.414 0l1.41 1.41a1 1 0 01-1.414 1.414l-1.41-1.41a1 1 0 010-1.414zM12 19a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12839">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Sun.propTypes = {
  color: PropTypes.string
};

export default Sun;
