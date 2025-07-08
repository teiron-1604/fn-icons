import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = props => {
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
      <path d="M18.707 8.293a1 1 0 11-1.414 1.414L13 5.414V21l-.005.102a1 1 0 01-1.99 0L11 21V5.414L6.707 9.707l-.076.068A1 1 0 015.225 8.37l.068-.076 6-6a1 1 0 011.414 0l6 6z"></path>
    </svg>
  );
};

ArrowUp.propTypes = {
  color: PropTypes.string
};

export default ArrowUp;
