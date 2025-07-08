import React from 'react';
import PropTypes from 'prop-types';

const ChatHeart = props => {
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
      <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zm8.018-3.685l-3.359-3.36a2.25 2.25 0 013.182-3.182l.177.177.177-.177a2.25 2.25 0 113.182 3.182l-3.36 3.359.001.001z"></path>
    </svg>
  );
};

ChatHeart.propTypes = {
  color: PropTypes.string
};

export default ChatHeart;
