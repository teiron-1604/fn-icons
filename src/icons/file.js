import React from 'react';
import PropTypes from 'prop-types';

const File = props => {
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
        d="M3.879 1.879A3 3 0 016 1h9a1 1 0 01.707.293l5 5A1 1 0 0121 7v13a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM18.586 7H16a1 1 0 01-1-1V3.414L18.586 7zM13 3v3a3 3 0 003 3h3v11a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h7z"
      ></path>
    </svg>
  );
};

File.propTypes = {
  color: PropTypes.string
};

export default File;
