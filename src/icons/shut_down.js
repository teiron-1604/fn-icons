import React from 'react';
import PropTypes from 'prop-types';

const ShutDown = props => {
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
      <g clipPath="url(#clip0_134_236)">
        <path d="M16.545 4.178a.9.9 0 011.257-.202 9.89 9.89 0 014.1 8.024c0 5.468-4.432 9.9-9.9 9.9s-9.9-4.432-9.9-9.9a9.89 9.89 0 014.1-8.024.9.9 0 011.056 1.459A8.1 8.1 0 0012.002 20.1a8.1 8.1 0 004.744-14.665.9.9 0 01-.201-1.257z"></path>
        <path d="M12.002 2a1 1 0 011 1v8a1 1 0 01-2 0V3a1 1 0 011-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_134_236">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShutDown.propTypes = {
  color: PropTypes.string
};

export default ShutDown;
