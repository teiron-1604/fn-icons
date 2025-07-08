import React from 'react';
import PropTypes from 'prop-types';

const Folder = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.879 3.879A3 3 0 014 3h3.93a3 3 0 012.502 1.345l.813 1.205a1 1 0 00.845.45H20a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 01.879-2.121zM4 5a1 1 0 00-1 1v13a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1h-7.896a3 3 0 01-2.526-1.345L8.765 5.45A1 1 0 007.93 5H4z"
      ></path>
    </svg>
  );
};

Folder.propTypes = {
  color: PropTypes.string
};

export default Folder;
