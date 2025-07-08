import React from 'react';
import PropTypes from 'prop-types';

const HardDiskAdd = props => {
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
        d="M17.969 3.008a3 3 0 012.377 1.473l.1.184.046.11 2.45 6.89A1 1 0 0122 13H3v5a1 1 0 001 1h9.188l.101.005a1 1 0 010 1.99l-.101.005H4a3 3 0 01-3-3v-6a1 1 0 01.058-.335l2.45-6.89.047-.11A3 3 0 016.239 3h11.522l.208.008zM6.102 5.01a1.001 1.001 0 00-.737.51L3.417 11h17.166l-1.95-5.48a.998.998 0 00-.735-.51L17.76 5H6.24l-.138.01z"
      ></path>
      <path d="M20 15a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
      <path d="M6.01 15a1 1 0 110 2H6a1 1 0 110-2h.01z"></path>
    </svg>
  );
};

HardDiskAdd.propTypes = {
  color: PropTypes.string
};

export default HardDiskAdd;
