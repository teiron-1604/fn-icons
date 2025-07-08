import React from 'react';
import PropTypes from 'prop-types';

const HqFill = props => {
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
      <g clipPath="url(#clip0_18_15059)">
        <path d="M20 3a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16zm-5.6 5a1.2 1.2 0 00-1.2 1.2V14a1.2 1.2 0 001.2 1.2h.9v.9a.9.9 0 001.8 0v-.9h.9a1.2 1.2 0 001.2-1.2V9.2A1.2 1.2 0 0018 8h-3.6zM9.9 8a.9.9 0 00-.9.9v1.8H6.6V8.9a.9.9 0 10-1.8 0v5.4a.9.9 0 001.8 0v-1.8H9v1.8a.9.9 0 101.8 0V8.9a.9.9 0 00-.9-.9zm7.5 1.8v3.6H15V9.8h2.4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15059">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

HqFill.propTypes = {
  color: PropTypes.string
};

export default HqFill;
