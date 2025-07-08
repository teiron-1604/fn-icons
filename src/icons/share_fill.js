import React from 'react';
import PropTypes from 'prop-types';

const ShareFill = props => {
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
      <path d="M18 8a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M6 15a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M18 22a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98M21 5a3 3 0 11-6 0 3 3 0 016 0zM9 12a3 3 0 11-6 0 3 3 0 016 0zm12 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9a3.988 3.988 0 01-2.842-1.185L9.85 10.912a4.003 4.003 0 010 2.175l5.311 3.095a4 4 0 11-1.01 1.726l-5.309-3.094a4 4 0 110-5.63L14.15 6.09A4.003 4.003 0 0118 1a4 4 0 010 8z"
      ></path>
    </svg>
  );
};

ShareFill.propTypes = {
  color: PropTypes.string
};

export default ShareFill;
