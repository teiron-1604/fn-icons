import React from 'react';
import PropTypes from 'prop-types';

const SaveFill = props => {
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
      <path d="M18 21v-8H6v8H4a1 1 0 01-1-1V4a1 1 0 011-1h13l4 4v13a1 1 0 01-1 1h-2zm-2 0H8v-6h8v6z"></path>
    </svg>
  );
};

SaveFill.propTypes = {
  color: PropTypes.string
};

export default SaveFill;
