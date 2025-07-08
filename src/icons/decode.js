import React from 'react';
import PropTypes from 'prop-types';

const Decode = props => {
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
      <path d="M18 2a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12zM6 4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6zm2 13H6v-2h2v2zm6-2h-2v-2h2v2zm-4-2H8v-2h2v2zm8 0h-4v-2h2V9h-2v2h-2V9h-2V7h8v6z"></path>
    </svg>
  );
};

Decode.propTypes = {
  color: PropTypes.string
};

export default Decode;
