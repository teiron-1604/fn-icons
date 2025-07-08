import React from 'react';
import PropTypes from 'prop-types';

const LetterW = props => {
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
      <path d="M19 2a1 1 0 100 2h3v6h-3a1 1 0 100 2h4a1 1 0 001-1V3a1 1 0 00-1-1h-4zm-1 4H8a1 1 0 000 2h10a1 1 0 100-2zM8.293 16.293a1 1 0 00-.068 1.338l.068.076 4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 18.586V11a1 1 0 10-2 0v7.586l-2.293-2.293-.076-.068a1 1 0 00-1.338.068zM7 10H4V4h3a1 1 0 000-2H3l-.103.005A1 1 0 002 3v8l.005.102A1 1 0 003 12h4a1 1 0 100-2z"></path>
    </svg>
  );
};

LetterW.propTypes = {
  color: PropTypes.string
};

export default LetterW;
