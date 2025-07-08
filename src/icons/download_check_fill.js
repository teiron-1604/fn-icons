import React from 'react';
import PropTypes from 'prop-types';

const DownloadCheckFill = props => {
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
        d="M3.294 19.458a6.5 6.5 0 003.708 1.525v.02h10v-.02a6.5 6.5 0 002.936-12 8.001 8.001 0 00-15.872 0 6.5 6.5 0 00-.772 10.475zm7.814-2.651l5.74-6.129-1.414-1.414-4.542 4.93-2.81-2.007-1.163 1.627 4.19 2.992z"
      ></path>
    </svg>
  );
};

DownloadCheckFill.propTypes = {
  color: PropTypes.string
};

export default DownloadCheckFill;
