import React from 'react';
import PropTypes from 'prop-types';

const Iphone = props => {
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
        d="M7 3a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zM4 4a3 3 0 013-3h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm7 14a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

Iphone.propTypes = {
  color: PropTypes.string
};

export default Iphone;
