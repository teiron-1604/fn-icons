import React from 'react';
import PropTypes from 'prop-types';

const SquarerFill = props => {
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
      <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14z"></path>
    </svg>
  );
};

SquarerFill.propTypes = {
  color: PropTypes.string
};

export default SquarerFill;
