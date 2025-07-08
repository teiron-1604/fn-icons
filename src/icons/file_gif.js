import React from 'react';
import PropTypes from 'prop-types';

const FileGif = props => {
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
      <g clipPath="url(#clip0_18_12991)">
        <path d="M15.099 1.005a1 1 0 01.608.288l5 5A1 1 0 0121 7v13a3 3 0 01-3 3h-2a1 1 0 110-2h2a1 1 0 001-1V9h-3a3 3 0 01-3-3V3H6a1 1 0 00-1 1v3a1 1 0 01-2 0V4a3 3 0 013-3h9l.099.005zM6.667 11a2 2 0 012 2v.333a1 1 0 01-2 0V13H4v6h2.667v-1.333h-.334a1 1 0 010-2h1.334a1 1 0 011 1V19a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h2.667zm3.6 0a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1zm6.036.005a1 1 0 010 1.99L16.2 13h-2.333v2.333h1.667l.102.006a1 1 0 010 1.99l-.102.004h-1.667V20a1 1 0 01-2 0v-8l.005-.102a1 1 0 01.995-.898H16.2l.103.005zM15 6a1 1 0 001 1h2.586L15 3.414V6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12991">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FileGif.propTypes = {
  color: PropTypes.string
};

export default FileGif;
