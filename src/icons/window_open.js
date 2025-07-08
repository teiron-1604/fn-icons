import React from 'react';
import PropTypes from 'prop-types';

const WindowOpen = props => {
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
        d="M22 4a1 1 0 00-1-1H3a1 1 0 00-1 1v16a1 1 0 001 1h9v-2H4v-8h16v1.948h2V4zM4 5h16v4H4V5zm7 3V6H9v2h2zM7 8V6H5v2h2z"
      ></path>
      <path d="M18.766 19.678v3l4-4-4-4v3h-4v2h4z"></path>
    </svg>
  );
};

WindowOpen.propTypes = {
  color: PropTypes.string
};

export default WindowOpen;
