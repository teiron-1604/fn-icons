import React from 'react';
import PropTypes from 'prop-types';

const Webcam = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15561)">
        <path d="M11 21v-1.07A7.002 7.002 0 015 13V8a7 7 0 0114 0v5a7.002 7.002 0 01-6 6.93V21h4v2H7v-2h4zm1-18a5 5 0 00-5 5v5a5 5 0 1010 0V8a5 5 0 00-5-5zm0 6a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15561">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Webcam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Webcam.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Webcam;
