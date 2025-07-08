import React from 'react';
import PropTypes from 'prop-types';

const VoiceRecognitionFill = props => {
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
      <g clipPath="url(#clip0_150_245)">
        <path d="M18 2a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12zm-2 7a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zM8 9a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_150_245">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VoiceRecognitionFill.propTypes = {
  color: PropTypes.string
};

export default VoiceRecognitionFill;
