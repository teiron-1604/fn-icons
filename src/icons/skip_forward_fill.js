import React from 'react';
import PropTypes from 'prop-types';

const SkipForwardFill = props => {
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
        d="M4.567 3.099a1 1 0 011.058.12l10 8a1 1 0 010 1.562l-10 8A1 1 0 014 20V4a1 1 0 01.567-.901zM19 4a1 1 0 011 1v14a1 1 0 11-2 0V5a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

SkipForwardFill.propTypes = {
  color: PropTypes.string
};

export default SkipForwardFill;
