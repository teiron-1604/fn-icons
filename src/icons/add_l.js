import React from 'react';
import PropTypes from 'prop-types';

const AddL = props => {
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
      <path d="M11 21v-8H3a1 1 0 110-2h8V3a1 1 0 112 0v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0z"></path>
    </svg>
  );
};

AddL.propTypes = {
  color: PropTypes.string
};

export default AddL;
