import React from 'react';
import PropTypes from 'prop-types';

const FileEdit = props => {
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
      <g clipPath="url(#clip0_18_13045)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.879 1.879A3 3 0 016 1h8.172a3 3 0 012.121.879l2.414 2.414a1 1 0 01-1.414 1.414l-2.414-2.414A1 1 0 0014.172 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1 1 1 0 112 0 3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM7 18a1 1 0 011-1h1a1 1 0 110 2H8a1 1 0 01-1-1zM19.876 8c-.829 0-1.623.329-2.21.915l-4.01 4.012a3.001 3.001 0 00-.758 1.28l-.837 2.87a1.5 1.5 0 001.86 1.86l2.87-.836a3.003 3.003 0 001.281-.76l4.013-4.008A3.124 3.124 0 0019.876 8zm-4.805 6.34l4.01-4.011a1.125 1.125 0 011.59 1.59l-4.013 4.009a1.001 1.001 0 01-.427.253l-1.995.582.582-1.995c.047-.161.135-.308.253-.427z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13045">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileEdit.propTypes = {
  color: PropTypes.string
};

export default FileEdit;
