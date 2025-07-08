import React from 'react';
import PropTypes from 'prop-types';

const CpuFill = props => {
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
      <path d="M14 20h-4v2H8v-2H5a1 1 0 01-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 011-1h3V2h2v2h4V2h2v2h3a1 1 0 011 1v3h2v2h-2v4h2v2h-2v3a1 1 0 01-1 1h-3v2h-2v-2zM7 7v4h4V7H7z"></path>
    </svg>
  );
};

CpuFill.propTypes = {
  color: PropTypes.string
};

export default CpuFill;
