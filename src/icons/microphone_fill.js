import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneFill = props => {
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
        d="M9.172 2.172A4 4 0 0116 5v7a4 4 0 11-8 0V5a4 4 0 011.172-2.828zM5 9a1 1 0 011 1v2a6 6 0 1012 0v-2a1 1 0 112 0v2a8 8 0 01-7 7.937V22a1 1 0 11-2 0v-2.063A8 8 0 014 12v-2a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

MicrophoneFill.propTypes = {
  color: PropTypes.string
};

export default MicrophoneFill;
