import React from 'react';
import PropTypes from 'prop-types';

const Cpu = props => {
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
      <path d="M6 18h12V6H6v12zm8 2h-4v2H8v-2H5a1 1 0 01-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 011-1h3V2h2v2h4V2h2v2h3a1 1 0 011 1v3h2v2h-2v4h2v2h-2v3a1 1 0 01-1 1h-3v2h-2v-2zM8 8h8v8H8V8z"></path>
    </svg>
  );
};

Cpu.propTypes = {
  color: PropTypes.string
};

export default Cpu;
