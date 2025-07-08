import React from 'react';
import PropTypes from 'prop-types';

const Cloud = props => {
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
      <g clipPath="url(#clip0_18_15798)" fillRule="evenodd" clipRule="evenodd">
        <path d="M4 10a8 8 0 1115.962.781A6 6 0 0117 22h-5v-2h5a4 4 0 001.494-7.712l-.767-.31.16-.81a6 6 0 10-11.773 0l.16.81-.768.31A4.002 4.002 0 007 20h5v2H7a6 6 0 01-2.962-11.219A8.083 8.083 0 014 10z"></path>
        <path d="M15.425 10.21A6 6 0 1117 22v-2a4 4 0 10-1.926-7.506c-.484.266-1.113.259-1.49-.145-.378-.403-.36-1.044.1-1.35a6.002 6.002 0 011.741-.789z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15798">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Cloud.propTypes = {
  color: PropTypes.string
};

export default Cloud;
