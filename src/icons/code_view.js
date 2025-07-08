import React from 'react';
import PropTypes from 'prop-types';

const CodeView = props => {
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
      <path d="M16.951 8.464l1.415-1.414 4.95 4.95-4.95 4.95-1.415-1.414L20.486 12l-3.535-3.536zm-9.9 0L3.518 12l3.534 3.536-1.413 1.414L.688 12l4.95-4.95L7.05 8.464z"></path>
    </svg>
  );
};

CodeView.propTypes = {
  color: PropTypes.string
};

export default CodeView;
