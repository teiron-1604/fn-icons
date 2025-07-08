import React from 'react';
import PropTypes from 'prop-types';

const LetterR = props => {
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
      <path d="M19 22a1 1 0 110-2h3v-6h-3a1 1 0 110-2h4a1 1 0 011 1v8a1 1 0 01-1 1h-4zm-1-4H8a1 1 0 110-2h10a1 1 0 110 2zM8.293 7.707a1 1 0 01-.068-1.338l.068-.076 4-4a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L14 5.414V13a1 1 0 11-2 0V5.414L9.707 7.707l-.076.068a1 1 0 01-1.338-.068zM7 14H4v6h3a1 1 0 110 2H3l-.103-.005A1 1 0 012 21v-8l.005-.102A1 1 0 013 12h4a1 1 0 110 2z"></path>
    </svg>
  );
};

LetterR.propTypes = {
  color: PropTypes.string
};

export default LetterR;
