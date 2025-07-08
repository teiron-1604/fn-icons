import React from 'react';
import PropTypes from 'prop-types';

const CameraOff = props => {
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
        d="M1.293 1.293a1 1 0 011.414 0l20 20a1 1 0 01-1.414 1.414L19.586 21H4a3 3 0 01-3-3V9a3 3 0 013-3h.586L1.293 2.707a1 1 0 010-1.414zM6.586 8H4a1 1 0 00-1 1v9a1 1 0 001 1h13.586l-2.968-2.968a4 4 0 01-5.65-5.649L6.587 8zm3.8 3.801a2.004 2.004 0 00-.297 2.01 2 2 0 003.11.803l-2.812-2.813zM8.5 4a1 1 0 011-1h5a1 1 0 01.768.36l2.2 2.64H20a3 3 0 013 3v7.5a1 1 0 11-2 0V9a1 1 0 00-1-1h-3a1 1 0 01-.768-.36L14.032 5H9.5a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

CameraOff.propTypes = {
  color: PropTypes.string
};

export default CameraOff;
