import React from 'react';
import PropTypes from 'prop-types';

const Film = props => {
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
        d="M5 4a1 1 0 00-1 1v1.5h2V4H5zm0-2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm3 2v7h8V4H8zm10 0v2.5h2V5a1 1 0 00-1-1h-1zm2 4.5h-2V11h2V8.5zm0 4.5h-2v2.5h2V13zm0 4.5h-2V20h1a1 1 0 001-1v-1.5zM16 20v-7H8v7h8zM6 20v-2.5H4V19a1 1 0 001 1h1zm-2-4.5h2V13H4v2.5zM4 11h2V8.5H4V11z"
      ></path>
    </svg>
  );
};

Film.propTypes = {
  color: PropTypes.string
};

export default Film;
