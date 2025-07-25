import React from 'react';
import PropTypes from 'prop-types';

const ChromecastFill = props => {
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
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1h-6c0-.67-.051-1.338-.153-2H20V5H4v3.153A13.1 13.1 0 002 8V4a1 1 0 011-1zm10 18h-2a9 9 0 00-9-9v-2c6.075 0 11 4.925 11 11zm-4 0H7a5 5 0 00-5-5v-2a7 7 0 017 7zm-4 0H2v-3a3 3 0 013 3zm9.373-4A13.033 13.033 0 006 8.627V7h12v10h-3.627z"></path>
    </svg>
  );
};

ChromecastFill.propTypes = {
  color: PropTypes.string
};

export default ChromecastFill;
