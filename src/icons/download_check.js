import React from 'react';
import PropTypes from 'prop-types';

const DownloadCheck = props => {
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
      <path d="M1 14.5a6.496 6.496 0 013.064-5.519 8.001 8.001 0 0115.872 0 6.5 6.5 0 01-2.936 12l-10 .02c-3.356-.275-6-3.079-6-6.5zm15.848 4.487a4.5 4.5 0 002.03-8.309l-.807-.503-.12-.942a6 6 0 00-11.903 0l-.12.942-.805.503a4.5 4.5 0 002.029 8.31l.173.012h9.35l.173-.013z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.848 10.678l-5.74 6.128-4.19-2.992 1.163-1.627 2.81 2.007 4.543-4.93 1.414 1.414z"
      ></path>
    </svg>
  );
};

DownloadCheck.propTypes = {
  color: PropTypes.string
};

export default DownloadCheck;
