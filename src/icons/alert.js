import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
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
      <g clipPath="url(#clip0_18_14764)">
        <path d="M12.187 1.993a3 3 0 012.41 1.51L22.595 17.5l.093.174A3 3 0 0119.998 22h-16v-.001a2.999 2.999 0 01-2.618-4.495H1.38l8-14a3 3 0 012.608-1.518l.199.007zm-.33 2.002a1 1 0 00-.739.498v.003l-8 14-.004.004a1.002 1.002 0 00.372 1.37 1 1 0 00.503.13h16.008a1.002 1.002 0 001-1 1 1 0 00-.135-.5l-.002-.004-8-14-.002-.003a1 1 0 00-.87-.507l-.131.01zM12.008 16a1 1 0 010 2h-.01a1 1 0 010-2h.01zm-1.01-3V9a1 1 0 012 0v4a1 1 0 01-2 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14764">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Alert.propTypes = {
  color: PropTypes.string
};

export default Alert;
