import React from 'react';
import PropTypes from 'prop-types';

const AlertCircle = props => {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-5a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1zm-1 9a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

AlertCircle.propTypes = {
  color: PropTypes.string
};

export default AlertCircle;
