import React from 'react';
import PropTypes from 'prop-types';

const ClockFill = props => {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 4a1 1 0 00-1 1v6a1 1 0 001 1h4.5a1 1 0 100-2H13V6a1 1 0 00-1-1z"></path>
    </svg>
  );
};

ClockFill.propTypes = {
  color: PropTypes.string
};

export default ClockFill;
