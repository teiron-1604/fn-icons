import React from 'react';
import PropTypes from 'prop-types';

const KeyFill = props => {
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
      <path d="M17.002 14H12.66a6 6 0 110-4H23v4h-2v4h-4v-4zm-10 0a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

KeyFill.propTypes = {
  color: PropTypes.string
};

export default KeyFill;
