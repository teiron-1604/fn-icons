import React from 'react';
import PropTypes from 'prop-types';

const HonourFill = props => {
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
      <path d="M21 4v14.721a.5.5 0 01-.298.458L12 23.03l-8.702-3.85A.5.5 0 013 18.72V4H1V2h22v2h-2zM8 12v2h8v-2H8zm0-4v2h8V8H8z"></path>
    </svg>
  );
};

HonourFill.propTypes = {
  color: PropTypes.string
};

export default HonourFill;
