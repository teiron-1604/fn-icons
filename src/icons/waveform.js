import React from 'react';
import PropTypes from 'prop-types';

const Waveform = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a1 1 0 011 1v18a1 1 0 11-2 0V3a1 1 0 011-1zm8 2a1 1 0 011 1v13a1 1 0 11-2 0V5a1 1 0 011-1zM6 5a1 1 0 011 1v11a1 1 0 11-2 0V6a1 1 0 011-1zm8 2a1 1 0 011 1v7a1 1 0 11-2 0V8a1 1 0 011-1zM2 9a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm20 0a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

Waveform.propTypes = {
  color: PropTypes.string
};

export default Waveform;
