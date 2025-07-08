import React from 'react';
import PropTypes from 'prop-types';

const Location = props => {
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
      <g clipPath="url(#clip0_18_12799)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3a7 7 0 00-7 7c0 2.16 1.217 4.487 2.798 6.564 1.528 2.008 3.282 3.634 4.202 4.433.92-.799 2.674-2.425 4.202-4.433C17.783 14.487 19 12.159 19 10a7 7 0 00-7-7zm-6.364.636A9 9 0 0121 10c0 2.834-1.553 5.603-3.206 7.775-1.677 2.203-3.584 3.956-4.54 4.78a2 2 0 01-2.509 0c-.955-.824-2.862-2.577-4.539-4.78C4.553 15.603 3 12.834 3 10a9 9 0 012.636-6.364zM12 8a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12799">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Location.propTypes = {
  color: PropTypes.string
};

export default Location;
