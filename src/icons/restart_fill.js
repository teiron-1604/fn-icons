import React from 'react';
import PropTypes from 'prop-types';

const RestartFill = props => {
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
      <g clipPath="url(#clip0_18_13515)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4a8 8 0 108 8 1 1 0 112 0A10 10 0 1112 2c2.786 0 5.442 1.105 7.433 3.02l.014.013.553.553V3a1 1 0 112 0v5a1 1 0 01-1 1h-5a1 1 0 110-2h2.586l-.546-.546C16.412 4.892 14.251 4 12 4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13515">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

RestartFill.propTypes = {
  color: PropTypes.string
};

export default RestartFill;
