import React from 'react';
import PropTypes from 'prop-types';

const RamFill = props => {
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
      <path d="M2 5a1 1 0 00-1 1v12a1 1 0 001 1h3v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h3a1 1 0 001-1V6a1 1 0 00-1-1H2zm3 4h6v3H5V9zm8 0h6v3h-6V9z"></path>
    </svg>
  );
};

RamFill.propTypes = {
  color: PropTypes.string
};

export default RamFill;
