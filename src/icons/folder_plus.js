import React from 'react';
import PropTypes from 'prop-types';

const FolderPlus = props => {
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
        d="M1.879 3.879A3 3 0 014 3h3.93a3 3 0 012.502 1.345l.813 1.205a1 1 0 00.845.45H20a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 01.879-2.121zM4 5a1 1 0 00-1 1v13a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1h-7.896a3 3 0 01-2.526-1.345L8.765 5.45A1 1 0 007.93 5H4zm8 5a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2v-2a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

FolderPlus.propTypes = {
  color: PropTypes.string
};

export default FolderPlus;
