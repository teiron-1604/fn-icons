import React from 'react';
import PropTypes from 'prop-types';

const ShieldPlus = props => {
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
      <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976zM5 4.604v9.185a4 4 0 001.781 3.328L12 20.597l5.219-3.48A4 4 0 0019 13.79V4.604L12 3.05 5 4.604zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2h3z"></path>
    </svg>
  );
};

ShieldPlus.propTypes = {
  color: PropTypes.string
};

export default ShieldPlus;
