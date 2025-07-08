import React from 'react';
import PropTypes from 'prop-types';

const FastForwardFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.56 4.102a1 1 0 011.054.109l9 7a1 1 0 010 1.578l-9 7A1 1 0 011 19V5a1 1 0 01.56-.898zm11 0a1 1 0 011.054.109l9 7a1 1 0 010 1.578l-9 7A1 1 0 0112 19V5a1 1 0 01.56-.898z"
      ></path>
    </svg>
  );
};

FastForwardFill.propTypes = {
  color: PropTypes.string
};

export default FastForwardFill;
