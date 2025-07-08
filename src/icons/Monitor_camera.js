import React from 'react';
import PropTypes from 'prop-types';

const MonitorCamera = props => {
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
        d="M12 5.5a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1a8.5 8.5 0 00-3.46 16.266L7.281 21H6v2h12v-2h-1.284l-1.266-3.73A8.5 8.5 0 0012 1zm2.604 20l-1.019-3h-3.182l-1.01 3h5.211zM18.5 9.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      ></path>
    </svg>
  );
};

MonitorCamera.propTypes = {
  color: PropTypes.string
};

export default MonitorCamera;
