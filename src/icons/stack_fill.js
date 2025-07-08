import React from 'react';
import PropTypes from 'prop-types';

const StackFill = props => {
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
      <g clipPath="url(#clip0_308_43)">
        <path d="M21.992 16a1 1 0 011.008.992 2 2 0 01-1.178 1.84h-.002l-8.578 3.9a3 3 0 01-2.474 0L2.16 18.816A2 2 0 011 16.998a1 1 0 012 .005l8.593 3.906a1.001 1.001 0 00.824 0l8.58-3.9.003-.001A1 1 0 0121.992 16zm0-5a1 1 0 011.008.992 2 2 0 01-1.178 1.84h-.002l-8.578 3.9a3 3 0 01-2.474 0L2.16 13.816A2 2 0 011 11.998a1 1 0 012 .005l8.593 3.906a1 1 0 00.825 0l8.578-3.9.004-.001A1 1 0 0121.992 11zM12 1a3 3 0 011.244.27l8.586 3.908a2.002 2.002 0 01.862 2.92c-.21.323-.51.578-.863.735l-8.574 3.897a3.003 3.003 0 01-2.49 0L2.189 8.822a2 2 0 01.001-3.654l8.565-3.897C11.145 1.092 11.57 1 12 1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_308_43">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StackFill.propTypes = {
  color: PropTypes.string
};

export default StackFill;
