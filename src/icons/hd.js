import React from 'react';
import PropTypes from 'prop-types';

const Hd = props => {
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
      <g clipPath="url(#clip0_18_15041)">
        <path d="M20 3a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h16zM4 5a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1H4zm5.958 4c.483 0 .875.392.875.875v5.25a.875.875 0 11-1.75 0v-1.75H6.75v1.75a.875.875 0 01-1.75 0v-5.25a.875.875 0 111.75 0v1.75h2.333v-1.75c0-.483.392-.875.875-.875zm6.709 0A2.333 2.333 0 0119 11.333v2.334A2.333 2.333 0 0116.667 16h-2.5a1 1 0 01-1-1v-5a1 1 0 011-1h2.5zm-1.75 5.25h1.75a.583.583 0 00.583-.583v-2.334a.583.583 0 00-.583-.583h-1.75v3.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15041">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hd.propTypes = {
  color: PropTypes.string
};

export default Hd;
