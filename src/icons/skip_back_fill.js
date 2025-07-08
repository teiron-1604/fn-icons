import React from 'react';
import PropTypes from 'prop-types';

const SkipBackFill = props => {
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
        d="M19.433 3.099a1 1 0 00-1.058.12l-10 8a1 1 0 000 1.562l10 8A1 1 0 0020 20V4a1 1 0 00-.567-.901zM5 4a1 1 0 00-1 1v14a1 1 0 102 0V5a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
};

SkipBackFill.propTypes = {
  color: PropTypes.string
};

export default SkipBackFill;
