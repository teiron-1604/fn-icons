import React from 'react';
import PropTypes from 'prop-types';

const Camera = props => {
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
        d="M8.732 3.36A1 1 0 019.5 3h5a1 1 0 01.768.36l2.2 2.64H20a3 3 0 013 3v9a3 3 0 01-3 3H4a3 3 0 01-3-3V9a3 3 0 013-3h2.532l2.2-2.64zM9.968 5l-2.2 2.64A1 1 0 017 8H4a1 1 0 00-1 1v9a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1h-3a1 1 0 01-.768-.36L14.032 5H9.968zM12 11a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
      ></path>
    </svg>
  );
};

Camera.propTypes = {
  color: PropTypes.string
};

export default Camera;
