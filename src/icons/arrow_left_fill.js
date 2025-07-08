import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftFill = props => {
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
      <path d="M1.774 12.688a1 1 0 010-1.375l9-9.5a1 1 0 011.726.688v5h8a1 1 0 011 1v7l-.005.102a1 1 0 01-.995.898h-8v5l-.012.151a1 1 0 01-1.714.536l-9-9.5z"></path>
    </svg>
  );
};

ArrowLeftFill.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftFill;
