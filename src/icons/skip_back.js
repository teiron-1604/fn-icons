import React from 'react';
import PropTypes from 'prop-types';

const SkipBack = props => {
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
      <g clipPath="url(#clip0_18_15480)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.433 3.099a1 1 0 00-1.058.12l-10 8a1 1 0 000 1.562l10 8A1 1 0 0020 20V4a1 1 0 00-.567-.901zM18 6.08v11.838L10.6 12 18 6.08zM5 4a1 1 0 00-1 1v14a1 1 0 102 0V5a1 1 0 00-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15480">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SkipBack.propTypes = {
  color: PropTypes.string
};

export default SkipBack;
