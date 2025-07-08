import React from 'react';
import PropTypes from 'prop-types';

const Information = props => {
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
      <g clipPath="url(#clip0_18_14776)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm10-4a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm1 3a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14776">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Information.propTypes = {
  color: PropTypes.string
};

export default Information;
