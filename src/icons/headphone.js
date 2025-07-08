import React from 'react';
import PropTypes from 'prop-types';

const Headphone = props => {
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
        d="M12 4a8 8 0 00-8 8v1h2a3 3 0 013 3v3a3 3 0 01-3 3H5a3 3 0 01-3-3v-7a10 10 0 0120 0v7a3 3 0 01-3 3h-1a3 3 0 01-3-3v-3a3 3 0 013-3h2v-1a8 8 0 00-8-8zm8 11h-2a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1v-4zM4 15v4a1 1 0 001 1h1a1 1 0 001-1v-3a1 1 0 00-1-1H4z"
      ></path>
    </svg>
  );
};

Headphone.propTypes = {
  color: PropTypes.string
};

export default Headphone;
