import React from 'react';
import PropTypes from 'prop-types';

const ChatNewFill = props => {
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
      <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2v3z"></path>
    </svg>
  );
};

ChatNewFill.propTypes = {
  color: PropTypes.string
};

export default ChatNewFill;
