import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_14742)">
        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14742">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Menu.propTypes = {
  color: PropTypes.string
};

Menu.defaultProps = {
  color: 'currentColor'
};

export default Menu;
