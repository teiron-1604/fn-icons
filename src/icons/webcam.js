import React from 'react';
import PropTypes from 'prop-types';

const Webcam = props => {
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
      <g clipPath="url(#clip0_18_15561)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1110 8.945V21h4a1 1 0 110 2H7a1 1 0 110-2h4v-2.055C6.5 18.448 3 14.633 3 10zm9-2a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15561">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Webcam.propTypes = {
  color: PropTypes.string
};

export default Webcam;
