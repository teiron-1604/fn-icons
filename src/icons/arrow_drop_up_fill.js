import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropUpFill = props => {
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
      <path d="M12.207 9.293a1 1 0 00-1.414 0l-3.5 3.5A1 1 0 008 14.5h7a1 1 0 00.707-1.707l-3.5-3.5z"></path>
    </svg>
  );
};

ArrowDropUpFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDropUpFill;
