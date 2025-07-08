import React from 'react';
import PropTypes from 'prop-types';

const VoiceRecognition = props => {
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
      <g clipPath="url(#clip0_150_268)">
        <path d="M20 6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6zm-5 10v-6a1 1 0 112 0v6a1 1 0 11-2 0zm-8-2v-4a1 1 0 012 0v4a1 1 0 11-2 0zm4-2v-2a1 1 0 112 0v2a1 1 0 11-2 0zm11 6a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12a4 4 0 014 4v12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_150_268">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VoiceRecognition.propTypes = {
  color: PropTypes.string
};

export default VoiceRecognition;
