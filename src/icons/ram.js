import React from 'react';
import PropTypes from 'prop-types';

const Ram = props => {
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
      <path d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3V7zM2 5a1 1 0 00-1 1v12a1 1 0 001 1h20a1 1 0 001-1V6a1 1 0 00-1-1H2zm9 4H5v3h6V9zm2 0h6v3h-6V9z"></path>
    </svg>
  );
};

Ram.propTypes = {
  color: PropTypes.string
};

export default Ram;
