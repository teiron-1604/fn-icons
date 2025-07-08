import React from 'react';
import PropTypes from 'prop-types';

const ScreenRotation = props => {
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
      <g clipPath="url(#clip0_18_15625)">
        <path d="M10.2 2A2.8 2.8 0 0113 4.8V11h6.2l.286.015A2.8 2.8 0 0122 13.8v5.4a2.8 2.8 0 01-2.8 2.8H4.8A2.8 2.8 0 012 19.2V4.8A2.8 2.8 0 014.8 2h5.4zM4.8 4a.8.8 0 00-.8.8v14.4a.8.8 0 00.8.8H11V4.8a.8.8 0 00-.8-.8H4.8zM13 20h6.2a.8.8 0 00.8-.8v-5.4a.8.8 0 00-.718-.796L19.2 13H13v7zm2.6-18A6.4 6.4 0 0122 8.4a1 1 0 01-2 0A4.4 4.4 0 0015.6 4a1 1 0 110-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15625">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ScreenRotation.propTypes = {
  color: PropTypes.string
};

export default ScreenRotation;
