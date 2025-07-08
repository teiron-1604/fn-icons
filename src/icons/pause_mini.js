import React from 'react';
import PropTypes from 'prop-types';

const PauseMini = props => {
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
      <path d="M9.25 5.25a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5h1.5zm7.5 0a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5h1.5z"></path>
    </svg>
  );
};

PauseMini.propTypes = {
  color: PropTypes.string
};

export default PauseMini;
