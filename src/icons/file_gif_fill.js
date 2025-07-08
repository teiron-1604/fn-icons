import React from 'react';
import PropTypes from 'prop-types';

const FileGifFill = props => {
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
      <g clipPath="url(#clip0_18_13000)">
        <path d="M13 6a3 3 0 003 3h5v11a3 3 0 01-3 3H6a3 3 0 01-2.892-2.212c.27.134.571.212.892.212h2.667a2 2 0 002-2v-2.333a1 1 0 00-1-1H6.333a1 1 0 000 2h.334V19H4v-6h2.667v.333a1 1 0 102 0V13a2 2 0 00-2-2H4c-.365 0-.706.1-1 .27V4a3 3 0 013-3h7v5zm-2.733 5a1 1 0 00-1 1v8a1 1 0 102 0v-8a1 1 0 00-1-1zm2.6 0a1 1 0 00-.995.898l-.005.102v8a1 1 0 102 0v-2.667h1.667l.102-.005a1.001 1.001 0 000-1.99l-.102-.005h-1.667V13H16.2l.103-.005a1 1 0 000-1.99L16.2 11h-3.333zM15 1a1 1 0 01.707.293l5 5A1 1 0 0121 7h-5a1 1 0 01-1-1V1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13000">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileGifFill.propTypes = {
  color: PropTypes.string
};

export default FileGifFill;
