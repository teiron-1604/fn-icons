import React from 'react';
import PropTypes from 'prop-types';

const MonitorCameraFill = props => {
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
      <path d="M12 1a8.5 8.5 0 013.45 16.269L16.716 21H18v2H6v-2h1.282l1.258-3.736A8.5 8.5 0 0112 1zM9.392 21h5.213l-1.02-3h-3.183l-1.01 3zM12 5.5a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"></path>
    </svg>
  );
};

MonitorCameraFill.propTypes = {
  color: PropTypes.string
};

export default MonitorCameraFill;
