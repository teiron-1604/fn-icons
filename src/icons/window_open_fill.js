import React from 'react';
import PropTypes from 'prop-types';

const WindowOpenFill = props => {
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
        d="M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h9v-2H4v-9h16v2.948h2V4a1 1 0 00-1-1zM5 8V6h2v2H5zm4 0V6h2v2H9z"
      ></path>
      <path d="M18.766 19.678v3l4-4-4-4v3h-4v2h4z"></path>
    </svg>
  );
};

WindowOpenFill.propTypes = {
  color: PropTypes.string
};

export default WindowOpenFill;
