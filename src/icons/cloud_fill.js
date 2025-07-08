import React from 'react';
import PropTypes from 'prop-types';

const CloudFill = props => {
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
      <g clipPath="url(#clip0_18_15797)">
        <path d="M12 2a8 8 0 017.987 8.428 7.502 7.502 0 00-7.04 1.111c-.438.335-.435.974-.045 1.364.39.39 1.02.382 1.475.069a5.5 5.5 0 018.203 2.424c.183.442.305.823.368 1.375C23.298 19.845 20.052 22 17 22H7a6 6 0 01-2.962-11.219A8 8 0 0112 2z"></path>
        <path d="M23 17a5 5 0 11-10 0 5 5 0 0110 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15797">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudFill.propTypes = {
  color: PropTypes.string
};

export default CloudFill;
