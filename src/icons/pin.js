import React from 'react';
import PropTypes from 'prop-types';

const Pin = props => {
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
      <path d="M3 4h18V2H3v2zm10 5.828l6.071 6.072 1.414-1.414L12 6l-8.485 8.485L4.929 15.9 11 9.83V21h2V9.828z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string
};

export default Pin;
