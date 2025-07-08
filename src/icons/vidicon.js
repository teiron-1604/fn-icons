import React from 'react';
import PropTypes from 'prop-types';

const Vidicon = props => {
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
      <g clipPath="url(#clip0_18_15573)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 7a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1v-2.986V10.519 8a1 1 0 00-1-1H4zm13 1.759V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3v-1.132l3.668 2.446a1.502 1.502 0 002.119-.477 1.5 1.5 0 00.213-.77V7.87a1.5 1.5 0 00-2.256-1.296L17 8.76zm0 2.315v1.39l4 2.668V8.74l-4 2.334zm4.752-2.772z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15573">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Vidicon.propTypes = {
  color: PropTypes.string
};

export default Vidicon;
