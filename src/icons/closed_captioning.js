import React from 'react';
import PropTypes from 'prop-types';

const ClosedCaptioning = props => {
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
      <g clipPath="url(#clip0_18_15125)">
        <path d="M11.244 3H20a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h7.244zM4 5a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1H4zm3.586 5.585a2 2 0 001.977 3.335c.53-.155 1.167-.19 1.558.201l.07.076c.32.394.295.979-.15 1.243a4.001 4.001 0 01-4.87-6.269l1.415 1.414zm7 0a2 2 0 001.978 3.335c.53-.155 1.167-.19 1.557.201l.069.076c.32.394.296.979-.149 1.243a4.001 4.001 0 01-4.87-6.27l1.415 1.415zM9 8c.746 0 1.445.204 2.043.56.474.283.47.929.08 1.319-.39.39-1.03.357-1.56.201a1.994 1.994 0 00-1.978.505L6.173 9.172A3.988 3.988 0 019 8zm7 0c.747 0 1.445.204 2.043.56.474.283.47.929.08 1.319-.39.39-1.03.357-1.56.201a1.994 1.994 0 00-1.978.505l-1.413-1.414A3.988 3.988 0 0116 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15125">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ClosedCaptioning.propTypes = {
  color: PropTypes.string
};

export default ClosedCaptioning;
