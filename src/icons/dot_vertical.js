import React from 'react';
import PropTypes from 'prop-types';

const DotVertical = props => {
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
        d="M10 5a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0z"
      ></path>
    </svg>
  );
};

DotVertical.propTypes = {
  color: PropTypes.string
};

export default DotVertical;
