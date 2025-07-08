import React from 'react';
import PropTypes from 'prop-types';

const BringForward = props => {
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
      <g clipPath="url(#clip0_18_14250)">
        <path d="M13.154 2.004A3 3 0 0116 5v3h3l.154.004A3 3 0 0122 11v8a3 3 0 01-3 3h-8a3 3 0 01-2.996-2.846L8 19v-3H5a3 3 0 01-2.996-2.846L2 13V5a3 3 0 013-3h8l.154.004zM5 4a1 1 0 00-1 1v8l.005.102A1 1 0 005 14h8a1 1 0 001-1V5a1 1 0 00-.898-.995L13 4H5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14250">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BringForward.propTypes = {
  color: PropTypes.string
};

export default BringForward;
