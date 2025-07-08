import React from 'react';
import PropTypes from 'prop-types';

const EnglishInput = props => {
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
      <path d="M14 11a1 1 0 011-1h.243c.418 0 .757.339.757.757a4.5 4.5 0 017 3.743V19a1 1 0 11-2 0v-4.5c0-1.43-1.175-2.5-2.5-2.5S16 13.07 16 14.5V19a1 1 0 11-2 0v-8zm-3-7a1 1 0 110 2H4v5h7a1 1 0 110 2H4v5h7a1 1 0 110 2H2.571A.571.571 0 012 19.429V4.57C2 4.256 2.256 4 2.571 4H11z"></path>
    </svg>
  );
};

EnglishInput.propTypes = {
  color: PropTypes.string
};

export default EnglishInput;
