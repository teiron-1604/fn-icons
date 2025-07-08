import React from 'react';
import PropTypes from 'prop-types';

const Draggable = props => {
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
      <path d="M8.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

Draggable.propTypes = {
  color: PropTypes.string
};

export default Draggable;
